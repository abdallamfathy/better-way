import React from 'react'
import { Footer, Navbar } from '../components'
import zara from "../assets/topPlaces/zara.jpg";


const Category = () => {
  return (
    <>
        <Navbar/>
        <div className='mx-20 my-8'>
        <section className='sectionI'>
            <div className='w-full h-96'>
                <img src={zara} alt="image" className='h-full w-full object-cover object-center'/>
            </div>
        </section>
        <section className='sectionII'>
            <div>
                
            </div>
        </section>
        </div>
        <Footer/>
    </>
  )
}

export default Category