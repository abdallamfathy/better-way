import React, { useEffect, useState } from 'react'
import API_BASE_URL from '../../../config';

const CatArea = () => {
    const [myData , setMyData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`${API_BASE_URL}api/v1/areas`);
          const data = await response.json();
          setMyData(data.data);
        };
    
        fetchData();
      }, []);
  return (
    <>
        {
            myData?.map((item) => {
                return (
                    <div className="flex gap-4 items-center" key={item?.id}>
                        <input type="checkbox" name={item?.title} id={item?.id} />
                        <div className="flex justify-between 2xl:text-2xl xl:text-xl lg:text-lg">
                            {item?.title}
                        </div>
                    </div>
                );
            }
)}
    </>
  )
}

export default CatArea