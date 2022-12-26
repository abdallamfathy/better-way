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
        <div className='flex justify-center items-center h-screen shadow-xl '>
    

    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      cubeEffect={true}
    >
      <SwiperSlide>
        <div className='bg-[#E8F6EF] text-[#4C4C6D] h-screen w-screen flex justify-center items-center gap-56 px-10'>
          <img src={slide1} alt="sliderImage" className="w-[600px] h-96" />
          <div className="text-right  flex flex-col gap-10 w-[600px]">
          <h2 className="text-7xl font-bold">تسوق معنا</h2>
          <p className="text-3xl font-semibold">الان مع افضل العروض و المساعمات يمكنك ان تحصل علي بطافتك الخيالية العروض و اكلمساعمات يمكنك ان تحصل علي بطافتك الخيالية</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-[#E8F6EF] text-[#4C4C6D] h-screen w-screen flex justify-center items-center gap-56 px-10'>
          <img src={slide1} alt="sliderImage" className="w-[600px] h-96" />
          <div className="text-right  flex flex-col gap-10 w-[600px]">
          <h2 className="text-7xl font-bold">تسوق معنا</h2>
          <p className="text-3xl font-semibold">الان مع افضل العروض و المساعمات يمكنك ان تحصل علي بطافتك الخيالية العروض و اكلمساعمات يمكنك ان تحصل علي بطافتك الخيالية</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-[#E8F6EF] text-[#4C4C6D] h-screen w-screen flex justify-center items-center gap-56 px-10'>
          <img src={slide1} alt="sliderImage" className="w-[600px] h-96" />
          <div className="text-right  flex flex-col gap-10 w-[600px]">
          <h2 className="text-7xl font-bold">تسوق معنا</h2>
          <p className="text-3xl font-semibold">الان مع افضل العروض و المساعمات يمكنك ان تحصل علي بطافتك الخيالية العروض و اكلمساعمات يمكنك ان تحصل علي بطافتك الخيالية</p>
          </div>
        </div>
      </SwiperSlide>
     
    </Swiper>

        </div>
    </>
  )
}

export default Hero