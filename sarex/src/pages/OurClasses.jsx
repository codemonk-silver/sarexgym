import React, { useEffect, useRef } from 'react'
import group from '../assets/group.webp'
import pt from '../assets/pt.png'
import { ArrowRight } from 'lucide-react'

const OurClasses = () => {
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn')
          }
        })
      },
      { threshold: 0.2 }
    )

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <div className='px-4 sm:px-10 md:px-32'>
      <div className='relative w-full'>
        <img
          ref={(el) => (refs.current[0] = el)}
          className='relative w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover object-top rounded-2xl opacity-0 transition-all duration-700 ease-out hover:scale-105'
          src={group}
          alt=''
          style={{ transitionDelay: '200ms' }}
        />

        {/* Bottom dark gradient overlay */}
        <div className='absolute bottom-0 left-0 w-full h-[30vh] sm:h-[35vh] md:h-[40vh] bg-gradient-to-t from-black to-transparent rounded-2xl transition-all duration-500 ease-out hover:opacity-80'></div>

        {/* Centered white text */}
        <p 
          ref={(el) => (refs.current[1] = el)}
          className='absolute inset-0 flex items-center justify-center text-white text-3xl sm:text-5xl md:text-6xl font-bold opacity-0 transition-all duration-700 ease-out hover:scale-110 hover:text-green-400'
          style={{ transitionDelay: '400ms' }}
        >
          Classes
        </p>
      </div>

      <div className='mt-10 sm:mt-16 w-full flex flex-col items-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
          {/* Map over 9 cards to reduce repetition */}
          {[
            'Personal Training',
            'Yoga Training',
            'Group Fitness Training',
            'Wellness Programs',
            'Weight lifting',
            'High Intensity training',
            'Youth fitness program',
            'Corporate programs',
            'Nutrition Coaching'
          ].map((title, index) => (
            <div
              key={index}
              ref={(el) => (refs.current[2 + index] = el)}
              className='group flex flex-col items-center justify-between bg-gray-900 w-full max-w-[410px] h-[370px] px-3 pb-8 rounded-2xl overflow-hidden transition-all duration-500 opacity-0 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2'
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className='flex justify-between w-full items-center mt-5 px-5 transition-colors duration-500'>
                <p className='text-white font-semibold text-xl sm:text-2xl group-hover:text-orange-500 transition-all duration-500 group-hover:scale-105'>
                  {title}
                </p>
                <div className='bg-yellow-900 flex flex-row rounded-full px-1.5 py-3 transform transition-all duration-500 group-hover:scale-110 group-hover:bg-orange-600 group-hover:rotate-12'>
                  <ArrowRight className='text-white w-4 h-4 group-hover:text-white transition-all duration-300 group-hover:translate-x-1' />
                  <ArrowRight className='text-white w-4 h-4 group-hover:text-white transition-all duration-300 group-hover:translate-x-1' />
                </div>
              </div>
              <div className='overflow-hidden rounded-2xl w-full h-[250px] sm:h-[280px] md:h-[250px]'>
                <img
                  className='w-full h-full object-cover rounded-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:blur-[.7px] group-hover:brightness-110'
                  src={pt}
                  alt=''
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe Animations */}
      <style>{`
        @keyframes fadeIn {
          0% { 
            opacity: 0; 
            transform: translateY(30px) scale(0.95); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default OurClasses