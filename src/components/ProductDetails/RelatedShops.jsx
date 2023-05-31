import React from 'react'
import { ProductCard } from '../../pages/Category/ProductCard'
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const RelatedShops = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={2}
        breakpoints={{
          768: {
            slidesPerView: 3.5
          },
          1200: {
            slidesPerView: 4.5
          }

        }}
        navigation
        autoplay={
          {
            disableOnInteraction: false
          }
        }
        loop={true}
      >

        {
          data?.related_shops.map((item,index) => {
            console.log(item);
            return (
              <SwiperSlide key={index}>

                <ProductCard key={item.id}
                  id={item.id}
                  title={item.title}
                  logo={item.logo}
                  price={item.price}
                  rating={item.rating}
                  category={item.category}
                />
              </SwiperSlide>
            )

          })
        }


      </Swiper>
      {

      }
    </div>
  )
}

export default RelatedShops