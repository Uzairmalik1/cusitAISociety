"use client";
import Footer from '@/components/footer';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdArrowBack } from 'react-icons/io';

const Register = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;  // Save a reference to the form
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage("Registration successful!");
        setIsSuccess(true);
        form.reset();  // Use the saved form reference here // Reset the form
      } else {
        const errorData = await response.json();
        setMessage(errorData.error || "An error occurred.");
        setIsSuccess(false);
      }
    } catch (error) {
      console.log("the form error is ", error)
      setMessage("Failed to register. Please try again.");
      setIsSuccess(false);
    }

    // Auto-hide the message after 4 seconds
    setTimeout(() => {
      setMessage(null);
    }, 4000);
  };

  return (
    <>
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Left Side - Information Section */}
      <div className="flex flex-col justify-center relative w-full lg:w-1/2 p-10 bg-blue-600 text-white">
        <div className="absolute top-7 left-10">
          <Link href="/skillathon" className="flex items-center justify-center gap-2 text-xl hover:text-blue-300">
            <IoMdArrowBack /> Back
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-4 mt-10 lg:mt-0">Skillathon Registration</h1>
        <p className="mb-6 text-lg w-4/5">
          Join Skillathon to enhance your skills, network with professionals, and compete in a series of skill-based challenges!
        </p>
        <ul className="space-y-3 text-left">
          <li>🔥 Participate in exciting challenges</li>
          <li>🌍 Network with professionals worldwide</li>
          <li>🏆 Win prizes and recognition</li>
        </ul>
      </div>

      {/* Right Side - Registration Form */}
      <div className="flex items-center justify-center w-full lg:w-1/2 p-10 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register Now</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">ID Number</label>
              <input
                type="tel"
                name="IDNumber"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
              <input
                type="tel"
                name="mobNumber"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Field</label>
              <input
                type="text"
                name="field"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Semester</label>
              <input
                type="text"
                name="semester"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Skills</label>
              <input
                type="text"
                name="skill"
                required
                placeholder="e.g., JavaScript, Python"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Experience Level</label>
              <select
                name="ExLevel"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="BEGINNER">BEGINNER</option>
                <option value="INTERMEDIATE">INTERMEDIATE</option>
                <option value="EXPERT">EXPERT</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Centered Pop-up Message */}
      {message && (
        <div
          className={`fixed top-10 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-300 ${isSuccess ? 'text-green-500' : 'text-red-500'
            } bg-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg w-full max-w-lg flex items-center justify-center gap-3 text-center`}
        >
          {/* Icon */}
          <span className="text-2xl">
            {isSuccess ? '✅' : '⚠️'}
          </span>
          {/* Message Text */}
          <span>{message}</span>
        </div>

      )}

    </div>

    <Footer />

    </>
  );
};

export default Register;
