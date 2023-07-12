import React, { useState } from 'react'
import { useAuthUser, useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';

const CheckOffer = () => {
    const auth = useAuthUser();
    const login = useSignIn();
    const token = auth()?.token;

    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
     code: 0
   });
 
   const handleChange = (e) => {
      
       setFormValues({ ...formValues, [e.target.name]: e.target.value });
     
   };
 
   const handleSubmit = (e) => {
     e.preventDefault();
 
     const formData = new FormData();
     if (formValues.code) {
       formData.append('code', formValues.code);
     }
     axios.post("https://betterway.balkosolar.de/api/v1/merchants/check-offer",
     formData,
     {
       headers: {
         Authorization: `Bearer ${token}`,
         "Content-Type": "multipart/form-data",
       },
     })
       .then((response) => {
         console.log('Code valid:', response.data);
         alert('Code valid:', response.data);
         setFormValues({
           code: '',
         });
       })
       .catch((error) => {
         alert('Check this error:', error);
         console.log('Check this error:', error);
       });
   };
  return (
    <div className=' text-white md:mx-40 mx-10'>
               <h2 className='md:text-5xl text-2xl font-bold text-left '>Check User Code</h2>
               <div className='h-full w-full bg-web/5 md:py-20 py-10'>
                    <form onSubmit={handleSubmit} className='flex flex-col flex-wrap gap-8 w-full  bg-bg md:p-10 p-2 rounded-2xl'>

                         <div className='md:w-96 flex flex-col'>
                              <label htmlFor="code" className='m-2'>Enter Code Here :</label>
                              <input type="number" name="code" className='bg-gray-400 rounded-lg border-gray-300' />
                         </div>
                         <button type='submit' className='bg-btn p-4 rounded-md text-lg'>Check</button>
                    </form>
               </div>
          </div>
  )
}

export default CheckOffer