import React from "react";
import zara from "../../assets/topPlaces/zara.jpg";
import { RiStarSFill } from 'react-icons/ri';
import { Link } from "react-router-dom";

export function ProductCard({ id, title, logo, price, rating}) {
  return <div className="md:w-64 md:h-80 w-40  h-56 bg-txt rounded-md hover:shadow-lg hover:shadow-btn m-10 transition">
    <Link to={`/shop/${id}`}>
    <div className="flex flex-col md:h-80 h-56 ">
      <div className="md:h-3/4 h-1/2">
        <img className="rounded-t-md w-full h-full" src={logo} alt="product image" />
      </div>
      <div className="flex md:flex-row flex-col items-center justify-around  md:h-1/4 h-1/2 ">
        <div className=" text-sm  text-black  font-semibold flex flex-col md:items-start items-center justify-center">
          <h2 className="text-btn">{title}</h2>
          <h3>WOMEN CLOTHES</h3>
        </div>
        <div className="flex  text-btn bg-bg rounded-md  p-2 justify-center items-center">
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
        </div>
      </div>
      <div className="rounded-full flex justify-center items-center bg-btn border border-txt md:w-12 md:h-12 w-8 h-8 absolute  z-50 md:translate-x-48    translate-x-28 translate-y-3">
        <h2 className=" text-txt text-center max-md:text-xs">11%</h2>
      </div>
    </div>
    </Link>
  </div>
}
