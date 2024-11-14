"use client";
import Link from "next/link";
import { useState } from "react";
import { IoMenuOutline, IoClose } from "react-icons/io5";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Menu Icon */}
      <div className="flex absolute top-0 left-0 justify-between items-center p-3 w-full cursor-pointer z-10">
        {/* Logo */}
        <Link href={"/"} className="flex items-center">
          <img
            src="/logo.png"
            alt="cusit.ai Logo"
            width="150"
            height="150"
            className="rounded-xl cursor-pointer"
          />
        </Link>
        
        {/* Menu Icon */}
        <div className="text-white cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? "" : <IoMenuOutline size={40} />}
        </div>
      </div>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-20 flex flex-col items-center justify-center space-y-6 text-white text-2xl">
          <button onClick={toggleMenu} className="absolute top-4 right-4">
            <IoClose size={40} />
          </button>
          <Link href='/' className="cursor-pointer hover:text-purple-400 transition duration-300">Home</Link>
          <Link href='/skillathon' className="cursor-pointer hover:text-purple-400 transition duration-300">Skillathon</Link>
        </div>
      )}


    </>
  );
}
