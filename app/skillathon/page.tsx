import Menu from '@/components/Menu';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';
import Hero from '@/components/skillathon/hero'

export default function Skillathon() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">

      <Menu />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center bg-[#030B1E] h-screen bg-cover bg-center" style={{ backgroundImage: "url('/cusitBuilding.gif')" }}>
        <Hero />

      </section>

      {/* About Section */}
      <section id="about" className="flex items-center justify-center gap-5 w-full h-screen p-10">
        <div className='w-1/3'>
        <h2 className="text-4xl font-bold mb-4">What is Skillathon?</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Skillathon is an exciting event where participants come together to improve their skills, learn new technologies, and collaborate on innovative projects. Whether you’re a beginner or an expert, there's something for everyone.
        </p>
        </div>
        <div>
          <img src="skillathon.jpg" width={500} alt="" />
        </div>
        
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="p-10 bg-gray-800 text-center">
        <h2 className="text-4xl font-bold mb-6">Timeline</h2>
        <div className="flex flex-wrap justify-center space-x-8">
          <div className="bg-gray-700 p-6 rounded-lg m-4">
            <h3 className="text-2xl font-bold">Registration</h3>
            <p>Nov 1 - Nov 15</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg m-4">
            <h3 className="text-2xl font-bold">Skillathon Day</h3>
            <p>Dec 5, 2024</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg m-4">
            <h3 className="text-2xl font-bold">Award Ceremony</h3>
            <p>Dec 10, 2024</p>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="p-10 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Sponsors</h2>
        <div className="flex justify-center space-x-10">
          <Image src="/cityLogo.png" alt="Sponsor 1" width={100} height={100} />
          <Image src="/cusit.jpg" alt="Sponsor 2" width={100} height={100} />
          <Image src="/google.png" alt="Sponsor 3" width={150} height={100} />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="p-10 bg-gray-800 text-center">
        <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-2xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold">What is Skillathon?</h3>
            <p>Skillathon is an event for participants to enhance their skills and collaborate on projects.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Who can participate?</h3>
            <p>Anyone interested in learning and innovation can join, regardless of experience level.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">How do I register?</h3>
            <p>Click on the <span className='text-blue-500 hover:text-blue-600 cursor-pointer'>"Register Now"</span> button above to sign up for Skillathon 2024.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
