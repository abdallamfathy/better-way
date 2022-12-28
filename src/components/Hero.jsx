import slide1 from "../assets/slider/slider1.png"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide  } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Hero = () => {
  return (
    <>
    
    <div className='flex justify-center items-center h-44  m-3'>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={70}
      slidesPerView={1.3}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      cubeEffect={true}
    >
      <SwiperSlide>
        <div className='bg-[#00020581] text-txt  h-36 w-80 flex justify-center items-center text-center '>
          <div className="">
            <h2>Join us now with sale 35%</h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-[#eeeeee40] text-txt  h-36 w-80 flex justify-center items-center text-center '>
          <div className="">
            <h2>Join us now with sale 35%</h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-[#FF5722] text-txt  h-36 w-80 flex justify-center items-center text-center '>
          <div className="">
            <h2>Join us now with sale 35%</h2>
          </div>
        </div>
      </SwiperSlide>
     
    </Swiper>

        </div>
    </>
  )
}

export default Hero