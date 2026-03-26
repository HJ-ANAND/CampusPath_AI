import { Link } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

function NavBar() {
  return (
    <nav className="w-full flex justify-between items-center p-6 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">CampusPath AI</h1>
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <li>
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-600">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-600">
            Contact Us
          </Link>
        </li>
      </ul>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        Get Started
      </button>
    </nav>
  );
}

export default NavBar;
