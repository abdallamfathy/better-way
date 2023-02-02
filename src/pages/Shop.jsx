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
import { FaFacebook, FaInstagram, FaLocationArrow, FaMap, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faLocationCrosshairs, faLocationDot, faLocationPin, faMobilePhone, faPhone } from "@fortawesome/free-solid-svg-icons";

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
        <section>
        <div className="flex justify-between gap-2">
          <div className="flex flex-col items-center  justify-center gap-10 w-1/3 p-8 my-8  text-txt border  border-txt rounded-md">
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
              <p className="ml-2 text-sm font-bold text-gray-900 dark:text-txt">
                4.95
              </p>
              <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
              <a
                href="#"
                className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-txt">
                73 reviews
              </a> */}
            </div>
          </div>
          <div className="swiperr my-8 border border-txt rounded-md w-2/3">
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
        </section>
        
        <section>
            <div className="Container flex justify-between gap-2">
              <div className="flex flex-col items-start  justify-center  w-1/3 p-8 my-8  text-txt border  border-txt rounded-md">
                <div className="title"><h2 className="text-2xl font-semibold ">Categories</h2></div>
                <div className="list p-8">
                <ul>
                    <li className="m-3">1-Super Market</li>
                    <li className="m-3">2-Cafe</li>
                    <li className="m-3">3-Restaurant</li>
                    <li className="m-3">4-Cars</li>
                    <li className="m-3">5-Fashion</li>
                    <li className="m-3">6-Health Care</li>
                    <li className="m-3">7-Education</li>
                    <li className="m-3">8-Jewelry</li>
                    <li className="m-3">9-Net Cafe & Gaming</li>
                    <li className="m-3">10-Others</li>
                </ul>
                </div>
              </div>
              <div className="flex flex-col items-center gap-6 w-2/3 p-8 my-8 text-txt border border-txt rounded-md">
                <div className="Title self-start"><h2 className="text-2xl font-semibold ">Shop Informations</h2></div>
                <div className="Description flex flex-col items-center gap-4 py-8">
                <div className="youtube">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/znnC9q86ptI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="Website self-center">
                    <a href="#" className="underline"> www.hahaha.com </a>
                </div>
                <div className="SocialMedia flex gap-4 items-center ">
                    <a href="#" className="text-lg font-light hover:text-btn"><FaFacebook/></a>
                    <a href="#" className="text-lgfont-light hover:text-btn"><FaInstagram/></a>
                    <a href="#" className="text-lg font-light hover:text-btn"><FaWhatsapp/></a>
                    <a href="#" className="text-lg font-light hover:text-btn"><FaTiktok/></a>
                    </div>
                <div className="qrCode"><img src={qr} alt="qrcode" className="w-20 rounded-md" /></div>
                <div className="Locations flex flex-col  items-center gap-2">
                        <div className="flex self-start items-center gap-2 ">
                            <h2 className=" text-lg font-semibold"><FontAwesomeIcon icon={faLocationDot}/></h2>
                            <p>19 alaa st. masr el gededa , Cairo , Eg</p>
                        </div>
                        <div className="flex self-start items-center gap-2 ">
                            <h2 className=" text-lg font-semibold"><FontAwesomeIcon icon={faLocationDot}/></h2>
                            <p>39 mounira st. el agouza , Giza , Eg</p>
                    </div>
                </div>
                <div className="Phones flex flex-col  items-center gap-2">
                        <div className="flex self-start items-center gap-2 ">
                            <h2 className=" text-lg font-semibold"><FontAwesomeIcon icon={faPhone}/></h2>
                            <p>0123456789</p>
                        </div>
                        <div className="flex self-start items-center gap-2 ">
                            <h2 className=" text-lg font-semibold"><FontAwesomeIcon icon={faPhone}/></h2>
                            <p>0123456789</p>
                    </div>
                </div>
                </div>
              </div>
            </div>
        </section>

        <section>
        <div className="p-8 rounded-md border border-txt">
          <div className="text-left text-txt font-bold text-2xl">
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
            </div>
          </div>
        </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
