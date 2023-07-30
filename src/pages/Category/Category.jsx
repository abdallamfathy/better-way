import { Products } from './Products';
import { Filter } from './Filter';
import React, { useEffect, useState } from "react";
import { Footer, Navbar } from "../../components";
import zara from "../../assets/topPlaces/zara.jpg";
import brand from "../../assets/topBrands/brand.jpg";
import { RiStarSFill } from "react-icons/ri";
import Pagination from "./Pagination";
import { Link, useParams } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import API_BASE_URL from '../../../config';
import { useLangContext } from '../../utils/LangContext';

const Category = () => {

  const {categoryId}  = useParams();
  const [myData, setMyData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_BASE_URL}api/v1/categories/${categoryId}`);
      const data = await response.json();
      console.log(data.data.shops);
      setMyData(data.data.shops);
    };

    fetchData();
  }, [categoryId]);
  const { language } = useLangContext();
  const lang = language === true ? 'ltr' : 'rtl';
  return (
    <>
      <Navbar />
      <div dir={lang} className="2xl:mx-20 xl:mx-16 lg:mx-10 md:my-8 m-5">
        <div className="flex flex-col gap-6 text-txt">
          <section className="sectionII">
            <div className="flex md:flex-row flex-col max-md:gap-4 justify-between">
              <div className="md:w-1/4 h-full max-md:hidden bg-bg  rounded-md ">
                 <Filter  setMyData={setMyData}   />
              </div>
              <div className="md:w-3/4 flex flex-col items-center justify-between">
                {
                  myData && <Products  data={myData}   />
                }
                <div className="my-5">
                  {/* <Pagination /> */}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Category;
