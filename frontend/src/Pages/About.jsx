import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="w-full relative overflow-hidden font-sans text-slate-800 pb-32 pt-36 md:pt-44 min-h-screen flex flex-col">
      {/* ── INLINE STYLES FOR CONSISTENCY ── */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .text-outline {
          color: transparent;
          -webkit-text-stroke: 1px rgba(11, 21, 40, 0.08);
        }
        .text-outline-teal {
          color: transparent;
          -webkit-text-stroke: 1px rgba(92, 185, 165, 0.25);
        }
        .pulse-dot {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .5; }
        }
      `}} />

      {/* Large Faded Background Typography */}
      <span className="absolute top-[12%] left-[-2%] text-[clamp(6rem,15vw,12rem)] font-black text-outline pointer-events-none select-none -rotate-12 z-0 opacity-60">ABOUT</span>
      <span className="absolute top-[42%] right-[-2%] text-[clamp(4rem,10vw,10rem)] font-black text-outline-teal pointer-events-none select-none rotate-6 z-0 opacity-50">MISSION</span>
      <span className="absolute top-[72%] left-[2%] text-[clamp(6rem,15vw,12rem)] font-black text-outline pointer-events-none select-none -rotate-6 z-0 opacity-60">COMMUNITY</span>
      <span className="absolute bottom-[5%] right-[5%] text-[clamp(4rem,10vw,8rem)] font-black text-outline-teal pointer-events-none select-none z-0 opacity-50">IMPACT</span>

      <div className="relative z-10 flex flex-col items-center w-full">
        {/* ══════════════════════════════════════════════════════
            HERO / HEADER SECTION
        ══════════════════════════════════════════════════════ */}
        <section className="relative flex flex-col items-center text-center px-6 max-w-5xl mx-auto w-full animate-fade-up">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md border border-slate-100 shadow-sm rounded-full px-6 py-3 mb-12">
            <div className="w-2.5 h-2.5 bg-[#5cb9a5] rounded-full pulse-dot"></div>
            <span className="text-[12px] md:text-[13px] font-black text-slate-500 tracking-widest uppercase">Community-Driven Platform</span>
          </div>
          
          <h1 className="font-black text-[#0B1528] leading-[1.05] mb-10" style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}>
            Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5cb9a5] to-[#4ea693]">Connections</span> <br/>
            through <span className="text-[#0B1528]">Compassion</span>
          </h1>

          <p className="text-[1.1rem] md:text-[1.3rem] text-slate-500 max-w-3xl mx-auto mb-16 leading-relaxed font-semibold">
            At Lost & Found, we believe every item has a story and every reunion is a victory. Our goal is to facilitate reunions securely, empowering your community to achieve peace of mind.
          </p>
        </section>

        {/* ══════════════════════════════════════════════════════
            THE PROBLEM & OUR SOLUTION
        ══════════════════════════════════════════════════════ */}
        <section className="mt-12 px-6 xl:px-12 max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            {/* Problem Card */}
            <div className="h-full bg-white/90 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center shrink-0 shadow-inner">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-[#0B1528] tracking-tight">The Friction</h2>
              </div>
              <p className="text-slate-500 text-lg leading-relaxed italic border-l-4 border-red-200 pl-6 py-2 flex-1">
                "Losing a wallet or an ID card elsewhere is an anxiety-inducing black hole. The lack of a centralized local system makes recovery a matter of pure luck."
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-5 p-5 bg-slate-50/80 rounded-2xl group transition-all hover:bg-red-50/50">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform border border-slate-100">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
                  </div>
                  <span className="text-[16px] font-bold text-slate-700">Fragmented Reporting Systems</span>
                </div>
                <div className="flex items-center gap-5 p-5 bg-slate-50/80 rounded-2xl group transition-all hover:bg-red-50/50">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform border border-slate-100">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5"><path d="M10 16h.01M22 12A10 10 0 112 12a10 10 0 0120 0zM12 8v4"/></svg>
                  </div>
                  <span className="text-[16px] font-bold text-slate-700">Near-Zero Recovery Transparency</span>
                </div>
              </div>
            </div>

            {/* Solution Card */}
            <div className="h-full bg-[#0B1528] p-8 md:p-12 rounded-[2.5rem] shadow-[0_32px_80px_-20px_rgba(11,21,40,0.4)] flex flex-col gap-8 animate-fade-up border border-white/5 relative overflow-hidden group" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -right-12 -top-12 w-64 h-64 bg-[#5cb9a5]/10 rounded-full blur-3xl group-hover:scale-120 transition-transform duration-1000"></div>
              
              <div className="flex items-center gap-5 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-[#5cb9a5]/30 transition-all">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5cb9a5" strokeWidth="2.5"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Our Solution</h2>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed relative z-10 font-medium flex-1">
                We provide a <span className="text-[#5cb9a5] font-black">Location-Intelligence Network</span> that maps discoveries to your precise community. By focusing on campuses and residential hubs, we increase recovery probability by <span className="text-white font-black italic">600%</span>.
              </p>
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10 relative z-10 group-hover:bg-white/10 transition-all">
                <h4 className="font-black text-[#5cb9a5] text-lg md:text-xl mb-4 tracking-wider uppercase">The Safety Standard</h4>
                <p className="text-slate-400 text-[16px] md:text-[17px] font-semibold leading-relaxed">Identity-masked matching ensures every item is returned through verified community collaboration, not lucky chance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            OUR IMPACT
        ══════════════════════════════════════════════════════ */}
        <section className="mt-32 px-6 xl:px-12 max-w-7xl mx-auto w-full relative z-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="text-center mb-16">
            <h3 className="text-[3rem] md:text-[4.5rem] font-black text-[#0B1528] tracking-tighter leading-none mb-6">Our Impact</h3>
            <p className="text-lg md:text-xl text-slate-500 font-extrabold max-w-xl mx-auto">Scale of trust built by our members over the last year.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            <div className="h-full bg-white/80 backdrop-blur-xl p-10 md:p-14 rounded-[3rem] border border-white shadow-xl shadow-slate-200/40 flex flex-col items-center justify-center text-center hover:-translate-y-2 transition-all duration-500 min-h-[320px]">
              <div className="w-20 h-20 bg-[#5cb9a5]/10 rounded-3xl flex items-center justify-center mb-8 shrink-0 shadow-inner">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#5cb9a5" strokeWidth="2.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></svg>
              </div>
              <h4 className="text-5xl md:text-6xl font-black text-[#0B1528] mb-4 tracking-tight">500<span className="text-[#5cb9a5]">k</span></h4>
              <p className="text-slate-500 font-black text-sm uppercase tracking-[0.2em]">Items Reclaimed</p>
            </div>
            <div className="h-full bg-white/80 backdrop-blur-xl p-10 md:p-14 rounded-[3rem] border border-white shadow-xl shadow-slate-200/40 flex flex-col items-center justify-center text-center hover:-translate-y-2 transition-all duration-500 min-h-[320px]">
              <div className="w-20 h-20 bg-[#5cb9a5]/10 rounded-3xl flex items-center justify-center mb-8 shrink-0 shadow-inner">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#5cb9a5" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
              </div>
              <h4 className="text-5xl md:text-6xl font-black text-[#0B1528] mb-4 tracking-tight">10<span className="text-[#5cb9a5]">k</span></h4>
              <p className="text-slate-500 font-black text-sm uppercase tracking-[0.2em]">Active Neighbors</p>
            </div>
            <div className="h-full bg-white/80 backdrop-blur-xl p-10 md:p-14 rounded-[3rem] border border-white shadow-xl shadow-slate-200/40 flex flex-col items-center justify-center text-center hover:-translate-y-2 transition-all duration-500 min-h-[320px]">
              <div className="w-20 h-20 bg-[#5cb9a5]/10 rounded-3xl flex items-center justify-center mb-8 shrink-0 shadow-inner">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#5cb9a5" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>
              </div>
              <h4 className="text-5xl md:text-6xl font-black text-[#0B1528] mb-4 tracking-tight">98<span className="text-[#5cb9a5]">%</span></h4>
              <p className="text-slate-500 font-black text-sm uppercase tracking-[0.2em]">Success Rate</p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            HYPERLOCAL USE CASES
        ══════════════════════════════════════════════════════ */}
        <section className="mt-32 px-6 xl:px-12 max-w-7xl mx-auto w-full relative z-10 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="text-center mb-20">
            <h3 className="text-[3rem] md:text-[4.5rem] font-black text-[#0B1528] tracking-tighter leading-none mb-6">Built for the <br className="md:hidden" /><span className="text-[#5cb9a5]">Community</span></h3>
            <p className="text-xl md:text-2xl text-slate-500 font-black max-w-2xl mx-auto">Wherever life happens, we ensure nothing stays lost for long.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 items-start">
            {/* CARD 1: COLLEGE CAMPUS */}
            <div className="flex flex-col items-center group text-center">
              <div className="w-60 h-60 min-w-[240px] min-h-[240px] max-w-[240px] max-h-[240px] bg-white rounded-full flex items-center justify-center p-2 border-[8px] border-white shadow-xl group-hover:scale-105 transition-transform duration-700 overflow-hidden mb-8 shrink-0 aspect-square">
                <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=500&q=80" alt="Campus" className="w-full h-full object-cover rounded-full aspect-square" />
              </div>
              <h4 className="text-2xl lg:text-3xl font-black text-[#0B1528] mb-4">College Campus</h4>
              <p className="text-slate-500 font-bold px-4 leading-relaxed">The high-density heartbeat of our network. Returning IDs, books, and laptops daily.</p>
            </div>
            
            {/* CARD 2: RESIDENTIAL SOCIETIES */}
            <div className="flex flex-col items-center group text-center">
              <div className="w-60 h-60 min-w-[240px] min-h-[240px] max-w-[240px] max-h-[240px] bg-[#0B1528] rounded-full flex items-center justify-center p-2 border-[8px] border-white shadow-xl group-hover:scale-105 transition-transform duration-700 overflow-hidden mb-8 shrink-0 aspect-square relative">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80" alt="Societies" className="w-full h-full object-cover rounded-full aspect-square opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center text-[4rem]">🏢</div>
              </div>
              <h4 className="text-2xl lg:text-3xl font-black text-[#0B1528] mb-4">Residential Societies</h4>
              <p className="text-slate-500 font-bold px-4 leading-relaxed">Trusted neighbors looking out for neighbors. Perfect for wallets and small electronics.</p>
            </div>

            {/* CARD 3: METRO STATIONS */}
            <div className="flex flex-col items-center group text-center">
              <div className="w-60 h-60 min-w-[240px] min-h-[240px] max-w-[240px] max-h-[240px] bg-white rounded-full flex items-center justify-center p-2 border-[8px] border-white shadow-xl group-hover:scale-105 transition-transform duration-700 overflow-hidden mb-8 shrink-0 aspect-square">
                <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=500&q=80" alt="Transit" className="w-full h-full object-cover rounded-full aspect-square" />
              </div>
              <h4 className="text-2xl lg:text-3xl font-black text-[#0B1528] mb-4">Metro Stations</h4>
              <p className="text-slate-500 font-bold px-4 leading-relaxed">High-speed recovery at transit hubs where every second counts for matching commuters.</p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            FINAL CTA
        ══════════════════════════════════════════════════════ */}
        <section className="mt-40 px-6 xl:px-12 max-w-7xl mx-auto w-full mb-20 relative z-10">
          <div className="bg-[#0B1528] rounded-[3rem] md:rounded-[4rem] px-8 md:px-20 py-24 flex flex-col lg:flex-row items-center justify-between gap-16 shadow-[0_40px_100px_-20px_rgba(11,21,40,0.5)] overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a2b4b] to-[#0B1528] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -right-24 -top-24 w-[500px] h-[500px] rounded-full bg-[#5cb9a5]/10 blur-[100px] pointer-events-none"></div>
            <div className="absolute -left-24 -bottom-24 w-[400px] h-[400px] rounded-full bg-[#5cb9a5]/10 blur-[80px] pointer-events-none"></div>

            <div className="relative z-10 max-w-2xl text-center lg:text-left">
              <h3 className="text-[2.8rem] md:text-[4rem] font-black text-white tracking-tighter mb-8 leading-[1.05]">
                Find Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5cb9a5] to-[#80dfca]">Peace of Mind.</span>
              </h3>
              <p className="text-slate-400 text-xl md:text-2xl font-semibold leading-relaxed mb-6">
                Join thousands of community members who have already reclaimed what's theirs. All for free.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
              <Link to="/" className="bg-[#5cb9a5] text-white px-8 py-4 rounded-full font-bold text-[17px] shadow-xl shadow-[#5cb9a5]/20 hover:-translate-y-1 hover:bg-[#4ea693] transition-all duration-300 whitespace-nowrap w-full sm:w-auto text-center">
                Get Started Now
              </Link>
              <Link to="/contact" className="bg-transparent border border-slate-500/30 text-white px-8 py-4 rounded-full font-bold text-[17px] hover:-translate-y-1 hover:bg-white/5 transition-all duration-300 whitespace-nowrap w-full sm:w-auto text-center">
                Contact Support
              </Link>
            </div>
          </div>
        </section>

        {/* Embedded Footer */}
        <div className="text-slate-400 text-xs md:text-sm font-black uppercase tracking-[0.2em] opacity-50 mb-10 text-center w-full">
          &copy; {new Date().getFullYear()} CampusPath AI • Lost & Found Network
        </div>
      </div>
    </div>
  );
}

export default About;