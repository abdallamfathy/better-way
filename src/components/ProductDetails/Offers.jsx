import React, { useState } from "react";
export function Offers({ offers }) {
  const [postData , setPostData] = useState([{
    id: offers.id,
    shop_id: offers.shop_id,
  }])
  return <div className="list w-full">
    <div className="SubTitle w-full my-4"><h2 className="md:text-5xl text-2xl font-semibold">Offers :</h2></div>

    {
      offers?.map((offer, index) => {
        return (
          <div className="Offers flex flex-col gap-8 my-4   md:text-2xl" key={index}>
            <div className="flex justify-between w-full items-center ">
              <p> <input type="radio" name="1st" className="mr-3" />{offer?.offer_title}</p>
              <p className="text-btn font-bold">{offer?.offer_percentage}%</p>
            </div>

          </div>
        )
      })
    }
    <button className='bg-btn p-2 my-5 rounded-lg md:h-full'>Submit</button>
  </div>;
}
