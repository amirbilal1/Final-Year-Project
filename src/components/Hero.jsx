import "../App.css";
import Navbar from "./Navbar";
const Hero = () => {
  return (
    <section className=" min-h-screen">
        
      {/* Navbar inside Hero */}
      <Navbar/>
      {/* Hero Content */}
      <div className="container mx-auto text-center py-20">
        <h1 className="text-4xl font-bold text-gray-900">
        Find Your Dream Job Today!        </h1>
        <p className="text-gray-600 mt-4">
        Connecting Talent with Opportunity: Your Gateway to Career Success        </p>
        <div className="mt-6 border bg-white rounded-xl shadow-md flex flex-wrap p-2 items-center max-xxl mx-auto">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Job title or keyword..."
            className="flex-1 px-4 py-2 text-gray-700 outline-none rounded-l-xl"
          />

          {/* Location Input */}
          <input
            type="text"
            placeholder="Location"
            className="flex-1 px-4 py-2 text-gray-700 outline-none border-l"
          />

          {/* Category Input */}
          <input
            type="text"
            placeholder="Category"
            className="flex-1 px-4 py-2 text-gray-700 outline-none border-l"
          />

          {/* Search Button */}
          <button className="bg-[#309689] text-white px-6 py-2 rounded-r-xl hover:bg-opacity-90 transition">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
