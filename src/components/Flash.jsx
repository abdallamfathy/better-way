import React from 'react'
import logo1 from '../assets/flash/1.jpg'
import logo2 from '../assets/flash/2.jpg'
import logo3 from '../assets/flash/3.jpg'
import logo4 from '../assets/flash/4.jpg'
import logo5 from '../assets/flash/5.jpg'
import logo6 from '../assets/flash/6.jpg'
import logo7 from '../assets/flash/7.jpg'
import logo8 from '../assets/flash/8.jpg'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide  } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Flash = () => {
return (
    <>
       <div className='my-7'>
       <div className='flex justify-center items-center  bg-bg py-1'>
          <h2 className='text-txt  text-lg'>TOP OFFERS</h2>
        </div>
        <div className='h-24 flex justify-center my-5 -mb-2  mx-3'>

            <Swiper
      // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
    spaceBetween={10}
    slidesPerView={4.5}
    scrollbar
    autoplay = {{delay : 500}}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >
        <SwiperSlide> 
                <div>
                <img src={logo7} alt="logo" className='rounded-2xl w-20 h-20  brightness-75 object-cover ' />
                <div className="rounded-full p-1 bg-btn bg-opacity-80 border border-white absolute top-1 right-2">
                <h2 className="text-[7px] text-txt">11%</h2>
                </div>
                </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>         <img src={logo2} alt="logo" className='rounded-2xl w-20 h-20  brightness-75 object-cover ' />
            <div className="rounded-full p-1 bg-btn bg-opacity-80 border border-white absolute top-1 right-2">
                <h2 className="text-[7px] text-txt">11%</h2>
                </div>
                </div>
        </SwiperSlide>
        <SwiperSlide> 
                <div>
                <img src={logo6} alt="logo" className='rounded-2xl w-20 h-20  brightness-75 object-cover ' />
                <div className="rounded-tr-2xl   w-10 p-1 bg-btn bg-opacity-80 text-center   absolute left-10 top-0 ">
                <h2 className="text-[10px] text-txt">11%</h2>
                </div>
                </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>         <img src={logo3} alt="logo" className='rounded-2xl w-20 h-20  brightness-75 object-cover ' />
            <div className="rounded-t-full   w-20 p-1 bg-btn bg-opacity-80 text-center   absolute top-0 ">
                <h2 className="text-[8px] text-txt">11%</h2>
                </div>
</div>
        </SwiperSlide>
        <SwiperSlide> 
                <div>
                <img src={logo4} alt="logo" className='rounded-2xl w-20 h-20  brightness-75 object-cover ' />
                <div className="rounded-full p-1 bg-btn bg-opacity-80 border border-white absolute top-1 right-2">
                <h2 className="text-[7px] text-txt">11%</h2>
                </div>
                </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>         <img src={logo5} alt="logo" className='rounded-2xl w-20 h-20  brightness-75 object-cover ' />
            <div className="rounded-full p-1 bg-btn bg-opacity-80 border border-white absolute top-1 right-2">
                <h2 className="text-[7px] text-txt">11%</h2>
                </div>
</div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>         <img src={logo7} alt="logo" className='rounded-2xl w-20 h-20  brightness-75 object-cover ' />
            <div className="rounded-full p-1 bg-btn bg-opacity-80 border border-white absolute top-1 right-2">
                <h2 className="text-[7px] text-txt">11%</h2>
                </div>
</div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>         <img src={logo8} alt="logo" className='rounded-2xl w-20 h-20  brightness-75 object-cover ' />
            <div className="rounded-full p-1 bg-btn bg-opacity-80 border border-white absolute top-1 right-2">
                <h2 className="text-[7px] text-txt">11%</h2>
                </div>
</div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>         <img src={logo2} alt="logo" className='rounded-2xl w-20 h-20  brightness-75 object-cover ' />
            <div className="rounded-full p-1 bg-btn bg-opacity-80 border border-white absolute top-1 right-2">
                <h2 className="text-[7px] text-txt">11%</h2>
                </div>
</div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>         <img src={logo4} alt="logo" className='rounded-2xl w-20 h-20  brightness-75 object-cover ' />
            <div className="rounded-full p-1 bg-btn bg-opacity-80 border border-white absolute top-1 right-2">
                <h2 className="text-[7px] text-txt">11%</h2>
                </div>
</div>
        </SwiperSlide>
        

    
    </Swiper>
            </div>
       </div>

    </>
)
}

export default Flash