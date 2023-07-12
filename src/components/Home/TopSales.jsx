import zara from "../../assets/topPlaces/zara.jpg"

import { RiStarSFill, RiStarSLine } from 'react-icons/ri'
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from "react-router-dom";
import API_BASE_URL from "../../../config";
import { useEffect, useState } from "react";
import { ProductCard } from "../../pages/Category/ProductCard";

const TopSales = () => {

    const [myData, setMyData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${API_BASE_URL}api/v1/shops/top-deal`);
            const data = await response.json();
            setMyData(data.data);
        };

        fetchData();
    }, []);
    console.log(myData);
    return (
        <>
            <div className='my-7 md:my-8 2xl:mx-40 xl:mx-20 md:mx-10'>
                <div className='flex justify-center items-center  bg-bg py-1 md:h-16'>
                    <h2 className='text-txt  text-lg md:text-3xl md:font-semibold'>TOP PLACES</h2>
                </div>



                {/* desktop version */}
                <div className='my-8 max-md:mx-3'>

                    <Link to="/shop">
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
                            slidesPerView={2}
                            breakpoints={{
                                768: {
                                    slidesPerView: 4
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
                                    logo={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                    category={item.category}
                                    offer={item.offer}
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

export default TopSales