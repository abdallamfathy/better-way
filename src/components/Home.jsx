import React from 'react'
import {Navbar , Hero, TopBrands, TopSales, LatestDeals, Footer, SpecialOffers} from './index'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <SpecialOffers/>
        <TopBrands/>
        <TopSales/>
        <LatestDeals/>
        <Footer/>
    </>
  )
}

export default Home