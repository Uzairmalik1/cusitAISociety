"use client"
import Footer from '@/components/footer';
import Menu from '@/components/Menu';
import Team from '@/components/Team';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';

export default function HomePage() {

  return (
    <>
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
        <Menu />

        {/* Main Content */}
        <div className="z-10 text-center text-white space-y-16 md:space-y-32">
          <div className="flex flex-col items-center pb-40">
            <img src="/logo.png" alt="Logo" width={400} className='w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3' />

            <Link href={""} className="mt-6 m-5 px-4 py-2 md:px-6 md:py-3 bg-transparent hover:bg-purple-600 rounded-lg border-2 border-white font-semibold text-white transition duration-300 ease-in-out transform hover:scale-105">
              Become a Member
            </Link>
          </div>

        </div>

        {/* Scroll Down Icon */}
        <a href="#about" className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white text-4xl" title="Scroll down">
          <FaChevronDown className="mt-16 text-3xl animate-bounce" />
        </a>
      </div>

      <section id='about' className="flex md:flex-row justify-center items-center h-full p-6 md:p-10 lg:p-20 bg-indigo-50 relative">

        {/* Sideline with Rotated Text */}
        <div className="md:flex hidden flex-col h-[600px] items-center relative ">
          <div className="border-l-2 border-black h-full absolute top-0 bottom-0"></div>
          <p className="mt-[50px] text-black ml-7 text-xs font-semibold rotate-90 transform -translate-y-1/2 whitespace-nowrap">
            About the Vision
          </p>
        </div>

        <div className="max-w-lg md:max-w-3xl lg:max-w-6xl sm:ml-10">

          <h1 className='text-2xl md:text-4xl font-bold leading-tight text-black mb-6'>Our Vision</h1>
          <p className="text-sm md:text-lg text-gray-700 mb-4">
            City University of Peshawar stands at the forefront of the artificial intelligence revolution with cusit.ai, our dedicated AI initiative. <br /> We are committed to driving innovation and shaping a brighter future through groundbreaking research, nurturing talented individuals, and promoting ethical AI practices. <br />

            We believe AI has the potential to revolutionize industries, solve global challenges, and improve the quality of life for all. cusit.ai fosters a collaborative and interdisciplinary environment, empowering students and faculty to explore the limitless possibilities of AI. <br />

            Through cutting-edge research, cusit.ai delves into the frontiers of AI, pushing the boundaries of what&apos;s possible. <br /> We invest in nurturing the next generation of AI experts, providing them with the tools and knowledge to lead the way in this rapidly evolving field. <br />

            Our focus extends beyond research. We champion ethical AI development, ensuring responsible implementation that benefits society. <br /> Additionally, cusit.ai bridges the gap between academia and real-world applications, developing innovative AI solutions that tackle pressing global challenges. <br />

            Join us on this exciting journey! Explore the world of AI with cusit.ai. <br /> Become part of our vibrant community of researchers, students, and industry professionals as we work together to unlock the full potential of AI and create a better future.
          </p>
        </div>
      </section>

      <Team />

      <section className="flex flex-col justify-center items-center h-auto bg-white p-6 md:p-8 ">
        <div className="w-full max-w-7xl mx-auto pt-8 md:pt-5 mb-5 md:mb-5 space-y-4">

          <h1 className='text-2xl md:text-4xl font-bold leading-tight text-black mt-4 mb-4'>Join the cusit.ai Community</h1>
          <p></p>

          <p className="mt-4 text-gray-700 text-sm md:text-lg pb-4">


            As a member of cusit.ai, you&apos;ll gain access to a vibrant community of like-minded individuals passionate about AI. Here&apos;s what we offer: <br />

            <strong>Networking Opportunities:</strong> Connect with AI experts, industry leaders, and fellow students. <br />
            <strong>Skill Development Workshops:</strong> Enhance your AI skills through hands-on workshops and tutorials. <br />
            <strong>Research Projects:</strong> Collaborate on cutting-edge research projects and contribute to the advancement of AI. <br />
            <strong>Hackathons and Competitions:</strong> Test your skills and win exciting prizes. <br />
            <strong>Mentorship Programs:</strong> Receive guidance from experienced AI professionals. <br />
            <strong>Industry Exposure:</strong> Gain insights into the latest industry trends and job opportunities. <br />
            <strong>Community Events:</strong>  Participate in social events, conferences, and meetups. <br />
            Join us and be a part of the future of AI.
          </p>
          <Image
            src="/society_pics/allMembers.png"
            alt="Our dedicated society members at the annual event"
            layout="responsive"
            width={1600} // Adjust the width based on the aspect ratio
            height={800} // Adjust the height based on the aspect ratio
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className='mt-4'>
        <Footer />
      </section>
    </>
  );
}
