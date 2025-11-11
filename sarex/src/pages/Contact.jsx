import React, { useEffect, useRef } from 'react'
import contactimg from '../assets/contactimg.jpg'

const Contact = () => {
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
    <div className='px-4 pb-[40rem] sm:px-10 md:px-32 md:pb-72'>
      <div className='bg-black w-full rounded-xl h-[110vh] md:h-screen'>
        {/* Image + Form Section */}
        <div className='flex flex-col md:flex-row gap-6 md:gap-10 px-4 sm:px-10 py-10'>
          <img
            ref={(el) => (refs.current[0] = el)}
            className='w-full md:w-[550px] h-[300px] sm:h-[450px] md:h-[650px] object-center object-cover rounded-xl opacity-0 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-white/20'
            src={contactimg}
            alt=''
            style={{ transitionDelay: '200ms' }}
          />
          <div className='mt-6 md:mt-14 flex flex-col w-full'>
            <p 
              ref={(el) => (refs.current[1] = el)}
              className='text-white text-3xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-10 opacity-0 transition-all duration-700 ease-out hover:text-green-400'
              style={{ transitionDelay: '400ms' }}
            >
              Get in touch - We're here to assist you
            </p>
            <form className='space-y-4 sm:space-y-5 flex flex-col'>
              <input
                ref={(el) => (refs.current[2] = el)}
                className='w-full px-4 sm:px-5 py-2 sm:py-3 border-white border-2 rounded-2xl bg-white opacity-0 transition-all duration-700 ease-out focus:scale-105 focus:border-green-400 focus:shadow-lg focus:shadow-green-400/30'
                type='text'
                placeholder='Name'
                required
                style={{ transitionDelay: '600ms' }}
              />
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <input
                  ref={(el) => (refs.current[3] = el)}
                  className='w-full px-4 sm:px-5 py-2 sm:py-3 border-white border-2 rounded-2xl bg-white opacity-0 transition-all duration-700 ease-out focus:scale-105 focus:border-green-400 focus:shadow-lg focus:shadow-green-400/30'
                  type='email'
                  placeholder='Email'
                  required
                  style={{ transitionDelay: '700ms' }}
                />
                <input
                  ref={(el) => (refs.current[4] = el)}
                  className='w-full px-4 sm:px-5 py-2 sm:py-3 border-white border-2 rounded-2xl bg-white opacity-0 transition-all duration-700 ease-out focus:scale-105 focus:border-green-400 focus:shadow-lg focus:shadow-green-400/30'
                  type='tel'
                  placeholder='Phone number'
                  required
                  style={{ transitionDelay: '800ms' }}
                />
              </div>
              <textarea
                ref={(el) => (refs.current[5] = el)}
                className='bg-white rounded-2xl border-2 border-white w-full h-[150px] sm:h-[200px] px-4 sm:px-5 py-2 sm:py-3 opacity-0 transition-all duration-700 ease-out focus:scale-105 focus:border-green-400 focus:shadow-lg focus:shadow-green-400/30'
                required
                style={{ transitionDelay: '900ms' }}
              ></textarea>
              <button 
                ref={(el) => (refs.current[6] = el)}
                className='px-5 py-2 sm:py-3 bg-green-600 hover:bg-green-700 mt-2 sm:mt-3 rounded-2xl text-white text-lg sm:text-xl font-medium opacity-0 transition-all duration-700 ease-out hover:scale-105 hover:shadow-xl hover:shadow-green-600/30 hover:-translate-y-1'
                style={{ transitionDelay: '1000ms' }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Info Cards Section */}
        <div className='mt-10 sm:mt-14 w-full flex justify-center'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10'>
            {[
              { title: 'Address', content: 'Chicago HQ Estica Cop. Macomb, MI 48042' },
              { title: 'Phone Number', content: '+1 (555) 123-4567' },
              { title: 'Email address', content: 'hello@example.com' }
            ].map((card, index) => (
              <div 
                key={index}
                ref={(el) => (refs.current[7 + index] = el)}
                className='relative w-full h-[180px] sm:h-[200px] shadow-xl rounded-2xl flex flex-col p-6 sm:p-8 justify-center opacity-0 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2 bg-white'
                style={{ transitionDelay: `${1100 + index * 200}ms` }}
              >
                <p className='font-bold text-2xl sm:text-3xl transition-all duration-300 ease-out hover:text-green-600'>
                  {card.title}
                </p>
                <p className='mt-2 sm:mt-4 text-sm sm:text-base transition-all duration-300 ease-out hover:text-gray-700'>
                  {card.content}
                </p>
              </div>
            ))}
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

export default Contact