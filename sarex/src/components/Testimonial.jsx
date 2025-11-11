import React, { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import test1 from "../assets/test1.jpg";
import test2 from "../assets/test2.jpg";
import test3 from "../assets/test3.jpg";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Williams",
      desc: "Joining Sarex completely changed my fitness journey. The trainers are amazing, and I've never felt stronger or more confident!",
      image: test2,
    },
    {
      id: 2,
      name: "James Carter",
      desc: "The environment is welcoming, the workouts are challenging, and the results are real. Highly recommend Sarex for anyone serious about fitness.",
      image: test3,
    },
    {
      id: 3,
      name: "Olivia Kim",
      desc: "I love the variety of classes offered and how personalized each session feels. Sarex truly cares about every member.",
      image: test1,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  return (
    <div className="px-4 sm:px-10 md:px-32 py-10 md:py-20">
      <div className="relative w-full overflow-hidden min-h-[400px] sm:min-h-[500px] rounded-xl">
        {testimonials.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === current 
                ? "opacity-100 transform translate-x-0" 
                : index < current 
                  ? "opacity-0 transform -translate-x-full" 
                  : "opacity-0 transform translate-x-full"
            }`}
          >
            <div className="flex flex-col md:flex-row w-full h-full">
              {/* Left Text Section */}
              <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left bg-black p-6 sm:p-10 md:p-14">
                <Quote className="text-green-500 mb-4 sm:mb-5 transition-all duration-500 ease-out hover:scale-110 hover:rotate-12" size={30} />
                <p className="text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed italic text-white transition-all duration-500 ease-out hover:text-gray-200">
                  "{item.desc}"
                </p>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white transition-all duration-500 ease-out hover:text-green-400">
                  {item.name}
                </p>

                {/* Navigation */}
                <div className="flex justify-center md:justify-start gap-4 mt-6 sm:mt-10">
                  <button
                    onClick={prevSlide}
                    className="bg-green-500 text-white p-2 sm:p-3 rounded-full transition-all duration-300 ease-out hover:bg-green-600 hover:scale-110 hover:-translate-x-1"
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="bg-green-500 text-white p-2 sm:p-3 rounded-full transition-all duration-300 ease-out hover:bg-green-600 hover:scale-110 hover:translate-x-1"
                  >
                    <ChevronRight />
                  </button>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="w-full md:w-1/2 flex mt-4 md:mt-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[250px] sm:h-[350px] md:h-full object-cover object-top rounded-md transition-all duration-700 ease-out hover:scale-105"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;