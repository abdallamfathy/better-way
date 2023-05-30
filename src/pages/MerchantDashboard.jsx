import React from 'react'
import MerchantOffers from '../components/MerchantPanel/MerchantOffers'
import MerchantPanel from '../components/MerchantPanel/MerchantPanel'
import MerchantPaper from '../components/MerchantPanel/MerchantPaper'

const MerchantDashboard = () => {
  return (
    <div className='m-5 md:my-20 md:mx-40 flex flex-col items-center'>
        <MerchantPanel/>
        <MerchantOffers/>
        <MerchantPaper/>
    </div>
  )
}

export default MerchantDashboard