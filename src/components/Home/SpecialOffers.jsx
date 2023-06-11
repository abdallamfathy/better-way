import React, { useEffect, useState } from 'react'
import flash from '../../assets/flash/flash.jpg'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import API_BASE_URL from '../../../config';
const SpecialOffers = () => {
        const [myData, setMyData] = useState(null);

        useEffect(() => {
                const fetchData = async () => {
                        const response = await fetch(`${API_BASE_URL}api/v1/shops/special-offers`);
                        const data = await response.json();
                        setMyData(data.data);
                        console.log(data.data);
                };

                fetchData();
        }, []);
        return (
                <>
                        <div className='my-7 md:my-8 2xl:mx-40 xl:mx-20 md:mx-10'>
                                <div className='flex justify-center items-center  bg-bg py-1 md:h-20'>
                                        <h2 className='text-txt  text-lg md:text-3xl md:font-semibold'>SPECIAL OFFERS</h2>
                                </div>
                                <div className='h-24 flex justify-center max-md:my-5 max-md:-mb-2  max-md:mx-3 md:h-full md:mt-8 '>

                                        <Swiper
                                                // install Swiper modules
                                                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                                spaceBetween={10}
                                                slidesPerView={6}
                                                
                                                autoplay={
                                                        {
                                                                disableOnInteraction: false
                                                        }
                                                }
                                                loop={true}
                                        >
                                                {
                                                         myData?.map((item, index) => {
                                                                return (
                                                                        <SwiperSlide key={index}>
                                                        <div className='relative w-20 h-20 overflow-hidden md:h-44 md:w-64'>
                                                                <img src={item?.logo} alt="logo" className='rounded-2xl w-full h-full  brightness-75 object-cover ' />
                                                                <div className="rounded-tr-2xl rotate-45   w-14  md:w-24 md:h-5    bg-btn bg-opacity-80 text-center  md:top-4 md:-right-5  absolute -right-3 top-3">
                                                                        <h2 className="text-[7px] font-semibold text-txt md:text-sm">{item?.offer}</h2>
                                                                </div>
                                                        </div>
                                                </SwiperSlide>
                                                                )
                                                        }
                                                        )}
                                        </Swiper>
                                </div>


                                {/* desktop version */}
                                {/* <div className='h-full flex justify-center mt-8   max-sm:hidden'>

                                        <Swiper
                                                // install Swiper modules
                                                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                                spaceBetween={15}
                                                slidesPerView={6}
                                                autoplay={
                                                        {
                                                                disableOnInteraction: false
                                                        }
                                                }
                                                navigation
                                        >
                                                <SwiperSlide>
                                                        <div className='relative overflow-hidden '>
                                                                <div className=' h-full relative w-full '>
                                                                        <img src={flash} alt="logo" className='rounded-2xl w-full h-full  brightness-75 object-cover ' />
                                                                        <div className=" rotate-45    bg-btn bg-opacity-80 text-center absolute ">
                                                                                <h2 className="text-[14px]  text-txt">11%</h2>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </SwiperSlide>
                                        </Swiper>
                                </div> */}
                        </div>

                </>
        )
}

export default SpecialOffers