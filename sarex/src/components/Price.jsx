import React, { useEffect, useRef } from 'react'

const Price = () => {
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
      <div className='flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-10 w-full'>
        {/* One day pass */}
        <div 
          ref={(el) => (refs.current[0] = el)}
          className='relative flex flex-col items-center shadow-xl w-full sm:w-[300px] md:w-[400px] h-[500px] sm:h-[550px] md:h-[600px] rounded-xl px-4 opacity-0 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2'
          style={{ transitionDelay: '200ms' }}
        >
          <p className='font-medium mt-12 sm:mt-16 text-2xl sm:text-3xl text-center transition-all duration-300 ease-out hover:scale-110'>
            One day pass
          </p>
          <p className='font-bold mt-12 sm:mt-20 text-4xl sm:text-6xl transition-all duration-300 ease-out hover:scale-110 hover:text-green-600'>
            $3
          </p>
          <p className='mt-6 sm:mt-12 text-base sm:text-xl text-center w-full transition-all duration-300 ease-out hover:text-gray-700'>
            We welcome you to explore all Sarex provides. Join us and experience fitness like never before.
          </p>
          <button className='px-6 sm:px-8 py-2 sm:py-3 bg-black text-white mt-4 sm:mt-6 rounded-full text-sm sm:text-base transition-all duration-300 ease-out hover:scale-110 hover:bg-gray-800 hover:shadow-lg'>
            Get Started
          </button>
        </div>

        {/* Monthly pass */}
        <div 
          ref={(el) => (refs.current[1] = el)}
          className='relative flex flex-col items-center shadow-xl w-full sm:w-[300px] md:w-[400px] h-[500px] sm:h-[550px] md:h-[600px] rounded-xl px-4 opacity-0 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2'
          style={{ transitionDelay: '400ms' }}
        >
          <p className='font-medium mt-12 sm:mt-16 text-2xl sm:text-3xl text-center transition-all duration-300 ease-out hover:scale-110'>
            Monthly pass
          </p>
          <p className='font-bold mt-12 sm:mt-20 text-4xl sm:text-6xl transition-all duration-300 ease-out hover:scale-110 hover:text-green-600'>
            $80
          </p>
          <p className='mt-6 sm:mt-12 text-base sm:text-xl text-center w-full transition-all duration-300 ease-out hover:text-gray-700'>
            We welcome you to explore all Sarex provides. Join us and experience fitness like never before.
          </p>
          <button className='px-6 sm:px-8 py-2 sm:py-3 bg-black text-white mt-4 sm:mt-6 rounded-full text-sm sm:text-base transition-all duration-300 ease-out hover:scale-110 hover:bg-gray-800 hover:shadow-lg'>
            Get Started
          </button>
        </div>

        {/* Yearly pass */}
        <div 
          ref={(el) => (refs.current[2] = el)}
          className='relative flex flex-col items-center shadow-xl w-full sm:w-[300px] md:w-[400px] h-[500px] sm:h-[550px] md:h-[600px] rounded-xl bg-[#D2F509] px-4 opacity-0 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2'
          style={{ transitionDelay: '600ms' }}
        >
          <p className='font-medium mt-12 sm:mt-16 text-2xl sm:text-3xl text-center transition-all duration-300 ease-out hover:scale-110'>
            Yearly pass
          </p>
          <p className='font-bold mt-12 sm:mt-20 text-4xl sm:text-6xl transition-all duration-300 ease-out hover:scale-110 hover:text-green-600'>
            $800
          </p>
          <p className='mt-6 sm:mt-12 text-base sm:text-xl text-center w-full transition-all duration-300 ease-out hover:text-gray-800'>
            We welcome you to explore all Sarex provides. Join us and experience fitness like never before.
          </p>
          <button className='px-6 sm:px-8 py-2 sm:py-3 bg-black text-white mt-4 sm:mt-6 rounded-full text-sm sm:text-base transition-all duration-300 ease-out hover:scale-110 hover:bg-gray-800 hover:shadow-lg'>
            Get Started
          </button>
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

export default Price