import axios from 'axios';
import React, { useState } from 'react'
import { useAuthUser, useSignOut } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';

const MerchantPanel = () => {
     const [error, setError] = useState("");
     const auth = useAuthUser();
     const token = auth()?.token;
     const SignOut = useSignOut();

     const [formData, setFormData] = useState({
          name: "",
          email: "",
          password: "",
          phone: "",
          photo: null,
     });

     const navigate = useNavigate();


     const handleSubmit = async (e) => {
          e.preventDefault();

          try {
               const formData = new FormData();
               if (formData.photo) {
                    formData.append('photo', e.target.photo.files[0]);
                  
              }
               formData.append('name', e.target.name.value);
               formData.append('password', e.target.password.value);
               formData.append('phone', e.target.phone.value);
               formData.append('email', e.target.email.value);
               // Append other form fields as needed

               const res = await axios.post(
                    "https://maykel.betterway-egypt.com/api/v1/merchants/profile/edit",
                    formData,
                    {
                         headers: {
                              Authorization: `Bearer ${token}`,
                              "Content-Type": "multipart/form-data",
                         },
                    }
               );
               console.log(formData);
               if (res.status === 200) {
                    SignOut();
                    navigate("/login");
               }
          } catch (error) {
               // Handle error
               console.log(error);
               if (error.response.status === 422) {
                    const err = error.response.data.errors;
                    if (err.password) {

                         setError(err.password)

                    }
                    if (err.email) {

                         setError(err.email)
                    }
                    if (err.phone) {

                         setError(err.phone)
                    }
                    if (err.photo) {

                         setError(err.photo)
                    }
                    if (err.name) {

                         setError(err.name)
                    }

               }
          }
     };
     return (
          <div className=' text-white'>
               <h2 className='md:text-5xl text-2xl font-bold text-left '>Merchant Settings</h2>
               <div className='h-full w-full bg-web/5 md:py-20 py-10'>
                    <form onSubmit={handleSubmit} className='flex flex-col flex-wrap gap-8 w-full  bg-bg md:p-10 p-2 rounded-2xl'>

                         <div className='md:w-96 flex flex-col'>
                              <label htmlFor="name" className='m-2'>Full Name</label>
                              <input type="text" name="name" className='bg-gray-400 rounded-lg border-gray-300' />
                         </div>
                         <div className='flex md:flex-row flex-col gap-10 justify-around'>
                              <div className='md:w-96 flex flex-col'>
                                   <label htmlFor="email" className='m-2'>Email</label>
                                   <input type="email" name="email" className='bg-gray-400 rounded-lg border-gray-300' />
                              </div>
                              <div className='md:w-96 flex flex-col'>
                                   <label htmlFor="password" className='m-2'>Password</label>
                                   <input type="password" name="password" className='bg-gray-400 rounded-lg border-gray-300' />
                              </div>
                         </div>
                         <div className='md:w-96 flex flex-col'>
                              <label htmlFor="phone" className='m-2'>Mobile Number</label>
                              <input type="number" name="phone" className='bg-gray-400 rounded-lg border-gray-300' />
                         </div>
                         <div className='md:w-96 flex flex-col'>
                              <label htmlFor="photo" className='m-2'>Profile Image</label>
                              <input type="file" name="photo" className='bg-gray-400 rounded-lg border-gray-300' />
                         </div>
                         <button type='submit' className='bg-btn p-4 rounded-md text-lg'>Save</button>
                    </form>
               </div>
          </div>
     )
}

export default MerchantPanel