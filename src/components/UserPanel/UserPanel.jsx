import axios from 'axios';
import React, { useState } from 'react'
import { useAuthUser, useIsAuthenticated, useSignOut } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';

const UserPanel = () => {
     const [error, setError] = useState("");
     const user = useIsAuthenticated();
     const auth = useAuthUser();
     const SignOut = useSignOut();
     
     const token = auth()?.token;
    //  const [formData, setFormData] = useState({
    //      name: "",
    //      email: "",
    //      password: "",
    //      phone: "",
    //      photo: null,
    //  });
 
     const navigate = useNavigate();

     const [formValues, setFormValues] = useState({
      name: '',
      phone: '',
      password: '',
      email: '',
      photo: null
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
      formData.append('name', formValues.name);
      formData.append('phone', formValues.phone);
      formData.append('password', formValues.password);
      formData.append('email', formValues.email);
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
          setFormValues({
            name: '',
            phone: '',
            password: '',
            email: '',
            photo: null
          });
        })
        .catch((error) => {
          console.error('Registration failed:', error);
        });
    };
  
 
    //  const handleSubmit = async (e) => {
    //      e.preventDefault();
       
    //      try {
    //        const formData = new FormData();
    //        {formData.photo ? formData.append('photo', e.target.photo.files[0]) : null}
    //         formData.append('name', e.target.name.value)
    //          formData.append('password', e.target.password.value) 
    //          formData.append('phone', e.target.phone.value)
    //          formData.append('email', e.target.email.value)

    //        // Append other form fields as needed
       
    //        const res = await axios.post(
    //          "https://maykel.betterway-egypt.com/api/v1/users/profile/edit",
    //          formData,
    //          {
    //            headers: {
    //              Authorization: `Bearer ${token}`,
    //              "Content-Type": "multipart/form-data",
    //            },
    //          }
    //        );
    //          console.log(formData);
    //        if (res.status === 200) {
    //         console.log(res);
    //             //  SignOut();
    //             //  navigate("/login");
    //        }
    //      } catch (error) {
    //        // Handle error
    //        console.log(error);
    //                  if (error.response.status === 422) {
    //                      const err = error.response.data.errors;
    //                      if (err.password) {
                             
    //                          setError(err.password)
         
    //                      }
    //                      if (err.email) {
                             
    //                          setError(err.email)
    //                      }
    //                      if (err.phone) {
                             
    //                          setError(err.phone)
    //                      }
    //                      if (err.photo) {
                         
    //                          setError(err.photo)
    //                      }
    //                      if (err.name) {
                             
    //                          setError(err.name)
    //                      }
                             
    //                  }
    //      }
    //    };
 
 
    //  const handleChange = (e) => {
    //     //  console.log("haha");
    //    };

     const handleInvalid = (event) => {
         event.target.setCustomValidity("برجاء ادخال البيانات");
     };
 
     const handleInput = (event) => {
         event.target.setCustomValidity("");
     };
  return (
          <div className=' text-white'>
               <h2 className='md:text-5xl text-2xl font-bold text-left '>User Settings</h2>
               <div className='h-full w-full  bg-web/5 md:py-20 py-10'>
               <form onSubmit={handleSubmit} className='flex flex-col flex-wrap gap-8 w-full  bg-bg md:p-10 p-2 rounded-2xl'>

                         <div className='md:w-96 flex flex-col'>
                              <label htmlFor="name" className='m-2'>Full Name</label>
                              <input type="text" name="name" className='bg-gray-400 rounded-lg border-gray-300' value={formValues.name} onChange={handleChange}/> 
                         </div>
                    <div className='flex md:flex-row flex-col gap-10 justify-around'>
                         <div className='md:w-96 flex flex-col'>
                              <label htmlFor="email" className='m-2'>Email</label>
                              <input type="email" name="email" className='bg-gray-400 rounded-lg border-gray-300' value={formValues.email} onChange={handleChange} /> 
                         </div>
                         <div className='md:w-96 flex flex-col'>
                         <label htmlFor="password" className='m-2'>Password</label>
                              <input type="password" name="password" className='bg-gray-400 rounded-lg border-gray-300' value={formValues.password} onChange={handleChange} /> 
                         </div>
                    </div>
                         <div className='md:w-96 flex flex-col'>
                         <label htmlFor="phone" className='m-2'>Mobile Number</label>
                              <input type="number" name="phone" className='bg-gray-400 rounded-lg border-gray-300' value={formValues.phone} onChange={handleChange} /> 
                         </div>
                         <div className='md:w-96 flex flex-col'>
                              <label htmlFor="photo" className='m-2'>Profile Image</label>
                              <input type="file" name="photo" className='bg-gray-400 rounded-lg border-gray-300'  onChange={handleChange} /> 
                         </div>
                    <button type='submit' className='bg-btn p-4 rounded-md text-lg'>Save</button>
               </form>
               </div>
          </div>
  )
}

export default UserPanel