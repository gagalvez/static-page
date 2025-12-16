const SearchBar = () => {
  return (
    <div className="flex justify-center px-6 py-16 md:py-20">
      <div className="bg-white w-full max-w-6xl p-8 md:p-12 shadow-2xl rounded-2xl border border-gray-100">
        <div className="mb-8">
          <h2 className="font-bold text-center text-2xl md:text-3xl text-emerald-900">
            DISCOVER YOUR DREAM PROPERTY
          </h2>
          <p className="text-center text-gray-600 mt-2">Search thousands of listings to find your perfect match</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          <input
            type="text"
            id="location"
            placeholder="Location"
            className="px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-emerald-900 focus:outline-none transition-colors duration-300"
          />
          <input
            type="text"
            id="type"
            placeholder="Property Type"
            className="px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-emerald-900 focus:outline-none transition-colors duration-300"
          />
          <input
            type="text"
            id="budget"
            placeholder="Budget"
            className="px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-emerald-900 focus:outline-none transition-colors duration-300"
          />
          <button className="w-full bg-emerald-900 py-4 px-6 text-white font-bold rounded-xl shadow-md hover:bg-emerald-800 hover:shadow-xl hover:scale-105 transition-all duration-300">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
