import axios from 'axios';
import React, { useState } from 'react'
import { useAuthUser, useIsAuthenticated, useSignIn, useSignOut } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';

const MerchantPanel = () => {
     const [error, setError] = useState("");
     const user = useIsAuthenticated();
     const auth = useAuthUser();
     const login = useSignIn();
     const token = auth()?.token;
 
     const navigate = useNavigate();

     const [formValues, setFormValues] = useState({
      name: undefined,
      phone: undefined,
      password: undefined,
      email: undefined,
      photo: undefined
    });
  
    const handleChange = (e) => {
      if (e.target.name === 'photo') {
        setFormValues({ ...formValues, [e.target.name]: e.target.files[0] });
      } else {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      if (formValues.name) {
        formData.append('name', formValues.name);
      }
      if (formValues.phone) {
        formData.append('phone', formValues.phone);
      }
      if (formValues.password) {
        formData.append('password', formValues.password);
      }
      if (formValues.email) {
        formData.append('email', formValues.email);
      }
      
      if (formValues.photo) {
        formData.append('photo', formValues.photo);
      }
  
      axios.post("https://maykel.betterway-egypt.com/api/v1/users/profile/edit",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => {
          console.log('Registration successful:', response.data);
          login({
            token: response.data.data,
            expiresIn: 3600,
            tokenType: "Bearer",
            authState: {
              email: response.data.data.email,
              name: response.data.data.name,
              token: response.data.data.token,
              photo: response.data.data.photo,
            },
          });
          setFormValues({
            name: '',
            phone: '',
            password: '',
            email: '',
            photo: null
          });
          navigate("/")
        })
        .catch((error) => {
          console.error('Registration failed:', error);
        });
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