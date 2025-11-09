import React from 'react'
import { Link } from 'react-router-dom'
import heroimg from '../assets/heroimg.jpg'

const Hero = () => {
  return (
    <div className='px-32 pt-5 pb-10'>
      <div className='relative w-full h-[600px]'>
        {/* Background image */}
        <img
          className='object-cover w-full h-full rounded-xl'
          src={heroimg}
          alt='heroimg'
        />

        {/* Overlay (optional: remove if not needed) */}
        <div className="absolute inset-0 bg-black/70 rounded-xl"></div>

        {/* Text and button content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10">
          <h2 className="text-white font-bold text-6xl mb-6">
            Transform Your Life With Fitness
          </h2>

          <p className="text-white text-xl max-w-3xl mb-10">
            Join us to achieve your fitness goals with our state-of-the-art facilities, expert trainers, and a supportive community.
          </p>

          {/* 🎨 Custom background just for the button */}
          <Link to='/contact' className="bg-green-600 hover:bg-green-700 text-white text-xl px-10 py-3 rounded-lg font-medium transition-all duration-300">
            Join Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
