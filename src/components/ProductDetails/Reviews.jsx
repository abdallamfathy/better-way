import React from 'react'

const Reviews = ({ reviews  , count}) => {
    // console.log(count?.length());
    console.log(reviews?.length);

    
    return (
        <>
            <p className='my-5 font-semibold'>SHOP REVIEWS (<span className='text-btn'>{reviews?.length}</span>) </p>
            {
                reviews?.map((review) => {

                    const stars = Array(parseInt(review?.rate)).fill(null);
                    return (
                        <article>
                            <div className="flex items-center mb-4 space-x-4">
                                <img className="w-10 h-10 rounded-full" src={review?.user_img} alt="userImg" />
                                <div className="space-y-1 font-medium dark:text-white">
                                    <p>{review?.user_name}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-lg mb-1 text-btn">
                                {stars.map((_, index) => (
                                    <span key={index}>★</span>
                                ))}

                            </div>
                            <p className="mb-2 font-light ">{review?.comment}.</p>
                        </article>
                    )
                })
            }
        </>
    )
}

export default Reviews