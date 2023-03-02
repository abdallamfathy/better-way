import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export function Slider({ Navigation, Pagination, Scrollbar, A11y }) {
  return (
    <div className="w-full">
    <Swiper
      className="hero" // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      navigation
      cubeEffect={true}
      >
      <SwiperSlide className="w-full">
        <div className="bg-[#00020581] text-txt  h-36 w-80 flex justify-center items-center text-center rounded-md sm:h-[500px] sm:w-full">
          <div className="">
            <h2>Join us now with sale 35%</h2>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  );
}
