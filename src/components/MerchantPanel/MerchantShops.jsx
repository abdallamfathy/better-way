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
import { useAuthUser } from "react-auth-kit";
import axios from "axios";

const MerchantShops = () => {
    const [myData, setMyData] = useState(null);
    const auth = useAuthUser();
    const token = auth()?.token;
  
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}api/v1/merchants/shops`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
    
        const data = response.data.data;
        console.log(data);
        setMyData(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
    useEffect(() => {
      fetchData();
    }, []);
return (
    <>
    <div className='my-7 md:my-8 2xl:mx-40 xl:mx-20 lg:mx-10'>
    <div className='flex justify-center items-center  bg-bg py-1 md:h-16'>
      <h2 className='text-txt  text-lg md:text-3xl md:font-semibold'>MY SHOPS</h2>
    </div>
    <div className='my-8 max-md:mx-3'>

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
                               myData?.slice(0,20).map((item , index) => (
                                <SwiperSlide key={index}>
                                    <ProductCard
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    logo={item.logo}
                                    price={item.price}
                                    rating={item.rating}
                                    category={item.category}
                                    offer={item.offer}
                                    />
                            </SwiperSlide>
                               ))
                           }


                        </Swiper>
                </div>
  </div>
</>
)
}

export default MerchantShops


