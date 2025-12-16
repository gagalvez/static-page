import { useState, useEffect } from "react";

const navbarLinks = [
    {
        id: 1,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        title: "Properties",
        link: "/",
    },
    {
        id: 3,
        title: "Contact",
        link: "/",
    },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full ${
        scrolled
          ? "fixed top-0 left-0 bg-emerald-900 shadow-xl backdrop-blur-md"
          : "absolute top-0 left-0 bg-gradient-to-b from-black/50 to-transparent"
      } z-50 transition-all duration-500 ease-in-out`}
    >
      <nav className="flex justify-between px-6 md:px-8 py-3 md:py-4 items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2 md:gap-3">
          <img src="./logo.png" alt="HavenGreen Logo" className="w-[60px] md:w-[70px] h-auto" />
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            HavenGreen
          </h1>
        </div>

        <ul className="hidden lg:flex gap-8 text-lg font-medium items-center">
          {navbarLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.link}
                className="text-white hover:bg-white/20 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 inline-block"
              >
                {link.title}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="bg-white text-emerald-900 px-6 py-2.5 rounded-xl font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Started
            </a>
          </li>
        </ul>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 hover:bg-white/20 rounded-lg transition-all duration-300"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-emerald-900/95 backdrop-blur-md border-t border-white/10">
          <ul className="flex flex-col px-6 py-4 space-y-2">
            {navbarLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:bg-white/20 px-4 py-3 rounded-xl transition-all duration-300 block"
                >
                  {link.title}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-white text-emerald-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg block text-center"
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};


export default Navbar
