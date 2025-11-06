import React from 'react';
import { Dumbbell } from 'lucide-react';

const Join = () => {
  return (
    <div className="px-32 py-20 flex justify-center items-center text-center">
      <div className="flex flex-col items-center gap-5 max-w-5xl">
        {/* Icon */}
        <Dumbbell size={60} className="text-green-500" />

        {/* Title */}
        <p className="font-semibold text-6xl">
          Start your fitness adventure with <span className="text-green-500 font-bold">Sarex</span> — Join us today!
        </p>

        {/* Description */}
        <p className="text-gray-600 text-xl">
          We offer a variety of classes and personalized training options to fit your needs.
        </p>

        {/* Button */}
        <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-medium text-lg px-12 py-16 rounded-full transition-all">
          Join Us
        </button>
      </div>
    </div>
  );
};

export default Join;
