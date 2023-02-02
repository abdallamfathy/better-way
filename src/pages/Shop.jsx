import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../index.css";
import {
  FreeMode,
  Navigation,
  Thumbs,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
import { Footer, Navbar } from "../components";
import zara from "../assets/topPlaces/zara.jpg";
import brand from "../assets/topBrands/brand.jpg";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";

const Shop = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  let image = [];
  for (let i = 0; i < 6; i++) {
    image.push(
      <SwiperSlide>
        <img src={zara} alt="image" />
      </SwiperSlide>
    );
  }
  return (
    <>
      <Navbar />
      <div className="mx-40 my-8">
        <div className="flex justify-between gap-2">
          <div className=" flex flex-col items-center  justify-center gap-10 w-1/3 p-8 my-8  text-white border  border-white rounded-md   ">
            <div className="h-36 w-36">
              <img src={brand} alt="logo" className="h-full w-full" />
            </div>
            <div className="flex text-3xl text-btn rounded-md   justify-center items-center">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSLine />
            
            </div>
            <div className="flex flex-col items-center gap-4">
              <h2 className="font-semibold">Branch Location : </h2>
              <p>19 thawra st. madinet nasr, Cairo, Egypt </p>
              {/* <RiStarSFill />
              <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                4.95
              </p>
              <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
              <a
                href="#"
                className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
                73 reviews
              </a> */}
            </div>
          </div>
          <div className="swiperr my-8 border border-white rounded-md w-2/3">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              spaceBetween={10}
              navigation={true}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              className="mySwiper2 rounded-t-md">
              {image}
            </Swiper>
            <div className=" bg-bg p-8 rounded-b-md">
              <Swiper
                modules={[FreeMode, Navigation, Thumbs]}
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                className="mySwiper">
                {image}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-md border border-white">
          <div className="text-left text-white font-bold text-2xl">
            <h2>Related shops</h2>
          </div>
          <div className="m-8">
            {/* desktop version */}
            <div className="my-8 max-md:hidden">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={100}
                slidesPerView={5}
                navigation>
                <SwiperSlide>
                  <div className="w-60 h-72 bg-white rounded-2xl">
                    <div className="flex flex-col h-72">
                      <div className="h-3/4">
                        <img
                          className="rounded-t-2xl w-full h-full"
                          src={zara}
                          alt="product image"
                        />
                      </div>
                      <div className="flex items-center justify-center gap-4 h-1/4">
                        <div className="mx-2    text-black text-[12px] font-semibold flex flex-col items-start justify-center">
                          <h2 className="text-btn">ZARA FOR MEN</h2>
                          <h3>WOMEN CLOTHES</h3>
                        </div>
                        <div className="flex w-20 text-btn bg-bg rounded-md h-3 p-2 justify-center items-center">
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSLine />
                        </div>
                      </div>
                      <div className="rounded-full flex justify-center items-center bg-btn bg-opacity-80 border border-white w-10 h-10 absolute  z-50 translate-x-44  translate-y-5">
                        <h2 className="text-sm  text-txt text-center">11%</h2>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-60 h-72 bg-white rounded-2xl">
                    <div className="flex flex-col h-72">
                      <div className="h-3/4">
                        <img
                          className="rounded-t-2xl w-full h-full"
                          src={zara}
                          alt="product image"
                        />
                      </div>
                      <div className="flex items-center justify-center gap-4 h-1/4">
                        <div className="mx-2    text-black text-[12px] font-semibold flex flex-col items-start justify-center">
                          <h2 className="text-btn">ZARA FOR MEN</h2>
                          <h3>WOMEN CLOTHES</h3>
                        </div>
                        <div className="flex w-20 text-btn bg-bg rounded-md h-3 p-2 justify-center items-center">
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSLine />
                        </div>
                      </div>
                      <div className="rounded-full flex justify-center items-center bg-btn bg-opacity-80 border border-white w-10 h-10 absolute  z-50 translate-x-44  translate-y-5">
                        <h2 className="text-sm  text-txt text-center">11%</h2>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-60 h-72 bg-white rounded-2xl">
                    <div className="flex flex-col h-72">
                      <div className="h-3/4">
                        <img
                          className="rounded-t-2xl w-full h-full"
                          src={zara}
                          alt="product image"
                        />
                      </div>
                      <div className="flex items-center justify-center gap-4 h-1/4">
                        <div className="mx-2    text-black text-[12px] font-semibold flex flex-col items-start justify-center">
                          <h2 className="text-btn">ZARA FOR MEN</h2>
                          <h3>WOMEN CLOTHES</h3>
                        </div>
                        <div className="flex w-20 text-btn bg-bg rounded-md h-3 p-2 justify-center items-center">
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSLine />
                        </div>
                      </div>
                      <div className="rounded-full flex justify-center items-center bg-btn bg-opacity-80 border border-white w-10 h-10 absolute  z-50 translate-x-44  translate-y-5">
                        <h2 className="text-sm  text-txt text-center">11%</h2>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-60 h-72 bg-white rounded-2xl">
                    <div className="flex flex-col h-72">
                      <div className="h-3/4">
                        <img
                          className="rounded-t-2xl w-full h-full"
                          src={zara}
                          alt="product image"
                        />
                      </div>
                      <div className="flex items-center justify-center gap-4 h-1/4">
                        <div className="mx-2    text-black text-[12px] font-semibold flex flex-col items-start justify-center">
                          <h2 className="text-btn">ZARA FOR MEN</h2>
                          <h3>WOMEN CLOTHES</h3>
                        </div>
                        <div className="flex w-20 text-btn bg-bg rounded-md h-3 p-2 justify-center items-center">
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSLine />
                        </div>
                      </div>
                      <div className="rounded-full flex justify-center items-center bg-btn bg-opacity-80 border border-white w-10 h-10 absolute  z-50 translate-x-44  translate-y-5">
                        <h2 className="text-sm  text-txt text-center">11%</h2>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-60 h-72 bg-white rounded-2xl">
                    <div className="flex flex-col h-72">
                      <div className="h-3/4">
                        <img
                          className="rounded-t-2xl w-full h-full"
                          src={zara}
                          alt="product image"
                        />
                      </div>
                      <div className="flex items-center justify-center gap-4 h-1/4">
                        <div className="mx-2    text-black text-[12px] font-semibold flex flex-col items-start justify-center">
                          <h2 className="text-btn">ZARA FOR MEN</h2>
                          <h3>WOMEN CLOTHES</h3>
                        </div>
                        <div className="flex w-20 text-btn bg-bg rounded-md h-3 p-2 justify-center items-center">
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSLine />
                        </div>
                      </div>
                      <div className="rounded-full flex justify-center items-center bg-btn bg-opacity-80 border border-white w-10 h-10 absolute  z-50 translate-x-44  translate-y-5">
                        <h2 className="text-sm  text-txt text-center">11%</h2>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-60 h-72 bg-white rounded-2xl">
                    <div className="flex flex-col h-72">
                      <div className="h-3/4">
                        <img
                          className="rounded-t-2xl w-full h-full"
                          src={zara}
                          alt="product image"
                        />
                      </div>
                      <div className="flex items-center justify-center gap-4 h-1/4">
                        <div className="mx-2    text-black text-[12px] font-semibold flex flex-col items-start justify-center">
                          <h2 className="text-btn">ZARA FOR MEN</h2>
                          <h3>WOMEN CLOTHES</h3>
                        </div>
                        <div className="flex w-20 text-btn bg-bg rounded-md h-3 p-2 justify-center items-center">
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSLine />
                        </div>
                      </div>
                      <div className="rounded-full flex justify-center items-center bg-btn bg-opacity-80 border border-white w-10 h-10 absolute  z-50 translate-x-44  translate-y-5">
                        <h2 className="text-sm  text-txt text-center">11%</h2>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-60 h-72 bg-white rounded-2xl">
                    <div className="flex flex-col h-72">
                      <div className="h-3/4">
                        <img
                          className="rounded-t-2xl w-full h-full"
                          src={zara}
                          alt="product image"
                        />
                      </div>
                      <div className="flex items-center justify-center gap-4 h-1/4">
                        <div className="mx-2    text-black text-[12px] font-semibold flex flex-col items-start justify-center">
                          <h2 className="text-btn">ZARA FOR MEN</h2>
                          <h3>Cafe & Restaurant</h3>
                        </div>
                        <div className="flex w-20 text-btn bg-bg rounded-md h-3 p-2 justify-center items-center">
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSLine />
                        </div>
                      </div>
                      <div className="rounded-full flex justify-center items-center bg-btn bg-opacity-80 border border-white w-10 h-10 absolute  z-50 translate-x-44  translate-y-5">
                        <h2 className="text-sm  text-txt text-center">11%</h2>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-60 h-72 bg-white rounded-2xl">
                    <div className="flex flex-col h-72">
                      <div className="h-3/4">
                        <img
                          className="rounded-t-2xl w-full h-full"
                          src={zara}
                          alt="product image"
                        />
                      </div>
                      <div className="flex items-center justify-center gap-4 h-1/4">
                        <div className="mx-2    text-black text-[12px] font-semibold flex flex-col items-start justify-center">
                          <h2 className="text-btn">ZARA FOR MEN</h2>
                          <h3>WOMEN CLOTHES</h3>
                        </div>
                        <div className="flex w-20 text-btn bg-bg rounded-md h-3 p-2 justify-center items-center">
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSLine />
                        </div>
                      </div>
                      <div className="rounded-full flex justify-center items-center bg-btn bg-opacity-80 border border-white w-10 h-10 absolute  z-50 translate-x-44  translate-y-5">
                        <h2 className="text-sm  text-txt text-center">11%</h2>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
