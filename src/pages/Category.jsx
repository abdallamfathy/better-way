import { CardCategory } from './CardCategory';
import React from 'react'
import { Footer, Navbar } from '../components'
import zara from "../assets/topPlaces/zara.jpg";
import brand from "../assets/topBrands/brand.jpg";
import { RiStarSFill } from 'react-icons/ri';
import Pagination from './Pagination';


const Category = () => {
  return (
    <>
        <Navbar/>
        <div className='mx-20 my-8'>
            <div className='flex flex-col gap-6 text-txt'>
        <section className='sectionI'>
            <div className='w-full h-96'>
                <img src={zara} alt="image" className='h-full w-full object-cover object-center'/>
            </div>
        </section>
        <section className='sectionII'>
            <div className='flex justify-between'>
                <div className='w-1/4  bg-bg  rounded-md '>
                    <div className='flex flex-col filter'>
                    <div className='CATEGORIES flex flex-col justify-center items-start p-4 border-b border-txt h-64'>
                                <h1 className='text-3xl font-bold'>CATEGORIES</h1>
                                <table className='m-5 flex flex-col gap-2 w-64 overflow-y-auto'>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-2xl'>
                                            Super Market
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-2xl'>
                                            Fashion
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-2xl'>
                                            Eductaion
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-2xl'>
                                            Cafe & Restaurant
                                        </div>
                                        </div>
                                    </tr>
                                </table>
                            </div>
                            <div className='CITY flex flex-col justify-center items-start p-4 border-b border-txt h-64  '>
                                <h1 className='text-3xl font-bold'>GOVERNORATE</h1>
                                <table className='m-5 flex flex-col gap-2 h-full w-64 overflow-y-auto'>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-2xl'>
                                            Cairo
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-2xl'>
                                            Alexandira
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-2xl'>
                                            Ismailia
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-2xl'>
                                            Suez
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-2xl'>
                                            Cairo
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-2xl'>
                                            Alexandira
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-2xl'>
                                            Ismailia
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-2xl'>
                                            Suez
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-2xl'>
                                            Cairo
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-2xl'>
                                            Alexandira
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-2xl'>
                                            Ismailia
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-2xl'>
                                            Suez
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-2xl'>
                                            Cairo
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-2xl'>
                                            Alexandira
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-2xl'>
                                            Ismailia
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-2xl'>
                                            Suez
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-2xl'>
                                            Cairo
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-2xl'>
                                            Alexandira
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-2xl'>
                                            Ismailia
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-2xl'>
                                            Suez
                                        </div>
                                        </div>
                                    </tr>
                                </table>
                            </div>
                            
                            <div className='AREA flex flex-col justify-center items-start p-4 border-b border-txt h-64'>
                                <h1 className='text-3xl font-bold'>AREA</h1>
                                <table className='m-5 flex flex-col gap-2 w-64 overflow-y-auto'>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-2xl'>
                                            Misr El gededa
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-2xl'>
                                            Shubra
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-2xl'>
                                            Tagamo3
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-2xl'>
                                            Zayed
                                        </div>
                                        </div>
                                    </tr>
                                </table>
                            </div>
                            <div className='RATING flex flex-col justify-center items-start p-4 border-b border-txt'>
                                <h1 className='text-3xl font-bold'>PRODUCT RATING</h1>
                                <table className='m-5 flex flex-col gap-2'>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="radio" name="" id="" />
                                        <div className='flex justify-between text-btn text-2xl'>
                                        <RiStarSFill />
                                        <RiStarSFill />
                                        <RiStarSFill />
                                        <RiStarSFill />
                                        <RiStarSFill className='text-txt' />
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="radio" name="" id="" />
                                        <div className='flex justify-between text-btn text-2xl'>
                                        <RiStarSFill />
                                        <RiStarSFill />
                                        <RiStarSFill />
                                        <RiStarSFill className='text-txt'/>
                                        <RiStarSFill className='text-txt'/>
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="radio" name="" id="" />
                                        <div className='flex justify-between text-btn text-2xl'>
                                        <RiStarSFill />
                                        <RiStarSFill />
                                        <RiStarSFill className='text-txt'/>
                                        <RiStarSFill className='text-txt'/>
                                        <RiStarSFill className='text-txt'/>
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="radio" name="" id="" />
                                        <div className='flex justify-between text-btn text-2xl'>
                                        <RiStarSFill />
                                        <RiStarSFill className='text-txt'/>
                                        <RiStarSFill className='text-txt'/>
                                        <RiStarSFill className='text-txt'/>
                                        <RiStarSFill className='text-txt'/>
                                        </div>
                                        </div>
                                    </tr>
                                </table>
                            </div>
                            <div className='OFFERS flex flex-col justify-center items-start p-4 border-b border-txt'>
                                <h1 className='text-3xl font-bold'>OFFERS</h1>
                                <table className='m-5 flex flex-col gap-2'>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="radio" name="" id="" />
                                        <div className='flex justify-between text-txt text-2xl'>
                                            80% or more
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="radio" name="" id="" />
                                        <div className='flex justify-between text-txt text-2xl'>
                                            60% or more
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="radio" name="" id="" />
                                        <div className='flex justify-between text-txt text-2xl'>
                                            40% or more
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="radio" name="" id="" />
                                        <div className='flex justify-between text-txt text-2xl'>
                                            20% or more
                                        </div>
                                        </div>
                                    </tr>
                                </table>
                            </div> 
                            <div className='GAINED flex flex-col justify-center items-start p-4'>
                                <h1 className='text-3xl font-bold'>GAINED</h1>
                                <table className='m-5 flex flex-col gap-2'>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="radio" name="" id="" />
                                        <div className='flex justify-between text-txt text-2xl'>
                                            10 or more
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="radio" name="" id="" />
                                        <div className='flex justify-between text-txt text-2xl'>
                                            5 or more
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="radio" name="" id="" />
                                        <div className='flex justify-between text-txt text-2xl'>
                                            4 or more
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="radio" name="" id="" />
                                        <div className='flex justify-between text-txt text-2xl'>
                                            2 or more
                                        </div>
                                        </div>
                                    </tr>
                                </table>
                            </div> 

                    </div>
                </div>
                <div className='w-3/4 flex flex-col items-center justify-between'>
                    <div className='flex  flex-wrap justify-end gap-1 '>
                      <CardCategory/>
                      <CardCategory/>
                      <CardCategory/>
                      <CardCategory/>
                      <CardCategory/>
                      <CardCategory/>
                      <CardCategory/>
                      <CardCategory/>
                      <CardCategory/>
                      <CardCategory/>
                      <CardCategory/>
                      <CardCategory/>
                      <CardCategory/>
                      <CardCategory/>
                      <CardCategory/>
                      <CardCategory/>
                      <CardCategory/>
                      <CardCategory/>
                      <CardCategory/>
                      <CardCategory/>
                    </div>
                    <div>
                        <Pagination/>
                    </div>
                </div>
            </div>
        </section>
        <section className='sectionIII'>
            <div className=''>
                <h2 className='text-3xl'>Recently Visited</h2>
                <div className='flex flex-wrap gap-4 p-6  '>
                        <CardCategory   />
                        <CardCategory   />
                        <CardCategory   />
                        <CardCategory   />
                        <CardCategory   />
                </div>
            </div>
        </section>
        </div>
        </div>
        <Footer/>
    </>
  )
}
  export default Category