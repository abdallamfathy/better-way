import React, { useEffect, useState } from 'react'
import brand from "../../assets/topBrands/brand.jpg"
import API_BASE_URL from "../../../config";


const TopBrands = () => {
  const [myData, setMyData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_BASE_URL}api/v1/shops/top-deal`);
      const data = await response.json();
      setMyData(data.data);
    };

    fetchData();
  }, []);
  console.log(myData);
  return (
    <>
        <div className='my-7 md:my-8 md:mx-40 '>
        <div className='flex justify-center items-center  bg-bg py-1 md:h-20'>
          <h2 className='text-txt  text-lg md:text-3xl md:font-semibold'>TOP BRANDS</h2>
        </div>
      <div className='mx-3 my-5 md:my-8 md:mx-0'>

        <div className='flex flex-wrap  justify-between items-center gap-[1.68rem]  md:gap-10'>
          {
            myData?.map((item, index) => (
              <div key={index}>
            <img src={item.logo} alt="logo" className='w-28 h-16 rounded-md md:w-64 md:h-36 grayscale' />
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