import React, { useEffect, useState } from 'react'
import API_BASE_URL from '../../../config';
import { Link } from 'react-router-dom';
import { useLangContext } from '../../utils/LangContext';

const FooterCategories = () => {
      const [myData, setMyData] = useState(null);
    
      useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`${API_BASE_URL}api/v1/categories`);
          const data = await response.json();
          setMyData(data.data);
        };
    
        fetchData();
      }, []);
      const { language } = useLangContext();

  return (
    <div className="md:flex hidden flex-wrap items-en gap-y-2 w-96 mt-8 ">
    {
        myData?.map((item) => (
            <Link key={item.id} to={`/category/${item.id}`} className="text-sm font-light hover:text-btn w-28">{
                language ? item.title : item.title_ar
            }</Link>
        ))
    }

    </div>
    )
}

export default FooterCategories