import React from 'react'
import logo from '../assets/logo2.png'
import {BiSearchAlt , IoMdArrowDropdown} from 'react-icons/all'

const Navbar = () => {
  return (
    <>
        <nav className='bg-gray-800 '>
        <div className=' text-white flex flex-row grow-0 items-center justify-between mx-8  '>
            <div className=' flex gap-4'>
            <button className='bg-gray-700 text-white rounded-xl px-4 py-2 w-32 h-12 font-semibold hover:bg-gray-500'>الاشتراك</button>
            <button className='bg-gray-700 text-white rounded-xl px-4 py-2 w-32 h-12 font-semibold hover:bg-gray-500'>تسجيل الدخول</button>
            </div>
            <div className='bg-white rounded-lg w-[900px] h-12 flex justify-between '>
            <button className='bg-yellow-500 text-white p-2  w-12 rounded-l-lg'><BiSearchAlt className='w-7 h-7'/></button>
            <input type="text" placeholder='' className='bg-white text-white rounded-xl pl-4 py-2 w-96 text-right' />
            <button className='bg-gray-400 text-white pl-4 py-2 w-20 border-l border-gray-500 rounded-r-lg flex items-center gap-1 font-semibold'> <IoMdArrowDropdown/>  الكل</button>
            </div>
            <div className=''>
            <img src={logo} alt="logo" className='w-48 h-28 ' />
            </div>
        </div>
        </nav>
    </>
  )
}

export default Navbar