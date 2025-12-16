const Footer = () => {
  return (
    <footer className="flex flex-col w-full bg-gradient-to-br from-emerald-900 to-emerald-950 py-12 px-6 md:px-16 text-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <img src="./logo.png" alt="" className="w-[80px]" />
              <h5 className="text-2xl font-bold">HavenGreen</h5>
            </div>
            <p className="text-center md:text-left text-gray-300">
              Get expert guidance on your real estate journey. Contact us today and let our team help you find your perfect property.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <h1 className="font-bold text-xl mb-2">Quick menu</h1>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Rent</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Sell</a>
          </div>
          <div className="flex flex-col items-center md:items-start gap-4">
            <h1 className="font-bold text-xl mb-2">About us</h1>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Mission</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Vision</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Team</a>
          </div>
          <div className="flex flex-col items-center md:items-start gap-4">
            <h1 className="font-bold text-xl mb-2">Contact info</h1>
            <p className="text-gray-300">Santiago, Chile</p>
            <p className="text-gray-300">+569 1234 5678</p>
            <p className="text-gray-300">contact@havengreen.com</p>
          </div>
        </div>

        <div className="w-full border-t border-white/20 pt-6">
          <p className="text-center text-sm text-gray-300">
            © 2025 HavenGreen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};


export default Footer
