import React from "react";
import lostFoundHero from "../assets/lost_found_hero.png";

const About = () => {
  return (
    <div className="w-full relative overflow-hidden font-sans text-slate-800 pb-32">
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Header Section */}
        <section className="relative flex flex-col items-center text-center mt-32 px-6 max-w-4xl mx-auto w-full">
          <h1 className="text-6xl md:text-7xl font-extrabold text-[#0B1528] tracking-tight mb-8 font-[serif]">
            About Us
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-6">
            Our Mission: To Reconnect People with Their Belongings
          </h2>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl leading-relaxed">
            Lost & Found is a community-driven platform with a goal to facilitate reunions securely, empowering your community to achieve connections and peace of mind.
          </p>
        </section>

        {/* 3. HOW IT WORKS (White Floating cards with Teal Icons to match screen 3) */}
        <section className="mt-32 px-6 max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#0B1528] tracking-tight">
              How It Works
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-14 rounded-[40px] flex flex-col items-center text-center shadow-2xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 border border-slate-50">
              <div className="w-28 h-28 mb-8 text-[#5cb9a5]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><circle cx="10" cy="13" r="2"/><path d="M11.5 14.5L14 17"/></svg>
              </div>
              <h4 className="text-3xl font-bold text-[#0B1528] mb-4">Report</h4>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                Easily log your lost or found item with details and photos.
              </p>
            </div>

            <div className="bg-white p-14 rounded-[40px] flex flex-col items-center text-center shadow-2xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 border border-slate-50">
              <div className="w-28 h-28 mb-8 text-[#5cb9a5]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M8.5 14.5A2.5 2.5 0 0011 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4a4 4 0 01-1.6 3.2"/><path d="M15 11l5 5-5 5"/><path d="M4 11l5 5-5 5"/><path d="M10 16h4"/></svg>
              </div>
              <h4 className="text-3xl font-bold text-[#0B1528] mb-4">Match</h4>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                Our intelligent system finds potential matches instantly.
              </p>
            </div>

            <div className="bg-white p-14 rounded-[40px] flex flex-col items-center text-center shadow-2xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 border border-slate-50">
              <div className="w-28 h-28 mb-8 text-[#5cb9a5]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
              </div>
              <h4 className="text-3xl font-bold text-[#0B1528] mb-4">Reconnect</h4>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                Securely message and arrange a reunion with verified users.
              </p>
            </div>
          </div>
        </section>

        {/* Our Impact Section */}
        <section className="mt-32 px-6 max-w-7xl mx-auto w-full relative z-10 text-center">
          <h3 className="text-4xl md:text-5xl font-extrabold text-[#0B1528] tracking-tight mb-16">
            Our Impact
          </h3>
          <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-20">
            {/* Impact 1 */}
            <div className="flex flex-col items-center gap-4">
               <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center shadow-inner">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5cb9a5" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
               </div>
               <div className="text-center">
                 <h4 className="text-4xl font-extrabold text-[#5cb9a5]">500+</h4>
                 <p className="text-slate-500 font-medium text-lg uppercase tracking-wide mt-1">Items Reunited</p>
               </div>
            </div>

            {/* Impact 2 */}
            <div className="flex flex-col items-center gap-4">
               <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center shadow-inner">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5cb9a5" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
               </div>
               <div className="text-center">
                 <h4 className="text-4xl font-extrabold text-[#5cb9a5]">10,000+</h4>
                 <p className="text-slate-500 font-medium text-lg uppercase tracking-wide mt-1">Community Members</p>
               </div>
            </div>

            {/* Impact 3 */}
            <div className="flex flex-col items-center gap-4">
               <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center shadow-inner">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5cb9a5" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
               </div>
               <div className="text-center">
                 <h4 className="text-4xl font-extrabold text-[#5cb9a5]">98%</h4>
                 <p className="text-slate-500 font-medium text-lg uppercase tracking-wide mt-1">Secure Matches</p>
               </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
