import React from 'react'
import flash from '../assets/flash/flash.jpg'

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
       <div className='my-7 md:my-8 md:mx-40'>
       <div className='flex justify-center items-center  bg-bg py-1 md:h-20'>
          <h2 className='text-txt  text-lg md:text-3xl md:font-semibold'>SPECIAL OFFERS</h2>
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
                <img src={flash} alt="logo" className='rounded-2xl w-20 h-20  brightness-75 object-cover ' />
                <div className="rounded-tr-2xl rotate-45 overflow-hidden  w-12   bg-btn bg-opacity-80 text-center   absolute right-9 top-3">
                <h2 className="text-[7px] font-semibold text-txt">11%</h2>
                </div>
                </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>         <img src={flash} alt="logo" className='rounded-2xl w-20 h-20  brightness-75 object-cover ' />
            <div className="rounded-tr-2xl rotate-45 overflow-hidden  w-12   bg-btn bg-opacity-80 text-center   absolute right-9 top-3">
                <h2 className="text-[7px] font-semibold text-txt">11%</h2>
                </div>
                </div>
        </SwiperSlide>
        <SwiperSlide> 
                <div className='w-full h-full relative  overflow-hidden'>
                <img src={flash} alt="logo" className='rounded-2xl w-20 h-20  brightness-75 object-cover ' />
                <div className="rounded-tr-2xl rotate-45 overflow-hidden  w-12   bg-btn bg-opacity-80 text-center   absolute right-9 top-3 ">
                <h2 className="text-[9px] text-txt">11%</h2>
                </div>
                </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>         <img src={flash} alt="logo" className='rounded-2xl w-20 h-20  brightness-75 object-cover ' />
            <div className="rounded-tr-2xl rotate-45 overflow-hidden  w-12   bg-btn bg-opacity-80 text-center   absolute right-9 top-3">
                <h2 className="text-[8px] text-txt">11%</h2>
                </div>
</div>
        </SwiperSlide>
        <SwiperSlide> 
                <div>
                <img src={flash} alt="logo" className='rounded-2xl w-20 h-20  brightness-75 object-cover ' />
                <div className="rounded-tr-2xl rotate-45 overflow-hidden  w-12   bg-btn bg-opacity-80 text-center   absolute right-9 top-3">
                <h2 className="text-[7px] font-semibold text-txt">11%</h2>
                </div>
                </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>         <img src={flash} alt="logo" className='rounded-2xl w-20 h-20  brightness-75 object-cover ' />
            <div className="rounded-tr-2xl rotate-45 overflow-hidden  w-12   bg-btn bg-opacity-80 text-center   absolute right-9 top-3">
                <h2 className="text-[7px] font-semibold text-txt">11%</h2>
                </div>
</div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>         <img src={flash} alt="logo" className='rounded-2xl w-20 h-20  brightness-75 object-cover ' />
            <div className="rounded-tr-2xl rotate-45 overflow-hidden  w-12   bg-btn bg-opacity-80 text-center   absolute right-9 top-3">
                <h2 className="text-[7px] font-semibold text-txt">11%</h2>
                </div>
</div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>         <img src={flash} alt="logo" className='rounded-2xl w-20 h-20  brightness-75 object-cover ' />
            <div className="rounded-tr-2xl rotate-45 overflow-hidden  w-12   bg-btn bg-opacity-80 text-center   absolute right-9 top-3">
                <h2 className="text-[7px] font-semibold text-txt">11%</h2>
                </div>
</div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>         <img src={flash} alt="logo" className='rounded-2xl w-20 h-20  brightness-75 object-cover ' />
            <div className="rounded-tr-2xl rotate-45 overflow-hidden  w-12   bg-btn bg-opacity-80 text-center   absolute right-9 top-3">
                <h2 className="text-[7px] font-semibold text-txt">11%</h2>
                </div>
</div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>         <img src={flash} alt="logo" className='rounded-2xl w-20 h-20  brightness-75 object-cover ' />
            <div className="rounded-tr-2xl rotate-45 overflow-hidden  w-12   bg-btn bg-opacity-80 text-center   absolute right-9 top-3">
                <h2 className="text-[7px] font-semibold text-txt">11%</h2>
                </div>
</div>
        </SwiperSlide>
        

    
    </Swiper>
            </div>


            {/* desktop version */}
        <div className='h-full flex justify-center mt-8   max-sm:hidden'>

            <Swiper
      // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
    spaceBetween={15}
    slidesPerView={6}
    autoplay = {{delay : 2000}}
    navigation
    >
        <SwiperSlide> 
                <div className='h-full overflow-hidden'>
                <img src={flash} alt="logo" className='rounded-2xl w-full h-full  brightness-75 object-cover' />
                <div className=" rotate-45   w-24 h-5   bg-btn bg-opacity-80 text-center  translate-x-28 -translate-y-32 ">
                <h2 className="text-[14px]  text-txt">11%</h2>
                </div>
                </div>
        </SwiperSlide>        
        <SwiperSlide> 
                <div className=' h-full overflow-hidden'>
                <img src={flash} alt="logo" className='rounded-2xl w-full h-full  brightness-75 object-cover ' />
                <div className=" rotate-45   w-24 h-5   bg-btn bg-opacity-80 text-center  translate-x-28 -translate-y-32 ">
                <h2 className="text-[14px]  text-txt">11%</h2>
                </div>
                </div>
        </SwiperSlide>        
        <SwiperSlide> 
                <div className=' h-full overflow-hidden'>
                <img src={flash} alt="logo" className='rounded-2xl w-full h-full  brightness-75 object-cover ' />
                <div className=" rotate-45   w-24 h-5   bg-btn bg-opacity-80 text-center  translate-x-28 -translate-y-32 ">
                <h2 className="text-[14px]  text-txt">11%</h2>
                </div>
                </div>
        </SwiperSlide>        
        <SwiperSlide> 
                <div className=' h-full overflow-hidden'>
                <img src={flash} alt="logo" className='rounded-2xl w-full h-full  brightness-75 object-cover ' />
                <div className=" rotate-45   w-24 h-5   bg-btn bg-opacity-80 text-center  translate-x-28 -translate-y-32 ">
                <h2 className="text-[14px]  text-txt">11%</h2>
                </div>
                </div>
        </SwiperSlide>        
        <SwiperSlide> 
                <div className=' h-full overflow-hidden'>
                <img src={flash} alt="logo" className='rounded-2xl w-full h-full  brightness-75 object-cover ' />
                <div className=" rotate-45   w-24 h-5   bg-btn bg-opacity-80 text-center  translate-x-28 -translate-y-32 ">
                <h2 className="text-[14px]  text-txt">11%</h2>
                </div>
                </div>
        </SwiperSlide>        
        <SwiperSlide> 
                <div className=' h-full overflow-hidden'>
                <img src={flash} alt="logo" className='rounded-2xl w-full h-full  brightness-75 object-cover ' />
                <div className=" rotate-45   w-24 h-5   bg-btn bg-opacity-80 text-center  translate-x-28 -translate-y-32 ">
                <h2 className="text-[14px]  text-txt">11%</h2>
                </div>
                </div>
        </SwiperSlide>        
        <SwiperSlide> 
                <div className=' h-full overflow-hidden'>
                <img src={flash} alt="logo" className='rounded-2xl w-full h-full  brightness-75 object-cover ' />
                <div className=" rotate-45   w-24 h-5   bg-btn bg-opacity-80 text-center  translate-x-28 -translate-y-32 ">
                <h2 className="text-[14px]  text-txt">11%</h2>
                </div>
                </div>
        </SwiperSlide>        
        <SwiperSlide> 
                <div className=' h-full overflow-hidden'>
                <img src={flash} alt="logo" className='rounded-2xl w-full h-full  brightness-75 object-cover ' />
                <div className=" rotate-45   w-24 h-5   bg-btn bg-opacity-80 text-center  translate-x-28 -translate-y-32 ">
                <h2 className="text-[14px]  text-txt">11%</h2>
                </div>
                </div>
        </SwiperSlide>        
        <SwiperSlide> 
                <div className=' h-full overflow-hidden'>
                <img src={flash} alt="logo" className='rounded-2xl w-full h-full  brightness-75 object-cover ' />
                <div className=" rotate-45   w-24 h-5   bg-btn bg-opacity-80 text-center  translate-x-28 -translate-y-32 ">
                <h2 className="text-[14px]  text-txt">11%</h2>
                </div>
                </div>
        </SwiperSlide>        
        <SwiperSlide> 
                <div className=' h-full overflow-hidden'>
                <img src={flash} alt="logo" className='rounded-2xl w-full h-full  brightness-75 object-cover ' />
                <div className=" rotate-45   w-24 h-5   bg-btn bg-opacity-80 text-center  translate-x-28 -translate-y-32 ">
                <h2 className="text-[14px]  text-txt">11%</h2>
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