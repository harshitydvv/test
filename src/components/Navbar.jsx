import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className=' h-fit w-full flex justify-between items-center m-auto py-4 fixed top-0 backdrop-blur-md z-20 px-6'>
        <div className='flex flex-row justify-center items-center gap-3 w-1/6'>
            <img
                src='/Lard_Vader.webp'
                className='h-12 w-16 '
            />
            <span className='text-white font-bold'>STARSOL TRACKER</span>
        </div>
        <div className='flex flex-row w-1/6 h-full justify-center items-center gap-6 '> 
            <ul  className="flex flex-row gap-6">
            <li>
                <Link to="/" className="text-white uppercase font-bold">Home</Link>
              </li>
              <li>
                <Link to = "/walletTracker" className="text-white uppercase font-bold" >Wallet Tracker</Link>
              </li>
              
            </ul>

        </div>
    </div>
  )
}

export default Navbar