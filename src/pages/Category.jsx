import React from 'react'
import { Footer, Navbar } from '../components'
import zara from "../assets/topPlaces/zara.jpg";
import brand from "../assets/topBrands/brand.jpg";
import { RiStarSFill } from 'react-icons/ri';


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
            <div className='flex justify-between gap-4'>
                <div className='w-1/4 h-full bg-bg  rounded-md '>
                    <div className='flex flex-col filter'>
                            <div className='CITY flex flex-col justify-center items-start p-4 border-b border-txt'>
                                <h1 className='text-2xl font-bold'>CITY</h1>
                                <table className='m-5 flex flex-col gap-2'>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-xl'>
                                            Cairo
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-xl'>
                                            Alexandira
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-xl'>
                                            Ismailia
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <div className='flex justify-between text-xl'>
                                            Suez
                                        </div>
                                        </div>
                                    </tr>
                                </table>
                            </div>
                            <div className='RATING flex flex-col justify-center items-start p-4 border-b border-txt'>
                                <h1 className='text-2xl font-bold'>PRODUCT RATING</h1>
                                <table className='m-5 flex flex-col gap-2'>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="radio" name="" id="" />
                                        <div className='flex justify-between text-btn text-xl'>
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
                                        <div className='flex justify-between text-btn text-xl'>
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
                                        <div className='flex justify-between text-btn text-xl'>
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
                                        <div className='flex justify-between text-btn text-xl'>
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
                            <div className='OFFERS flex flex-col justify-center items-start p-4'>
                                <h1 className='text-2xl font-bold'>OFFERS</h1>
                                <table className='m-5 flex flex-col gap-2'>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="radio" name="" id="" />
                                        <div className='flex justify-between text-txt text-xl'>
                                            80% or more
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="radio" name="" id="" />
                                        <div className='flex justify-between text-txt text-xl'>
                                            60% or more
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="radio" name="" id="" />
                                        <div className='flex justify-between text-txt text-xl'>
                                            40% or more
                                        </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className='flex gap-4 items-center'>
                                        <input type="radio" name="" id="" />
                                        <div className='flex justify-between text-txt text-xl'>
                                            20% or more
                                        </div>
                                        </div>
                                    </tr>
                                </table>
                            </div> 

                    </div>
                </div>
                <div className='w-3/4'>
                    <div className='flex flex-wrap gap-1'>
                        <div className=' h-80 w-72 flex flex-col justify-start gap-4 items-start'>
                            <img src={brand} alt="brand" className='self-center'/>
                            <div className='flex flex-col gap-1 p-1'>
                                <h2 className='text-2xl'>Flamingo Cafe</h2>
                                <div className='text-btn text-xl flex'>
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill className='text-txt' />
                                </div>
                                <h2>Cairo</h2>
                            </div>
                        </div>
                        <div className=' h-80 w-72 flex flex-col justify-start gap-4 items-start'>
                            <img src={brand} alt="brand" className='self-center'/>
                            <div className='flex flex-col gap-1 p-1'>
                                <h2 className='text-2xl'>Flamingo Cafe</h2>
                                <div className='text-btn text-xl flex'>
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill className='text-txt' />
                                </div>
                                <h2>Cairo</h2>
                            </div>
                        </div>
                        <div className=' h-80 w-72 flex flex-col justify-start gap-4 items-start'>
                            <img src={brand} alt="brand" className='self-center'/>
                            <div className='flex flex-col gap-1 p-1'>
                                <h2 className='text-2xl'>Flamingo Cafe</h2>
                                <div className='text-btn text-xl flex'>
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill className='text-txt' />
                                </div>
                                <h2>Cairo</h2>
                            </div>
                        </div>
                        <div className=' h-80 w-72 flex flex-col justify-start gap-4 items-start'>
                            <img src={brand} alt="brand" className='self-center'/>
                            <div className='flex flex-col gap-1 p-1'>
                                <h2 className='text-2xl'>Flamingo Cafe</h2>
                                <div className='text-btn text-xl flex'>
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill className='text-txt' />
                                </div>
                                <h2>Cairo</h2>
                            </div>
                        </div>
                        <div className=' h-80 w-72 flex flex-col justify-start gap-4 items-start'>
                            <img src={brand} alt="brand" className='self-center'/>
                            <div className='flex flex-col gap-1 p-1'>
                                <h2 className='text-2xl'>Flamingo Cafe</h2>
                                <div className='text-btn text-xl flex'>
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill className='text-txt' />
                                </div>
                                <h2>Cairo</h2>
                            </div>
                        </div>
                        <div className=' h-80 w-72 flex flex-col justify-start gap-4 items-start'>
                            <img src={brand} alt="brand" className='self-center'/>
                            <div className='flex flex-col gap-1 p-1'>
                                <h2 className='text-2xl'>Flamingo Cafe</h2>
                                <div className='text-btn text-xl flex'>
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill className='text-txt' />
                                </div>
                                <h2>Cairo</h2>
                            </div>
                        </div>
                        <div className=' h-80 w-72 flex flex-col justify-start gap-4 items-start'>
                            <img src={brand} alt="brand" className='self-center'/>
                            <div className='flex flex-col gap-1 p-1'>
                                <h2 className='text-2xl'>Flamingo Cafe</h2>
                                <div className='text-btn text-xl flex'>
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill className='text-txt' />
                                </div>
                                <h2>Cairo</h2>
                            </div>
                        </div>
                        <div className=' h-80 w-72 flex flex-col justify-start gap-4 items-start'>
                            <img src={brand} alt="brand" className='self-center'/>
                            <div className='flex flex-col gap-1 p-1'>
                                <h2 className='text-2xl'>Flamingo Cafe</h2>
                                <div className='text-btn text-xl flex'>
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill className='text-txt' />
                                </div>
                                <h2>Cairo</h2>
                            </div>
                        </div>
                        <div className=' h-80 w-72 flex flex-col justify-start gap-4 items-start'>
                            <img src={brand} alt="brand" className='self-center'/>
                            <div className='flex flex-col gap-1 p-1'>
                                <h2 className='text-2xl'>Flamingo Cafe</h2>
                                <div className='text-btn text-xl flex'>
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill className='text-txt' />
                                </div>
                                <h2>Cairo</h2>
                            </div>
                        </div>
                        <div className=' h-80 w-72 flex flex-col justify-start gap-4 items-start'>
                            <img src={brand} alt="brand" className='self-center'/>
                            <div className='flex flex-col gap-1 p-1'>
                                <h2 className='text-2xl'>Flamingo Cafe</h2>
                                <div className='text-btn text-xl flex'>
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill className='text-txt' />
                                </div>
                                <h2>Cairo</h2>
                            </div>
                        </div>
                        <div className=' h-80 w-72 flex flex-col justify-start gap-4 items-start'>
                            <img src={brand} alt="brand" className='self-center'/>
                            <div className='flex flex-col gap-1 p-1'>
                                <h2 className='text-2xl'>Flamingo Cafe</h2>
                                <div className='text-btn text-xl flex'>
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill className='text-txt' />
                                </div>
                                <h2>Cairo</h2>
                            </div>
                        </div>
                        <div className=' h-80 w-72 flex flex-col justify-start gap-4 items-start'>
                            <img src={brand} alt="brand" className='self-center'/>
                            <div className='flex flex-col gap-1 p-1'>
                                <h2 className='text-2xl'>Flamingo Cafe</h2>
                                <div className='text-btn text-xl flex'>
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill className='text-txt' />
                                </div>
                                <h2>Cairo</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='sectionIII'>
            <div className=''>
                <h2 className='text-2xl'>Recently Visited</h2>
                <div className='flex gap-1 p-4'>
                <div className=' h-80 w-72 flex flex-col justify-start gap-4 items-start'>
                            <img src={brand} alt="brand" className='self-center'/>
                            <div className='flex flex-col gap-1 p-1'>
                                <h2 className='text-2xl'>Flamingo Cafe</h2>
                                <div className='text-btn text-xl flex'>
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill className='text-txt' />
                                </div>
                                <h2>Cairo</h2>
                            </div>
                        </div>
                        <div className=' h-80 w-72 flex flex-col justify-start gap-4 items-start'>
                            <img src={brand} alt="brand" className='self-center'/>
                            <div className='flex flex-col gap-1 p-1'>
                                <h2 className='text-2xl'>Flamingo Cafe</h2>
                                <div className='text-btn text-xl flex'>
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill className='text-txt' />
                                </div>
                                <h2>Cairo</h2>
                            </div>
                        </div>
                        <div className=' h-80 w-72 flex flex-col justify-start gap-4 items-start'>
                            <img src={brand} alt="brand" className='self-center'/>
                            <div className='flex flex-col gap-1 p-1'>
                                <h2 className='text-2xl'>Flamingo Cafe</h2>
                                <div className='text-btn text-xl flex'>
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill className='text-txt' />
                                </div>
                                <h2>Cairo</h2>
                            </div>
                        </div>
                        <div className=' h-80 w-72 flex flex-col justify-start gap-4 items-start'>
                            <img src={brand} alt="brand" className='self-center'/>
                            <div className='flex flex-col gap-1 p-1'>
                                <h2 className='text-2xl'>Flamingo Cafe</h2>
                                <div className='text-btn text-xl flex'>
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill className='text-txt' />
                                </div>
                                <h2>Cairo</h2>
                            </div>
                        </div>
                        <div className=' h-80 w-72 flex flex-col justify-start gap-4 items-start'>
                            <img src={brand} alt="brand" className='self-center'/>
                            <div className='flex flex-col gap-1 p-1'>
                                <h2 className='text-2xl'>Flamingo Cafe</h2>
                                <div className='text-btn text-xl flex'>
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill className='text-txt' />
                                </div>
                                <h2>Cairo</h2>
                            </div>
                        </div>
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