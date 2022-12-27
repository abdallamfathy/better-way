import React from 'react'
import flash from '../assets/flash/flash.jpg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide  } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Flash = () => {
return (
    <>
        <div className='bg-bg h-24 flex justify-center items-center  my-3'>

            <Swiper
      // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={5}
    slidesPerView={4.5}
    scrollbar
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >
        <SwiperSlide> 
                <div>
                <img src={flash} alt="logo" className='rounded-2xl w-20 h-20 ' />
                </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>         <img src={flash} alt="logo" className='rounded-2xl w-20 h-20 ' />
</div>
        </SwiperSlide>
        <SwiperSlide> 
                <div>
                <img src={flash} alt="logo" className='rounded-2xl w-20 h-20 ' />
                </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>         <img src={flash} alt="logo" className='rounded-2xl w-20 h-20 ' />
</div>
        </SwiperSlide>
        <SwiperSlide> 
                <div>
                <img src={flash} alt="logo" className='rounded-2xl w-20 h-20 ' />
                </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>         <img src={flash} alt="logo" className='rounded-2xl w-20 h-20 ' />
</div>
        </SwiperSlide>
        

    
    </Swiper>
            </div>

    </>
)
}

export default Flash