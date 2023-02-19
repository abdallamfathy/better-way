import React from "react";
import zara from "../../assets/topPlaces/zara.jpg";
import { RiStarSFill } from 'react-icons/ri';

export function CardCategory() {
  return <div className="w-64 h-72 bg-txt rounded-md">
                      <div className="flex flex-col h-72">
                        <div className="h-3/4">
                          <img className="rounded-t-md w-full h-full" src={zara} alt="product image" />
                        </div>
                        <div className="flex items-center justify-center gap-4 h-1/4">
                          <div className="mx-2    text-black  font-semibold flex flex-col items-start justify-center">
                            <h2 className="text-btn">ZARA FOR MEN</h2>
                            <h3>WOMEN CLOTHES</h3>
                          </div>
                          <div className="flex  text-btn bg-bg rounded-md text-lg p-2 justify-center items-center">
                            <RiStarSFill />
                            <RiStarSFill />
                            <RiStarSFill />
                            <RiStarSFill />
                          </div>
                        </div>
                        <div className="rounded-full flex justify-center items-center bg-btn bg-opacity-80 border border-txt w-12 h-12 absolute  z-50 translate-x-48  translate-y-3">
                          <h2 className=" text-txt text-center">11%</h2>
                        </div>
                      </div>
                        </div>
}
  