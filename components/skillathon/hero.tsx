"use client";
import Link from 'next/link';
import { CgArrowLongRight } from 'react-icons/cg';
import { FaChevronDown } from 'react-icons/fa';
import { IoCheckmarkSharp } from 'react-icons/io5';

export default function Skillathon() {
    return (
        <section className="flex flex-col items-center justify-center bg-indigo-50 min-h-screen bg-cover bg-center p-4 mt-28 lg:mt-0" >
            <div className="max-w-4xl w-full flex flex-col lg:flex-row items-center lg:space-x-12">
                {/* Slanted background */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#030B1E] to-indigo-900 clip-slant z-0 min-h-screen"></div>
                {/* Left Section */}
                <div className="lg:w-1/2 space-y-6 z-10 text-center lg:text-left">
                    <h1 className="text-3xl lg:text-5xl font-bold text-purple-400">Skillathon 2024</h1>
                    <p className="text-base lg:text-xl">
                        Join our immersive event designed to challenge and connect innovators, bringing AI solutions to life.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex flex-col lg:flex-row items-center lg:items-start space-y-2 lg:space-y-0 lg:space-x-2">
                            <span className='border border-gray-200 p-1 rounded-full'><IoCheckmarkSharp className="text-purple-400" /></span>
                            <span><strong>Launch your project:</strong> Start your journey with our resources.</span>
                        </li>
                        <li className="flex flex-col lg:flex-row items-center lg:items-start space-y-2 lg:space-y-0 lg:space-x-2">
                            <span className='border border-gray-200 p-1 rounded-full'><IoCheckmarkSharp className="text-purple-400" /></span>
                            <span><strong>Network:</strong> Connect with like-minded innovators.</span>
                        </li>
                        <li className="flex flex-col lg:flex-row items-center lg:items-start space-y-2 lg:space-y-0 lg:space-x-2">
                            <span className='border border-gray-200 p-1 rounded-full'><IoCheckmarkSharp className="text-purple-400" /></span>
                            <span><strong>Win prizes:</strong> Exciting rewards await the top teams!</span>
                        </li>
                    </ul>
                </div>

                {/* Right Section (Card) */}
                <div className="lg:w-1/2 mt-10 lg:mt-0 bg-gray-900 p-4 rounded-xl shadow-lg text-center relative z-10">
                    <div className='border-2 rounded-xl overflow-hidden'>
                        <div className=' relative'>
                            <img src="grid-AI.webp" alt="" className='w-full' />
                            <div className='text-left absolute top-3 left-4'>
                                <img src="logo.png" alt="" width={140} />
                                <p className='text-xl lg:text-2xl font-semibold pt-8'>CUSIT.ai Skillathon 2024</p>
                                <p className='pt-2 lg:pt-4 text-md lg:text-lg text-blue-600'>AI For Everyone</p>
                            </div>
                        </div>

                        <div className="text-center">
                            <div className='flex items-center justify-center mb-[-20px] '>
                                <p className='text-3xl font-semibold'>16th</p>
                                <CgArrowLongRight size={90} className='px-4' />
                                <p className='text-3xl font-semibold'>25th</p>
                            </div>
                            <div className='flex justify-evenly text-sm lg:text-base'>
                                <p className='ml-5'>Nov 2024</p>
                                <p className='mr-3'>Nov 2024</p>
                            </div>
                        </div>
                        <p className="text-purple-400 mt-2 text-sm lg:text-base">Apply until 25.11.2024</p>
                        <p className="text-xs lg:text-sm mt-4">Join the event and work on your project alongside experts!</p>
                        <div className='mt-9 m-8'>
                            <Link href={"/register"} className="inline-block px-6 py-3 bg-purple-600 rounded-lg font-semibold text-sm lg:text-base">
                                Register Now
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
            <a href="#about" className='text-center flex justify-center'>
                <FaChevronDown className="mt-16 text-3xl text-gray-700 lg:text-slate-300 animate-bounce" />
            </a>

            {/* Custom CSS for slanted background */}
            <style jsx>{`
                .clip-slant {
                    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
                }
            `}</style>
        </section>
    );
}
