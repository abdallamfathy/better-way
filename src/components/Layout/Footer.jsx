import React from "react";
import logo from "../../assets/logo2.png";
import qr from "../../assets/qr.jpeg";
import googleApp from "../../assets/googleApp.png";
import appleApp from "../../assets/appleApp.png";
import { FaCcMastercard, FaCcVisa, FaFacebook, FaFacebookF, FaInstagram, FaMailBulk, FaMoneyBill, FaPaypal, FaSnapchat, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { faEnvelope, faMailForward, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
return (
    <div className="bg-bg">
      <div className="flex flex-col gap-10 ">
          <div className="md:flex hidden justify-between bg-slate-800 p-10 2xl:px-40 xl:px-20 px-10">
            <a href="#"><img src={logo} alt="logo" className="w-60"/></a>
            <div className="flex justify-between">
              <div className="flex flex-col gap-2 justify-start items-start text-white">
                <h2>New to BetterWay ?</h2>
                <p>Subscribe to our newsletter to get updates on our latest offers!</p>
                <div className="h-14 w-72  bg-white flex justify-center items-center  gap-4 px-0 rounded-md">
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-300 w-8 h-8" />
                <input type="text" placeholder="Enter E-mail Address" className="placeholder:text-lg  focus:outline-none text-black border-0"/>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-white items-end">
              <div className="flex gap-2">
                  {/* <div className="-mt-3">
                    <img className="w-20 h-20" src={logo2} alt="logo" />
                  </div> */}
                  <div className="flex flex-col gap-2">
                    <h2 className="font-bold">DOWNLOAD BETTERWAY FREE APP</h2>
                    <p className="text-sm">Get the best shopping experience on your mobile</p>
                  </div>
              </div>
              <div className="flex justify-between gap-4">
                <img src={googleApp} alt="googleApp"  className="w-36 "/>
                <img src={appleApp} alt="appleApp"  className="w-36"/>
              </div>
            </div>
            </div>
        <div className="flex flex-wrap justify-between items-start my-10 2xl:mx-40 xl:mx-20 lg:mx-10 px-10">
          <div className="flex flex-col justify-betwee text-txt  gap-6 w-1/2">
          <div className="flex justify-between">
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
          <div className="md:flex hidden flex-col gap-10">
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
          <div className="md:flex hidden flex-wrap items-en gap-y-1 w-full mt-8 ">
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
          <div className="md:flex hidden flex-col items-center -mr-16 gap-6 justify-center w-1/2  rounded-xl">
          <iframe width="460" height="315" src="https://www.youtube.com/embed/OaahfdtbYZM" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="rounded-lg "></iframe>
          <div><img src={qr} alt="qrcode" className="w-36" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
