import React, { useEffect, useState } from 'react'
import { useCatContext } from '../Home/CatContext';
import API_BASE_URL from '../../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const SubCategory = ({ show, updateState }) => {
  const [myData, setMyData] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`${API_BASE_URL}api/v1/categories/childs`);
        const data = await response.json();
        setMyData(data.data);
        console.log(data.data);
      };
  
      fetchData();
    }, []);
    const toggle = () => {
      // updating state of CatContext
      updateState(show);
    };
    const toggle2 = () => {
      // updating state of CatContext
      updateState(!show);
    };
  return (
    <div onMouseEnter={() => toggle()}
    onMouseLeave={() => toggle2()} className="flex flex-col items-start text-white m-4 w-full">
      <div  className="w-full h-full">
        <ul
          
          className="flex flex-col w-full h-full"
          >
          {myData?.map((category) => {
            return (
                <Link key={category.id} to={`/category/${category.id}`}>
              <div  className="flex items-center gap-4 cursor-pointer  hover:text-btn w-full  h-12 ">
                <li className="font-medium text-xl">
                <FontAwesomeIcon icon={category.icon} />
                                  {/* <FontAwesomeIcon icon={category.icon} key={category.icon} /> */}
                  {/* <img src={category.logo} alt="logo" className="xl:w-10 xl:h-10 w-7 h-7" /> */}
                </li>
                <li className="xl:text-lg lg:text-base font-medium">
                  {category.title}
                </li>
              </div>
                </Link>
            );
          })}
        </ul>
      </div>
    </div>
    )

}

export default SubCategory