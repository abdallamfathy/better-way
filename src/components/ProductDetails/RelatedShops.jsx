import React from 'react'
import { ProductCard } from '../../pages/Category/ProductCard'
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useLangContext } from '../../utils/LangContext';

const RelatedShops = ({ data }) => {
  const { language } = useLangContext();
  const lang = language === true ? 'ltr' : 'rtl';
  return (
    <div>
      <Swiper
        dir={lang}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={2}
        breakpoints={{
          768: {
            slidesPerView: 3
          },
          1200: {
            slidesPerView: 4
          }

        }}
        navigation
        autoplay={
          {
              disableOnInteraction: false
          }
        }
        rewind
        loop={true}
      >

        {
          data?.related_shops?.map((item,index) => {
            return (
              <SwiperSlide key={index}>

                <ProductCard key={item.id}
                  id={item.id}
                  title={
                    language ? item.title : item.title_ar
                  }
                  logo={item.image}
                  price={item.price}
                  rating={item.rating}
                  category={
                    language ? item.category : item.category_ar
                  }
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