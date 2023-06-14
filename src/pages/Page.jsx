import React, { useEffect, useState } from 'react'
import API_BASE_URL from '../../config';
import { useParams } from 'react-router-dom';

const Page = () => {
    const [myData, setMyData] = useState(null);
    const {pageId} = useParams();
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`${API_BASE_URL}api/v1/pages/${pageId}`);
        const data = await response.json();
        setMyData(data.data);
        console.log(data.data);
      };
  
      fetchData();
    }, []);
    const createMarkup = () => {
        return { __html: myData?.body };
      };
  return (
    <div className='md:mx-20 md:my-8 m-5 flex flex-col gap-24 h-screen '>
        <h1 className='text-txt text-3xl '>{myData?.title}</h1>
        <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  )
}

export default Page