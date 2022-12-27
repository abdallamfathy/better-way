import React from 'react'
import {Navbar , Hero, TopBrands, TopSales, Latest, Footer, Flash} from './index'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Flash/>
        <TopBrands/>
        {/* 
        <TopSales/>
        <Latest/>
        <Footer/> */}
    </>
  )
}

export default Home