import React from 'react'
import qr from "../../assets/qr.jpeg";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import { FaFacebook, FaInstagram, FaLocationArrow, FaMap, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faArrowCircleRight, faArrowDown, faArrowDown19, faArrowDownLong, faArrowDownShortWide, faArrowDownWideShort, faArrowTrendDown, faDownload, faLocation, faLocationCrosshairs, faLocationDot, faLocationPin, faMobilePhone, faPhone, faSortDown } from "@fortawesome/free-solid-svg-icons";
const ProductData = () => {
  return (
<div className="Description flex flex-col items-center gap-4">
                <div className="youtube">
                  <iframe className="max-md:w-80 max-md:h-72" width="460" height="315" src="https://www.youtube.com/embed/znnC9q86ptI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="flex justify-around w-full">
                  <div className="flex flex-col gap-6">
                    <div className="Website self-center">
                      <a href="#" className="underline"> www.FlamingoCafe.com </a>
                    </div>
                    <div className="SocialMedia flex gap-4 items-center ">
                      <a href="#" className="text-2xl font-light hover:text-btn"><FaFacebook /></a>
                      <a href="#" className="text-2xl font-light hover:text-btn"><FaInstagram /></a>
                      <a href="#" className="text-2xl font-light hover:text-btn"><FaWhatsapp /></a>
                      <a href="#" className="text-2xl font-light hover:text-btn"><FaTiktok /></a>
                      <a href="#" className="text-2xl font-light hover:text-btn"><FaYoutube /></a>
                    </div>
                  </div>
                  <div className="QrCode"><img src={qr} alt="qrcode" className="w-20 rounded-md" /></div>
                </div>
                <div className="Map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7734482.242858413!2d8.44218099639604!3d61.7525781804408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3189cac0c8c611b%3A0xe730b7f8f7de30bf!2sHahahaha!5e0!3m2!1sen!2seg!4v1675351457785!5m2!1sen!2seg" width="360" height="215" className="rounded-md" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="Locations flex flex-col  items-center gap-2 md:text-xl font-semibold">
                  <div className="flex self-start items-center gap-2 ">
                    <h2><FontAwesomeIcon icon={faLocationDot} /></h2>
                    <p>19 alaa st. masr el gededa , Cairo , Eg</p>
                  </div>
                  <div className="flex self-start items-center gap-2 ">
                    <h2><FontAwesomeIcon icon={faLocationDot} /></h2>
                    <p>39 mounira st. el agouza , Giza , Eg</p>
                  </div>
                </div>
                <div className="Phones flex items-center gap-4 md:text-xl font-semibold">
                  <div className="flex self-start items-center gap-2 ">
                    <h2><FontAwesomeIcon icon={faPhone} /></h2>
                    <p>0123456789</p>
                  </div>
                  <div className="flex self-start items-center gap-2 ">
                    <h2><FontAwesomeIcon icon={faPhone} /></h2>
                    <p>0123456789</p>
                  </div>
                </div>
              </div>  )
}

export default ProductData