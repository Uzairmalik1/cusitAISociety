import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#030B1E] text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 space-y-4 md:space-y-0">

        {/* Social Links */}
        <div className="flex space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition duration-300">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com/cusit.ai?igsh=YzljYTk1ODg3Zg%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition duration-300">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition duration-300">
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-gray-300">
          <Link href="/" className="hover:text-white transition duration-300">Home</Link>
          <Link href="/skillathon" className="hover:text-white transition duration-300">Skillathon</Link>
          <Link href="/register" className="hover:text-white transition duration-300">Register</Link>
        </div>

        {/* Copyright */}
        <div className="text-gray-400 text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} cusit.ai. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
