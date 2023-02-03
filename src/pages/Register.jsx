import React from 'react'
import logo from '../assets/logo.png'
import {FaFacebook , FaGoogle , FaTwitter} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
        <div className='flex md:justify-between justify-center'>
            <div className='flex flex-col justify-center items-center px-20 gap-6 text-white bg-bg  w-full   h-screen '>
            <div className='flex flex-col gap-2 justify-center items-center '>
                        <img src={logo} alt="logo" className='w-20 h-20'/>
                </div>
                <div className='flex justify-around gap-24 font-bold  border-b border-b-gray-400'>
                <Link to="/login"><h2 className='text-center md:w-36 w-32 pb-3'>Login</h2></Link>
                    <h2 className='border-b-2 border-b-btn text-center md:w-36 w-32 pb-4 -mb-[0.84px]'>Sign Up</h2>
                </div>
                <div className='flex flex-col items-start gap-2'>
                    <h2>Full Name</h2>
                    <input type="text" className='w-60 rounded-md border border-gray-300 h-9 p-2 text-bg' />
                    </div>
                <div className='flex flex-col items-start gap-2'>
                    <h2>Email</h2>
                    <input type="email" className='w-60 rounded-md border border-gray-300 h-9 p-2 text-bg' />
                    </div>
                <div className='flex flex-col items-start gap-2'>
                    <h2>Password</h2>
                    <input type="password" className='w-60 rounded-md border border-gray-300 h-9 p-2 text-bg' />
                </div>
                <div className='flex flex-col items-start gap-2'>
                    <h2>Phone Number</h2>
                    <input type="text" className='w-60 rounded-md border border-gray-300 h-9 p-2 text-bg' />
                    </div>
                <div>
                    <Link to="/"><button className='text-white bg-btn rounded-md drop-shadow-lg h-9 w-60 my-6'>Create an account</button></Link>
                </div>
                <div className='flex gap-4 items-center'>
                    <h3>SignUp with social:</h3>
                    <a href="https://www.facebook.com/"><FaFacebook className='text-xl text-blue-600'/></a>
                    <a href="https://twitter.com/"><FaTwitter className='text-xl text-blue-300'/></a>
                    <a href='https://www.google.com/intl/ar/gmail/about/'><FaGoogle className='text-xl text-red-500 '/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register