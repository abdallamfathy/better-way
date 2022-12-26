import React from 'react'
import {Navbar , Hero, Clients, TopSales, Latest} from './index'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Clients/>
        <TopSales/>
        <Latest/>
    </>
  )
}

export default Home