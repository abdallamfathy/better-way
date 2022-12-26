import React from 'react'
import {Navbar , Hero, Clients, TopSales, Latest, Footer} from './index'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Clients/>
        <TopSales/>
        <Latest/>
        <Footer/>
    </>
  )
}

export default Home