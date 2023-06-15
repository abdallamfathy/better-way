import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide  } from "swiper/react";
import {Autoplay  } from "swiper";
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

  return <div className="flex md:flex-row flex-col-reverse justify-between">
            <div className="flex flex-col items-center md:items-start  justify-center md:w-1/5 my-8  text-txt ">
              <div className="flex flex-col items-center gap-10">
                <div className="2xl:h-56 xl:h-52 lg:h-44 h-40 2xl:w-56 xl:w-52 lg:w-44 w-40  flex justify-center items-center">
                  <img src={data?.logo} alt="logo" className="h-full w-full " />
                </div>
                <div className="flex text-3xl text-btn rounded-md   justify-center items-center">
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSLine />

                </div>
                <div className="flex flex-col items-center gap-4  text-2xl">
                  <div className="flex gap-2 items-center">
                    {
                      data?.is_branch === "0" ? <h2 className="font-semibold">Brand  </h2> : <h2 className="font-semibold">Branches  </h2>
                    }
                    {/* <a href="#"><FontAwesomeIcon icon={faSortDown} /></a> */}
                  </div>
                  <p> {data?.addresses[0]?.governorate} </p>
                  <p> {data?.addresses[0]?.area} </p>
                </div>
                <div>
                  <h2 className="font-bold text-2xl">Gained Points : <span className="text-btn">{data?.gained_points}</span></h2>
                </div>
              </div>
            </div>
            <div className="swiperr my-8 md:w-4/5 ">
              <Swiper style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff"
      }} modules={[FreeMode, Navigation, Thumbs , Autoplay]} autoplay={
        {
            disableOnInteraction: false
        }
    } spaceBetween={10} navigation={true} thumbs={{
        swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
      }} className="mySwiper2 rounded-t-md">
                {data?.images?.map((item, index) => {
                  return <SwiperSlide key={index}>
                      <img src={item?.image} alt="image" className="w-full md:h-[27rem] object-cover" />
                    </SwiperSlide>;
                })

}
              </Swiper>
              <div className="py-2 rounded-b-md">
                <Swiper modules={[FreeMode, Navigation, Thumbs]} navigation onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={6} freeMode={true} watchSlidesProgress={true} className="mySwiper">
                { data?.images?.map((item, index) => {
                  return <SwiperSlide key={index}>
                      <img src={item?.image} alt="image" className="w-full h-24 object-cover max-md:hidden" />
                    </SwiperSlide>;
                })

}
                </Swiper>
              </div>
            </div>
            {/* <div className="swiperr my-8 md:w-4/5">
              <Swiper style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff"
      }} modules={[FreeMode, Navigation, Thumbs , Autoplay]} autoplay={
        {
            disableOnInteraction: false
        }
    } spaceBetween={10} navigation={true} thumbs={{
        swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
      }} className="mySwiper2 rounded-t-md">
                {image}
              </Swiper>
              <div className="py-2 rounded-b-md">
                <Swiper modules={[FreeMode, Navigation, Thumbs]} navigation onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={6} freeMode={true} watchSlidesProgress={true} className="mySwiper">
                  {image}
                </Swiper>
              </div>
            </div> */}
          </div>;
}
  