import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import { CgProfile, RxAvatar } from 'react-icons/all'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
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
  const {categoryId} = useParams()
  const handleMenu = () => {
    setShow(false)
  }

  useEffect(() => {
    handleMenu()
  }, [categoryId])
  console.log(auth());
  return (
    <>
      <nav className='bg-bg '>
        <div className='sm:hidden flex justify-between items-center mx-5'>
          <div className='flex justify-center items-center'>
            {!show && <AiOutlineMenu className='w-8 h-10 text-white' onClick={() => toggleMenu()} />}
            {show && <AiOutlineClose className='w-8 h-10 text-white' onClick={() => toggleMenu()} />}
           <Link to="/"> <img src={logo} alt="logo" className='w-20 h-20 py-2 ' /></Link>

          </div>
          <div className='relative' onClick={() => toggleProfile()}>
            <CgProfile className='w-10 h-12 text-white' />
            {
              showProfile &&
              <ProfileMenu />
            }
          </div>

        </div>


        <div className={show ? 'flex flex-col justify-start items-start bg-bg  h-screen w-full md:hidden' : 'hidden'}>
          <Categories />
        </div>


        {/* Desktop version  */}



        <div className='sm:flex hidden flex-row grow-0 items-center justify-between 2xl:mx-20 xl:mx-16 lg:mx-10  text-[#4C4C6D]  py-1'>
          <div className={`${window.location.pathname === "/" && 'hidden'}`}
            onMouseEnter={() => setShowMenu(!show)}
          >
            <FontAwesomeIcon icon={faNavicon} className="text-txt w-full h-12 cursor-pointer mr-10" />
          </div>
          {
            showMenu &&
            <div className='absolute inset-0 top-20 left-[2.5rem] bg-web bg-opacity-90 rounded-lg h-[32rem] w-96' onMouseLeave={() => setShowMenu(false)}>
              <Categories />
            </div>
          }
          <div>
            <Link to="/"><img src={logo} alt="logo" className='w-20 h-16 -ml-5' /></Link>
          </div>
          <SearchBar />

          <div className='flex items-center gap-4 text-txt'>
            {lang ? <div className='flex items-center cursor-pointer  gap-2' onClick={() => toggleLang()}>
              <p className='text-white'>العربية</p>
              <img src="https://hatscripts.github.io/circle-flags/flags/eg.svg" alt="eg flag" className='w-8 h-8' />
            </div>
              : !lang ?
                <div className='flex items-center cursor-pointer gap-2' onClick={() => toggleLang()}>
                  <p className='text-white'>English</p>
                  <img src="https://hatscripts.github.io/circle-flags/flags/uk.svg" alt="uk flag" className='w-8 h-8' />
                </div>
                : null}

            <Link to="/"><button className='bg-web text-white  rounded-xl px-4 py-2 w-32 h-12 font-semibold hover:bg-orange-400'>Product</button></Link>
            {user() && (
              <div className='flex items-center'>
                <p className='text-white'>
                  Welcome{" "}
                  <Link to="user-dashboard" ><span className="cursor-pointer font-semibold mr-2 text-white capitalize">{auth()?.name}</span></Link>
                </p>
                {console.log(auth())}
                {auth()?.photo ? ( <img src={auth()?.photo} alt="profile" className='w-10 h-10 rounded-full object-fill' />) : (
                  <RxAvatar
                    className="w-10 h-10 rounded-full"
                    name={auth()?.name}
                    color="#000"
                    textSizeRatio={1.75}
                  />
                )}
              </div>
            )}
            {user() ? (
              <p
                className="text-txt hover:text-btn cursor-pointer"
                onClick={() => {
                  SignOut();
                  window.location.reload();
                }}>
                Sign Out
              </p>
            ) : (
              <Link to="/register"><button className='bg-btn text-white  rounded-xl px-4 py-2 w-32 h-12 font-semibold hover:bg-orange-400'>Sign Up</button></Link>
            )}

          </div>

          {/* <div className='flex gap-4  '>
            <Link to="/register"><button className='bg-btn text-white  rounded-xl px-4 py-2 w-32 h-12 font-semibold hover:bg-orange-700'>Sign Up</button></Link>
            <Link to="/login"><button className='bg-btn text-white  rounded-xl px-4 py-2 w-32 h-12 font-semibold hover:bg-orange-700'>Login</button></Link>
            </div> */}




        </div>
      </nav>
    </>
  )
}

export default Navbar