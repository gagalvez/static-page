import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const Contact = () => {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

  return (
    <article className="w-full h-auto bg-gradient-to-br from-gray-50 to-white py-20 px-6 md:px-20 lg:px-40">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center max-w-7xl mx-auto" data-aos="fade-left">
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900 leading-tight">
            Making Dreams Come Home
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            Join over 13,000 satisfied families who found their perfect home with us. Our dedicated team of experts provides personalized guidance throughout your entire journey, ensuring you discover a property that perfectly matches your lifestyle, needs, and aspirations.
          </p>
          <div className="flex justify-start">
            <button className="px-8 py-4 bg-emerald-900 rounded-xl text-white font-semibold shadow-lg hover:bg-emerald-800 hover:shadow-xl hover:scale-105 transition-all duration-300">
              Contact us
            </button>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="flex flex-col items-center absolute bg-white w-[240px] md:w-[280px] rounded-2xl p-6 text-center shadow-2xl -left-4 md:-left-12 -top-8 md:-top-12 z-10 border-4 border-emerald-900/10">
            <h1 className="font-extrabold text-5xl md:text-6xl text-emerald-900">13k+</h1>
            <p className="text-base md:text-xl text-gray-700 mt-2">
              Happy families living their <strong className="text-emerald-900">DREAM</strong>
            </p>
          </div>
          <img
            src="./contactHouse.webp"
            alt="house"
            className="w-full max-w-[500px] h-auto rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </article>
  );
};

export default Contact;
