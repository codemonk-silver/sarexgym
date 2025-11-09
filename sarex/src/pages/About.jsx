import React from 'react'
import group from '../assets/group.webp'

const About = () => {
  return (
    <div className='px-32'>
        <div className='relative w-full'>
                <img className='relative w-full h-[500px] object-cover object-top rounded-2xl' src={group} alt='' />
        
                {/* ✅ Bottom dark gradient overlay */}
                <div className='absolute bottom-0 left-0 w-full h-[55vh] bg-linear-to-t from-black to-transparent rounded-2xl'></div>
        
                {/* ✅ Centered white text */}
                <p className='absolute inset-0 flex items-center justify-center text-white text-6xl font-bold'>
                  About
                </p>
              </div>
    </div>
  )
}

export default About