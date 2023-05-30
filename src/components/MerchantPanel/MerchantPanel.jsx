import React from 'react'

const MerchantPanel = () => {
  return (
     <div className=' text-white'>
     <h2 className='md:text-5xl text-2xl font-bold text-left '>Merchant Settings</h2>
     <div className='h-full w-full bg-web/5 md:py-20 py-10'>
       <form className='flex flex-col flex-wrap gap-8 w-full bg-bg md:p-10 p-2 rounded-2xl'>

           <div className='flex md:flex-row flex-col gap-10 justify-around'>
               <div className='md:w-96 flex flex-col'>
                    <label htmlFor="first_name" className='m-2'>First Name</label>
                    <input type="text" name="first_name" className='bg-gray-400 rounded-lg border-gray-300' /> 
               </div>
               <div className='md:w-96 flex flex-col'>
               <label htmlFor="last_name" className='m-2'>Last Name</label>
                    <input type="text" name="last_name" className='bg-gray-400 rounded-lg border-gray-300' /> 
               </div>
           </div>
           <div className='flex md:flex-row flex-col gap-10 justify-around'>
               <div className='md:w-96 flex flex-col'>
                    <label htmlFor="email" className='m-2'>Email</label>
                    <input type="email" name="email" className='bg-gray-400 rounded-lg border-gray-300' /> 
               </div>
               <div className='md:w-96 flex flex-col'>
               <label htmlFor="password" className='m-2'>Password</label>
                    <input type="password" name="password" className='bg-gray-400 rounded-lg border-gray-300' /> 
               </div>
           </div>
           <div className='flex md:flex-row flex-col gap-10 justify-around'>
               <div className='md:w-96 flex flex-col'>
                    <label htmlFor="username" className='m-2'>UserName</label>
                    <input type="text" name="username" className='bg-gray-400 rounded-lg border-gray-300' /> 
               </div>
               <div className='md:w-96 flex flex-col'>
               <label htmlFor="mobile" className='m-2'>Mobile Number</label>
                    <input type="number" name="mobile" className='bg-gray-400 rounded-lg border-gray-300' /> 
               </div>
           </div>
           <div className='flex md:flex-row flex-col gap-10 md:ml-[77px]'>
               <div className='md:w-96 flex flex-col'>
                    <label htmlFor="profile_image" className='m-2'>Profile Image</label>
                    <input type="file" name="profile_image" className='bg-gray-400 rounded-lg border-gray-300' /> 
               </div>
           </div>
           <button className='bg-btn p-4 rounded-md text-lg'>Save</button>
       </form>
     </div>
   </div>
  )
}

export default MerchantPanel