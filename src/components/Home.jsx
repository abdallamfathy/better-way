import React from 'react'
import {Navbar , Hero, TopBrands, TopSales, Latest, Footer, TopOffers} from './index'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <TopOffers/>
        <TopBrands/>
        <TopSales/>
        <Latest/>
        {/* 
        <Footer/> */}
    </>
  )
}

export default Home