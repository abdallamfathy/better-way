import React from "react";
import logo from "../assets/logo2.png";
import location from "../assets/location.png";
import message from "../assets/message.png";
import call from "../assets/call.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import whatsapp from "../assets/whatsapp.png";
// import { Link } from "react-router-dom";
import { FaSnapchat } from "react-icons/fa";

const Footer = () => {
return (
    <div className="bg-[#4C4C6D]">
    <div className=" mt-36   mx-72 grid  grid-cols-5 justify-end text-[#E8F6EF] ">
        <div className="col-span-1 flex-col items-end flex ">
        <h1 className="2xl:text-3xl text-xl font-bold relative  my-8">خريطة الموقع</h1>
        <div className="flex flex-col">
            <div className="flex gap-6 flex-wrap justify-end mb-8">
            <a to="/about" className="underline  text-sm">
                للاشتراك
            </a>
            <a to="/products" className="underline text-sm">
                اجدد العروض
            </a>
            <a to="/" className="underline text-sm">
                افضل التقييمات
              </a>
              <a to="/partners" className="underline text-sm">
                شركاءنا 
              </a>
              
            </div>
            <div className="flex justify-end gap-3">
              <a href="https://www.facebook.com/profile.php?id=100086364507234">
                {" "}
                <img src={facebook} alt="facebook" />
              </a>
              <a href="https://twitter.com/NamaTaiba">
                {" "}
                <img src={twitter} alt="twitter" />
              </a>
              <a href="https://www.instagram.com/nama_taiba/">
                {" "}
                <img src={instagram} alt="instagram" />
              </a>

              <a href="https://www.snapchat.com/add/nama_taiba?share_id=EdYdd_Y10Pc&locale=en-US">
                {" "}
                <FaSnapchat  className="w-[33px] h-[33px]" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-2 columns-3 flex-col items-end flex ">
          <h1 className="2xl:text-3xl text-xl font-bold relative right-6 my-8">اتصل بنا</h1>
          <div className="grid grid-flow-row  grid-cols-4  relative left-14 row-start-3 mb-6 ">
            <p className="col-span-3 w-80 relative right-2 text-sm ">
              الادارة :13 مكتب شارع الوحدة مصر الجديدة القاهرة مصر
            </p>
            <img
              src={location}
              alt="location"
              className=" col-span-1 left-2 relative"
            />
          </div>
          
          <div className="grid grid-flow-row  grid-cols-4  relative left-6 row-start-3 mb-6">
            <a className="col-span-3 pr-6 text-sm">better-sales@betterway.com</a>
            <img
              src={message}
              alt="message"
              className="relative left-2 col-span-1 text-[#E8F6EF] "
            />
          </div>
          <div className="grid grid-flow-row  grid-cols-4  relative left-4 row-start-3 my-4 pb-8 ">
            <a className="col-span-3 pr-6 text-sm ">0231234124 - 012345678</a>
            <img
              src={call}
              alt="call"
              className="relative left-2 col-span-1 "
            />
          </div>
        </div>
        <div className=" flex-col   col-span-2 items-end flex">
          <img src={logo} alt="logo" className=" w-62 h-44" />
          <p className="text-right 2xl:text-[16px] text-sm    leading-9">
            تعد شركة بيتر واي شركة رائدة و تستطيع انت ايس اليموانع و يجب ايضا علي الاعامل و يمكنكم زيارة الاموقع من خلال عبر طبيق ممكن ان تشةؤ
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
