import { Link, useLocation } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function NavBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const linkClass = (path) =>
    `transition-colors duration-200 ${
      currentPath === path ? "text-white" : "text-slate-300 hover:text-white"
    }`;

  return (
    <nav className="w-full max-w-7xl mx-auto flex justify-between items-center py-5 px-8 md:px-12 bg-[#0B1528] rounded-b-[40px] shadow-2xl shadow-[#0B1528]/10 z-50">
      {/* Left Side: Logo */}
      <Link to="/" className="text-[22px] font-extrabold text-white tracking-widest flex items-center gap-2">
        Lost & Found
      </Link>

      {/* Center: Nav Links */}
      <ul className="hidden md:flex gap-10 text-[15px] font-semibold items-center">
        <li>
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={linkClass("/about")}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Right Side: Auth Buttons */}
      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton mode="modal" forceRedirectUrl="/app">
            <button className="bg-transparent border border-white/20 text-white text-sm font-bold px-7 py-2.5 rounded-full hover:bg-white/10 transition-colors shadow-sm cursor-pointer whitespace-nowrap">
              Login
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton showName={true} />
        </SignedIn>
      </div>
    </nav>
  );
}

export default NavBar;
