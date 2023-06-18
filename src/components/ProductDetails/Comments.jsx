import React, { useState } from 'react'
import API_BASE_URL from '../../../config';
import { useAuthUser, useIsAuthenticated } from 'react-auth-kit';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import StarRating from './StarRating';

const Comments = () => {
  const { shopId } = useParams();
  const shop_id = shopId;
  const [formData, setFormData] = useState({
    shop_id,
    comment: "",
    rate: 5,
  });

  const handleStarClick = (rating) => {
    setFormData({ ...formData, rate: rating });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
      shopId,
    }));
  };
  const auth = useAuthUser();
  const token = auth()?.token;
  const [error , setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!auth()) {
      alert("please log in to add review!")
    }
    const res = await axios.post(
      `${API_BASE_URL}api/v1/users/comment/store`,
      formData,
      {
        headers: {
             Authorization: `Bearer ${token}`,
             "Content-Type": "multipart/form-data",
        },
   }
    );
    if (res.status === 200) {
      console.log(res);
    } 
    setFormData({
      shop_id,
      comment:"",
      rate:5
  })
  };
  return (
    <div className="Comments text-txt md:w-2/3">

                {/* <Reviews/> */}
                <form onSubmit={handleSubmit} className='flex flex-col 
                  gap-10  '>
                <textarea name="comment" id="" cols="30" rows="5"
                className='rounded-xl bg-bg my-5'
                placeholder='Add your comment here ..'
                value={formData.comment}
                onChange={handleChange}
                ></textarea>
                <div className="flex  items-center">
            <StarRating
              numberOfStars={5}
              currentRating={formData.rate}
              onClick={handleStarClick}
            />
          </div>
                  <button type='submit' className='bg-btn p-2 my-5 rounded-lg md:h-full'>Submit</button>

  </form>              </div>
  )
}

export default Comments