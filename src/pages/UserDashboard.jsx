import React from 'react'
import UserOffers from '../components/UserPanel/UserOffers'
import UserPanel from '../components/UserPanel/UserPanel'

const UserDashboard = () => {
  return (
    <div className='m-5 md:my-20 md:mx-40 flex flex-col items-center'>
        <UserPanel/>
        <UserOffers/>
    </div>
  )
}

export default UserDashboard