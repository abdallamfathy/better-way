import { Products } from './Products';
import { Filter } from './Filter';
import React from "react";
import { Footer, Navbar } from "../../components";
import zara from "../../assets/topPlaces/zara.jpg";
import brand from "../../assets/topBrands/brand.jpg";
import { RiStarSFill } from "react-icons/ri";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';

const Category = () => {
  return (
    <>
      <Navbar />
      <div className="md:mx-20 md:my-8 m-5">
        <div className="flex flex-col gap-6 text-txt">
          <section className="sectionI">
            <div className="w-full md:h-96 h-36 object-cover">
              <img
                src={zara}
                alt="image"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </section>
          <section className="sectionII">
            <div className="flex md:flex-row flex-col max-md:gap-4 justify-between">
              <div className="md:w-1/4 h-full max-md:hidden bg-bg  rounded-md ">
                 <Filter     />
              </div>
              <div className="md:w-3/4 flex flex-col items-center justify-between">
                <Link to="/shop">
                <Products     />
                </Link>
                <div className="my-5">
                  <Pagination />
                </div>
              </div>
            </div>
          </section>
          {/* <section className="sectionIII">
            <div className="">
              <h2 className="text-3xl">My Visits</h2>
              <div className="flex flex-wrap gap-6 p-6  ">
                <CardCategory />
                <CardCategory />
                <CardCategory />
                <CardCategory />
                <CardCategory />
              </div>
            </div>
          </section> */}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Category;
