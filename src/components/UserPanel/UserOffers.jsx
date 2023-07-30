import React, { useEffect, useState } from 'react'
import API_BASE_URL from '../../../config';
import { useAuthUser } from 'react-auth-kit';
import axios from 'axios';

const UserOffers = () => {
    
    const [myData, setMyData] = useState(null);
    const auth = useAuthUser();
    const token = auth()?.token;
  
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}api/v1/users/user-offers`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
    
        const data = response.data.data;
        console.log(data);
        setMyData(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
    useEffect(() => {
      fetchData();
    }, []);
  return (
    <div className='bg-bg rounded-xl md:p-20 p-5 '>
        <div className='flex flex-col '>
        <div className='flex  justify-around items-center md:gap-40 gap-14 text-btn font-semibold text-2xl border-b border-gray-100 md:p-10 p-2'>
                <p>Offer_id</p>
                <p>Offer_full_title</p>
                <p>Shop Name</p>
                <p>User Id</p>
            </div>
            {
               myData &&  myData?.map((item, index) => {
                    return (
                        <div className='flex justify-around items-center md:gap-40 gap-14 text-txt  text-xl border-b border-gray-100 md:p-10 p-2' key={index}>
                            <p>{item?.offer_id}</p>
                            <p>{item?.offer_full_title}</p>
                            <p>{item?.shop_name}</p>
                            <p>{item?.user_id}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default UserOffers