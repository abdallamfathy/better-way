import React from "react";
import logo from "../assets/logo2.png";
import qr from "../assets/qr.jpeg";
import location from "../assets/location.png";
import message from "../assets/message.png";
import call from "../assets/call.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import whatsapp from "../assets/whatsapp.png";
// import { Link } from "react-router-dom";
import { FaCcMastercard, FaCcVisa, FaFacebook, FaFacebookF, FaInstagram, FaMoneyBill, FaPaypal, FaSnapchat, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
return (
    <div className="bg-bg">
      <div className="mt-7 md:mt-20 md:mx-40 md:py-10">
          <div className="flex -ml-6 -mt-16"><a href="#"><img src={logo} alt="logo" className="w-64"/></a></div>
        <div className="flex flex-wrap justify-between items-start w-full">
          <div className="flex flex-col justify-betwee text-txt  gap-6 w-1/2">
          <div className="flex justify-between  -mt-12">
          <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2 text-txt">
          <h2 className="font-bold mb-2">LET US HELP YOU</h2>
          <a href="#" className="text-sm font-light hover:text-btn">Help Center</a>
          <a href="#" className="text-sm font-light hover:text-btn">Contact Us</a>
          <a href="#" className="text-sm font-light hover:text-btn">How to shop on BetterWay?</a>
          <a href="#" className="text-sm font-light hover:text-btn">How to pay on BetterWay?</a>
          <a href="#" className="text-sm font-light hover:text-btn">Dispute Resolution Policy</a>
          </div>
          <div className="flex flex-col gap-2 text-txt">
          <h2 className="font-bold mb-2">JOIN US ON</h2>
          <div className="flex gap-4 items-center ">
          <a href="#" className="text-lg font-light hover:text-btn"><FaFacebook/></a>
          <a href="#" className="text-lgfont-light hover:text-btn"><FaInstagram/></a>
          <a href="#" className="text-lg font-light hover:text-btn"><FaYoutube/></a>
          <a href="#" className="text-lg font-light hover:text-btn"><FaWhatsapp/></a>
          <a href="#" className="text-lg font-light hover:text-btn"><FaTiktok/></a>
          </div>
          </div>
          </div>
          <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2 ">
          <h2 className="font-bold mb-2">ABOUT BETTERWAY EGYPT</h2>
          <a href="#" className="text-sm font-light hover:text-btn">BetterWay Logistics Services</a>
          <a href="#" className="text-sm font-light hover:text-btn">BetterWay Careers</a>
          <a href="#" className="text-sm font-light hover:text-btn">Terms and Conditions</a>
          <a href="#" className="text-sm font-light hover:text-btn">Privacy Policy</a>
          <a href="#" className="text-sm font-light hover:text-btn">Flash Sales</a>
          </div>
          <div className="flex flex-col gap-2 ">
          <h2 className="font-bold mb-2">PAYMENT METHODS</h2>
          <div className="flex gap-4 items-center ">
          <a href="#" className="text-lg font-light hover:text-btn"><FaCcMastercard/></a>
          <a href="#" className="text-lgfont-light hover:text-btn"><FaMoneyBill/></a>
          <a href="#" className="text-lg font-light hover:text-btn"><FaCcVisa/></a>
          <a href="#" className="text-lg font-light hover:text-btn"><FaPaypal/></a>
          </div>
          </div>
          </div>
          </div>
          <div className="flex flex-wrap items-en gap-y-1 w-full mt-8 ">
          <a href="#" className="text-sm font-light hover:text-btn w-28">Activ</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">Dejavu</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">Defacto</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">Cottonil</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">Casio</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">Casio</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">Braun</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">Apple</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">Andora</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">American Eagle</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">American Eagle</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">ADIDAS</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">BetterWay</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">XIAOMI</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">Tornado</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">Tornado</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">Sokany</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">SHEIN</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">Samsung</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">Ravin</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">OPPO</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">Nokia</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">NIVEA</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">Mothercare</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">Mesery</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">Maybelline</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">Lenovo</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">LC Waikiki</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">L'Oreal Paris</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">Kady</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">Izor</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">HP</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">Garnier</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">Fresh</a>
          <a href="#" className="text-sm font-light hover:text-btn w-28">Dice</a>
          </div>
          </div>
          <div className="flex flex-col items-center gap-6 justify-center w-1/2 rounded-xl -mt-12">
          <iframe width="460" height="315" src="https://www.youtube.com/embed/OaahfdtbYZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="rounded-lg"></iframe>
          <div><img src={qr} alt="qrcode" className="w-36" /></div>
          </div>
        </div>
      </div>
    {/* <div className=" mt-36   mx-72 grid  grid-cols-5 justify-end text-[#E8F6EF] ">
        <div className="col-span-1 flex-col items-end flex ">
        <h1 className="2xl:text-3xl text-xl font-bold relative  my-8">خريطة الموقع</h1>
        <div className="flex flex-col">
            <div className="flex gap-6 flex-wrap justify-end mb-8">
            <a to="/about" className="text-btn  text-sm">
                للاشتراك
            </a>
            <a to="/products" className="text-btn text-sm">
                اجدد العروض
            </a>
            <a to="/" className="text-btn text-sm">
                افضل التقييمات
              </a>
              <a to="/partners" className="text-btn text-sm">
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
      </div> */}
    </div>
  );
};

export default Footer;
