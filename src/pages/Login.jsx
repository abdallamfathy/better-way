import React, { useState } from 'react'
import {FaFacebook , FaGoogle , FaTwitter} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useSignIn } from "react-auth-kit";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword(!showPassword);
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
    const login = useSignIn();
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Handle form submission
      try {
        const res = await axios.post(
          "http://betterway-egypt.com/api/v1/login",
          formData
        );
  
        login({
          token: res.data.data,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: {
            email: res.data.data.email,
            first_name: res.data.data.first_name,
            token: res.data.data.token,
          },
        });
        if (res.status === 200) {
          Swal.fire({
            title: "مرحبا بك",
            confirmButtonColor: "#F1D975",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
          navigate("/");
        }
      } catch (error) {
        if (error.response.status === 401) {
          setError("البريد الالكتروني او كلمة المرور غير صحيحة");
        }
      }
    };
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  return (
    <>
        <form onSubmit={handleSubmit} className='flex justify-between  items-center '>
            <div className='flex flex-col justify-center items-center  px-20 gap-6 text-white bg-bg  max-md:bg-login  w-full h-screen '>
                <div className='flex flex-col gap-2 justify-center items-center max-md:text-center mb-10'>
                        <img src={logo} alt="logo" className='w-20 h-20'/>
                        <h2>What's your email address?</h2>
                        <h2>Type your email to log in or create a BetterWay account.</h2>
                </div>
                <div className='flex justify-around gap-24 font-bold  border-b border-b-gray-400'>
                    <h2 className='border-b-2  border-b-btn text-center md:w-36 w-32 pb-4 -mb-[1px] '>Login</h2>
                    <Link to="/register"><h2 className=' text-center md:w-36 w-32 pb-3 '>Sign Up</h2></Link>
                </div>
                {error && <p className="text-red-500 text-lg">{error}</p>}
                <div className='flex flex-col items-start gap-2'>
                    <h2>Email</h2>
                    <input type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="email"
           className='w-72 rounded-md border border-gray-300 h-10 p-4 text-bg' />
                    </div>
                <div className='flex flex-col items-start gap-2'>
                    <h2>Password</h2>
                    <input
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="password"
                     type="password" className='w-72 rounded-md border border-gray-300 h-10 p-4 text-bg' />
                </div>
                <div>
                    <button type='submit' className='text-white bg-btn rounded-md drop-shadow-lg h-9 w-60 my-6'>Login</button>
                </div>
                <div className='flex gap-4 items-center'>
                    <h3>Login with social:</h3>
                    <a href="https://www.facebook.com/"><FaFacebook className='text-xl text-blue-600'/></a>
                    <a href="https://twitter.com/"><FaTwitter className='text-xl text-blue-300'/></a>
                    <a href='https://www.google.com/intl/ar/gmail/about/'><FaGoogle className='text-xl text-red-500 '/></a>
                </div>
            </div>
        </form>
    </>
  )
}

export default Login