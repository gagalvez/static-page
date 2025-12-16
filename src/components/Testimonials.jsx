import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "First-time Homebuyer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    comment: "HavenGreen made buying my first home stress-free. Their team guided me through every step, and I found my dream apartment in just two weeks!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Investor",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    comment: "Outstanding service! They helped me find the perfect investment property with excellent ROI potential. Highly professional and responsive.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Family Relocating",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    comment: "Moving to a new city was daunting, but HavenGreen found us the perfect family home. Their local expertise was invaluable!",
    rating: 5,
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="w-full py-20 px-6 md:px-20 lg:px-40 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from our satisfied clients who found their perfect properties with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-emerald-900/10"
                />
                <div className="ml-4">
                  <h4 className="font-bold text-lg text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.comment}"
              </p>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-emerald-900/20"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.157-.672 4.243-1.757l-2.829-2.829c-.39.39-.929.586-1.414.586-1.105 0-2-.895-2-2s.895-2 2-2c.485 0 1.024.196 1.414.586l2.829-2.829c-1.086-1.085-2.586-1.757-4.243-1.757zm12 0c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.157-.672 4.243-1.757l-2.829-2.829c-.39.39-.929.586-1.414.586-1.105 0-2-.895-2-2s.895-2 2-2c.485 0 1.024.196 1.414.586l2.829-2.829c-1.086-1.085-2.586-1.757-4.243-1.757z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <p className="text-gray-600 text-lg mb-6">
            Join thousands of satisfied clients
          </p>
          <button className="px-8 py-4 bg-emerald-900 text-white font-semibold rounded-xl shadow-lg hover:bg-emerald-800 hover:shadow-xl hover:scale-105 transition-all duration-300">
            Share Your Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
