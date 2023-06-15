import React, { useEffect, useState } from 'react'
import API_BASE_URL from "../../../config";
import { useAuthUser } from 'react-auth-kit';
import axios from 'axios';

const MerchantPaper = () => {
  const [myData, setMyData] = useState(null);
  const auth = useAuthUser();
  const token = auth()?.token;

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}api/v1/merchants/papers`, {
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
    <div className='flex flex-wrap'>
      {
        myData?.map((item, index) => (
          <div key={index} className='text-txt w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 p-2'>
                <img className='w-96 h-96' src={item?.image} alt='logo' />
          </div>
        ))
      }
    </div>
  )
}

export default MerchantPaper