import React from 'react'
import { AiOutlineCar } from 'react-icons/ai'
import { FaCaretSquareLeft, FaHospitalUser, FaMapMarkedAlt } from 'react-icons/fa'
import { categories } from '../assets/Constants'

const Categories = () => {
  return (
    <div className='flex flex-col items-start gap-4 m-5 text-white'>
        <div className='w-full h-full'>
            <ul className='flex flex-col gap- w-full h-full'>
                {/* {categories.map((category) => (
                    <div className='flex items-center gap-4 cursor-pointer  hover:text-btn w-full  h-12 '>
                    <li className='font-medium text-xl'><FaHospitalUser/></li>
                    <li className='text-lg font-medium' key={category.id}>{category.name}</li>
                    </div>
                ))} */}
                <div className='flex items-center gap-4 cursor-pointer  hover:text-btn w-full  h-12 '>
                    <li className='font-medium text-xl'><FaMapMarkedAlt/></li>
                    <li className='text-lg font-medium' >Super Market</li>
                    </div>
                <div className='flex items-center gap-4 cursor-pointer  hover:text-btn w-full  h-12 '>
                    <li className='font-medium text-xl'><FaCaretSquareLeft/></li>
                    <li className='text-lg font-medium' >Cafe</li>
                    </div>
                <div className='flex items-center gap-4 cursor-pointer  hover:text-btn w-full  h-12 '>
                    <li className='font-medium text-xl'><FaHospitalUser/></li>
                    <li className='text-lg font-medium' >Restaurant</li>
                    </div>
                <div className='flex items-center gap-4 cursor-pointer  hover:text-btn w-full  h-12 '>
                    <li className='font-medium text-xl'><FaHospitalUser/></li>
                    <li className='text-lg font-medium' >Cars</li>
                    </div>
                <div className='flex items-center gap-4 cursor-pointer  hover:text-btn w-full  h-12 '>
                    <li className='font-medium text-xl'><FaHospitalUser/></li>
                    <li className='text-lg font-medium' >Fashion</li>
                    </div>
                <div className='flex items-center gap-4 cursor-pointer  hover:text-btn w-full  h-12 '>
                    <li className='font-medium text-xl'><FaHospitalUser/></li>
                    <li className='text-lg font-medium' >Health Care</li>
                    </div>
                <div className='flex items-center gap-4 cursor-pointer  hover:text-btn w-full  h-12 '>
                    <li className='font-medium text-xl'><FaHospitalUser/></li>
                    <li className='text-lg font-medium' >Education</li>
                    </div>
                <div className='flex items-center gap-4 cursor-pointer  hover:text-btn w-full  h-12 '>
                    <li className='font-medium text-xl'><FaHospitalUser/></li>
                    <li className='text-lg font-medium' >Jewerly</li>
                    </div>
                <div className='flex items-center gap-4 cursor-pointer  hover:text-btn w-full  h-12 '>
                    <li className='font-medium text-xl'><FaHospitalUser/></li>
                    <li className='text-lg font-medium' >Net Cafe & Gaming</li>
                    </div>
                <div className='flex items-center gap-4 cursor-pointer  hover:text-btn w-full  h-12 '>
                    <li className='font-medium text-xl'><FaHospitalUser/></li>
                    <li className='text-lg font-medium' >Others</li>
                    </div>
            </ul>
        </div>
    </div>
  )
}

export default Categories