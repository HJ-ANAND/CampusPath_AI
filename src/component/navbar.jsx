import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-6 md:px-12 bg-gray-900 shadow-md">
      {/* Left Side: Logo */}
      <Link to="/" className="text-2xl font-extrabold text-white tracking-wide">
        Lost <span className="text-gray-400">&</span> Found
      </Link>

      {/* Center: Nav Links */}
      <ul className="hidden md:flex gap-8 text-gray-300 text-sm font-medium">
        <li>
          <Link
            to="/"
            className="hover:text-white transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:text-white transition-colors duration-200"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:text-white transition-colors duration-200"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Right Side: CTA Button */}
      <button className="bg-white text-gray-900 text-sm font-medium px-5 py-2 rounded-full hover:bg-gray-100 transition-colors shadow-sm">
        Get Started
      </button>
    </nav>
  );
}

export default NavBar;
