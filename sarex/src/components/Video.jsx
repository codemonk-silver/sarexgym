import React, { useRef, useState, useEffect } from 'react';
import { ClipboardList, UserPlus, Dumbbell } from 'lucide-react';
import vid from '../assets/vid.mp4';

const Video = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const cardRefs = useRef([]);

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

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleVideoToggle = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="px-4 sm:px-10 md:px-32 py-10">
      {/* ✅ Masked container keeps everything inside rounded edges */}
      <div className="relative overflow-hidden rounded-xl">
        {/* Background Video */}
        <video
          ref={videoRef}
          src={vid}
          muted
          loop
          autoPlay
          playsInline
          className="w-full h-[250px] sm:h-[400px] md:h-[600px] object-cover rounded-xl transition-all duration-500 ease-out hover:scale-105"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 rounded-xl pointer-events-none transition-all duration-500 ease-out hover:bg-black/30"></div>

        {/* Pause/Play Button */}
        <button
          onClick={handleVideoToggle}
          className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 bg-white text-black px-4 sm:px-5 py-2 sm:py-3 rounded-full font-semibold shadow-md hover:scale-110 hover:bg-gray-100 hover:shadow-lg transition-all duration-300 ease-out z-10 text-sm sm:text-base"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>

        {/* ✅ Constant Green Background + Moving Text */}
        <div className="absolute bottom-[100px] sm:bottom-[180px] md:bottom-[250px] right-[-60px] -rotate-45 origin-bottom-right w-[800px] md:w-[1000px] h-[50px] md:h-[70px] overflow-hidden bg-green-500 flex items-center transition-all duration-500 ease-out hover:bg-green-600 hover:scale-105">
          <div className="animate-marquee-right whitespace-nowrap text-black font-semibold text-sm sm:text-base">
            <span className="mx-8">
              🏋️‍♂️ Train Hard · Stay Focused · Achieve Greatness · Push Limits · Never Quit ·
            </span>
            <span className="mx-8">
              🏋️‍♂️ Train Hard · Stay Focused · Achieve Greatness · Push Limits · Never Quit ·
            </span>
          </div>
        </div>
      </div>

      {/* ✅ Animation */}
      <style>{`
        @keyframes marquee-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
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
        .animate-marquee-right {
          animation: marquee-right 10s linear infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>

      {/* ✅ Three Cards Section */}
      <div className="mt-10 md:mt-20 flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6 md:gap-10 text-center">
        {/* Card 1 */}
        <div 
          ref={(el) => (cardRefs.current[0] = el)}
          className="bg-white p-6 sm:p-8 rounded-xl shadow-md w-full sm:w-80 flex flex-col justify-between opacity-0 transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl hover:-translate-y-2 h-[230px] sm:h-[250px]"
          style={{ transitionDelay: '200ms' }}
        >
          <div>
            <ClipboardList className="text-green-500 w-10 sm:w-12 h-10 sm:h-12 mx-auto mb-4 transition-all duration-300 ease-out hover:scale-110 hover:rotate-6" />
            <h2 className="font-bold text-xl sm:text-2xl mb-2 transition-all duration-300 ease-out hover:text-green-600">Choose Your Plan</h2>
            <p className="text-gray-600 text-sm sm:text-base transition-all duration-300 ease-out hover:text-gray-800">
              Select the membership plan that best suits your fitness.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div 
          ref={(el) => (cardRefs.current[1] = el)}
          className="bg-white p-6 sm:p-8 rounded-xl shadow-md w-full sm:w-80 flex flex-col justify-between opacity-0 transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl hover:-translate-y-2 h-[230px] sm:h-[250px]"
          style={{ transitionDelay: '400ms' }}
        >
          <div>
            <UserPlus className="text-green-500 w-10 sm:w-12 h-10 sm:h-12 mx-auto mb-4 transition-all duration-300 ease-out hover:scale-110 hover:rotate-6" />
            <h2 className="font-bold text-xl sm:text-2xl mb-2 transition-all duration-300 ease-out hover:text-green-600">Sign Up Online</h2>
            <p className="text-gray-600 text-sm sm:text-base transition-all duration-300 ease-out hover:text-gray-800">
              Complete our easy online registration form.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div 
          ref={(el) => (cardRefs.current[2] = el)}
          className="bg-white p-6 sm:p-8 rounded-xl shadow-md w-full sm:w-80 flex flex-col justify-between opacity-0 transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl hover:-translate-y-2 h-[230px] sm:h-[250px]"
          style={{ transitionDelay: '600ms' }}
        >
          <div>
            <Dumbbell className="text-green-500 w-10 sm:w-12 h-10 sm:h-12 mx-auto mb-4 transition-all duration-300 ease-out hover:scale-110 hover:rotate-6" />
            <h2 className="font-bold text-xl sm:text-2xl mb-2 transition-all duration-300 ease-out hover:text-green-600">Start Your Fitness Journey</h2>
            <p className="text-gray-600 text-sm sm:text-base transition-all duration-300 ease-out hover:text-gray-800">
              Begin using our facilities and taking advantage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;