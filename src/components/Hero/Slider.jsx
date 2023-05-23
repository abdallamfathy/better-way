import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import API_BASE_URL from "../../../config";

export function Slider({ Navigation, Pagination, Scrollbar, A11y }) {
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
    <div className="w-full">
    <Swiper
      className="hero" // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      navigation
      cubeEffect={true}
      >
        {
        myData?.map((slide) => {
          return (
            <SwiperSlide key={slide.id}  className="w-full  z-50">

          <div  className= "h-36 w-80 flex justify-center items-center text-center rounded-md sm:h-[500px] sm:w-full">
          <div className="">
            <img src={slide.image} alt="image"  />
            <h2 className="text-txt z-50 absolute inset-0 translate-y-60">{slide.title}</h2>
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
