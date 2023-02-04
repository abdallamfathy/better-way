import slide1 from "../assets/slider/slider1.png"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide  } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Categories from "./Categories";
import { useState } from "react";

const Hero = ({state}) => {
  const [show, setShow] = useState(state);

  return (
    <>
    
    <div className='flex justify-center items-center h-36  mx-3 my-6 gap-6 sm:mx-40 sm:m-8 sm:h-[500px]'>
      <div className="w-1/4 bg-gray-500 z-50 h-full rounded-md  max-sm:hidden">
        <Categories/>
      </div>
    {!show && <div className="w-3/4">
    <Swiper className="hero"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      cubeEffect={true}
    >
      <SwiperSlide>
        <div className='bg-[#00020581] text-txt  h-36 w-80 flex justify-center items-center text-center rounded-md sm:h-[500px] sm:w-full'>
          <div className="">
            <h2>Join us now with sale 35%</h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-[#eeeeee40] text-txt  h-36 w-80 flex justify-center items-center text-center rounded-md sm:h-[500px] sm:w-full '>
          <div className="">
            <h2>Join us now with sale 35%</h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-[#FF5722] text-txt  h-36 w-80 flex justify-center items-center text-center rounded-md sm:h-[500px] sm:w-full'>
          <div className="">
            <h2>Join us now with sale 35%</h2>
          </div>
        </div>
      </SwiperSlide>
     
    </Swiper>
    </div> }
    {show && <div className="w-3/4 h-full rounded-md bg-yellow-500">

    </div>}
        </div>
    </>
  )
}

export default Hero