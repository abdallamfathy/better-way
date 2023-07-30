import axios from 'axios';
import React, { useState } from 'react'
import { useAuthUser, useSignIn } from 'react-auth-kit';

const CheckOffer = () => {
    const auth = useAuthUser();
    const token = auth()?.token;

    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [formValues, setFormValues] = useState({
     code: 0
   });
 
   const handleChange = (e) => {
      
       setFormValues({ ...formValues, [e.target.name]: e.target.value });
     
   };
 
   const handleSubmit = (e) => {
     e.preventDefault();
 
     axios.post("https://betterway.balkosolar.de/api/v1/merchants/check-offer",
     formValues,
     {
       headers: {
         Authorization: `Bearer ${token}`,
         "Content-Type": "multipart/form-data",
       },
     })
       .then((response) => {
         setMessage(response?.data.message);
         // Clear the message after 3 seconds
        setTimeout(() => {
          setMessage('');
        }, 3000);
         setFormValues({
           code: '',
         });
       })
       .catch((error) => {
         setError(error?.response?.data?.message);
         // Clear the message after 3 seconds
        setTimeout(() => {
          setError('');
        }, 3000);
       });
   };
  return (
    <div className=' text-white md:mx-40 mx-10'>
               <h2 className='md:text-5xl text-2xl font-bold text-left '>Check User Code</h2>
               <div className='h-full w-full bg-web/5 md:py-20 py-10'>
                    <form onSubmit={handleSubmit} className='flex flex-col flex-wrap gap-8 w-full  bg-bg md:p-10 p-2 rounded-2xl'>

                         <div className='md:w-96 flex flex-col'>
                              <label htmlFor="code" className='m-2'>Enter Code Here :</label>
                              <input value={formValues.code} onChange={handleChange} type="number" name="code" className='bg-gray-400 rounded-lg border-gray-300' />
                              <p className='text-red-500 text-lg font-semibold'>{error}</p>
                              <p className='text-green-500 text-lg font-semibold'>{message}</p>
                         </div>
                         <button type='submit' className='bg-btn p-4 rounded-md text-lg'>Check</button>
                    </form>
               </div>
          </div>
  )
}

export default CheckOffer