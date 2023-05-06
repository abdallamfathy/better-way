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
import brand from "../../assets/topBrands/brand.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faArrowCircleRight, faArrowDown, faArrowDown19, faArrowDownLong, faArrowDownShortWide, faArrowDownWideShort, faArrowTrendDown, faDownload, faLocation, faLocationCrosshairs, faLocationDot, faLocationPin, faMobilePhone, faPhone, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { Rating } from "flowbite-react";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import { FaFacebook, FaInstagram, FaLocationArrow, FaMap, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
export function ProductInfo({data}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    let image = [];
    for (let i = 0; i < 6; i++) {
      image.push(
        <SwiperSlide>
          <img src={zara} alt="image" />
        </SwiperSlide>
      );
    }
  return <div className="flex md:flex-row flex-col-reverse justify-between">
            <div className="flex flex-col items-start  justify-center md:w-1/3 my-8  text-txt ">
              <div className="flex flex-col items-center gap-10">
                <div className="md:h-96 md:w-96 flex justify-center items-center">
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
                    <h2 className="font-semibold">Branches  </h2>
                    <a href="#"><FontAwesomeIcon icon={faSortDown} /></a>
                  </div>
                  <p> Cairo </p>
                  <p> Masr el gededa </p>
                </div>
                <div>
                  <h2 className="font-bold text-2xl">Gained Points : <span className="text-btn">{data?.gained_points}</span></h2>
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
  