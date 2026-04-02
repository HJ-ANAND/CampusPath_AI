import React from "react";

const About = () => {
  return (
    <div className="w-full relative overflow-hidden font-sans text-slate-800 pb-32">
      <div className="relative z-10 flex flex-col items-center">

        {/* ══════════════════════════════════════════════════════
            HEADER
        ══════════════════════════════════════════════════════ */}
        <section className="relative flex flex-col items-center text-center mt-32 px-6 max-w-4xl mx-auto w-full">
          <div className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-xl border border-white/60 shadow-md px-5 py-2.5 rounded-full mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5cb9a5]"></span>
            <span className="text-[14px] font-semibold text-slate-600 tracking-wide">Community-driven platform</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold text-[#0B1528] tracking-tight mb-6 leading-[1.0]">
            About Us
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-600 mb-6">
            Our Mission: To Reconnect People with Their Belongings
          </h2>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl leading-relaxed">
            Lost & Found is a community-driven platform with a goal to facilitate reunions securely, empowering your community to achieve connections and peace of mind.
          </p>
        </section>

        {/* ══════════════════════════════════════════════════════
            THE PROBLEM & OUR SOLUTION — from old file, new theme
        ══════════════════════════════════════════════════════ */}
        <section className="mt-28 px-6 max-w-7xl mx-auto w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">

            {/* Problem */}
            <div className="bg-white p-10 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-50 flex flex-col gap-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center shrink-0">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                </div>
                <h2 className="text-3xl font-extrabold text-[#0B1528]">The Problem</h2>
              </div>
              <p className="text-slate-500 text-[16px] leading-relaxed italic border-l-4 border-slate-200 pl-4">
                "Losing a wallet or an ID card is stressful, but the lack of a centralized system makes recovery a matter of pure luck."
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-slate-700 font-medium p-4 bg-red-50/60 rounded-2xl border border-red-100/80">
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
                  </div>
                  <span className="text-[15px]">No centralized system to report lost items.</span>
                </div>
                <div className="flex items-center gap-4 text-slate-700 font-medium p-4 bg-red-50/60 rounded-2xl border border-red-100/80">
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                  </div>
                  <span className="text-[15px]">Extremely low chances of recovery without connection.</span>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="bg-[#0B1528] p-10 rounded-[32px] shadow-2xl shadow-[#0B1528]/20 flex flex-col gap-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-14 h-14 rounded-2xl bg-[#1A2642] flex items-center justify-center shrink-0 border border-white/5">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5cb9a5" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
                </div>
                <h2 className="text-3xl font-extrabold text-white">Our Solution</h2>
              </div>
              <p className="text-slate-400 text-[16px] leading-relaxed">
                We provide a location-based network that connects you with people in your immediate area. By focusing on <span className="text-[#5cb9a5] font-semibold">college campuses, societies, and metro stations</span>, we increase the speed of recovery and build a trusted community of helpers.
              </p>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold text-[#5cb9a5] text-lg mb-2">Building a Safer Campus Community</h4>
                <p className="text-slate-400 text-[15px] leading-relaxed">Ensuring every lost item has a path back to its owner through collaboration and hyperlocal awareness.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            HOW IT WORKS
        ══════════════════════════════════════════════════════ */}
        <section className="mt-28 px-6 max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#0B1528] tracking-tight">How It Works</h3>
            <p className="text-xl text-slate-500 mt-5 max-w-xl mx-auto leading-relaxed">Three simple steps to reunite with your belongings.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-14 rounded-[40px] flex flex-col items-center text-center shadow-2xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 border border-slate-50">
              <div className="w-28 h-28 mb-8 text-[#5cb9a5]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6" />
                  <circle cx="10" cy="13" r="2" /><path d="M11.5 14.5L14 17" />
                </svg>
              </div>
              <h4 className="text-3xl font-bold text-[#0B1528] mb-4">Report</h4>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">Easily log your lost or found item with details and photos.</p>
            </div>
            <div className="bg-white p-14 rounded-[40px] flex flex-col items-center text-center shadow-2xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 border border-slate-50">
              <div className="w-28 h-28 mb-8 text-[#5cb9a5]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                  <path d="M8.5 14.5A2.5 2.5 0 0011 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4a4 4 0 01-1.6 3.2" />
                  <path d="M15 11l5 5-5 5" /><path d="M4 11l5 5-5 5" /><path d="M10 16h4" />
                </svg>
              </div>
              <h4 className="text-3xl font-bold text-[#0B1528] mb-4">Match</h4>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">Our intelligent system finds potential matches instantly.</p>
            </div>
            <div className="bg-white p-14 rounded-[40px] flex flex-col items-center text-center shadow-2xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 border border-slate-50">
              <div className="w-28 h-28 mb-8 text-[#5cb9a5]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h4 className="text-3xl font-bold text-[#0B1528] mb-4">Reconnect</h4>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">Securely message and arrange a reunion with verified users.</p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            CORE PLATFORM FEATURES — from old file, new theme
        ══════════════════════════════════════════════════════ */}
        <section className="mt-28 px-6 max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#0B1528] tracking-tight">Core Platform Features</h3>
            <p className="text-xl text-slate-500 mt-5 max-w-xl mx-auto leading-relaxed">Built with safety and efficiency as our priority.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0B1528] p-10 rounded-[32px] shadow-2xl shadow-[#0B1528]/20 flex flex-col items-start gap-6 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#1A2642] flex items-center justify-center text-3xl border border-white/5 hover:scale-110 transition-transform">🔍</div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-2.5">Detailed Posting</h4>
                <p className="text-slate-400 text-[16px] leading-relaxed">Add titles, descriptions, specific locations, and upload images to make identification easier for the finder.</p>
              </div>
            </div>
            <div className="bg-[#0B1528] p-10 rounded-[32px] shadow-2xl shadow-[#0B1528]/20 flex flex-col items-start gap-6 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#1A2642] flex items-center justify-center text-3xl border border-white/5 hover:scale-110 transition-transform">📲</div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-2.5">Instant Alerts</h4>
                <p className="text-slate-400 text-[16px] leading-relaxed">Receive notifications as soon as someone reports an item that matches your description and location.</p>
              </div>
            </div>
            <div className="bg-[#0B1528] p-10 rounded-[32px] shadow-2xl shadow-[#0B1528]/20 flex flex-col items-start gap-6 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#1A2642] flex items-center justify-center text-3xl border border-white/5 hover:scale-110 transition-transform">🛡️</div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-2.5">Secure Chat</h4>
                <p className="text-slate-400 text-[16px] leading-relaxed">Communicate securely with identity-masked chat to arrange safe pickups with verified users.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            OUR IMPACT
        ══════════════════════════════════════════════════════ */}
        <section className="mt-28 px-6 max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#0B1528] tracking-tight">Our Impact</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-50 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center shadow-inner mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5cb9a5" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></svg>
              </div>
              <h4 className="text-5xl font-extrabold text-[#5cb9a5] mb-2">500+</h4>
              <p className="text-slate-500 font-semibold text-lg uppercase tracking-wide">Items Reunited</p>
            </div>
            <div className="bg-white p-10 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-50 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center shadow-inner mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5cb9a5" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
              </div>
              <h4 className="text-5xl font-extrabold text-[#5cb9a5] mb-2">10,000+</h4>
              <p className="text-slate-500 font-semibold text-lg uppercase tracking-wide">Community Members</p>
            </div>
            <div className="bg-white p-10 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-50 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center shadow-inner mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5cb9a5" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>
              </div>
              <h4 className="text-5xl font-extrabold text-[#5cb9a5] mb-2">98%</h4>
              <p className="text-slate-500 font-semibold text-lg uppercase tracking-wide">Secure Matches</p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            HYPERLOCAL USE CASES — from old file, new theme
        ══════════════════════════════════════════════════════ */}
        <section className="mt-28 px-6 max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#0B1528] tracking-tight">Optimized for Hyperlocal Environments</h3>
            <p className="text-xl text-slate-500 mt-5 max-w-xl mx-auto leading-relaxed">Wherever you lose something, we're already there.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-50 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🏫</div>
              <h4 className="text-2xl font-bold text-[#0B1528] mb-3">College Campus</h4>
              <p className="text-slate-500 text-[16px] leading-relaxed">The most common place things go missing. Our system is built to serve dense, hyperlocal student communities.</p>
            </div>
            <div className="bg-[#0B1528] p-10 rounded-[32px] shadow-2xl shadow-[#0B1528]/20 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🏢</div>
              <h4 className="text-2xl font-bold text-white mb-3">Societies</h4>
              <p className="text-slate-400 text-[16px] leading-relaxed">Residential complexes and gated communities where trust-based recovery is easy with verified neighbors.</p>
            </div>
            <div className="bg-white p-10 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-50 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🚇</div>
              <h4 className="text-2xl font-bold text-[#0B1528] mb-3">Metro Stations</h4>
              <p className="text-slate-500 text-[16px] leading-relaxed">High-traffic transit hubs where lost items need to be reported and matched fast before they disappear.</p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            FINAL CTA — from old file, new theme
        ══════════════════════════════════════════════════════ */}
        <section className="mt-28 px-6 max-w-7xl mx-auto w-full">
          <div className="bg-[#0B1528] rounded-[40px] px-12 py-20 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl shadow-[#0B1528]/30 overflow-hidden relative">
            <div className="absolute -right-24 -top-24 w-[380px] h-[380px] rounded-full bg-[#5cb9a5]/10 pointer-events-none"></div>
            <div className="absolute -left-16 -bottom-20 w-[280px] h-[280px] rounded-full bg-[#5cb9a5]/5 pointer-events-none"></div>
            <div className="relative z-10 max-w-xl">
              <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                Find what matters.<br /><span className="text-[#5cb9a5]">Helping is free.</span>
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">Join thousands of community members who've already reconnected with their belongings. No fees, no friction.</p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0">
              <button className="bg-[#5cb9a5] text-white px-9 py-4 rounded-full font-bold text-[15px] shadow-xl shadow-[#5cb9a5]/30 hover:-translate-y-1 hover:bg-[#4ea693] transition-all duration-300 whitespace-nowrap">
                Start Finding Now
              </button>
              <button className="bg-white/10 border border-white/20 text-white px-9 py-4 rounded-full font-bold text-[15px] hover:-translate-y-1 hover:bg-white/20 transition-all duration-300 whitespace-nowrap">
                How It Works
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;