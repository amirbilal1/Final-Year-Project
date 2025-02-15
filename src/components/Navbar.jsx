import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center p-4 text-white z-50">
      {/* Logo & Website Name */}
      <div className="flex items-center">
        <img src="/assets/logo.png" alt="Logo" className="h-10 w-10 mr-2" />
        <Link to="/" className="text-xl font-semibold">JobFinder</Link>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6">
        <li><Link to="/" className="hover:text-[#309689]">Home</Link></li>
        <li><Link to="/Jobs" className="hover:text-[#309689]">Jobs</Link></li>
        <li><Link to="/categories" className="hover:text-[#309689]">Categories</Link></li>
      </ul>

      {/* Login, Register */}
      <div className="hidden md:flex space-x-4">
        <button className="bg-[#309689] text-white px-4 py-2 rounded-md">Login</button>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md">Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
