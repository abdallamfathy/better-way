import zara from "../assets/topPlaces/zara.jpg"
import cafe from "../assets/topPlaces/cafe.jpg"
import restaurant from "../assets/topPlaces/restaurant.jpg"
import tie from "../assets/topPlaces/tie.jpg"

import {RiStarSFill , RiStarSLine} from 'react-icons/ri'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const TopSales = () => {
return (
    <>
    <div className='my-7 md:my-20 md:mx-40'>
    <div className='flex justify-center items-center  bg-bg py-1 md:h-20'>
      <h2 className='text-txt  text-lg md:text-xl md:font-semibold'>TOP PLACES</h2>
    </div>
    <div className='mx-3 my-5 md:hidden '>

<Swiper
  // install Swiper modules
modules={[Navigation, Pagination, Scrollbar, A11y]}
spaceBetween={20}
slidesPerView={2.5}
>
<SwiperSlide>
<div className="w-36 h-44 bg-white rounded-2xl shadow-2xl">
<div className="flex flex-col justify-center">
<a href="#">
    <img className="rounded-t-2xl w-48 h-36" src={restaurant} alt="product image" />
</a>
<div className="flex items-center gap-4">
<div className="mx-2 my-1  text-black text-[6px] font-semibold flex flex-col items-start justify-start">
    <h2 className="text-btn">SAIGON RESTAURANT</h2>
    <h3>CAFE & RESTAURANT</h3>
</div>
<div className="flex w-10 text-btn bg-bg rounded-md h-3 px-1 justify-center items-center">
<RiStarSFill/>
<RiStarSFill/>
<RiStarSFill/>
<RiStarSFill/>
<RiStarSLine/>
</div>
</div>
<div className="rounded-full p-1 bg-btn bg-opacity-80 border border-white absolute top-1 right-1">
    <h2 className="text-[8px] text-txt">11%</h2>
</div>
</div>

</div>
</SwiperSlide>
<SwiperSlide>
<div className="w-36 h-44 bg-white rounded-2xl ">
<div className="flex flex-col justify-center">
<a href="#">
    <img className="rounded-t-2xl w-48 h-36" src={tie} alt="product image" />
</a>
<div className="flex items-center gap-4">
<div className="mx-2 my-1  text-black text-[6px] font-semibold flex flex-col items-start justify-start">
    <h2 className="text-btn">TIE HOUSE FOR MEN</h2>
    <h3>MEN CLOTHES</h3>
</div>
<div className="flex w-10 text-btn bg-bg rounded-md h-3 px-1 justify-center items-center">
<RiStarSFill/>
<RiStarSFill/>
<RiStarSFill/>
<RiStarSFill/>
<RiStarSLine/>
</div>
</div>
<div className="rounded-full p-1 bg-btn bg-opacity-80 border border-white absolute top-1 right-1">
    <h2 className="text-[8px] text-txt">11%</h2>
</div>
</div>

</div>
</SwiperSlide>

<SwiperSlide>
<div className="w-36 h-44 bg-white rounded-2xl shadow-white" >
<div className="flex flex-col justify-center">
<a href="#">
    <img className="rounded-t-2xl w-48 h-36" src={cafe} alt="product image" />
</a>
<div className="flex items-center gap-4">
<div className="mx-2 my-1  text-black text-[6px] font-semibold flex flex-col items-start justify-start">
    <h2 className="text-btn">CILANTRO CAFE</h2>
    <h3>CAFE AND RESTAURANT</h3>
</div>
<div className="flex w-10 text-btn bg-bg rounded-md h-3 px-1 justify-center items-center">
<RiStarSFill/>
<RiStarSFill/>
<RiStarSFill/>
<RiStarSFill/>
<RiStarSLine/>
</div>
</div>
<div className="rounded-full p-1 bg-btn bg-opacity-80 border border-white absolute top-1 right-1">
    <h2 className="text-[8px] text-txt">11%</h2>
</div>
</div>

</div>
</SwiperSlide>

<SwiperSlide>
<div className="w-36 h-44 bg-white rounded-2xl">
<div className="flex flex-col justify-center">
<a href="#">
    <img className="rounded-t-2xl w-48 h-36" src={zara} alt="product image" />
</a>
<div className="flex items-center gap-4">
<div className="mx-2 my-1  text-black text-[6px] font-semibold flex flex-col items-start justify-start">
    <h2 className="text-btn">ZARA FOR MEN</h2>
    <h3>WOMEN CLOTHES</h3>
</div>
<div className="flex w-10 text-btn bg-bg rounded-md h-3 px-1 justify-center items-center">
<RiStarSFill/>
<RiStarSFill/>
<RiStarSFill/>
<RiStarSFill/>
<RiStarSLine/>
</div>
</div>
<div className="rounded-full p-1   bg-btn bg-opacity-80 border border-white absolute top-1 right-1">
    <h2 className="text-[8px] text-txt">11%</h2>
</div>
</div>

</div>
</SwiperSlide>
</Swiper>
</div>


    {/* desktop version */}
  <div className='my-5 max-md:hidden'>

    <Swiper
      // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={100}
    slidesPerView={7}
    >
    
    <SwiperSlide>
<div className="w-48 h-56 bg-white rounded-2xl">
    <div className="flex flex-col justify-center">
    <a href="#">
        <img className="rounded-t-2xl w-48 h-36" src={zara} alt="product image" />
    </a>
    <div className="flex items-center justify-center gap-4">
    <div className="mx-2 mt-5  text-black text-[12px] font-semibold flex flex-col items-start justify-start">
        <h2 className="text-btn">ZARA FOR MEN</h2>
        <h3>WOMEN CLOTHES</h3>
    </div>
    <div className="flex w-10 text-btn bg-bg rounded-md h-3 px-1 justify-center items-center">
    <RiStarSFill/>
    <RiStarSFill/>
    <RiStarSFill/>
    <RiStarSFill/>
    <RiStarSLine/>
    </div>
    </div>
    </div>
    <div className="rounded-full p-1 bg-btn bg-opacity-80 border border-white absolute bottom-48 left-36 w-6">
        <h2 className="text-[8px] text-txt">11%</h2>
    </div>
    
</div>
</SwiperSlide>
    <SwiperSlide>
<div className="w-48 h-56 bg-white rounded-2xl shadow-white" >
    <div className="flex flex-col ">
    <a href="#">
        <img className="rounded-t-2xl w-48 h-36" src={cafe} alt="product image" />
    </a>
    <div className="flex items-center justify-between mx-2">
    <div className=" mt-5  text-black text-[12px] font-semibold flex flex-col items-start justify-start">
        <h2 className="text-btn">CILANTRO CAFE</h2>
        <h3>CAFE AND RESTAURANT</h3>
    </div>
    <div className="flex w-10 text-btn bg-bg rounded-md h-3 px-1 justify-center items-center">
    <RiStarSFill/>
    <RiStarSFill/>
    <RiStarSFill/>
    <RiStarSFill/>
    <RiStarSLine/>
    </div>
    </div>
    </div>
    <div className="rounded-full p-1 bg-btn bg-opacity-80 border border-white absolute bottom-48 left-36 w-6">
        <h2 className="text-[8px] text-txt">11%</h2>
    </div>
    
</div>
</SwiperSlide>
    <SwiperSlide>
<div className="w-48 h-56 bg-white rounded-2xl ">
    <div className="flex flex-col">
    <a href="#">
        <img className="rounded-t-2xl w-48 h-36" src={tie} alt="product image" />
    </a>
    <div className="flex items-center justify-between mx-2">
    <div className="mt-5  text-black text-[12px] font-semibold flex flex-col items-start justify-start">
        <h2 className="text-btn">TIE HOUSE FOR MEN</h2>
        <h3>MEN CLOTHES</h3>
    </div>
    <div className="flex w-10 text-btn bg-bg rounded-md h-3 px-1 justify-center items-center">
    <RiStarSFill/>
    <RiStarSFill/>
    <RiStarSFill/>
    <RiStarSFill/>
    <RiStarSLine/>
    </div>
    </div>
    <div className="rounded-full p-1 bg-btn bg-opacity-80 border border-white absolute bottom-48 left-36 w-6">
        <h2 className="text-[8px] text-txt">11%</h2>
    </div>
    </div>
    
</div>
</SwiperSlide>
    <SwiperSlide>
<div className="w-48 h-56 bg-white rounded-2xl shadow-2xl">
    <div className="flex flex-col">
    <a href="#">
        <img className="rounded-t-2xl w-48 h-36" src={restaurant} alt="product image" />
    </a>
    <div className="flex items-center justify-between mx-2 ">
    <div className="mt-5  text-black text-[12px] font-semibold flex flex-col items-start justify-start">
        <h2 className="text-btn">SAIGON RESTAURANT</h2>
        <h3>CAFE & RESTAURANT</h3>
    </div>
    <div className="flex w-10 text-btn bg-bg rounded-md h-3 px-1 justify-center items-center">
    <RiStarSFill/>
    <RiStarSFill/>
    <RiStarSFill/>
    <RiStarSFill/>
    <RiStarSLine/>
    </div>
    </div>
    <div className="rounded-full p-1 bg-btn bg-opacity-80 border border-white absolute bottom-48 left-36 w-6">
        <h2 className="text-[8px] text-txt">11%</h2>
    </div>
    </div>
    
</div>
</SwiperSlide>
    <SwiperSlide>
<div className="w-48 h-56 bg-white rounded-2xl">
    <div className="flex flex-col">
    <a href="#">
        <img className="rounded-t-2xl w-48 h-36" src={zara} alt="product image" />
    </a>
    <div className="flex items-center justify-between mx-2 ">
    <div className="mt-5  text-black text-[12px] font-semibold flex flex-col items-start justify-start">
        <h2 className="text-btn">ZARA FOR MEN</h2>
        <h3>WOMEN CLOTHES</h3>
    </div>
    <div className="flex w-10 text-btn bg-bg rounded-md h-3 px-1 justify-center items-center">
    <RiStarSFill/>
    <RiStarSFill/>
    <RiStarSFill/>
    <RiStarSFill/>
    <RiStarSLine/>
    </div>
    </div>
    <div className="rounded-full p-1 bg-btn bg-opacity-80 border border-white absolute bottom-48 left-36 w-6">
        <h2 className="text-[8px] text-txt">11%</h2>
    </div>
    </div>
    
</div>
</SwiperSlide>
    <SwiperSlide>
<div className="w-48 h-56 bg-white rounded-2xl shadow-white" >
    <div className="flex flex-col">
    <a href="#">
        <img className="rounded-t-2xl w-48 h-36" src={cafe} alt="product image" />
    </a>
    <div className="flex items-center justify-between mx-2 ">
    <div className="mt-5  text-black text-[12px] font-semibold flex flex-col items-start justify-start">
        <h2 className="text-btn">CILANTRO CAFE</h2>
        <h3>CAFE AND RESTAURANT</h3>
    </div>
    <div className="flex w-10 text-btn bg-bg rounded-md h-3 px-1 justify-center items-center">
    <RiStarSFill/>
    <RiStarSFill/>
    <RiStarSFill/>
    <RiStarSFill/>
    <RiStarSLine/>
    </div>
    </div>
    <div className="rounded-full p-1 bg-btn bg-opacity-80 border border-white absolute bottom-48 left-36 w-6">
        <h2 className="text-[8px] text-txt">11%</h2>
    </div>
    </div>
    
</div>
</SwiperSlide>
    <SwiperSlide>
<div className="w-48 h-56 bg-white rounded-2xl ">
    <div className="flex flex-col">
    <a href="#">
        <img className="rounded-t-2xl w-48 h-36" src={tie} alt="product image" />
    </a>
    <div className="flex items-center justify-between mx-2 ">
    <div className="mt-5  text-black text-[12px] font-semibold flex flex-col items-start justify-start">
        <h2 className="text-btn">TIE HOUSE FOR MEN</h2>
        <h3>MEN CLOTHES</h3>
    </div>
    <div className="flex w-10 text-btn bg-bg rounded-md h-3 px-1 justify-center items-center">
    <RiStarSFill/>
    <RiStarSFill/>
    <RiStarSFill/>
    <RiStarSFill/>
    <RiStarSLine/>
    </div>
    </div>
    <div className="rounded-full p-1 bg-btn bg-opacity-80 border border-white absolute bottom-48 left-36 w-6">
        <h2 className="text-[8px] text-txt">11%</h2>
    </div>
    </div>
    
</div>
</SwiperSlide>
    <SwiperSlide>
<div className="w-48 h-56 bg-white rounded-2xl shadow-2xl">
    <div className="flex flex-col">
    <a href="#">
        <img className="rounded-t-2xl w-48 h-36" src={restaurant} alt="product image" />
    </a>
    <div className="flex items-center justify-between mx-2 ">
    <div className="mt-5  text-black text-[12px] font-semibold flex flex-col items-start justify-start">
        <h2 className="text-btn">SAIGON RESTAURANT</h2>
        <h3>CAFE & RESTAURANT</h3>
    </div>
    <div className="flex w-10 text-btn bg-bg rounded-md h-3 px-1 justify-center items-center">
    <RiStarSFill/>
    <RiStarSFill/>
    <RiStarSFill/>
    <RiStarSFill/>
    <RiStarSLine/>
    </div>
    </div>
    <div className="rounded-full p-1 bg-btn bg-opacity-80 border border-white absolute bottom-48 left-36 w-6">
        <h2 className="text-[8px] text-txt">11%</h2>
    </div>
    </div>
    
</div>
</SwiperSlide>
    
    </Swiper>
    </div>
  </div>
</>
)
}

export default TopSales