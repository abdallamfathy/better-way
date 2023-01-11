import React, { useState } from 'react'
import logo from '../assets/logo.png'
import {BiSearchAlt , IoMdArrowDropdown , CgProfile, GiHamburgerMenu} from 'react-icons/all'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Categories from './Categories'

const Navbar = () => {

  
  const [show, setShow] = useState(false)  
  const toggleMenu = (prev) => {
    setShow(!show);
  }

  return (
    <>
        <nav className='bg-bg '>
        <div className='sm:hidden flex justify-between items-center mx-5'>
          <div className='flex justify-center items-center'>
        {!show && <AiOutlineMenu className='w-8 h-10 text-white' onClick={() => toggleMenu()}/>}
        {show && <AiOutlineClose className='w-8 h-10 text-white' onClick={() => toggleMenu()}/>}
          <img src={logo} alt="logo" className='w-28 h-24 ' />

          </div>
        <div>
        <CgProfile className='w-10 h-12 text-white'/>
        </div>
        </div>

        {/* Mobile version  */}

        <div className={show ? 'flex flex-col justify-start items-start bg-bg  h-screen w-full md:hidden' : 'hidden'}>
        <Categories/>
        </div>


        <div className='sm:flex hidden flex-row grow-0 items-center justify-between mx-8 text-[#4C4C6D]  '>
          
            <div>
            <img src={logo} alt="logo" className='w-28 h-24 ' />
            </div>
            <div className='bg-white rounded-lg w-[900px] h-12 flex justify-between '>
            <button className='bg-btn  p-2  w-12 rounded-l-lg'><BiSearchAlt className='w-7 h-7 text-white'/></button>
            <input type="text" placeholder='' className='bg-white text-black rounded-xl pl-4 py-2 w-96 text-right' />
            <button className='bg-gray-200  pl-1 py-2 w-20 border-l border-[#E8F6EF] rounded-r-lg flex items-center gap-1 font-semibold'> <IoMdArrowDropdown/>  Search</button>
            </div>
            <div className='flex gap-4  '>
            <button className='bg-btn text-white  rounded-xl px-4 py-2 w-32 h-12 font-semibold hover:bg-orange-700'>Sign Up</button>
            <button className='bg-btn text-white  rounded-xl px-4 py-2 w-32 h-12 font-semibold hover:bg-orange-700'>Log In</button>
            </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar