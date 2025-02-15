import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"; // Adjust path if needed
import HamburgerIcon from "../assets/hamburger.svg"; // Your custom hamburger menu image
import CloseIcon from "../assets/closeIcon.svg"; // Your custom close icon image
import profile from "../assets/profile.svg"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle mobile menu

  return (
    <nav className="bg-traansparent  p-4">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Left Side - Logo & Website Name */}
        <Link to="/" className="flex items-center gap-x-2">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
          <span className="text-2xl font-bold text-blue-600">Onjob</span>
        </Link>

        {/* Center - Navigation Links (Hidden on small screens) */}
        <ul className="hidden md:flex flex-1 justify-center space-x-6">
          <li>
            <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          </li>
          <li>
            <Link to="/jobs" className="text-gray-700 hover:text-blue-500">Jobs</Link>
          </li>
          <li>
            <Link to="/About " className="text-gray-700 hover:text-blue-500">About Us</Link>
          </li>
          <li>
            <Link to="/Contact" className="text-gray-700 hover:text-blue-500">Contact Us</Link>
          </li>
        </ul>

        {/* Right Side - Login, Register, Profile (Hidden on small screens) */}
        <div className="hidden md:flex space-x-4">
          <Link to="/profile" className=" flex items-center gap-x-2 text-gray-700 hover:text-blue-500"><img src={profile} alt="profile" className="w-10 h-10" />
          Profile</Link>
          <Link to="/register" className="flex items-center gap-x-2 text-gray-700 hover:text-blue-500">Register</Link>
          <Link to="/login" className=" bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button (Uses Hamburger Image) */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <img 
            src={menuOpen ? CloseIcon : HamburgerIcon} 
            alt="Menu" 
            className="w-8 h-8"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md p-4">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link to="/" className="text-gray-700 hover:text-blue-500" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/jobs" className="text-gray-700 hover:text-blue-500" onClick={() => setMenuOpen(false)}>Jobs</Link>
            </li>
            <li>
              <Link to="/profile" className=" flex items-center gap-x-2 text-gray-700 hover:text-blue-500" onClick={() => setMenuOpen(false)}><img src={profile} alt="profile" className="w-10 h-10" />Profile</Link>
            </li>
            <li>
              <Link to="/register" className="text-gray-700 hover:text-blue-500" onClick={() => setMenuOpen(false)}>Register</Link>
            </li>
            <li>
              <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
