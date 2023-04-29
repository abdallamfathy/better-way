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

const Shop = () => {

  return (
    <>
      <Navbar />
      <div className="md:mx-20 md:my-8 m-5">
        <section className="sectionI">
<ProductInfo   />
        </section>

        <section className="sectionII my-4">
          <div className="Container flex justify-between gap-4">
            <div className="×OffersSection flex flex-col items-start  justify-center gap-4 h-full md:w-2/3   text-txt">
              <div className="Title w-full "><h2 className="md:text-6xl text-3xl font-bold text-btn ">Flamingo Cafe</h2></div>
              <Offers     />
              {/* <div className="Description">
                <div className="SubTitle w-full my-4"><h2 className="text-5xl font-semibold">Description :</h2></div>
                <div className="leading-10 p-5 my-2">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni sapiente veniam laborum eligendi cum iusto. Voluptate illo possimus, veritatis tempore molestias, omnis dolores laboriosam reiciendis doloribus ducimus culpa tempora voluptatum!</p>
                </div>
              </div>
              <div className="Rating">
                <div className="SubTitle w-full "><h2 className="text-5xl font-semibold">Rating & Reviews :</h2></div>
                <div className="Stars my-6 text-txt">

                  <div className="flex items-center mb-3">
                    <svg aria-hidden="true" className="w-5 h-5 text-btn" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-5 h-5 text-btn" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-5 h-5 text-btn" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-5 h-5 text-btn" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <p className="ml-2 text-sm font-medium ">4.95 out of 5</p>
                  </div>
                  <p className="text-sm font-medium">1,745 global ratings</p>
                  <div className="flex items-center mt-4">
                    <span className="text-sm font-medium ">5 star</span>
                    <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                      <div className="h-5 bg-btn rounded w-11/12" ></div>
                    </div>
                    <span className="text-sm font-medium ">90%</span>
                  </div>
                  <div className="flex items-center mt-4">
                    <span className="text-sm font-medium ">4 star</span>
                    <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                      <div className="h-5 bg-btn rounded w-4/5" ></div>
                    </div>
                    <span className="text-sm font-medium ">17%</span>
                  </div>
                  <div className="flex items-center mt-4">
                    <span className="text-sm font-medium ">3 star</span>
                    <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                      <div className="h-5 bg-btn rounded w-9/12" ></div>
                    </div>
                    <span className="text-sm font-medium ">8%</span>
                  </div>
                  <div className="flex items-center mt-4">
                    <span className="text-sm font-medium ">2 star</span>
                    <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                      <div className="h-5 bg-btn rounded w-20" ></div>
                    </div>
                    <span className="text-sm font-medium ">4%</span>
                  </div>
                  <div className="flex items-center mt-4">
                    <span className="text-sm font-medium ">1 star</span>
                    <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                      <div className="h-5 bg-btn rounded w-10" ></div>
                    </div>
                    <span className="text-sm font-medium ">1%</span>
                  </div>

                </div>
              </div> */}

              <div className="Comments text-txt">

                <article>
                  <div className="flex items-center mb-4 space-x-4">
                    <img className="w-10 h-10 rounded-full" src="https://avatars.githubusercontent.com/u/191027?v=4" alt="" />
                    <div className="space-y-1 font-medium dark:text-white">
                      <p>Mickel peter <time datetime="2023-01-16 19:00" className="block text-sm ">Joined on February 2023</time></p>
                    </div>
                  </div>
                  <div className="flex items-center mb-1 text-btn">
                    <svg aria-hidden="true" className="w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <h3 className="ml-2 text-sm font-semibold text-txt">Thinking to buy another one!</h3>
                  </div>
                  <footer className="mb-5 text-sm "><p>Reviewed in Cairo , Egypt on <time datetime="2017-03-03 19:00">February 3, 2023</time></p></footer>
                  <p className="mb-2 font-light ">This is my third time shopping from BetterWay. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
                  <p className="mb-3 font-light ">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under 100EGP! An absolute bargain.</p>
                  <a href="#" className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
                  {/* <aside>
        <p className="mt-1 text-xs ">19 people found this helpful</p>
        <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
            <a href="#" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
            <a href="#" className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</a>
        </div>
    </aside> */}
                </article>

              </div>
            </div>


            {/* <div className="ShopSection flex flex-col items-center gap-6 w-1/3 text-txt">
              <div className="Description flex flex-col items-center gap-4">
                <div className="youtube">
                  <iframe width="460" height="315" src="https://www.youtube.com/embed/znnC9q86ptI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="flex justify-around w-full">
                  <div className="flex flex-col gap-6">
                    <div className="Website self-center">
                      <a href="#" className="underline"> www.FlamingoCafe.com </a>
                    </div>
                    <div className="SocialMedia flex gap-4 items-center ">
                      <a href="#" className="text-2xl font-light hover:text-btn"><FaFacebook /></a>
                      <a href="#" className="text-2xl font-light hover:text-btn"><FaInstagram /></a>
                      <a href="#" className="text-2xl font-light hover:text-btn"><FaWhatsapp /></a>
                      <a href="#" className="text-2xl font-light hover:text-btn"><FaTiktok /></a>
                      <a href="#" className="text-2xl font-light hover:text-btn"><FaYoutube /></a>
                    </div>
                  </div>
                  <div className="QrCode"><img src={qr} alt="qrcode" className="w-20 rounded-md" /></div>
                </div>
                <div className="Map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7734482.242858413!2d8.44218099639604!3d61.7525781804408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3189cac0c8c611b%3A0xe730b7f8f7de30bf!2sHahahaha!5e0!3m2!1sen!2seg!4v1675351457785!5m2!1sen!2seg" width="360" height="215" className="rounded-md" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="Locations flex flex-col  items-center gap-2 text-xl font-semibold">
                  <div className="flex self-start items-center gap-2 ">
                    <h2><FontAwesomeIcon icon={faLocationDot} /></h2>
                    <p>19 alaa st. masr el gededa , Cairo , Eg</p>
                  </div>
                  <div className="flex self-start items-center gap-2 ">
                    <h2><FontAwesomeIcon icon={faLocationDot} /></h2>
                    <p>39 mounira st. el agouza , Giza , Eg</p>
                  </div>
                </div>
                <div className="Phones flex items-center gap-4 text-xl font-semibold">
                  <div className="flex self-start items-center gap-2 ">
                    <h2><FontAwesomeIcon icon={faPhone} /></h2>
                    <p>0123456789</p>
                  </div>
                  <div className="flex self-start items-center gap-2 ">
                    <h2><FontAwesomeIcon icon={faPhone} /></h2>
                    <p>0123456789</p>
                  </div>
                </div>
              </div>
            </div> */}
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
