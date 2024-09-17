import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black h-fit w-full flex justify-between items-center m-auto py-4 fixed top-0 backdrop-blur-md z-20 px-6'>
        <div className='flex flex-row justify-center items-center gap-3 w-1/6'>
            <img
                src='/Lard_Vader.webp'
                className='h-14 w-14 '
            />
            <span className='text-white'>STARSOL TRACKER</span>
        </div>
        <div className='flex flex-row w-1/6 h-full justify-center items-center gap-6 '> 
            <p className='text-white'>HOME</p>
            <p className='text-white'>WALLET TRACKER</p>
        </div>
    </div>
  )
}

export default Navbar