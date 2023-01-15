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
const SpecialOffers = () => {
return (
    <>
       <div className='my-7 md:my-20 md:mx-40'>
       <div className='flex justify-center items-center  bg-bg py-1 md:h-20'>
          <h2 className='text-txt  text-lg md:text-2xl md:font-semibold'>SPECIAL OFFERS</h2>
        </div>
        <div className='h-24 flex justify-center my-5 -mb-2  mx-3 md:hidden'>

            <Swiper
      // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
    spaceBetween={10}
    slidesPerView={4.5}
    scrollbar
    autoplay = {{delay : 500}}
    >
        <SwiperSlide> 
                <div>
                <img src={logo7} alt="logo" className='rounded-2xl w-20 h-20  brightness-75 object-cover ' />
                <div className="rounded-tr-2xl rotate-45 overflow-hidden  w-12   bg-btn bg-opacity-80 text-center   absolute right-9 top-3">
                <h2 className="text-[7px] font-semibold text-txt">11%</h2>
                </div>
                </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>         <img src={logo2} alt="logo" className='rounded-2xl w-20 h-20  brightness-75 object-cover ' />
            <div className="rounded-tr-2xl rotate-45 overflow-hidden  w-12   bg-btn bg-opacity-80 text-center   absolute right-9 top-3">
                <h2 className="text-[7px] font-semibold text-txt">11%</h2>
                </div>
                </div>
        </SwiperSlide>
        <SwiperSlide> 
                <div className='w-full h-full relative  overflow-hidden'>
                <img src={logo6} alt="logo" className='rounded-2xl w-20 h-20  brightness-75 object-cover ' />
                <div className="rounded-tr-2xl rotate-45 overflow-hidden  w-12   bg-btn bg-opacity-80 text-center   absolute right-9 top-3 ">
                <h2 className="text-[9px] text-txt">11%</h2>
                </div>
                </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>         <img src={logo3} alt="logo" className='rounded-2xl w-20 h-20  brightness-75 object-cover ' />
            <div className="rounded-tr-2xl rotate-45 overflow-hidden  w-12   bg-btn bg-opacity-80 text-center   absolute right-9 top-3">
                <h2 className="text-[8px] text-txt">11%</h2>
                </div>
</div>
        </SwiperSlide>
        <SwiperSlide> 
                <div>
                <img src={logo4} alt="logo" className='rounded-2xl w-20 h-20  brightness-75 object-cover ' />
                <div className="rounded-tr-2xl rotate-45 overflow-hidden  w-12   bg-btn bg-opacity-80 text-center   absolute right-9 top-3">
                <h2 className="text-[7px] font-semibold text-txt">11%</h2>
                </div>
                </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>         <img src={logo5} alt="logo" className='rounded-2xl w-20 h-20  brightness-75 object-cover ' />
            <div className="rounded-tr-2xl rotate-45 overflow-hidden  w-12   bg-btn bg-opacity-80 text-center   absolute right-9 top-3">
                <h2 className="text-[7px] font-semibold text-txt">11%</h2>
                </div>
</div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>         <img src={logo7} alt="logo" className='rounded-2xl w-20 h-20  brightness-75 object-cover ' />
            <div className="rounded-tr-2xl rotate-45 overflow-hidden  w-12   bg-btn bg-opacity-80 text-center   absolute right-9 top-3">
                <h2 className="text-[7px] font-semibold text-txt">11%</h2>
                </div>
</div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>         <img src={logo8} alt="logo" className='rounded-2xl w-20 h-20  brightness-75 object-cover ' />
            <div className="rounded-tr-2xl rotate-45 overflow-hidden  w-12   bg-btn bg-opacity-80 text-center   absolute right-9 top-3">
                <h2 className="text-[7px] font-semibold text-txt">11%</h2>
                </div>
</div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>         <img src={logo2} alt="logo" className='rounded-2xl w-20 h-20  brightness-75 object-cover ' />
            <div className="rounded-tr-2xl rotate-45 overflow-hidden  w-12   bg-btn bg-opacity-80 text-center   absolute right-9 top-3">
                <h2 className="text-[7px] font-semibold text-txt">11%</h2>
                </div>
</div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>         <img src={logo4} alt="logo" className='rounded-2xl w-20 h-20  brightness-75 object-cover ' />
            <div className="rounded-tr-2xl rotate-45 overflow-hidden  w-12   bg-btn bg-opacity-80 text-center   absolute right-9 top-3">
                <h2 className="text-[7px] font-semibold text-txt">11%</h2>
                </div>
</div>
        </SwiperSlide>
        

    
    </Swiper>
            </div>


            {/* desktop version */}
        <div className='h-44 flex justify-center my-5 -mb-2   max-sm:hidden'>

            <Swiper
      // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
    spaceBetween={5}
    slidesPerView={7}
    scrollbar
    autoplay = {{delay : 500}}
    >
        <SwiperSlide> 
                <div>
                <img src={logo7} alt="logo" className='rounded-2xl w-44 h-40  brightness-75 object-cover ' />
                <div className="rounded-tr-2xl rotate-45 overflow-hidden  w-16 h-4   bg-btn bg-opacity-80 text-center   absolute right-9 top-3 ">
                <h2 className="text-[10px] font-semibold text-txt">11%</h2>
                </div>
                </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>         <img src={logo2} alt="logo" className='rounded-2xl w-44 h-40  brightness-75 object-cover ' />
            <div className="rounded-tr-2xl rotate-45 overflow-hidden   w-16 h-4  bg-btn bg-opacity-80 text-center   absolute right-9 top-3">
                <h2 className="text-[10px] font-semibold text-txt">11%</h2>
                </div>
                </div>
        </SwiperSlide>
        <SwiperSlide> 
                <div className='w-full h-full relative  overflow-hidden'>
                <img src={logo6} alt="logo" className='rounded-2xl w-44 h-40  brightness-75 object-cover ' />
                <div className="rounded-tr-2xl rotate-45 overflow-hidden  w-16 h-4  bg-btn bg-opacity-80 text-center   absolute right-9 top-3 ">
                <h2 className="text-[9px] text-txt">11%</h2>
                </div>
                </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>         <img src={logo3} alt="logo" className='rounded-2xl w-44 h-40  brightness-75 object-cover ' />
            <div className="rounded-tr-2xl rotate-45 overflow-hidden w-16 h-4   bg-btn bg-opacity-80 text-center   absolute right-9 top-3">
                <h2 className="text-[8px] text-txt">11%</h2>
                </div>
</div>
        </SwiperSlide>
        <SwiperSlide> 
                <div>
                <img src={logo4} alt="logo" className='rounded-2xl w-44 h-40  brightness-75 object-cover ' />
                <div className="rounded-tr-2xl rotate-45 overflow-hidden  w-16 h-4   bg-btn bg-opacity-80 text-center   absolute right-9 top-3">
                <h2 className="text-[10px] font-semibold text-txt">11%</h2>
                </div>
                </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>         <img src={logo5} alt="logo" className='rounded-2xl w-44 h-40  brightness-75 object-cover ' />
            <div className="rounded-tr-2xl rotate-45 overflow-hidden  w-16 h-4  bg-btn bg-opacity-80 text-center   absolute right-9 top-3">
                <h2 className="text-[10px] font-semibold text-txt">11%</h2>
                </div>
</div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>         <img src={logo7} alt="logo" className='rounded-2xl w-44 h-40  brightness-75 object-cover ' />
            <div className="rounded-tr-2xl rotate-45 overflow-hidden  w-16 h-4 bg-btn bg-opacity-80 text-center   absolute right-9 top-3">
                <h2 className="text-[10px] font-semibold text-txt">11%</h2>
                </div>
</div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>         <img src={logo8} alt="logo" className='rounded-2xl w-44 h-40  brightness-75 object-cover ' />
            <div className="rounded-tr-2xl rotate-45 overflow-hidden w-16 h-4  bg-btn bg-opacity-80 text-center   absolute right-9 top-3">
                <h2 className="text-[10px] font-semibold text-txt">11%</h2>
                </div>
</div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>         <img src={logo2} alt="logo" className='rounded-2xl w-44 h-40  brightness-75 object-cover ' />
            <div className="rounded-tr-2xl rotate-45 overflow-hidden w-16 h-4 bg-btn bg-opacity-80 text-center   absolute right-9 top-3">
                <h2 className="text-[10px] font-semibold text-txt">11%</h2>
                </div>
</div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>         <img src={logo4} alt="logo" className='rounded-2xl w-44 h-40  brightness-75 object-cover ' />
            <div className="rounded-tr-2xl rotate-45 overflow-hidden w-16 h-4   bg-btn bg-opacity-80 text-center   absolute right-9 top-3">
                <h2 className="text-[10px] font-semibold text-txt">11%</h2>
                </div>
</div>
        </SwiperSlide>
        

    
    </Swiper>
            </div>
       </div>

    </>
)
}

export default SpecialOffers