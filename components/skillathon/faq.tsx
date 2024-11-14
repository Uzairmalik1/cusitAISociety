import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';


const faqs = [
  {
    question: "What is the cusit.ai Skillathon?",
    answer: "The cusit.ai Skillathon is a challenging and rewarding competition designed to test your skills in various aspects of Artificial Intelligence. Whether you're a seasoned developer or just starting your AI journey, this event offers an exciting opportunity to tackle real-world AI challenges, apply your skills, and network with fellow AI enthusiasts."
  },
  {
    question: "Who should participate?",
    answer: "Students pursuing AI-related degrees, AI professionals and enthusiasts, and anyone passionate about pushing the boundaries of AI technology are encouraged to participate."
  },
  // Add more questions and answers as needed
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" mx-auto mt-8 space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300 pb-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center w-full text-left text-lg font-semibold text-black focus:outline-none"
          >
            <span>{faq.question}</span>
            <FaChevronDown className={`transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} />
          </button>
          {openIndex === index && (
            <p className="mt-2 text-gray-700 text-lg">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
