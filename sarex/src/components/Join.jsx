import React, { useEffect, useRef } from 'react';
import { Dumbbell } from 'lucide-react';

const Join = () => {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="px-4 sm:px-10 md:px-32 py-10 md:py-20 flex justify-center items-center text-center">
      <div className="flex flex-col items-center gap-5 max-w-5xl">
        {/* Icon */}
        <Dumbbell 
          ref={(el) => (refs.current[0] = el)}
          size={50} 
          className="text-green-500 sm:w-[60px] sm:h-[60px] opacity-0 transition-all duration-700 ease-out hover:scale-110 hover:rotate-12 hover:text-green-600" 
          style={{ transitionDelay: '200ms' }}
        />

        {/* Title */}
        <p 
          ref={(el) => (refs.current[1] = el)}
          className="font-semibold text-3xl sm:text-4xl md:text-6xl leading-snug px-2 opacity-0 transition-all duration-700 ease-out"
          style={{ transitionDelay: '400ms' }}
        >
          Start your fitness adventure with{' '}
          <span className="text-green-500 font-bold transition-all duration-300 ease-out hover:scale-105 hover:text-green-600 inline-block">
            Sarex
          </span>{' '}
          — Join us today!
        </p>

        {/* Description */}
        <p 
          ref={(el) => (refs.current[2] = el)}
          className="text-gray-600 text-base sm:text-lg md:text-xl px-4 opacity-0 transition-all duration-700 ease-out hover:text-gray-800"
          style={{ transitionDelay: '600ms' }}
        >
          We offer a variety of classes and personalized training options to fit your needs.
        </p>

        {/* Button */}
        <button 
          ref={(el) => (refs.current[3] = el)}
          className="bg-yellow-300 hover:bg-yellow-400 text-black font-medium text-base sm:text-lg px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full transition-all duration-500 ease-out opacity-0 hover:scale-110 hover:shadow-xl hover:-translate-y-1"
          style={{ transitionDelay: '800ms' }}
        >
          Join Us
        </button>
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
  );
};

export default Join;