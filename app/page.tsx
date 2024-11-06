"use client"
import Menu from '@/components/Menu';
import { FaChevronDown } from 'react-icons/fa';

export default function HomePage() {

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#030B1E] relative">

      {/* Background Sphere Effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <img
          src="/cusitBuilding.gif"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* <Menu /> */}
      <Menu/>

      {/* Main Content */}
      <div className="z-10 text-center text-white space-y-44">
        <div className="flex flex-col items-center pb-3">
          <img src="/logo.png" alt="Logo" width={400} />
          {/* Coming Soon Text */}
          <p className="text-5xl font-extrabold tracking-wider pt-3 text-white opacity-90 animate-pulse drop-shadow-lg">
            Coming Soon
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          
        </div>
      </div>

      {/* Scroll Down Icon */}
      <button className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white text-4xl" title="Scroll down">
      <FaChevronDown className="mt-16 text-3xl animate-bounce" />
      </button>
    </div>
  );
}
