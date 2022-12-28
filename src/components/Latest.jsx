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
    <div className='my-7'>
    <div className='flex justify-center items-center  bg-bg py-1'>
      <h2 className='text-txt  text-lg'>LATEST DEALS</h2>
    </div>
  <div className='mx-3 my-5 '>

    <Swiper
      // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={20}
    slidesPerView={2.5}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    
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
  </div>
</>
)
}

export default TopSales




// import food from "../assets/food.jpg"
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// const Latest = () => {
//   return (
//     <>
//       <div className="mt-36 mx-72">
//         <div className="flex justify-center items-center my-36">
//           <h2 className="text-[#E8F6EF] text-6xl font-bold">احدث العروض</h2>
//         </div>
//         <div className="flex justify-center items-center h-96">
//           <Swiper
//             // install Swiper modules
//             modules={[Navigation, Pagination, Scrollbar, A11y]}
//             spaceBetween={10}
//             slidesPerView={3}
//             navigation
//             onSwiper={(swiper) => console.log(swiper)}
//             onSlideChange={() => console.log("slide change")}
//           >
//             <SwiperSlide>
//               <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 text-right">
//                 <div className="flex justify-center">
//                   <a href="#">
//                     <img
//                       className="p-8 rounded-t-lg object-cover h-64 w-96"
//                       src={food}
//                       alt="product image"
//                     />
//                   </a>
//                 </div>
//                 <div className="px-5 pb-5">
//                   <a href="#">
//                     <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">
//                       خصم 31% من ملوك الكبدة والسجق في مصر في فروع عز المنوفي!
//                       فقط 59 جنيه بدلا من 85 جنيه
//                     </h5>
//                   </a>
//                   <div className="flex items-center  mt-2.5 mb-5">
//                     <svg
//                       aria-hidden="true"
//                       className="w-5 h-5 text-yellow-300"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>First star</title>
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg
//                       aria-hidden="true"
//                       className="w-5 h-5 text-yellow-300"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>Second star</title>
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg
//                       aria-hidden="true"
//                       className="w-5 h-5 text-yellow-300"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>Third star</title>
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg
//                       aria-hidden="true"
//                       className="w-5 h-5 text-yellow-300"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>Fourth star</title>
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg
//                       aria-hidden="true"
//                       className="w-5 h-5 text-yellow-300"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>Fifth star</title>
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
//                       ٥
//                     </span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <a
//                       href="#"
//                       className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                     >
//                       اضف الي العربة
//                     </a>
//                     <span className="text-3xl font-bold text-gray-900 dark:text-white">
//                       ٤٥٦ جنيه
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 text-right">
//                 <div className="flex justify-center">
//                   <a href="#">
//                     <img
//                       className="p-8 rounded-t-lg object-cover h-64 w-96"
//                       src={food}
//                       alt="product image"
//                     />
//                   </a>
//                 </div>
//                 <div className="px-5 pb-5">
//                   <a href="#">
//                     <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">
//                       خصم 31% من ملوك الكبدة والسجق في مصر في فروع عز المنوفي!
//                       فقط 59 جنيه بدلا من 85 جنيه
//                     </h5>
//                   </a>
//                   <div className="flex items-center  mt-2.5 mb-5">
//                     <svg
//                       aria-hidden="true"
//                       className="w-5 h-5 text-yellow-300"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>First star</title>
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg
//                       aria-hidden="true"
//                       className="w-5 h-5 text-yellow-300"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>Second star</title>
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg
//                       aria-hidden="true"
//                       className="w-5 h-5 text-yellow-300"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>Third star</title>
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg
//                       aria-hidden="true"
//                       className="w-5 h-5 text-yellow-300"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>Fourth star</title>
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg
//                       aria-hidden="true"
//                       className="w-5 h-5 text-yellow-300"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>Fifth star</title>
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
//                       ٥
//                     </span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <a
//                       href="#"
//                       className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                     >
//                       اضف الي العربة
//                     </a>
//                     <span className="text-3xl font-bold text-gray-900 dark:text-white">
//                       ٤٥٦ جنيه
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 text-right">
//                 <div className="flex justify-center">
//                   <a href="#">
//                     <img
//                       className="p-8 rounded-t-lg object-cover h-64 w-96"
//                       src={food}
//                       alt="product image"
//                     />
//                   </a>
//                 </div>
//                 <div className="px-5 pb-5">
//                   <a href="#">
//                     <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">
//                       خصم 31% من ملوك الكبدة والسجق في مصر في فروع عز المنوفي!
//                       فقط 59 جنيه بدلا من 85 جنيه
//                     </h5>
//                   </a>
//                   <div className="flex items-center  mt-2.5 mb-5">
//                     <svg
//                       aria-hidden="true"
//                       className="w-5 h-5 text-yellow-300"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>First star</title>
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg
//                       aria-hidden="true"
//                       className="w-5 h-5 text-yellow-300"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>Second star</title>
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg
//                       aria-hidden="true"
//                       className="w-5 h-5 text-yellow-300"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>Third star</title>
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg
//                       aria-hidden="true"
//                       className="w-5 h-5 text-yellow-300"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>Fourth star</title>
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg
//                       aria-hidden="true"
//                       className="w-5 h-5 text-yellow-300"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>Fifth star</title>
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
//                       ٥
//                     </span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <a
//                       href="#"
//                       className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                     >
//                       اضف الي العربة
//                     </a>
//                     <span className="text-3xl font-bold text-gray-900 dark:text-white">
//                       ٤٥٦ جنيه
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 text-right">
//                 <div className="flex justify-center">
//                   <a href="#">
//                     <img
//                       className="p-8 rounded-t-lg object-cover h-64 w-96"
//                       src={food}
//                       alt="product image"
//                     />
//                   </a>
//                 </div>
//                 <div className="px-5 pb-5">
//                   <a href="#">
//                     <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">
//                       خصم 31% من ملوك الكبدة والسجق في مصر في فروع عز المنوفي!
//                       فقط 59 جنيه بدلا من 85 جنيه
//                     </h5>
//                   </a>
//                   <div className="flex items-center  mt-2.5 mb-5">
//                     <svg
//                       aria-hidden="true"
//                       className="w-5 h-5 text-yellow-300"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>First star</title>
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg
//                       aria-hidden="true"
//                       className="w-5 h-5 text-yellow-300"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>Second star</title>
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg
//                       aria-hidden="true"
//                       className="w-5 h-5 text-yellow-300"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>Third star</title>
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg
//                       aria-hidden="true"
//                       className="w-5 h-5 text-yellow-300"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>Fourth star</title>
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg
//                       aria-hidden="true"
//                       className="w-5 h-5 text-yellow-300"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>Fifth star</title>
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
//                       ٥
//                     </span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <a
//                       href="#"
//                       className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                     >
//                       اضف الي العربة
//                     </a>
//                     <span className="text-3xl font-bold text-gray-900 dark:text-white">
//                       ٤٥٦ جنيه
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 text-right">
//                 <div className="flex justify-center">
//                   <a href="#">
//                     <img
//                       className="p-8 rounded-t-lg object-cover h-64 w-96"
//                       src={food}
//                       alt="product image"
//                     />
//                   </a>
//                 </div>
//                 <div className="px-5 pb-5">
//                   <a href="#">
//                     <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">
//                       خصم 31% من ملوك الكبدة والسجق في مصر في فروع عز المنوفي!
//                       فقط 59 جنيه بدلا من 85 جنيه
//                     </h5>
//                   </a>
//                   <div className="flex items-center  mt-2.5 mb-5">
//                     <svg
//                       aria-hidden="true"
//                       className="w-5 h-5 text-yellow-300"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>First star</title>
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg
//                       aria-hidden="true"
//                       className="w-5 h-5 text-yellow-300"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>Second star</title>
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg
//                       aria-hidden="true"
//                       className="w-5 h-5 text-yellow-300"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>Third star</title>
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg
//                       aria-hidden="true"
//                       className="w-5 h-5 text-yellow-300"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>Fourth star</title>
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg
//                       aria-hidden="true"
//                       className="w-5 h-5 text-yellow-300"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>Fifth star</title>
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
//                       ٥
//                     </span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <a
//                       href="#"
//                       className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                     >
//                       اضف الي العربة
//                     </a>
//                     <span className="text-3xl font-bold text-gray-900 dark:text-white">
//                       ٤٥٦ جنيه
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Latest;
