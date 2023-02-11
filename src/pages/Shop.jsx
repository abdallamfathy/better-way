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
import { faArrowAltCircleRight, faArrowCircleRight, faArrowDown, faArrowDown19, faArrowDownLong, faArrowDownShortWide, faArrowDownWideShort, faArrowTrendDown, faDownload, faLocation, faLocationCrosshairs, faLocationDot, faLocationPin, faMobilePhone, faPhone, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { Rating } from "flowbite-react";

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
      <div className="mx-20 my-8">
        <section className="sectionI">
          <div className="flex justify-between">
            <div className="flex flex-col items-start  justify-center w-1/3 my-8  text-txt ">
              <div className="flex flex-col items-center gap-10">
                <div className="h-96 w-96 flex justify-center items-center">
                  <img src={brand} alt="logo" className="h-96 w-96 " />
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
                  <h2 className="font-bold text-2xl">Gained Points : <span className="text-btn">5</span></h2>
                </div>
              </div>
            </div>
            <div className="swiperr my-8 w-2/3">
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
              <div className="py-2 rounded-b-md">
                <Swiper
                  modules={[FreeMode, Navigation, Thumbs]}
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={6}
                  freeMode={true}
                  watchSlidesProgress={true}
                  className="mySwiper">
                  {image}
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        <section className="sectionII my-4">
          <div className="Container flex justify-between gap-4">
            <div className="×OffersSection flex flex-col items-start  justify-center gap-4 h-full w-2/3   text-txt">
              <div className="Title w-full "><h2 className="text-6xl font-bold ">Flamingo Cafe</h2></div>
              <div className="list ">
                <div className="SubTitle w-full my-4"><h2 className="text-5xl text-btn font-semibold">Offers :</h2></div>
                <div className="Offers flex flex-col gap-8 my-4  text-2xl">

                  <div className="flex justify-between w-full">
                    <p> <input type="radio" name="1st" /> Enjoy a 50% discount on a total bill.</p>
                    <p className="text-btn font-bold">50%</p>
                  </div>

                  <div className="flex justify-between w-full">
                    <p><input type="radio" name="1st" /> Enjoy a 10% discount.</p>
                    <p className="text-btn font-bold">10%</p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p><input type="radio" name="1st" /> Enjoy a discount on the price of Egyptian medicines.</p>
                    <p className="text-btn font-bold">5%</p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p><input type="radio" name="1st" /> Enjoy a discount on a total bill less than 1,000 pounds.</p>
                    <p className="text-btn font-bold">40%</p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p><input type="radio" name="1st" /> Enjoy a discount on the total bill on special occasions and birthdays.</p>
                    <p className="text-btn font-bold">60%</p>
                  </div>
                </div>
              </div>
              <div className="Description">
                <div className="SubTitle w-full my-4"><h2 className="text-5xl font-semibold">Description :</h2></div>
                <div className="bg-bg bg-opacity-20 leading-10 p-5 my-2">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni sapiente veniam laborum eligendi cum iusto. Voluptate illo possimus, veritatis tempore molestias, omnis dolores laboriosam reiciendis doloribus ducimus culpa tempora voluptatum!</p>
                </div>
              </div>
              <div className="Rating">
                <div className="SubTitle w-full "><h2 className="text-5xl font-semibold">Rating & Reviews :</h2></div>
                <div className="Stars my-6">
                <React.Fragment>
                  <Rating>
                    <div className="FullStars flex">
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    </div>
                    <Rating.Star filled={false} />
                    <p className="ml-2 text-sm font-medium text-txt ">
                      4.95 out of 5
                    </p>
                  </Rating>
                  <p className="text-sm font-medium text-txt my-2 ">
                    1,745 global ratings
                  </p>
                  <div className="RatingPerc flex flex-col gap-2 ">
                  <Rating.Advanced percentFilled={90}>
                    5 star
                  </Rating.Advanced>
                  <Rating.Advanced percentFilled={17}>
                    4 star
                  </Rating.Advanced>
                  <Rating.Advanced percentFilled={8}>
                    3 star
                  </Rating.Advanced>
                  <Rating.Advanced percentFilled={4}>
                    2 star
                  </Rating.Advanced>
                  <Rating.Advanced percentFilled={1}>
                    1 star
                  </Rating.Advanced>
                  </div>
                </React.Fragment>
                </div>
              </div>

              <div className="Comments text-txt">
                
                  <article>
    <div className="flex items-center mb-4 space-x-4">
        <img className="w-10 h-10 rounded-full" src="https://avatars.githubusercontent.com/u/191027?v=4" alt=""/>
        <div className="space-y-1 font-medium dark:text-white">
            <p>Mickel peter <time datetime="2023-01-16 19:00" className="block text-sm ">Joined on February 2023</time></p>
        </div>
    </div>
    <div className="flex items-center mb-1">
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <h3 className="ml-2 text-sm font-semibold">Thinking to buy another one!</h3>
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
            <div className="ShopSection flex flex-col items-center gap-6 w-1/3 text-txt">
              <div className="Description flex flex-col items-center gap-4">
                <div className="youtube">
                  <iframe width="460" height="315" src="https://www.youtube.com/embed/znnC9q86ptI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="Website self-center">
                  <a href="#" className="underline"> www.hahaha.com </a>
                </div>
                <div className="SocialMedia flex gap-4 items-center ">
                  <a href="#" className="text-lg font-light hover:text-btn"><FaFacebook /></a>
                  <a href="#" className="text-lgfont-light hover:text-btn"><FaInstagram /></a>
                  <a href="#" className="text-lg font-light hover:text-btn"><FaWhatsapp /></a>
                  <a href="#" className="text-lg font-light hover:text-btn"><FaTiktok /></a>
                </div>
                <div className="QrCode"><img src={qr} alt="qrcode" className="w-20 rounded-md" /></div>
                <div className="Map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7734482.242858413!2d8.44218099639604!3d61.7525781804408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3189cac0c8c611b%3A0xe730b7f8f7de30bf!2sHahahaha!5e0!3m2!1sen!2seg!4v1675351457785!5m2!1sen!2seg" width="360" height="215" className="rounded-md" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="Locations flex flex-col  items-center gap-2">
                  <div className="flex self-start items-center gap-2 ">
                    <h2 className=" text-lg font-semibold"><FontAwesomeIcon icon={faLocationDot} /></h2>
                    <p>19 alaa st. masr el gededa , Cairo , Eg</p>
                  </div>
                  <div className="flex self-start items-center gap-2 ">
                    <h2 className=" text-lg font-semibold"><FontAwesomeIcon icon={faLocationDot} /></h2>
                    <p>39 mounira st. el agouza , Giza , Eg</p>
                  </div>
                </div>
                <div className="Phones flex items-center gap-4">
                  <div className="flex self-start items-center gap-2 ">
                    <h2 className=" text-lg font-semibold"><FontAwesomeIcon icon={faPhone} /></h2>
                    <p>0123456789</p>
                  </div>
                  <div className="flex self-start items-center gap-2 ">
                    <h2 className=" text-lg font-semibold"><FontAwesomeIcon icon={faPhone} /></h2>
                    <p>0123456789</p>
                  </div>
                </div>
              </div>
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
              <div className=" max-md:hidden">
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
