import React, { useEffect, useState } from 'react'
import { BiSearchAlt, IoMdArrowDropdown } from 'react-icons/all'
import API_BASE_URL from '../../../config';
import SearchResults from './SearchResults';
import { useLangContext } from '../../utils/LangContext';
const SearchBar = () => {
  const [myData, setMyData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [show, setShow] = useState(true);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_BASE_URL}api/v1/shops/search?query=${searchTerm}`);
      const data = await response.json();
      setMyData(data.data);
    };

    fetchData();
  }, [searchTerm]);
  useEffect(()=> {
    if (searchTerm) {
      setShow(true)
    }
  },[searchTerm])

  const { language} = useLangContext();

  return (
    <div>
      <div className='bg-white rounded-lg 2xl:w-[650px] xl:w-[500px] h-12 flex justify-between '>
        <button className='bg-btn  p-2  w-12 rounded-l-lg'><BiSearchAlt className='w-7 h-7 text-white' /></button>
        <input type="search"
          placeholder={language ? "Search for products" : "ابحث عن المنتجات"}
          value={searchTerm}
          onChange={handleChange}
          onMouseEnter={() => setShow(!show)}
          className='bg-white text-black rounded-xl pl-2 py-2 w-full mx-1 text-left border-none focus:ring-0' />
        <button className='bg-gray-200  pr-2 py-2 w-20 text-sm border-l border-[#E8F6EF] rounded-r-lg flex items-center gap-[1px] font-semibold'> <IoMdArrowDropdown />  
        {
          language ? "Search" :  " ابحث"
        }
        </button>
      </div>
      <div onMouseLeave={() => setShow(!show)}>
        <SearchResults searchTerm={searchTerm} data={myData} show={show} />
      </div>
    </div>
  )
}

export default SearchBar