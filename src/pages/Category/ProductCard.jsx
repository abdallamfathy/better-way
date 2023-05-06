import React from "react";
import zara from "../../assets/topPlaces/zara.jpg";
import { RiStarSFill } from 'react-icons/ri';

export function ProductCard({ id, title, logo, price, rating}) {
  return <div className="md:w-64 md:h-72 w-40  h-56 bg-txt rounded-md">
    <div className="flex flex-col md:h-72 h-56 ">
      <div className="md:h-3/4 h-1/2">
        <img className="rounded-t-md w-full h-full" src={logo} alt="product image" />
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center gap-4 md:h-1/4 h-1/2">
        <div className="mx-2  max-md:text-sm  text-black  font-semibold flex flex-col md:items-start items-center justify-center">
          <h2 className="text-btn">{title}</h2>
          <h3>WOMEN CLOTHES</h3>
        </div>
        <div className="flex  text-btn bg-bg rounded-md md:text-lg p-2 justify-center items-center">
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
        </div>
      </div>
      <div className="rounded-full flex justify-center items-center bg-btn bg-opacity-80 border border-txt md:w-12 md:h-12 w-8 h-8 absolute  z-50 md:translate-x-48    translate-x-28 translate-y-3">
        <h2 className=" text-txt text-center max-md:text-xs">11%</h2>
      </div>
    </div>
  </div>
}
