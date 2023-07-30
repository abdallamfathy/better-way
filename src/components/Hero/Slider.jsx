import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import API_BASE_URL from "../../../config";

export function Slider({ Navigation, Pagination, Scrollbar, A11y , Autoplay }) {
  const [myData, setMyData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_BASE_URL}api/v1/sliders`);
      const data = await response.json();
      setMyData(data.data);
    };

    fetchData();
  }, []);
  return (
    <div className="w-full h-full">
    <Swiper
      dir="rtl"
      className="hero" // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
      slidesPerView={1}
      navigation
      cubeEffect={true}
      autoplay={
        {
            disableOnInteraction: false
        }
    }
      loop={true}
      >
        {
        myData?.map((slide) => {
          return (
            <SwiperSlide key={slide.id}  className="w-full h-full z-50">

          <div  className= "h-36  flex justify-center items-center text-center rounded-md lg:h-[500px] w-full">
          <div className="">
            <img src={slide.image} alt="image" className="w-full h-full object-cover" />
            <h2 className="text-txt z-50 absolute inset-0 translate-y-96 text-2xl">{slide.title}</h2>
          </div>
        </div>
        </SwiperSlide>
          )
        })
      }
    </Swiper>
    
      
    </div>
  );
}
