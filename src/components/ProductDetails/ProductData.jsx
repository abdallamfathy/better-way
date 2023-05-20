import React from 'react'
import qr from "../../assets/qr.jpeg";
import { FaFacebook, FaInstagram,  FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faLocationDot,  faPhone,  } from "@fortawesome/free-solid-svg-icons";
const ProductData = ({ data }) => {
  return (
    <div className="Description flex flex-col items-center gap-4">
      <div className="youtube">
        <iframe className="max-md:w-80 max-md:h-72" width="460" height="315" src={data?.video_url} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <div className="flex justify-around w-full">
        <div className="flex flex-col gap-6">
          <div className="Website self-center w-56">
            <a href="#" className="underline w-full"> {data?.website_url}</a>
          </div>
          <div className="SocialMedia flex gap-4 items-center ">
            <a href={data?.facebook_url} className="text-2xl font-light hover:text-btn"><FaFacebook /></a>
            <a href={data?.instagram_url} className="text-2xl font-light hover:text-btn"><FaInstagram /></a>
            <a href={data?.whatsapp_url} className="text-2xl font-light hover:text-btn"><FaWhatsapp /></a>
            <a href={data?.tiktok_url} className="text-2xl font-light hover:text-btn"><FaTiktok /></a>
            <a href={data?.youtube_url} className="text-2xl font-light hover:text-btn"><FaYoutube /></a>
          </div>
        </div>
        <div className="QrCode"><img src={qr} alt="qrcode" className="w-20 rounded-md" /></div>
      </div>
      <div className="Map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7734482.242858413!2d8.44218099639604!3d61.7525781804408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3189cac0c8c611b%3A0xe730b7f8f7de30bf!2sHahahaha!5e0!3m2!1sen!2seg!4v1675351457785!5m2!1sen!2seg" width="360" height="215" className="rounded-md" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="Locations flex flex-col  items-center gap-8 md:text-lg w-2/3 font-semibold">
        {
          data?.addresses.map((address, index) => {
            return (
              <div className='flex flex-col  items-center gap-4' key={index}>
                <div className="flex self-start items-center gap-2 " >
                  <h2><FontAwesomeIcon icon={faLocationDot} /></h2>
                  <p>{address?.address}</p>
                </div>
                <div className="Phones flex items-center gap-4 md:text-xl font-semibold">
                  <div className="flex self-start items-center gap-2 ">
                    <h2><FontAwesomeIcon icon={faPhone} /></h2>
                    <p>{address?.phone_num_1}</p>
                  </div>
                  <div className="flex self-start items-center gap-2 ">
                    <h2><FontAwesomeIcon icon={faPhone} /></h2>
                    <p>{address?.phone_num_2}</p>
                  </div>
                </div>
              </div>
            )
          }
          )
        }
      </div>
    </div>

  )
}

export default ProductData