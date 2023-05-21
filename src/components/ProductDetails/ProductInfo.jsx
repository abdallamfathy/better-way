import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../index.css";
import {
  FreeMode,
  Navigation,
  Thumbs,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
import zara from "../../assets/topPlaces/zara.jpg";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
export function ProductInfo({data}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    let image = [];
    for (let i = 0; i < 6; i++) {
      image.push(
        <SwiperSlide key={i}>
          <img src={zara} alt="image" className="w-full object-cover" />
        </SwiperSlide>
      );
    }
  return <div className="flex md:flex-row flex-col-reverse justify-between">
            <div className="flex flex-col items-center md:items-start  justify-center md:w-1/3 my-8  text-txt ">
              <div className="flex flex-col items-center gap-10">
                <div className="2xl:h-96 xl:h-80 lg:h-72 h-56 2xl:w-96 xl:w-80 lg:w-72 w-56  flex justify-center items-center">
                  <img src={data?.logo} alt="logo" className="h-full w-full " />
                </div>
                <div className="flex text-3xl text-btn rounded-md   justify-center items-center">
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSLine />

                </div>
                {/* <div className="flex flex-col items-center gap-4  text-2xl">
                  <div className="flex gap-2 items-center">
                    <h2 className="font-semibold">Branches  </h2>
                    <a href="#"><FontAwesomeIcon icon={faSortDown} /></a>
                  </div>
                  <p> Cairo </p>
                  <p> Masr el gededa </p>
                </div> */}
                <div>
                  <h2 className="font-bold text-3xl">Gained Points : <span className="text-btn">{data?.gained_points}</span></h2>
                </div>
              </div>
            </div>
            <div className="swiperr my-8 md:w-2/3">
              <Swiper style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff"
      }} modules={[FreeMode, Navigation, Thumbs]} spaceBetween={10} navigation={true} thumbs={{
        swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
      }} className="mySwiper2 rounded-t-md">
                {image}
              </Swiper>
              <div className="py-2 rounded-b-md">
                <Swiper modules={[FreeMode, Navigation, Thumbs]} onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={6} freeMode={true} watchSlidesProgress={true} className="mySwiper">
                  {image}
                </Swiper>
              </div>
            </div>
          </div>;
}
  