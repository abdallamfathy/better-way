import React, { useEffect, useRef, useState } from "react";
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
import { ProductInfo } from "../components/ProductDetails/ProductInfo";
import { Offers } from "../components/ProductDetails/Offers";
import Comments from "../components/ProductDetails/Comments";
import Rates from "../components/ProductDetails/Rates";
import Description from "../components/ProductDetails/Description";
import ProductData from "../components/ProductDetails/ProductData";
import API_BASE_URL from "../../config";
import { useParams } from "react-router-dom";
import RelatedShops from "../components/ProductDetails/RelatedShops";
import Reviews from "../components/ProductDetails/Reviews";
import { useLangContext } from "../utils/LangContext";

const Shop = () => {
  const {shopId}  = useParams();
  const [myData, setMyData] = useState(null);
  const [related, setRelated] = useState(null);
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_BASE_URL}api/v1/shops/${shopId}`);
      const data = await response.json();
      setMyData(data?.data[0]);
      setReviews(data?.data[1])
      setRelated(data?.data[2]);
    };

    fetchData();
  }, [shopId]);
  const { language } = useLangContext();
  const lang = language === true ? 'ltr' : 'rtl';

  return (
    <>
      <Navbar />
      <div dir={lang}  className="md:mx-20 md:my-8 m-5">
        <section className="sectionI">
           <ProductInfo data={myData} />
        </section>

        <section className="sectionII my-20">
          <div className="Container flex md:flex-row flex-col lg:gap-10 gap-4 justify-between ">
            <div className="×OffersSection flex flex-col items-start  justify-center gap-4 h-full md:w-2/3   text-txt">
              <div className="Title w-full "><h2 className="md:text-5xl text-2xl font-bold text-btn ">{
                language ? myData?.title : myData?.title_ar
              }</h2></div>
             
                 <Offers offers={myData?.offers} />
                 <Description description={
                    language ? myData?.description : myData?.description_ar
                 }/>
              
                 <Rates/>
                 <Reviews reviews={reviews?.comments} count={reviews}/>
                 <Comments/>
            </div>


            <div className="ShopSection flex flex-col items-center gap-6 md:w-1/3 text-txt">
              <ProductData data={myData}/>
            </div>
          </div>
        </section>

        <section className="sectionIII">
          <div className="">
            <div className=" text-txt font-bold text-2xl">
              <h2>
                {language ? "Related Shops" : "المتاجر المتعلقة"}
              </h2>
            </div>
            <div className="mt-4">
              <RelatedShops data={related}/>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
