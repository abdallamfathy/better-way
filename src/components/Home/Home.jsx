import React from 'react'
import {Navbar , Hero, TopBrands, TopSales, LatestDeals, Footer, SpecialOffers} from '../index'
import SubCategory from './SubCategory'
import { CatProvider } from './CatContext'


const Home = () => {
  return (
    <>
        <Navbar/>
        <CatProvider>
        <SubCategory/>
        <Hero/>
        </CatProvider>
        <SpecialOffers/>
        <TopBrands/>
        <TopSales/>
        <LatestDeals/>
        <Footer/>
    </>
  )
}

export default Home