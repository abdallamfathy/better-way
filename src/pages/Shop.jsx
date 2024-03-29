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
import qr from "../assets/qr.jpeg";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import { FaFacebook, FaInstagram, FaLocationArrow, FaMap, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faArrowCircleRight, faArrowDown, faArrowDown19, faArrowDownLong, faArrowDownShortWide, faArrowDownWideShort, faArrowTrendDown, faDownload, faLocation, faLocationCrosshairs, faLocationDot, faLocationPin, faMobilePhone, faPhone, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { Rating } from "flowbite-react";
import { ProductInfo } from "../components/ProductDetails/ProductInfo";
import { Offers } from "../components/ProductDetails/Offers";
import Comments from "../components/ProductDetails/Comments";
import Rates from "../components/ProductDetails/Rates";
import Description from "../components/ProductDetails/Description";
import ProductData from "../components/ProductDetails/ProductData";

const Shop = () => {

  return (
    <>
      <Navbar />
      <div className="md:mx-20 md:my-8 m-5">
        <section className="sectionI">
          <ProductInfo />
        </section>

        <section className="sectionII my-4">
          <div className="Container flex md:flex-row flex-col justify-between gap-4">
            <div className="×OffersSection flex flex-col items-start  justify-center gap-4 h-full md:w-2/3   text-txt">
              <div className="Title w-full "><h2 className="md:text-6xl text-3xl font-bold text-btn ">Flamingo Cafe</h2></div>
              <Offers />
              <Description />
           
              <Rates/>

              <Comments/>
            </div>


            <div className="ShopSection flex flex-col items-center gap-6 md:w-1/3 text-txt">
              <ProductData/>
            </div>
          </div>
        </section>

        <section className="sectionIII">
          <div className="">
            <div className="text-left text-txt font-bold text-2xl">
              <h2>Related shops</h2>
            </div>
            <div className="mt-4">
              {/* desktop version */}
              {/* <div className=" max-md:hidden">
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={200}
                  slidesPerView={5}
                  navigation>
                  <SwiperSlide>
                    <div className="w-60 h-72 bg-txt rounded-2xl">
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
                        <div className="rounded-full flex justify-center items-center bg-btn bg-opacity-80 border border-txt w-10 h-10 absolute  z-50 translate-x-44  translate-y-5">
                          <h2 className="text-sm  text-txt text-center">11%</h2>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="w-60 h-72 bg-txt rounded-2xl">
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
                        <div className="rounded-full flex justify-center items-center bg-btn bg-opacity-80 border border-txt w-10 h-10 absolute  z-50 translate-x-44  translate-y-5">
                          <h2 className="text-sm  text-txt text-center">11%</h2>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="w-60 h-72 bg-txt rounded-2xl">
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
                        <div className="rounded-full flex justify-center items-center bg-btn bg-opacity-80 border border-txt w-10 h-10 absolute  z-50 translate-x-44  translate-y-5">
                          <h2 className="text-sm  text-txt text-center">11%</h2>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="w-60 h-72 bg-txt rounded-2xl">
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
                        <div className="rounded-full flex justify-center items-center bg-btn bg-opacity-80 border border-txt w-10 h-10 absolute  z-50 translate-x-44  translate-y-5">
                          <h2 className="text-sm  text-txt text-center">11%</h2>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="w-60 h-72 bg-txt rounded-2xl">
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
                        <div className="rounded-full flex justify-center items-center bg-btn bg-opacity-80 border border-txt w-10 h-10 absolute  z-50 translate-x-44  translate-y-5">
                          <h2 className="text-sm  text-txt text-center">11%</h2>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="w-60 h-72 bg-txt rounded-2xl">
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
                        <div className="rounded-full flex justify-center items-center bg-btn bg-opacity-80 border border-txt w-10 h-10 absolute  z-50 translate-x-44  translate-y-5">
                          <h2 className="text-sm  text-txt text-center">11%</h2>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="w-60 h-72 bg-txt rounded-2xl">
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
                        <div className="rounded-full flex justify-center items-center bg-btn bg-opacity-80 border border-txt w-10 h-10 absolute  z-50 translate-x-44  translate-y-5">
                          <h2 className="text-sm  text-txt text-center">11%</h2>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="w-60 h-72 bg-txt rounded-2xl">
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
                        <div className="rounded-full flex justify-center items-center bg-btn bg-opacity-80 border border-txt w-10 h-10 absolute  z-50 translate-x-44  translate-y-5">
                          <h2 className="text-sm  text-txt text-center">11%</h2>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div> */}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
