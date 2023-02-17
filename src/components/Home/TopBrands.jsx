import React from 'react'
import brand from "../../assets/topBrands/brand.jpg"




const TopBrands = () => {
  return (
    <>
        <div className='my-7 md:my-8 md:mx-40 '>
        <div className='flex justify-center items-center  bg-bg py-1 md:h-20'>
          <h2 className='text-txt  text-lg md:text-3xl md:font-semibold'>TOP BRANDS</h2>
        </div>
      <div className='mx-3 my-5 md:my-8 md:mx-0'>

        <div className='flex flex-wrap  justify-between items-center gap-[1.68rem]  md:gap-10'>
          <div>
            <img src={brand} alt="logo" className='w-28 h-16 rounded-md md:w-64 md:h-36' />
          </div>
          <div>
            <img src={brand} alt="logo" className='w-28 h-16 rounded-md md:w-64 md:h-36' />
          </div>
          <div>
            <img src={brand} alt="logo" className='w-28 h-16 rounded-md md:w-64 md:h-36' />
          </div>
          <div>
            <img src={brand} alt="logo" className='w-28 h-16 rounded-md md:w-64 md:h-36' />
          </div>
          <div>
            <img src={brand} alt="logo" className='w-28 h-16 rounded-md md:w-64 md:h-36' />
          </div>
          <div>
            <img src={brand} alt="logo" className='w-28 h-16 rounded-md md:w-64 md:h-36' />
          </div>
          <div>
            <img src={brand} alt="logo" className='w-28 h-16 rounded-md md:w-64 md:h-36' />
          </div>
          <div>
            <img src={brand} alt="logo" className='w-28 h-16 rounded-md md:w-64 md:h-36' />
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default TopBrands