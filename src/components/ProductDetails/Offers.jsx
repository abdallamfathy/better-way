import axios from "axios";
import API_BASE_URL from "../../../config";
import React, { useState } from "react";
import { useAuthUser } from "react-auth-kit";
import { useParams } from "react-router-dom";
import { useLangContext } from "../../utils/LangContext";
export function Offers({ offers }) {
  const { shopId } = useParams();
  const shop_id = shopId;
  const [postData , setPostData] = useState([{
    id: offers?.id,
    shop_id: offers?.shop_id,
  }])


  const [formData, setFormData] = useState({
    shop_id,
    offer_id : null,
  });



  const auth = useAuthUser();
  const token = auth()?.token;
  const [error , setError] = useState(false)
  console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!auth()) {
      alert("please log-in to take offer!")
    }
    const res = await axios.post(
      `${API_BASE_URL}api/v1/users/get-offer`,
      formData,
      {
        headers: {
             Authorization: `Bearer ${token}`,
             "Content-Type": "multipart/form-data",
        },
   }
    );
    if (res.status === 200) {
      alert("Please save this code : " + res.data.data.code)
    } 

  };



  const handleChange = (e) => {
    const {id} = e.target;
    setFormData((formData) => ({
      ...formData,
      offer_id:id
    }));
  };
  console.log(auth());
  const { language } = useLangContext();
  const lang = language === true ? 'ltr' : 'rtl';
  return <div dir={lang} className="list w-full">
    <div className="SubTitle w-full my-4"><h2 className="md:text-3xl text-xl font-semibold">
      {
        language ? 'Offers : ' : 'العروض : '
      }
      </h2></div>
    <form onSubmit={handleSubmit}>

    {
      offers?.map((offer, index) => {
        return (
          
          <div  className="Offers flex flex-col gap-8 my-4   md:text-xl" key={index}>
            <div className="flex justify-between w-full items-center ">
              <p> <input
               id={offer.id}
               onChange={handleChange}
               type="radio"
               name="offer"
               className="mx-3" />{
                language ? offer?.title : offer?.title_ar
               } {' '}</p>
               {' '}
              <p className="text-btn font-bold">{offer?.value}%</p>

          </div>
               </div>
        )
      })
    }
    <button className='bg-btn p-2 my-5 rounded-lg md:h-full'>
      {
        language ? 'Take Offer' : 'احصل على العرض'
      }
    </button>
    </form>
  </div>;
}
