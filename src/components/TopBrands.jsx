import React from 'react'
import logo1 from "../assets/topBrands/logo1.jpg"
import logo2 from "../assets/topBrands/logo2.jpg"
import logo3 from "../assets/topBrands/logo3.jpg"
import logo4 from "../assets/topBrands/logo4.jpg"



const TopBrands = () => {
  return (
    <>
        <div className='bg-bg'>
        <div className='flex justify-center items-center  bg-btn py-1'>
          <h2 className='text-txt  text-lg'>TOP BRANDS</h2>
        </div>
      <div className='mt-3 mx-3'>

        <div className='flex flex-wrap  justify-center items-center gap-3'>
          <div>
            <img src={logo1} alt="logo" className='w-28 h-20 rounded-md' />
          </div>
          <div>
            <img src={logo3} alt="logo" className='w-28 h-20 rounded-md' />
          </div>
          <div>
            <img src={logo2} alt="logo" className='w-28 h-20 rounded-md' />
          </div>
          <div>
            <img src={logo2} alt="logo" className='w-28 h-20 rounded-md' />
          </div>
          <div>
            <img src={logo4} alt="logo" className='w-28 h-20 rounded-md' />
          </div>
          <div>
            <img src={logo3} alt="logo" className='w-28 h-20 rounded-md' />
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default TopBrands