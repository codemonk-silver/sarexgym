import React, { useRef, useState } from 'react';
import { ClipboardList, UserPlus, Dumbbell } from 'lucide-react';
import vid from '../assets/vid.mp4';

const Video = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

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
    <div className="px-32 py-10">
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
          className="w-full h-full object-cover rounded-xl"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 rounded-xl pointer-events-none"></div>

        {/* Pause/Play Button */}
        <button
          onClick={handleVideoToggle}
          className="absolute bottom-10 right-10 bg-white text-black px-5 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-transform z-10"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>

        {/* ✅ Constant Green Background + Moving Text */}
        <div className="absolute bottom-[250px] right-[-60px] -rotate-45 origin-bottom-right w-[1000px] h-[70px] overflow-hidden bg-green-500 flex items-center">
          <div className="animate-marquee-right whitespace-nowrap text-black font-semibold text-lg">
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
        .animate-marquee-right {
          animation: marquee-right 10s linear infinite;
        }
      `}</style>

      {/* ✅ Three Cards Section */}
      <div className="mt-20 flex justify-center items-stretch gap-10 text-center">
        {/* Card 1 */}
        <div className="bg-white p-8 rounded-xl shadow-md w-80 flex flex-col justify-between hover:scale-105 transition-transform duration-300 h-[250px]">
          <div>
            <ClipboardList className="text-green-500 w-12 h-12 mx-auto mb-4" />
            <h2 className="font-bold text-2xl mb-2">Choose Your Plan</h2>
            <p className="text-gray-600">
              Select the membership plan that best suits your fitness.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 rounded-xl shadow-md w-80 flex flex-col justify-between hover:scale-105 transition-transform duration-300 h-[250px]">
          <div>
            <UserPlus className="text-green-500 w-12 h-12 mx-auto mb-4" />
            <h2 className="font-bold text-2xl mb-2">Sign Up Online</h2>
            <p className="text-gray-600">
              Complete our easy online registration form.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 rounded-xl shadow-md w-80 flex flex-col justify-between hover:scale-105 transition-transform duration-300 h-[250px]">
          <div>
            <Dumbbell className="text-green-500 w-12 h-12 mx-auto mb-4" />
            <h2 className="font-bold text-2xl mb-2">Start Your Fitness Journey</h2>
            <p className="text-gray-600">
              Begin using our facilities and taking advantage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
