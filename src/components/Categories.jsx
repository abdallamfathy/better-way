import React from 'react'
import { AiOutlineCar } from 'react-icons/ai'
import { categories } from '../assets/Constants'

const Categories = () => {
  return (
    <div className='flex flex-col items-start gap-4 m-5 text-white'>
        <div>
            <h1 className='text-2xl font-semibold mb-5 -ml-2'>OUR CATEGORIES</h1>
        </div>
        <div>
            <ul className='flex flex-col gap-6'>
                {categories.map((category) => (
                    <div className='flex items-center gap-2'>
                    <li><AiOutlineCar/></li>
                    <li className='text-lg font-semibold' key={category.id}>{category.name}</li>
                    </div>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Categories