import React, { useEffect, useRef } from 'react'
import pt from '../assets/pt.png'
import yoga from '../assets/yoga.jpg'
import heroimg from '../assets/heroimg.jpg'
import twof from '../assets/twof.jpg'

const Gallery = () => {
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
    <div className='px-4 sm:px-10 md:px-32 py-10'>
      <p 
        ref={(el) => (refs.current[0] = el)}
        className='font-bold text-3xl sm:text-4xl md:text-5xl mb-10 text-center md:text-left opacity-0 transition-all duration-700 ease-out'
      >
        Our Gallery
      </p>

      {/* Top Row */}
      <div className='flex flex-col md:flex-row gap-6 md:gap-10 w-full md:h-[400px]'>
        <img
          ref={(el) => (refs.current[1] = el)}
          className='w-full md:w-[550px] h-auto rounded-xl object-cover opacity-0 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-black/30'
          src={pt}
          alt=''
          style={{ transitionDelay: '200ms' }}
        />
        <img
          ref={(el) => (refs.current[2] = el)}
          className='w-full md:w-[900px] h-auto rounded-xl object-cover opacity-0 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-black/30'
          src={yoga}
          alt=''
          style={{ transitionDelay: '400ms' }}
        />
      </div>

      {/* Bottom Row */}
      <div className='flex flex-col md:flex-row gap-6 md:gap-10 w-full mt-10 md:h-[400px]'>
        <img
          ref={(el) => (refs.current[3] = el)}
          className='w-full md:w-[650px] h-auto rounded-xl object-cover opacity-0 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-black/30'
          src={heroimg}
          alt=''
          style={{ transitionDelay: '600ms' }}
        />

        {/* Green Box */}
        <div 
          ref={(el) => (refs.current[4] = el)}
          className='relative w-full md:w-[300px] h-[300px] md:h-[400px] bg-green-900 text-white rounded-xl flex items-center justify-center text-center px-4 opacity-0 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-green-800/50 hover:-translate-y-2'
          style={{ transitionDelay: '800ms' }}
        >
          <div>
            <p className='font-medium text-2xl sm:text-3xl md:text-4xl transition-all duration-300 ease-out hover:scale-105'>
              Fitness is a lifestyle not a destination.
            </p>
            <button className='bg-black text-white px-6 sm:px-7 py-1.5 mt-6 sm:mt-10 md:mt-32 rounded-xl text-lg sm:text-xl font-medium transition-all duration-300 ease-out hover:scale-110 hover:bg-gray-800 hover:shadow-lg'>
              view all classes
            </button>
          </div>
        </div>

        <img
          ref={(el) => (refs.current[5] = el)}
          className='w-full md:w-[300px] h-auto rounded-xl object-cover object-left opacity-0 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-black/30'
          src={twof}
          alt=''
          style={{ transitionDelay: '1000ms' }}
        />
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

export default Gallery