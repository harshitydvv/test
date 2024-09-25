import { MoveRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from './Footer';
import "./home.css"
import Navbar from './Navbar';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
    {/* <Navbar></Navbar> */}
    <div className="h-screen w-full bg-[#040112]">
      <div className="absolute top-[-174px] left-0 h-1/2 w-full rotate-180 inset-0 opacity-70">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
      </div>

      <div className="flex flex-col justify-center items-center h-full z-10 gap-5 ">
        <h className="text-white text-6xl font-bold ">INTRODUCING STARSOL TRACKER</h>
        <p className="text-white text-center uppercase mt-6 font-bold">
          Easily Track and Manage Your Assets with starsol, the Web3 Dashboard.
        </p>
        <img
          src="/AnakinRevengeOfThePork.webp"
          alt="background"
          width={300}
          height={300}
          className="object-contain absolute bottom-0 right-0 z-[2]"
        />
        <img
          src="/pig.png"
          alt="background"
          width={300}
          height={300}
          className="object-contain absolute bottom-0 left-0 z-[2]"
        />
      </div>

      <div className="w-full h-full  flex justify-center items-center bg-[#040112] ">
        <div
          className="flex-col items-center px-6 py-6 z-4 border-8 border-white w-3/4 h-2/3 rounded-3xl border-t-yellow-500 border-r-blue-500 border-b-blue-500 border-l-yellow-500 gap-4 "
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <p className="flex justify-center text-white px-6 py-6 font-bold text-5xl">
            SOLANA TRANSACTIONS
          </p>
          <div className="flex gap-3 flex-row px-8 py-10">
            <div className="w-1/3 h-1/3 border-x border-y border-slate-700 rounded-lg px-4 py-3">
              <div className="text-white px-8 py-5 flex flex-col gap-6 mt-5">
                <p className="font-extrabold text-xl">PROFILE</p>
                <p className="text-2sm font-bold text-slate-300">
                  PROFILE DESCRIPTION
                </p>
              </div>
              <div className="text-white flex flex-row justify-center items-center px-8 gap-3 border-x border-y border-blue-700 rounded-full w-40 h-3/4 mb-8 mx-8">
                <div className="text-sm mt-2 mb-2">TRY NOW</div>
                <MoveRight size={15} />
              </div>
            </div>

            <div className="w-1/3 h-1/3 border-x border-y border-slate-700 rounded-lg px-4 py-3">
              <div className="text-white px-8 py-5 flex flex-col gap-6 mt-5">
                <p className="font-extrabold text-xl">WALLET</p>
                <p className="text-2sm font-bold text-slate-300">
                  WALLET DESCRIPTION
                </p>
              </div>
              <div className="text-white flex flex-row justify-center items-center px-8 gap-3 border-x border-y border-blue-700 rounded-full w-40 h-3/4 mb-8 mx-8">
                <div className="text-sm mt-2 mb-2">TRY NOW</div>
                <MoveRight size={15} />
              </div>
            </div>

            <div className="w-1/3 h-1/3 border-x border-y border-slate-700 rounded-lg px-4 py-3">
              <div className="text-white px-8 py-5 flex flex-col gap-6 mt-5">
                <p className="font-extrabold text-xl">TRANSACTIONS</p>
                <p className="text-2sm font-bold text-slate-300">
                  TRANSACTIONS
                </p>
              </div>
              <div className="text-white flex flex-row justify-center items-center px-8 gap-3 border-x border-y border-blue-700 rounded-full w-40 h-3/4 mb-8 mx-8">
                <div className="text-sm mt-2 mb-2">TRY NOW</div>
                <MoveRight size={15} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className='w-full h-px  bg-gray-200 border-0 dark:bg-gray-700'></hr>
      <Footer />
    </div>
    </div>
  );
};

export default Home;
