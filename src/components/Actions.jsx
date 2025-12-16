import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const clientActions = [
  { id: 1, title: "Sell", img: "./home.png", description: "Maximize your property value with our expert marketing strategies and professional valuation services." },
  { id: 2, title: "Buy", img: "./property.png", description: "Access exclusive listings and find your dream home with guidance from our experienced real estate professionals." },
  { id: 3, title: "Rent", img: "./rent.png", description: "Explore premium rental properties that match your lifestyle, location preferences, and budget requirements." },
];

const Actions = () => {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

  return (
    <section className="w-full py-20 px-6 md:px-20 lg:px-40 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">How Can We Help You?</h2>
          <p className="text-gray-600 text-lg">Choose the service that best fits your real estate needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientActions.map((actions) => (
            <div
              key={actions.id}
              className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
              data-aos="fade-right"
            >
              <div className="h-[200px] flex justify-center items-center p-8 bg-gradient-to-br from-emerald-50 to-white">
                <img
                  src={actions.img}
                  alt={actions.title}
                  className="max-h-[150px] object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="w-[60px] h-1 bg-emerald-900 mb-6 mx-auto rounded-full"></div>
                <h2 className="text-3xl font-bold text-center text-emerald-900 mb-4">
                  {actions.title}
                </h2>
                <p className="text-center text-gray-600 mb-6 leading-relaxed">
                  {actions.description}
                </p>
                <div className="flex justify-center">
                  <button className="px-6 py-3 bg-emerald-900 rounded-xl text-white font-semibold shadow-md hover:bg-emerald-800 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Actions;
