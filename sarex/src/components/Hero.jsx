import React from 'react'
import { Link } from 'react-router-dom'
import heroimg from '../assets/heroimg.jpg'

const Hero = () => {
  return (
    <div className='px-4 md:px-32 pt-5 pb-10'>
      <div className='relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-xl'>
        {/* Background image */}
        <img
          className='object-cover w-full h-full rounded-xl scale-100 hover:scale-105 transition-transform duration-700 ease-in-out'
          src={heroimg}
          alt='heroimg'
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 rounded-xl"></div>

        {/* Text and button content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-10 animate-fadeIn">
          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-6xl mb-6 transition-all duration-700 ease-in-out">
            Transform Your Life With Fitness
          </h2>

          <p className="text-white text-base sm:text-lg md:text-xl max-w-3xl mb-10 transition-opacity duration-700 delay-150">
            Join us to achieve your fitness goals with our state-of-the-art facilities, expert trainers, and a supportive community.
          </p>

          <Link
            to='/contact'
            className="bg-green-600 hover:bg-green-700 text-white text-lg sm:text-xl px-8 sm:px-10 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            Join Us
          </Link>
        </div>
      </div>

      {/* Keyframe animation (Tailwind custom) */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
      `}</style>
    </div>
  )
}

export default Hero
