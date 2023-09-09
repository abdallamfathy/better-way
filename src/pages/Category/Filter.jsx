import React, { useState } from "react";
import CatNames from "./CatNames";
import CatGover from "./CatGover";
import CatArea from "./CatArea";
import Rate from "./Rate";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useLangContext } from "../../utils/LangContext";


export function Filter({ setMyData }) {

    const {categoryId} = useParams();
    const [form , setForm] = useState({
        search : "",
        category : "",
        governorate_id : 0,
        area_id : 0,
        discount_min : 1,
        discount_max : 100,
        discount_type : "fixed",
        gained_points_min: 1,
        gained_points_max: 5,
        rate: 0
         
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(form);
        const res = await axios.get(`https://betterway.balkosolar.de/api/v1/categories/${categoryId}/filter`, {
            params : form
        })
        console.log(res);
        setMyData(res?.data?.data);
      };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({
          ...prevForm,
          [name]: parseInt(value, 10),
        }));
      };
    const handleChangeType = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({
          ...prevForm,
          [name]: value,
        }));
      };
      const { language } = useLangContext();
      const lang = language === true ? 'ltr' : 'rtl';

      return <form dir={lang} onSubmit={handleSubmit} className="flex flex-col filter w-full">
         
        <div className="CITY flex flex-col justify-center items-start p-4 border-b border-txt h-80  ">
            <h1 className="2xl:text-3xl xl:text-2xl text-xl font-bold">
                {
                    language ? "GOVERNORATE" : "المحافظة"
                }
            </h1>
            <div className="p-5 flex flex-col gap-2 h-full w-full  overflow-y-auto">
                <CatGover setForm={setForm}/> 
            </div>
        </div>
        <div className="AREA flex flex-col justify-center items-start p-4 border-b border-txt h-80">
            <h1 className="2xl:text-3xl xl:text-2xl text-xl font-bold">
                {
                    language ? "AREA" : "المنطقة"
                }
            </h1>
            <div className="p-5 flex flex-col gap-2 w-full h-full overflow-y-auto">
                <CatArea setForm={setForm}/>
            </div>
        </div>
        <div className="DISCOUNT flex flex-col justify-center items-start p-4 border-b border-txt">
            <h1 className="2xl:text-3xl xl:text-2xl text-xl font-bold">
                {
                    language ? "DISCOUNT" : "الخصم"
                }
            </h1>
            <div className="p-5 flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                <input type="radio" name="discount_type" id="2" value={"percentage"} onChange={handleChangeType}/>
                    <p>
                        {
                            language ? "From" : "من"
                        }
                    </p>
                    <input type="number" name="discount_min" value={form.discount_min} onChange={handleChange} placeholder="0" className="2xl:w-20 xl:w-16 lg:w-16 text-black font-semibold text-sm" />
                    <p>
                        {
                            language ? "To" : "إلى"
                        }
                    </p>
                    <input type="number" name="discount_max" value={form.discount_max} onChange={handleChange} placeholder="100" className="2xl:w-20 xl:w-16 lg:w-16 text-black font-semibold text-sm" />{" "}
                    <p className="text-xl font-bold">%</p>
                </div>
                <div className="flex gap-2 items-center">
                <input type="radio" name="discount_type" id="22" value={"fixed"} onChange={handleChangeType}/>
                    <p>
                        {
                            language ? "From" : "من"
                        }
                    </p>
                    <input type="number" name="discount_min" value={form.discount_min} onChange={handleChange} placeholder="0" className="2xl:w-20 xl:w-16 lg:w-16 text-black font-semibold  text-sm" />
                    <p>
                        {
                            language ? "To" : "إلى"
                        }
                    </p>
                    <input type="number" name="discount_max" value={form.discount_max} onChange={handleChange} placeholder="100" className="2xl:w-20 xl:w-16 lg:w-16 text-black font-semibold text-sm" />{" "}
                    <p className="text-xl font-bold">
                        {
                            language ? "EGP" : "جنيه"
                        }
                        
                        </p>{" "}
                </div>
            </div>
        </div>
        <div className="GAINED flex flex-col justify-center items-start p-4">
            <h1 className="2xl:text-3xl xl:text-2xl text-xl font-bold">
                {
                    language ? "GAINT POINT" : "النقاط المكتسبة"
                }
            </h1>
            <div className="flex m-5 gap-2 items-center ">
                <p>
                    {
                        language ? "From" : "من"
                    }
                </p>
                <input
                        type="number"
                        name="gained_points_min"
                        id={3}
                        value={form.gained_points_min}
                        onChange={handleChange}
                        placeholder="0" 
                        className="2xl:w-20 xl:w-16 lg:w-16 text-black font-semibold text-sm" />
                <p>
                    {
                        language ? "To" : "إلى"
                    }
                </p>
                <input
                        type="number"
                        name="gained_points_max"
                        id={4}
                        value={form.gained_points_max}
                        onChange={handleChange}
                        placeholder="100"
                        className="2xl:w-20 xl:w-16 lg:w-16 text-black font-semibold text-sm" />{" "}
            </div>
        </div>
        <div className="RATING flex flex-col justify-center items-start p-4 border-t border-txt">
            <h1 className="2xl:text-3xl xl:text-2xl text-xl font-bold">
                {
                    language ? "RATING & REVIEWS" : " التقييم والمراجعات "
                }
            </h1>
                <Rate setForm={setForm} form={form}/>
        </div>
        <button type="submit" className="flex justify-start  m-10 my-5 bg-btn w-fit p-4 py-1 rounded-md">
            {
                language ? "Submit" : "إرسال"
            }
        </button>
    </form>;
}
