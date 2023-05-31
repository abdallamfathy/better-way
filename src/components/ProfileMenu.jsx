import React from 'react'
import { useAuthUser, useIsAuthenticated, useSignOut } from 'react-auth-kit';
import { Link } from 'react-router-dom'

const ProfileMenu = () => {

    const user = useIsAuthenticated();
    const SignOut = useSignOut();
    const auth = useAuthUser();
  return (
    <div className='absolute top-12 right-0 z-50'>
        <div className='flex flex-col  gap-4 bg-bg w-36 p-4  text-white rounded-md'>
            {
                user() && (
                    <>
                    <Link to="/user-dashboard" className='border-b border-gray-200/50 py-2'>My Profile</Link>
                    <Link to="/" className='py-2' onClick={() => {
                  SignOut();
                }}>Logout</Link>
                    </>
                )
            }
            {
                !user() && (
                    <Link to="/login" className=' py-2'>Login</Link>
                )
            }
        </div>
    </div>
  )
}

export default ProfileMenu