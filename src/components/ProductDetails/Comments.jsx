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

                <article>
                  <p className='my-5 font-semibold'>SHOP REVIEWS (<span className='text-btn'>5</span>) </p>
                  <div className="flex items-center mb-4 space-x-4">
                    <img className="w-10 h-10 rounded-full" src="https://avatars.githubusercontent.com/u/191027?v=4" alt="" />
                    <div className="space-y-1 font-medium dark:text-white">
                      <p>Mickel peter <time dateTime="2023-01-16 19:00" className="block text-sm ">Joined on February 2023</time></p>
                    </div>
                  </div>
                  <div className="flex items-center mb-1 text-btn">
                    <svg aria-hidden="true" className="w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <h3 className="ml-2 text-sm font-semibold text-txt">Thinking to buy another one!</h3>
                  </div>
                  <footer className="mb-5 text-sm "><p>commented in Cairo , Egypt on <time dateTime="2017-03-03 19:00">February 3, 2023</time></p></footer>
                  <p className="mb-2 font-light ">This is my third time shopping from BetterWay. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
                  <p className="mb-3 font-light ">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under 100EGP! An absolute bargain.</p>
                </article>
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