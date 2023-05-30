import React, { useEffect, useState } from 'react'
import brand from "../../assets/topBrands/brand.jpg"
import API_BASE_URL from "../../../config";
import { Link } from 'react-router-dom';


const TopBrands = () => {
  const [myData, setMyData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_BASE_URL}api/v1/shops/top-deal`);
      const data = await response.json();
      setMyData(data.data);
      console.log(data.data);
    };

    fetchData();
  }, []);
  return (
    <>
        <div className='my-7 md:my-8 2xl:mx-40 xl:mx-20 md:mx-10 '>
        <div className='flex justify-center items-center  bg-bg py-1 md:h-16'>
          <h2 className='text-txt  text-lg md:text-3xl md:font-semibold'>TOP BRANDS</h2>
        </div>
      <div className='mx-3 my-5 md:my-8 md:mx-0'>

        <div className='flex flex-wrap  md:justify-between justify-center items-center gap-x-2 gap-4   '>
          {
            myData?.slice(0,15).map((item, index) => (
              <div key={index}>
            <Link to={`/shop/${item?.id}`}><img src={item.logo} alt="logo" className='w-28 h-16 rounded-md 2xl:w-64 xl:w-56 lg:w-48 xl:h-36 lg:h-28 grayscale' /></Link>
          </div>
            ))
          }
          </div>
         
        </div>
      </div>
    </>
  )
}

export default TopBrands