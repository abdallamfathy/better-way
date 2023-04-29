import React from "react";
export function Offers({}) {
  return <div className="list ">
                <div className="SubTitle w-full my-4"><h2 className="md:text-5xl text-2xl font-semibold">Offers :</h2></div>
                <div className="Offers flex flex-col gap-8 my-4  md:text-2xl">

                  <div className="flex justify-between w-full">
                    <p> <input type="radio" name="1st" /> Enjoy a 50% discount on a total bill.</p>
                    <p className="text-btn font-bold">50%</p>
                  </div>

                  <div className="flex justify-between w-full">
                    <p><input type="radio" name="1st" /> Enjoy a 10% discount.</p>
                    <p className="text-btn font-bold">10%</p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p><input type="radio" name="1st" /> Enjoy a discount on the price of Egyptian medicines.</p>
                    <p className="text-btn font-bold">5%</p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p><input type="radio" name="1st" /> Enjoy a discount on a total bill less than 1,000 pounds.</p>
                    <p className="text-btn font-bold">40%</p>
                  </div>
                  <div className="flex justify-between gap-4 w-full">
                    <p><input type="radio" name="1st" /> Enjoy a discount on the total bill on special occasions and birthdays.</p>
                    <p className="text-btn font-bold">60%</p>
                  </div>
                </div>
              </div>;
}
  