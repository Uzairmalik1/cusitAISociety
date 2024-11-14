"use client"
import Menu from '@/components/Menu';
import Hero from '@/components/skillathon/hero'
import Link from 'next/link';
import FAQ from '@/components/skillathon/faq';
import Footer from '@/components/footer';

export default function Skillathon() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">

      <Menu />

      {/* Hero Section */}
      
        <Hero />


      <section id='about' className="flex flex-col justify-center items-center h-auto md:h-screen p-5 md:p-20 bg-indigo-50 relative">
      {/* Sideline with Rotated Text */}
      <div className="hidden md:flex absolute left-10 md:left-60 top-10 bottom-10 flex-col items-center">
          <div className="border-l-2 border-black h-full"></div>
          <p className="mt-[-61px] text-black ml-2 md:ml-7 text-xs font-semibold rotate-90 transform -translate-y-1/2 whitespace-nowrap">
            About the Skillathon
          </p>
        </div>
        <div className="max-w-full md:max-w-2xl p-4">
          <h1 className="text-2xl md:text-4xl font-bold leading-tight text-black mb-6">
          Unleash Your AI Power: cusit.ai Skillathon
          Calling all AI enthusiasts! 🚀
          </h1>
          <p className="text-sm md:text-lg font-semibold text-gray-700 mb-4">
          cusit.ai, the Artificial Intelligence initiative at City University of Science & Information Technology, is thrilled to announce the cusit.ai Skillathon! This is your chance to showcase your expertise in AI, compete with fellow innovators, and push the boundaries of what&apos;s possible.
          </p>
          <FAQ/>
        </div>
      </section>

      

      {/* Timeline Section */}
      <section id="timeline" className="p-5 md:p-10 bg-slate-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Timeline</h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="bg-slate-300 text-gray-700 p-4 md:p-6 rounded-lg shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold">Registration</h3>
            <p className='text-sm md:text-base'>Nov 16 - Nov 25</p>
          </div>
          <div className="bg-slate-300 text-gray-700 p-4 md:p-6 rounded-lg shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold">Skillathon Day</h3>
            <p className='text-sm md:text-base'>Nov 28, 2024</p>
          </div>
          <div className="bg-slate-300 text-gray-700 p-4 md:p-6 rounded-lg shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold">Award Ceremony</h3>
            <p className='text-sm md:text-base'>Nov 30, 2024</p>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section id="faq" className="p-5 md:p-10 bg-slate-100 text-gray-900 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-full md:max-w-2xl mx-auto">
          <div>
            <h3 className="text-lg md:text-2xl font-semibold">What is Skillathon?</h3>
            <p className='text-sm md:text-base'>Skillathon is an event for participants to enhance their skills and collaborate on projects.</p>
          </div>
          <div>
            <h3 className="text-lg md:text-2xl font-semibold">Who can participate?</h3>
            <p className='text-sm md:text-base'>Anyone interested in learning and innovation can join, regardless of experience level.</p>
          </div>
          <div>
            <h3 className="text-lg md:text-2xl font-semibold">How do I register?</h3>
            <p className='text-sm md:text-base'>Click on the <Link href={"/register"} className='text-blue-500 hover:text-blue-600 cursor-pointer'>&quot;Register Now&quot;</Link> button above to sign up for Skillathon 2024.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
