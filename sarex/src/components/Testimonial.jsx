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
      desc: "Joining Sarex completely changed my fitness journey. The trainers are amazing, and I’ve never felt stronger or more confident!",
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

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="px-10 md:px-32 py-20">
      <div className="relative w-full overflow-hidden min-h-[500px] rounded-xl">
        {testimonials.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex flex-col md:flex-row w-full h-full">
              {/* Left Text Section */}
              <div className="md:w-1/2 flex flex-col justify-center text-left bg-black p-10 md:p-14">
                <Quote className="text-green-500 mb-5" size={40} />
                <p className="text-lg mb-6 leading-relaxed italic text-white">
                  “{item.desc}”
                </p>
                <p className="text-xl font-semibold text-white">{item.name}</p>

                {/* Navigation */}
                <div className="flex gap-4 mt-10">
                  <button
                    onClick={prevSlide}
                    className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition"
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition"
                  >
                    <ChevronRight />
                  </button>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="md:w-1/2 flex">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-top"
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
