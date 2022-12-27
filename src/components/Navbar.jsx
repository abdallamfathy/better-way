import React, { useState } from 'react'
import logo from '../assets/logo.png'
import {BiSearchAlt , IoMdArrowDropdown , CgProfile} from 'react-icons/all'
import {AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

  
  const [show, setShow] = useState(false)  
  const toggleMenu = (prev) => {
    setShow(!show);
    console.log(show);
  }

  return (
    <>
        <nav className='bg-nave '>
        <div className='sm:hiden flex justify-between items-center mx-5'>
          <div className='flex justify-center items-center'>
        <AiOutlineMenu className='w-8 h-10 text-white' onClick={() => toggleMenu()}/>
          <img src={logo} alt="logo" className='w-28 h-24 ' />

          </div>
        <div>
        <CgProfile className='w-10 h-12 text-white'/>
        </div>
        </div>

        {/* Mobile version  */}

        <div className={show ? 'flex flex-col justify-center items-center bg-[#0000f0] h-screen w-10/12' : 'hidden'}>
        <div className='flex flex-col justify-center items-center h-screen w-10'>
        s
        
        </div>
        </div>


        <div className='sm:flex hidden flex-row grow-0 items-center justify-between mx-8 text-[#4C4C6D]  '>
          
          <div className='flex gap-4  '>
            <button className='bg-[#FFE194] text-[#4C4C6D]  rounded-xl px-4 py-2 w-32 h-12 font-semibold hover:bg-gray-500'>الاشتراك</button>
            <button className='bg-[#FFE194] text-[#4C4C6D]  rounded-xl px-4 py-2 w-32 h-12 font-semibold hover:bg-gray-500'>تسجيل الدخول</button>
            </div>
            <div className='bg-white rounded-lg w-[900px] h-12 flex justify-between '>
            <button className='bg-[#FFE194]  p-2  w-12 rounded-l-lg'><BiSearchAlt className='w-7 h-7'/></button>
            <input type="text" placeholder='' className='bg-white text-black rounded-xl pl-4 py-2 w-96 text-right' />
            <button className='bg-[#B8DFD8]  pl-4 py-2 w-20 border-l border-[#E8F6EF] rounded-r-lg flex items-center gap-1 font-semibold'> <IoMdArrowDropdown/>  الكل</button>
            </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar