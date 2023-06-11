import React, { useEffect, useState } from 'react'
import API_BASE_URL from '../../../config';

const CatNames = () => {
    const [myData , setMyData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`${API_BASE_URL}api/v1/categories`);
          const data = await response.json();
          setMyData(data.data);
        };
    
        fetchData();
      }, []);
  return (
    <>
        {
            myData?.map((category) => {
                return (
                    <div className="flex gap-4 items-center" key={category?.id}>
                        <input type="checkbox" name={category?.title} id={category?.id} />
                        <div className="flex justify-between 2xl:text-2xl xl:text-xl lg:text-lg">
                            {category?.title}
                        </div>
                    </div>
                );
            }
)}
    </>
  )
}

export default CatNames