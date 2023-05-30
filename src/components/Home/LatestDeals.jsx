import zara from "../../assets/topPlaces/zara.jpg"

import {RiStarSFill , RiStarSLine} from 'react-icons/ri'
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API_BASE_URL from "../../../config";
import { ProductCard } from "../../pages/Category/ProductCard";

const LatestDeals = () => {
    const [myData, setMyData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`${API_BASE_URL}api/v1/shops/latest`);
        const data = await response.json();
        setMyData(data.data);
      };
  
      fetchData();
    }, []);
return (
    <>
    <div className='my-7 md:my-8 2xl:mx-40 xl:mx-20 lg:mx-10'>
    <div className='flex justify-center items-center  bg-bg py-1 md:h-16'>
      <h2 className='text-txt  text-lg md:text-3xl md:font-semibold'>LAST DEALS</h2>
    </div>
    <div className='my-8 max-md:mx-3'>

                    <Link to="/shop">
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
                            slidesPerView={2}
                            breakpoints={{
                                768: {
                                  slidesPerView: 3.5
                                },
                                1200: {
                                  slidesPerView: 4.5
                                }

                            }}
                            navigation
                            autoplay={
                                {
                                    disableOnInteraction: false
                                }
                            }
                            loop={true}
                        >

                           {
                               myData?.map((item , index) => (
                                <SwiperSlide key={index}>
                                {/* <div className="md:w-60 md:h-72 w-36 h-44 bg-white rounded-2xl">
                                    <div className="flex flex-col md:h-72 max-md:justify-center">
                                        <div className="h-3/4">
                                            <img className="rounded-t-2xl w-48 h-36 md:w-full md:h-full" src={item.logo} alt="product image" />
                                        </div>
                                        <div className="flex items-center md:justify-center gap-4 md:h-1/4">
                                            <div className="mx-2  max-md:my-1  text-black text-[6px] md:text-[12px] font-semibold flex flex-col items-start md:justify-center justify-start">
                                                <h2 className="text-btn">{item.title}</h2>
                                                <h3>WOMEN CLOTHES</h3>
                                            </div>
                                            <div className="flex md:w-20  w-10 text-btn bg-bg rounded-md h-3 md:p-2 max-md:px-1 justify-center items-center">
                                                <RiStarSFill />
                                                <RiStarSFill />
                                                <RiStarSFill />
                                                <RiStarSFill />
                                                <RiStarSLine />
                                            </div>
                                        </div>
                                        <div className=" max-md:hidden rounded-full flex justify-center items-center bg-btn bg-opacity-80 border border-white w-10 h-10 absolute  z-50 translate-x-44  translate-y-5">
                                            <h2 className="md:text-sm text-[8px]  text-txt md:text-center">11%</h2>
                                        </div>
                                        <div className="md:hidden rounded-full p-1 bg-btn bg-opacity-80 border border-white absolute top-1 right-1">
                                        <h2 className="text-[8px] text-txt">11%</h2>
                                    </div>
                                    </div>

                                </div> */}
                                    <ProductCard
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    logo={item.logo}
                                    price={item.price}
                                    rating={item.rating}
                                    />
                            </SwiperSlide>
                               ))
                           }


                        </Swiper>
                    </Link>
                </div>
  </div>
</>
)
}

export default LatestDeals


