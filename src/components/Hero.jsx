import Navbar from "./Navbar";
import "../App.css"
const Hero = () => {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}
    >
      {/* Dark Overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Navbar Inside Hero */}
      <div className="absolute top-0 left-0 w-full">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative text-center z-10 mt-20">
        <h1 className="text-4xl md:text-6xl font-bold">Find Your Dream Job</h1>
        <p className="mt-4 text-lg">AI-powered job recommendations tailored for you.</p>
      </div>
    </section>
  );
};

export default Hero;
