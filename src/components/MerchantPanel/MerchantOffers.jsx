import React from 'react'

const MerchantOffers = () => {
  return (
    <div className='bg-bg rounded-xl md:p-20 p-5'>
        <div className='flex flex-col '>
            <div className='flex  justify-around items-center md:gap-40 gap-14 text-btn font-semibold text-2xl border-b border-gray-100 md:p-10 p-2'>
                <p>Offer</p>
                <p>My Shops</p>
                <p>Contract Date</p>
            </div>
            <div className='flex  justify-around items-center md:gap-40 gap-14 text-white  text-lg border-b border-gray-100 md:p-10 p-2'>
                <p className='w-1/3'>50 % discount on first 100 product</p>
                <p className='w-1/3'>EL slaab</p>
                <p className='w-1/3'>5/5/2021</p>
            </div>
            <div className='flex  justify-around items-center md:gap-40 gap-14 text-white  text-lg border-b border-gray-100 md:p-10 p-2'>
                <p className='w-1/3'>10 % discount on first 100 product</p>
                <p className='w-1/3'>EL abd</p>
                <p className='w-1/3'>2/1/2023</p>
            </div>
            <div className='flex  justify-around items-center md:gap-40 gap-14 text-white  text-lg border-b border-gray-100 md:p-10 p-2'>
                <p className='w-1/3'>50 % discount on first 100 product</p>
                <p className='w-1/3'>Toshiba</p>
                <p className='w-1/3'>20/2/2024</p>
            </div>
        </div>
    </div>
  )
}

export default MerchantOffers