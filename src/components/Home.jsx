import React from 'react'
import {Navbar , Hero, TopBrands, TopSales, Latest, Footer, SpecialOffers} from './index'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <SpecialOffers/>
        <TopBrands/>
        <TopSales/>
        <Latest/>
        {/* 
        <Footer/> */}
    </>
  )
}

export default Home