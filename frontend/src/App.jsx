import "./App.css";
import React from "react";
import NavBar from "./component/navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import AppPage from "./Pages/AppPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

function App() {
  return (
    <BrowserRouter>
      {/* Global Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-[#eef5f3] bg-grid">
        <div className="absolute top-[-20%] left-[-15%] w-[1000px] h-[1000px] bg-[#e1c5ff] opacity-55 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[1200px] h-[1200px] bg-[#9ee8d6] opacity-55 rounded-full blur-[160px]"></div>
        <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-[#bfdffd] opacity-45 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 w-full min-h-screen mx-auto overflow-x-hidden flex flex-col">
        <NavBar />
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Protected Route for /app */}
            <Route
              path="/app"
              element={
                <>
                  <SignedIn>
                    <AppPage />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;