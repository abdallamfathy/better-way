import React from 'react'
import { AiOutlineCar } from 'react-icons/ai'
import { FaCaretSquareLeft, FaHospitalUser, FaMapMarkedAlt, FaRing } from 'react-icons/fa'
import { categories } from '../../assets/Constants'
import { faBars, faBuilding, faCake, faCar, faDiamond, faDiamondTurnRight, faGamepad, faGem, faGraduationCap, faHeartCircleCheck, faHome, faMugHot, faRibbon, faRing, faSchool, faShirt, faShop, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Others from '../Others';
import Hero from './Hero';
import SubCategory from './SubCategory';

const Categories = ({show}) => {

    // const [show, setShow] = React.useState(true);

    const toggle = () => {
            // setShow(!show);
            console.log(show);
            // <SubCategory show={true}/>
        }
        return (
            
            <div className='flex flex-col items-start text-white m-4'>
          <div className='w-full h-full'>
              <ul className='flex flex-col   w-full h-full'>
                  {/* {categories.map((category) => (
                      <div className='flex items-center gap-4 cursor-pointer  hover:text-btn w-full  h-12 '>
                      <li className='font-medium text-xl'><FaHospitalUser/></li>
                      <li className='text-lg font-medium' key={category.id}>{category.name}</li>
                      </div>
                  ))} */}
                  <div className='flex items-center  gap-4 cursor-pointer  hover:text-btn w-full  h-12 '>
                      <li className='font-medium text-xl'><FontAwesomeIcon icon={faShop} /></li>
                      <li className='text-lg font-medium' >Super Market</li>
                      </div>
                  <div className='flex items-center gap-4 cursor-pointer  hover:text-btn w-full  h-12 '>
                      <li className='font-medium text-xl'><FontAwesomeIcon icon={faMugHot} /></li>
                      <li className='text-lg font-medium' >Cafe</li>
                      </div>
                  <div className='flex items-center gap-4 cursor-pointer  hover:text-btn w-full  h-12 '>
                      <li className='font-medium text-xl'><FontAwesomeIcon icon={faUtensils} /></li>
                      <li className='text-lg font-medium' >Restaurant</li>
                      </div>
                  <div className='flex items-center gap-4 cursor-pointer  hover:text-btn w-full  h-12 '>
                      <li className='font-medium text-xl'><FontAwesomeIcon icon={faCar} /></li>
                      <li className='text-lg font-medium' >Cars</li>
                      </div>
                  <div className='flex items-center gap-4 cursor-pointer  hover:text-btn w-full  h-12 '>
                      <li className='font-medium text-xl'><FontAwesomeIcon icon={faShirt} /></li>
                      <li className='text-lg font-medium' >Fashion</li>
                      </div>
                  <div className='flex items-center gap-4 cursor-pointer  hover:text-btn w-full  h-12 '>
                      <li className='font-medium text-xl'><FontAwesomeIcon icon={faHeartCircleCheck} /></li>
                      <li className='text-lg font-medium' >Health Care</li>
                      </div>
                  <div className='flex items-center gap-4 cursor-pointer  hover:text-btn w-full  h-12 '>
                      <li className='font-medium text-xl'><FontAwesomeIcon icon={faGraduationCap} /></li>
                      <li className='text-lg font-medium' >Education</li>
                      </div>
                  <div className='flex items-center gap-4 cursor-pointer  hover:text-btn w-full  h-12 '>
                      <li className='font-medium text-xl'><FontAwesomeIcon icon={faGem} /></li>
                      <li className='text-lg font-medium' >Jewerly</li>
                      </div>
                  <div className='flex items-center gap-4 cursor-pointer  hover:text-btn w-full  h-12 '>
                      <li className='font-medium text-xl'><FontAwesomeIcon icon={faGamepad} /></li>
                      <li className='text-lg font-medium' >Net Cafe & Gaming</li>
                      </div>
                  <div className='flex items-center gap-4 cursor-pointer  hover:text-btn w-full  h-12'
                  onMouseEnter={() => toggle()}
                  onMouseLeave={() => toggle()}
                  >   
                  {/* <Hero state={show}/>     */}
                      <li className='font-medium text-xl'
                       >
                      <FontAwesomeIcon icon={faBars} /></li>
                      {/* <li className='text-lg font-medium' onClick={toggle}>Others</li> */}
                      </div>
              </ul>
          </div>
                      {/* {show &&
                      <div className='translate-x-56 -translate-y-96 w-3/4'>
                          <Others/>
                      </div> } */}
      </div>
      )
    }
    
    export default Categories