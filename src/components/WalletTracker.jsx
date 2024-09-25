import React from 'react'
import Footer from './Footer'

const WalletTracker = () => {
  return (
    <div> 
     <div className='mt-18 flex   h-screen w-full justify-center items-center'>
        <div className='flex  flex-col justify-center  items-center px-6 py-6 rounded-[50px] uppercase text-white w-3/5 h-96 gap-6 border-t-yellow-500 border-r-blue-500 border-b-blue-500 border-l-yellow-500 border-8 border-white'>
         <div className=''>
            <p className='text-5xl font-extrabold flex justify-center items-center'>track  solana wallet</p>
            <div  className='mt-6 font-bold flex justify-center items-center ml-5 '>enter the addresss of any wallet and track  all the TRANSACTIONS  processed </div>
         </div>
         <div className='rounded-full w-1/3  h-12 px-1 py-1 flex justify-center items-center bg-blue-700 mt-8 text-black font-bold text-lg   relative overflow-hidden'>enter  wallet address</div>

         
        </div>
        
      </div>
       <div>
       <Footer></Footer>
       </div>
    </div>
  )
}

export default WalletTracker

