import React from 'react'
import logo1 from "../assets/topBrands/logo1.jpg"
import logo2 from "../assets/topBrands/logo2.jpg"
import logo3 from "../assets/topBrands/logo3.jpg"
import logo4 from "../assets/topBrands/logo4.jpg"
import logo5 from "../assets/topBrands/logo5.jpg"
import logo6 from "../assets/topBrands/logo6.jpg"



const TopBrands = () => {
  return (
    <>
        <div className='my-7 md:my-20 md:mx-40 '>
        <div className='flex justify-center items-center  bg-bg py-1 md:h-20'>
          <h2 className='text-txt  text-lg md:text-2xl md:font-semibold'>TOP BRANDS</h2>
        </div>
      <div className='mx-3 my-5 md:m-10'>

        <div className='flex flex-wrap  justify-center items-center gap-[1.68rem] md:gap-x-20 md:gap-10'>
          <div>
            <img src={logo1} alt="logo" className='w-28 h-16 rounded-md md:w-96 md:h-36' />
          </div>
          <div>
            <img src={logo2} alt="logo" className='w-28 h-16 rounded-md md:w-96 md:h-36' />
          </div>
          <div>
            <img src={logo6} alt="logo" className='w-28 h-16 rounded-md md:w-96 md:h-36' />
          </div>
          <div>
            <img src={logo5} alt="logo" className='w-28 h-16 rounded-md md:w-96 md:h-36' />
          </div>
          <div>
            <img src={logo4} alt="logo" className='w-28 h-16 rounded-md md:w-96 md:h-36' />
          </div>
          <div>
            <img src={logo3} alt="logo" className='w-28 h-16 rounded-md md:w-96 md:h-36' />
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default TopBrands