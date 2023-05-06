import { Slider } from './Slider';
import slide1 from "../../assets/slider/slider1.png"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Categories from "./Categories";
import { useState } from "react";
import SubCategory from './SubCategory';
import { useCatContext } from '../Home/CatContext';
import { Link } from 'react-router-dom';



const Hero = ({state}) => {
  const {show , updateState} = useCatContext();

  return (
    <>
    
    <div className='flex justify-center items-center h-36  mx-3 my-6 gap-4 sm:mx-40 sm:m-8 sm:h-[500px]'>
      <div className="w-1/4 bg-gray-500 z-50 h-full rounded-md  max-sm:hidden">
        <Categories show={show} updateState={updateState}/>
      </div>
    {
      show  ?
      <div className="w-3/4 h-full">
       <Slider   Navigation={Navigation} Pagination={Pagination} Scrollbar={Scrollbar} A11y={A11y}  />
    </div> :
    <div className="w-3/4 h-full rounded-md bg-gray-500">
      <SubCategory/>
    </div>
     }
    </div>
    </>
  )
}

export default Hero