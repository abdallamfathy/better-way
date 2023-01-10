import React from 'react'
import { AiOutlineCar } from 'react-icons/ai'
import { categories } from '../assets/Constants'

const Categories = () => {
  return (
    <div className='flex flex-col items-start gap-4 m-5 text-white'>
        <div>
            <h1 className='text-2xl font-semibold mb-5 -ml-2'>OUR CATEGORIES</h1>
        </div>
        <div className='w-full h-full'>
            <ul className='flex flex-col gap- w-full h-full'>
                {categories.map((category) => (
                    <div className='flex items-center gap-2 hover:bg-slate-300 hover:text-black w-full  h-12 '>
                    <li><AiOutlineCar/></li>
                    <li className='text-lg font-normal' key={category.id}>{category.name}</li>
                    </div>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Categories