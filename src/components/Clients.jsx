import React from 'react'
import logo1 from "../assets/clients/logo1.jpg"
import logo2 from "../assets/clients/logo2.jpg"
import logo3 from "../assets/clients/logo3.jpg"
import logo4 from "../assets/clients/logo4.jpg"



const Clients = () => {
  return (
    <>
      <div className='mt-20 mx-72 '>
        <div className='flex justify-center items-center my-20'>
          <h2 className='text-white text-6xl font-bold'>شركائنا</h2>
        </div>
        <div className='flex justify-center items-center gap-6'>
          <div>
            <img src={logo1} alt="logo" className='w-40 h-40 rounded-3xl' />
          </div>
          <div>
            <img src={logo2} alt="logo" className='w-40 h-40 rounded-3xl' />
          </div>
          <div>
            <img src={logo3} alt="logo" className='w-40 h-40 rounded-3xl' />
          </div>
          <div>
            <img src={logo4} alt="logo" className='w-40 h-40 rounded-3xl' />
          </div>
          <div>
            <img src={logo2} alt="logo" className='w-40 h-40 rounded-3xl' />
          </div>
          <div>
            <img src={logo3} alt="logo" className='w-40 h-40 rounded-3xl' />
          </div>
          <div>
            <img src={logo4} alt="logo" className='w-40 h-40 rounded-3xl' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Clients