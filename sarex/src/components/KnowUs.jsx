import React, { useEffect, useRef } from 'react'
import heroimg from '../assets/heroimg.jpg'

const KnowUs = () => {
  const features = [
    'Innovative Facilities',
    'Expert Trainers',
    'Flexible Memberships',
    'Personalized Programs',
  ]

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
      <div className='bg-black w-full rounded-xl py-10 md:py-20 px-6 sm:px-8 md:px-12'>
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-5'>
          {/* Left Section */}
          <div className='flex flex-col mt-6 md:mt-16 flex-1'>
            <h1 
              ref={(el) => (refs.current[0] = el)}
              className='text-white mb-6 md:mb-8 text-3xl sm:text-4xl md:text-5xl font-bold text-center lg:text-left opacity-0 transition-all duration-700 ease-out'
            >
              What sets us apart?
            </h1>
            <p 
              ref={(el) => (refs.current[1] = el)}
              className='text-white mb-10 md:mb-20 text-base sm:text-lg text-center lg:text-left opacity-0 transition-all duration-700 ease-out delay-200'
            >
              We are a community dedicated to helping you achieve your fitness goals in a supportive, welcoming
              environment.
            </p>

            {/* ✅ 2x2 Checkbox Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-x-10 gap-y-6'>
              {features.map((feature, index) => (
                <label
                  key={index}
                  ref={(el) => (refs.current[2 + index] = el)}
                  className='flex items-center gap-3 text-white text-lg sm:text-xl font-medium cursor-pointer select-none justify-center lg:justify-start opacity-0 transition-all duration-700 ease-out hover:scale-105 hover:translate-x-2'
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <span className='relative flex items-center justify-center w-6 h-6 rounded-full bg-white transition-all duration-300 ease-out hover:scale-110 hover:bg-green-400 group'>
                    <input
                      type='checkbox'
                      checked
                      readOnly
                      className='absolute w-full h-full opacity-0 cursor-pointer'
                    />
                    <span className='text-black text-lg font-bold transition-all duration-300 ease-out group-hover:text-white group-hover:scale-110'>✔</span>
                  </span>
                  {feature}
                </label>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <img
            ref={(el) => (refs.current[6] = el)}
            className='w-full lg:w-[600px] h-auto rounded-xl object-cover flex-1 opacity-0 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-white/20'
            src={heroimg}
            alt='heroimg'
            style={{ transitionDelay: '600ms' }}
          />
        </div>

        {/* Stats Section */}
        <div className='flex flex-wrap justify-center lg:justify-between gap-10 md:gap-20 mt-10 md:mt-16'>
          {[
            { number: '5k', text: 'Happy members' },
            { number: '20', text: 'Expert Trainers' },
            { number: '1200', text: 'Workout Completed' },
            { number: '10', text: 'Years of excellence' }
          ].map((stat, index) => (
            <div 
              key={index}
              ref={(el) => (refs.current[7 + index] = el)}
              className='flex flex-col items-center gap-3 opacity-0 transition-all duration-700 ease-out hover:scale-110 hover:-translate-y-2'
              style={{ transitionDelay: `${800 + index * 150}ms` }}
            >
              <p className='text-white font-bold text-4xl sm:text-5xl md:text-6xl transition-all duration-300 ease-out hover:scale-110'>
                {stat.number}<span className='text-green-400 transition-all duration-300 ease-out hover:scale-125'>+</span>
              </p>
              <p className='text-white text-lg sm:text-xl font-medium text-center transition-all duration-300 ease-out hover:text-green-400'>
                {stat.text}
              </p>
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

export default KnowUs