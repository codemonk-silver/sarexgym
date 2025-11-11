import React, { useEffect, useRef } from 'react'
import gymlogo from '../assets/gymlogo.png'
import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'

const Footer = () => {
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
      <div className='bg-black w-full rounded-xl min-h-[75vh]'>
        {/* Top Section */}
        <div className='flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start pt-10 md:pt-20 pb-10 md:pb-14 px-6 md:px-14 gap-10 md:gap-0'>
          <div 
            ref={(el) => (refs.current[0] = el)}
            className='flex items-center gap-4 md:gap-2 opacity-0 transition-all duration-700 ease-out hover:scale-105'
          >
            <img className='w-[45px] h-auto bg-white rounded-full transition-all duration-300 ease-out hover:rotate-12' src={gymlogo} alt='sarexlogo' />
            <p className='font-bold text-3xl sm:text-4xl text-white transition-all duration-300 ease-out hover:text-green-400'>Sarex</p>
          </div>
          <p 
            ref={(el) => (refs.current[1] = el)}
            className='font-medium text-white text-center md:text-left text-lg sm:text-xl max-w-md md:max-w-lg opacity-0 transition-all duration-700 ease-out delay-200 hover:text-gray-200'
          >
            We offer everything we need to achieve your goals and more. Join us and turn your fitness dreams into reality.
          </p>
        </div>

        <hr className='w-full md:w-[75vw] mx-auto text-gray-500 mb-10 transition-all duration-500 ease-out hover:text-gray-300'></hr>

        {/* Links & Contact Section */}
        <div className='flex flex-col md:flex-row justify-center md:justify-between items-start md:items-start px-6 md:px-14 gap-10 md:gap-6 mb-10'>
          {/* Pages */}
          <div className='flex flex-col'>
            <p 
              ref={(el) => (refs.current[2] = el)}
              className='text-white mb-6 md:mb-10 text-2xl font-semibold opacity-0 transition-all duration-700 ease-out delay-300 hover:text-green-400'
            >
              Pages
            </p>
            <div className='flex flex-col md:flex-row md:gap-10 gap-3'>
              {['Home', 'Location'].map((item, index) => (
                <p 
                  key={item}
                  ref={(el) => (refs.current[3 + index] = el)}
                  className='text-white text-lg md:text-xl opacity-0 transition-all duration-700 ease-out hover:text-green-400 hover:translate-x-2 cursor-pointer'
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  {item}
                </p>
              ))}
            </div>
            <div className='flex flex-col md:flex-row md:gap-10 gap-3 mt-3'>
              {['About', 'Blog'].map((item, index) => (
                <p 
                  key={item}
                  ref={(el) => (refs.current[5 + index] = el)}
                  className='text-white text-lg md:text-xl opacity-0 transition-all duration-700 ease-out hover:text-green-400 hover:translate-x-2 cursor-pointer'
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  {item}
                </p>
              ))}
            </div>
            <div className='flex flex-col md:flex-row md:gap-8 gap-3 mt-3'>
              {['Classes', 'Contact'].map((item, index) => (
                <p 
                  key={item}
                  ref={(el) => (refs.current[7 + index] = el)}
                  className='text-white text-lg md:text-xl opacity-0 transition-all duration-700 ease-out hover:text-green-400 hover:translate-x-2 cursor-pointer'
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  {item}
                </p>
              ))}
            </div>
            <div className='flex flex-col md:flex-row md:gap-12 gap-3 mt-3'>
              {['Trainers', 'Packages'].map((item, index) => (
                <p 
                  key={item}
                  ref={(el) => (refs.current[9 + index] = el)}
                  className='text-white text-lg md:text-xl opacity-0 transition-all duration-700 ease-out hover:text-green-400 hover:translate-x-2 cursor-pointer'
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Utility */}
          <div className='flex flex-col'>
            <p 
              ref={(el) => (refs.current[11] = el)}
              className='text-white mb-6 md:mb-10 text-2xl font-semibold opacity-0 transition-all duration-700 ease-out delay-400 hover:text-green-400'
            >
              Utility
            </p>
            <div className='flex flex-col gap-3'>
              {['Style Guide', 'Instruction', 'Changelog', 'License'].map((item, index) => (
                <p 
                  key={item}
                  ref={(el) => (refs.current[12 + index] = el)}
                  className='text-white text-lg md:text-xl opacity-0 transition-all duration-700 ease-out hover:text-green-400 hover:translate-x-2 cursor-pointer'
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className='flex flex-col'>
            <p 
              ref={(el) => (refs.current[16] = el)}
              className='text-white mb-6 md:mb-10 text-2xl font-semibold opacity-0 transition-all duration-700 ease-out delay-500 hover:text-green-400'
            >
              Contact
            </p>
            <div className='flex flex-col gap-3'>
              <p 
                ref={(el) => (refs.current[17] = el)}
                className='text-white text-lg md:text-xl w-full md:w-[250px] opacity-0 transition-all duration-700 ease-out hover:text-green-400'
                style={{ transitionDelay: '600ms' }}
              >
                123 Fitness Lane, Wellness City, CA 12345
              </p>
              <Link 
                ref={(el) => (refs.current[18] = el)}
                className='text-white text-lg md:text-xl opacity-0 transition-all duration-700 ease-out hover:text-green-400 cursor-pointer'
                style={{ transitionDelay: '700ms' }}
              >
                hello@gmail.com
              </Link>
              <Link 
                ref={(el) => (refs.current[19] = el)}
                className='text-white text-lg md:text-xl opacity-0 transition-all duration-700 ease-out hover:text-green-400 cursor-pointer'
                style={{ transitionDelay: '800ms' }}
              >
                +2348160256687
              </Link>
            </div>
          </div>

          {/* Location & Hours */}
          <div 
            ref={(el) => (refs.current[20] = el)}
            className='relative w-full md:w-[450px] h-[250px] bg-white rounded-xl flex-shrink-0 opacity-0 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-white/20'
            style={{ transitionDelay: '900ms' }}
          >
            <div className='flex flex-col items-center px-4 sm:px-6 py-4'>
              <p className='text-lg sm:text-xl mt-4 font-medium transition-all duration-300 ease-out hover:scale-105'>Opening hours</p>
              <p className='text-lg sm:text-xl mt-2 font-medium transition-all duration-300 ease-out hover:text-gray-700'>
                Monday - Friday: 5:00AM - 10:00PM 
              </p>
              <p className='text-lg sm:text-xl mt-2 font-medium transition-all duration-300 ease-out hover:text-gray-700'>
                Saturday - Sunday: 7:00AM - 8:00PM 
              </p>

              <button className='flex items-center gap-2 px-6 sm:px-10 py-2 sm:py-4 bg-black text-white font-medium text-base sm:text-xl rounded-xl mt-4 sm:mt-3 transition-all duration-300 ease-out hover:scale-110 hover:bg-gray-800 hover:shadow-lg'>
                <MapPin size={20} className='transition-all duration-300 ease-out hover:scale-110' />
                View location
              </button>
            </div>
          </div>
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

export default Footer