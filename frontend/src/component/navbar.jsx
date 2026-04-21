import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function NavBar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass = (path) =>
    `transition-colors duration-200 ${
      currentPath === path ? "text-[#5cb9a5]" : "text-slate-600 hover:text-[#5cb9a5]"
    }`;

  // Custom Dashboard Icon for the Clerk Menu
  const DashboardIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="9"></rect>
      <rect x="14" y="3" width="7" height="5"></rect>
      <rect x="14" y="12" width="7" height="9"></rect>
      <rect x="3" y="16" width="7" height="5"></rect>
    </svg>
  );

  // Reusable appearance prop to maintain a premium glassmorphism vibe
  const userButtonAppearance = {
    elements: {
      userButtonPopoverCard: "bg-white/90 backdrop-blur-2xl border border-white/50 shadow-[0_12px_48px_rgba(0,0,0,0.12)] rounded-2xl",
      userButtonPopoverActionButton: "hover:bg-slate-50/80 text-slate-700 transition-colors duration-200",
      userButtonPopoverActionButtonText: "font-semibold",
      userButtonPopoverActionButtonIconBox: "text-slate-500",
      userButtonPopoverFooter: "border-t border-slate-100/50",
      userPreviewMainIdentifier: "font-bold text-[#0B1528]",
      userPreviewSecondaryIdentifier: "text-slate-500",
      avatarBox: "shadow-md shadow-[#5cb9a5]/10 border border-slate-100",
    }
  };

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl mt-5 px-6 md:px-12 py-4 bg-white/70 backdrop-blur-xl border border-white/40 rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.05)] z-100 flex justify-between items-center transition-all duration-300">
      {/* Left Side: Logo */}
      <Link to="/" className="text-[20px] md:text-[22px] font-black text-[#0B1528] tracking-tight flex items-center gap-2 group">
        <span className="w-8 h-8 rounded-lg bg-[#5cb9a5] flex items-center justify-center text-white shadow-lg shadow-[#5cb9a5]/20 group-hover:rotate-12 transition-transform duration-300">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
        </span>
        Lost & Found
      </Link>

      {/* Center: Nav Links (Desktop) */}
      <ul className="hidden md:flex gap-10 text-[15px] font-bold items-center">
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

      {/* Right Side: Auth & Mobile Toggle */}
      <div className="flex items-center gap-3 md:gap-4">
        <div className="hidden sm:block">
          <SignedOut>
            <SignInButton mode="modal" forceRedirectUrl="/app">
              <button className="bg-[#0B1528] text-white text-sm font-bold px-7 py-3 rounded-full hover:bg-[#1A2642] hover:shadow-lg hover:shadow-[#0B1528]/10 transition-all duration-300 cursor-pointer whitespace-nowrap">
                Login
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton showName={true} appearance={userButtonAppearance}>
              <UserButton.MenuItems>
                <UserButton.Link
                  label="Dashboard"
                  labelIcon={<DashboardIcon />}
                  href="/app"
                />
                <UserButton.Action label="manageAccount" />
                <UserButton.Action label="signOut" />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-11 h-11 flex items-center justify-center text-[#0B1528] bg-[#0B1528]/5 rounded-full border border-[#0B1528]/10 hover:bg-[#0B1528]/10 transition-colors"
        >
          {isMenuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-[calc(100%+12px)] left-0 right-0 bg-white/90 backdrop-blur-2xl rounded-4xl p-8 shadow-[0_12px_48px_rgba(0,0,0,0.12)] border border-white/50 md:hidden flex flex-col gap-8 animate-in fade-in slide-in-from-top-4 duration-300 origin-top">
          <ul className="flex flex-col gap-6 text-[17px] font-bold">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)} className={currentPath === "/" ? "text-[#5cb9a5]" : "text-[#0B1528] hover:text-[#5cb9a5] transition-colors"}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)} className={currentPath === "/about" ? "text-[#5cb9a5]" : "text-[#0B1528] hover:text-[#5cb9a5] transition-colors"}>About</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)} className={currentPath === "/contact" ? "text-[#5cb9a5]" : "text-[#0B1528] hover:text-[#5cb9a5] transition-colors"}>Contact</Link></li>
          </ul>
          <div className="pt-6 border-t border-slate-100 sm:hidden">
            <SignedOut>
              <SignInButton mode="modal" forceRedirectUrl="/app">
                <button className="w-full bg-[#0B1528] text-white text-[15px] font-bold py-4 rounded-full shadow-xl shadow-[#0B1528]/10">Login</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <div className="flex items-center gap-3">
                <UserButton showName={true} appearance={userButtonAppearance}>
                   <UserButton.MenuItems>
                    <UserButton.Link
                      label="Dashboard"
                      labelIcon={<DashboardIcon />}
                      href="/app"
                    />
                    <UserButton.Action label="manageAccount" />
                    <UserButton.Action label="signOut" />
                  </UserButton.MenuItems>
                </UserButton>
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
