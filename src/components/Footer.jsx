import "./footer.css"

const Footer = () => {
  return (
    <div className="relative w-full w-full z-10 bg-[#040112] "> 
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between items-center justify-around px-32 p-6 py-8 ">
    <div className="flex justify-center items-center ml-12">
      <img
        src="/Lard_Vader.webp"
        alt="Logo"
        className="h-12 w-14"
      />
      <span className="text-gray-300 font-bold ml-3 text-xl tracking-wider uppercase xyz">
        Starsol Tracker
      </span>
    </div>
    <div className="flex justify-center items-center space-x-8 mt-4 sm:mt-0  text-white tracking-wider uppercase mr-12 go">
      <p className="font-medium hover:text-gray-400 cursor-pointer">About</p>
      <p className="font-medium hover:text-gray-400 cursor-pointer">Privacy Policy</p>
      <p className="font-medium hover:text-gray-400 cursor-pointer">Contact</p>
    </div>
  </div>

  <hr className="border-gray-700  w-3/4 mx-auto " />

<div className="w-full h-24 flex justify-center items-center">
  <p className="w-full text-center text-md mb-4 text-white tracking-wider uppercase font-semibold tat">
    Made with 💀 by Harshit
  </p>

</div>
</div>

  
  )
}

export default Footer