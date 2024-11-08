import { CgArrowLongRight } from 'react-icons/cg';
import { FaCheckCircle, FaChevronDown } from 'react-icons/fa';

export default function Skillathon() {
    return (
        <div className="">
            <div className="max-w-4xl w-full flex flex-col lg:flex-row items-center lg:space-x-12">
                {/* Left Section */}
                <div className="lg:w-1/2 space-y-6">
                    <h1 className="text-4xl lg:text-5xl font-bold text-purple-400">Skillathon 2024</h1>
                    <p className="text-lg lg:text-xl">
                        Join our immersive event designed to challenge and connect innovators, bringing AI solutions to life.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center space-x-2">
                            <FaCheckCircle className="text-purple-400" />
                            <span><strong>Launch your project:</strong> Start your journey with our resources.</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaCheckCircle className="text-purple-400" />
                            <span><strong>Network:</strong> Connect with like-minded innovators.</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaCheckCircle className="text-purple-400" />
                            <span><strong>Win prizes:</strong> Exciting rewards await the top teams!</span>
                        </li>
                    </ul>
                </div>

                {/* Right Section (Card) */}
                <div className="lg:w-1/2 mt-10 lg:mt-0 bg-gray-900 p-4 rounded-xl shadow-lg text-center relative">
                    <div className='border-2 rounded-xl overflow-hidden'>
                        <div className=' relative'>
                            <img src="grid-AI.webp" alt="" className='' />
                            <div className='text-left absolute top-3 left-4'>
                                <img src="logo.png" alt="" width={140} />
                                <p className='text-2xl font-semibold pt-11'>CUSIT.ai Skillathon 2024</p>
                                <p className=' pt-10 text-lg text-blue-600'>AI For Everyone</p>
                            </div>
                        </div>

                        <div className="">
                            <div className='flex items-center justify-center mb-[-20px] text-5xl font-semibold'>
                                26th
                                <CgArrowLongRight size={90} className='px-4' />
                                28th
                            </div>
                            <div className='flex justify-around '>
                                <p>April 2024</p>
                                <p>April 2024</p>
                            </div>
                        </div>
                        <p className="text-purple-400 mt-2">Apply until 21.04.2024</p>
                        <p className="text-sm mt-4">Join the event and work on your project alongside experts!</p>
                        <button className="mt-6 m-5 px-6 py-3 bg-purple-600 rounded-lg font-semibold">
                            Application is Closed
                        </button>
                    </div>

                </div>
            </div>
            <a href="#about" className='text-center flex justify-center'>
                <FaChevronDown className="mt-16 text-3xl animate-bounce" />
            </a>
        </div>
    );
}
