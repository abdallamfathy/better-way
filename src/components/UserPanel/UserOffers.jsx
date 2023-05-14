import React from 'react'

const UserOffers = () => {
  return (
    <div className='bg-bg rounded-xl p-20'>
        <div className='flex flex-col'>
            <div className='flex justify-around items-center gap-40 text-btn font-semibold text-2xl border-b border-gray-100 p-10'>
                <p>Offer</p>
                <p>Shop Name</p>
                <p>Redeam  Date</p>
            </div>
            <div className='flex justify-around items-center gap-40 text-white  text-lg border-b border-gray-100 p-10'>
                <p className='w-1/3'>50 % discount on first 100 product</p>
                <p className='w-1/3'>Monginis</p>
                <p className='w-1/3'>20/5/2023</p>
            </div>
            <div className='flex justify-around items-center gap-40 text-white  text-lg border-b border-gray-100 p-10'>
                <p className='w-1/3'>10 % discount on first 100 product</p>
                <p className='w-1/3'>La poire</p>
                <p className='w-1/3'>10/6/2023</p>
            </div>
            <div className='flex justify-around items-center gap-40 text-white  text-lg border-b border-gray-100 p-10'>
                <p className='w-1/3'>50 % discount on first 100 product</p>
                <p className='w-1/3'>Monginis</p>
                <p className='w-1/3'>20/5/2023</p>
            </div>
        </div>
    </div>
  )
}

export default UserOffers