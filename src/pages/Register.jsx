import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword(!showPassword);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
    });

    console.log(formData);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "http://betterway-egypt.com/api/v1/users/register",
                formData
                );
                console.log(res);
            if (res.status === 200) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "تم التسجيل بنجاح",
                    showConfirmButton: false,
                    timer: 3000,
                });
                navigate("/login");
            }
        } catch (error) {
            if (error.response.status === 422) {
                setError("هذا البريد الالكتروني موجود بالفعل");
            }
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleInvalid = (event) => {
        event.target.setCustomValidity("برجاء ادخال البيانات");
    };

    const handleInput = (event) => {
        event.target.setCustomValidity("");
    };
    return (
        <>
            <form onSubmit={handleSubmit} className='flex md:justify-between justify-center'>
                <div className='flex flex-col justify-center items-center px-20 gap-6 text-white bg-bg  w-full   h-screen '>
                    <div className='flex flex-col gap-2 justify-center items-center '>
                        <img src={logo} alt="logo" className='w-20 h-20' />
                    </div>
                    <div className='flex justify-around gap-24 font-bold  border-b border-b-gray-400'>
                        <Link to="/login"><h2 className='text-center md:w-36 w-32 pb-3'>Login</h2></Link>
                        <h2 className='border-b-2 border-b-btn text-center md:w-36 w-32 pb-4 -mb-[0.84px]'>Sign Up</h2>
                    </div>
                    {error && <p className="text-red-500 text-lg">{error}</p>}
                    <div className='flex flex-col items-start gap-2'>
                        <h2>Full Name</h2>
                        <input type="text"
                            name="name"
                            id="name"
                            value={formData.first_name}
                            onChange={handleChange}
                            placeholder="name"
                            required
                            onInvalid={handleInvalid}
                            onInput={handleInput}
                            className='w-72 placeholder:text-opacity-50 rounded-md border border-gray-300 h-10 p-4 text-bg'
                        />
                    </div>
                    <div className='flex flex-col items-start gap-2'>
                        <h2>Email</h2>
                        <input type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="email"
                            required
                            onInvalid={handleInvalid}
                            onInput={handleInput}
                            className='w-72 rounded-md border border-gray-300 h-10 p-4 text-bg placeholder:text-opacity-50' />
                    </div>
                    <div className='flex flex-col items-start gap-2'>
                        <h2>Password</h2>
                        <input type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="password"
            required
            onInvalid={handleInvalid}
            onInput={handleInput}
             className='w-72 rounded-md border border-gray-300 h-10 p-4 text-bg placeholder:text-opacity-50' />
                    </div>
                    <div className='flex flex-col items-start gap-2'>
                        <h2>Mobile Number</h2>
                        <input  type="tel"
          name="mobile"
          id="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="mobile"
          required
          onInvalid={handleInvalid}
          onInput={handleInput}
           className='w-72 rounded-md border border-gray-300 h-10 p-4 text-bg placeholder:text-opacity-50' />
                    </div>
                    <div >
                        <button type='submit' className=' cursor-pointer text-white bg-btn rounded-md drop-shadow-lg h-9 w-72 my-6'>Create an account</button>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <h3>SignUp with social:</h3>
                        <a href="https://www.facebook.com/"><FaFacebook className='text-xl text-blue-600' /></a>
                        <a href="https://twitter.com/"><FaTwitter className='text-xl text-blue-300' /></a>
                        <a href='https://www.google.com/intl/ar/gmail/about/'><FaGoogle className='text-xl text-red-500 ' /></a>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Register