import React from 'react'
import { useCatContext } from './CatContext';

const SubCategory = () => {
    const {show} = useCatContext();
    console.log(show);
  return (
    <div className='flex  justify-center items-center mx-40 z-50'>
    <div className='w-1/4  h-96 -m-6'>
        <h2>{""}</h2>
    </div>
    { show && <div className='w-3/4 bg-gray-500 h-96 '>
asd
    </div>}
</div>
  )
}

export default SubCategory