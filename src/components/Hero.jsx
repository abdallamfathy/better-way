import slide1 from "../assets/slider/slider1.png"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Hero = () => {
  return (
    <>
        <div className='flex justify-center items-center h-screen'>
    

    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className='bg-blue-900 h-screen w-screen flex justify-center items-center gap-10 px-10'>
          <img src={slide1} alt="sliderImage" className="w-[600px] h-96" />
          <div className="text-right text-white flex flex-col gap-6 w-[600px]">
          <h2 className="text-7xl font-bold">تسوق معنا</h2>
          <p className="text-5xl font-semibold">الان مع افضل العروض و المساعمات يمكنك ان تحصل علي بطافتك الخيالية العروض و اكلمساعمات يمكنك ان تحصل علي بطافتك الخيالية</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-blue-500 h-96 w-96'></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-green-500 h-96 w-96'></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-yellow-500 h-96 w-96'></div>
      </SwiperSlide>
      ...
    </Swiper>

        </div>
    </>
  )
}

export default Hero