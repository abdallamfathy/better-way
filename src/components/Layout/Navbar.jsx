import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import {CgProfile} from 'react-icons/all'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Categories from '../Hero/Categories'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNavicon } from '@fortawesome/free-solid-svg-icons'
import { useIsAuthenticated, useSignOut, useAuthUser } from "react-auth-kit";
import ProfileMenu from '../ProfileMenu'
import SearchBar from '../Search/SearchBar'


const Navbar = () => {
  
  const user = useIsAuthenticated();
  const SignOut = useSignOut();
  const auth = useAuthUser();
  
  const [show, setShow] = useState(false)  
  const [showMenu, setShowMenu] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const toggleMenu = () => {
    setShow(!show);
  }
  const toggleProfile = () => {
    setShowProfile(!showProfile);
  }
  const [lang, setLang] = useState(false)  
  const toggleLang = () => {
    setLang(!lang);
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
        <div className='relative' onClick={() => toggleProfile()}>
        <CgProfile className='w-10 h-12 text-white' />
        {
          showProfile &&
          <ProfileMenu/>
        }
        </div>
        
        </div>




        {/* Desktop version  */}

        <div className={show ? 'flex flex-col justify-start items-start bg-bg  h-screen w-full md:hidden' : 'hidden'}>
        <Categories/>
        </div>


        <div className='sm:flex hidden flex-row grow-0 items-center justify-between mx-20 text-[#4C4C6D]  '>
            <div className={`${window.location.pathname === "/" && 'hidden'}`}
             onMouseEnter={() => setShowMenu(!show)}
             >
              <FontAwesomeIcon icon={faNavicon} className="text-txt w-full h-12 cursor-pointer " />
            </div>
            {
              showMenu &&
               <div className='absolute inset-0 top-20 left-20 bg-web bg-opacity-90 rounded-lg h-[32rem] w-96' onMouseLeave={() => setShowMenu(false)}>
                  <Categories/>
              </div>
            }
            <div>
            <a href="/"><img src={logo} alt="logo" className='w-28 h-24 ' /></a>
            </div>
            <SearchBar/>

            <div className='flex gap-4'>
        {user() && (
              <p className='text-white'>
                welcome{" "}
                <span className="font-semibold mr-2 text-white">{auth()?.name}</span>
              </p>
            )}
            {user() ? (
              <p
                className="hover:text-primary cursor-pointer"
                onClick={() => {
                  SignOut();
                  window.location.reload();
                }}>
                تسجيل الخروج
              </p>
            ) : (
              <Link to="/register"><button className='bg-btn text-white  rounded-xl px-4 py-2 w-32 h-12 font-semibold hover:bg-orange-400'>Sign Up</button></Link>
            )}
        </div>

            {/* <div className='flex gap-4  '>
            <Link to="/register"><button className='bg-btn text-white  rounded-xl px-4 py-2 w-32 h-12 font-semibold hover:bg-orange-700'>Sign Up</button></Link>
            <Link to="/login"><button className='bg-btn text-white  rounded-xl px-4 py-2 w-32 h-12 font-semibold hover:bg-orange-700'>Login</button></Link>
            </div> */}




            {lang ? <div className='flex cursor-pointer  gap-2' onClick={() => toggleLang()}>
              <p className='text-white'>العربية</p>
            <img src="https://hatscripts.github.io/circle-flags/flags/eg.svg" alt="eg flag" className='w-8 h-8'/>
            </div> 
            : !lang ? 
            <div className='flex cursor-pointer gap-2' onClick={() => toggleLang()}>
              <p className='text-white'>English</p>
            <img src="https://hatscripts.github.io/circle-flags/flags/uk.svg" alt="uk flag" className='w-8 h-8'/>
            </div>
             : null}
            </div>
        </nav>
    </>
  )
}

export default Navbar