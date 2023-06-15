import { Slider } from './Slider';
import slide1 from "../../assets/slider/slider1.png"
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper';
import Categories from "./Categories";
import { useState } from "react";
import SubCategory from './SubCategory';
import { useCatContext } from '../Home/CatContext';
import { Link } from 'react-router-dom';



const Hero = ({state}) => {
  const {show , updateState} = useCatContext();

  return (
    <>
    
    <div className='flex justify-center items-center h-36  mx-3 my-6 gap-4 2xl:mx-40 xl:mx-20 md:mx-10 sm:m-8 sm:h-[500px]'>
      <div className="xl:w-1/4  bg-bg z-40 h-full rounded-md  max-sm:hidden">
        <Categories show={show} updateState={updateState}/>
      </div>
    {
      show  ?
      <div className="lg:w-3/4 w-full  h-full">
       <Slider   Navigation={Navigation} Pagination={Pagination} Scrollbar={Scrollbar} A11y={A11y} Autoplay={Autoplay} />
    </div> :
    <div className="w-3/4 h-full rounded-md bg-bg">
      <SubCategory show={show} updateState={updateState}/>
    </div>
     }
    </div>
    </>
  )
}

export default Hero