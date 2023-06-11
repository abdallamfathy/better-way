import React, { useEffect, useState } from 'react'
import API_BASE_URL from "../../../config";
import { useAuthUser } from 'react-auth-kit';

const MerchantPaper = () => {
  const [myData, setMyData] = useState(null);
  const auth = useAuthUser();
  const token = auth()?.token;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_BASE_URL}api/v1/merchants/papers` , 
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }
      );
      const data = await response.json();
      setMyData(data.data);
      console.log(data.data);
    };

    fetchData();
  }, []);
  return (
    <div className='flex flex-wrap'>
      {
        myData?.map((item, index) => (
          <div key={index} className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 p-2'>
                <img className='w-96 h-96 rounded-full' src={item.logo} alt='logo' />
                </div>
        ))
      }
    </div>
  )
}

export default MerchantPaper