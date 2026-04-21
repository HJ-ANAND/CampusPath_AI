import React from "react";
import { useAuth, useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function App() {
  const { isSignedIn } = useAuth();
  const clerk = useClerk();
  const navigate = useNavigate();

  const handleAction = (type) => {
    if (isSignedIn) {
      navigate(`/app?action=${type}`);
    } else {
      clerk.openSignIn({ forceRedirectUrl: `/app?action=${type}` });
    }
  };

  return (
    <div className="w-full relative font-sans text-slate-800 min-h-screen flex flex-col">
      {/* Inline Styles for Layout & Static Elements */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.8s ease-out forwards;
        }

        .text-outline {
          color: transparent;
          -webkit-text-stroke: 1px rgba(11, 21, 40, 0.08);
        }
        .text-outline-teal {
          color: transparent;
          -webkit-text-stroke: 1px rgba(92, 185, 165, 0.25);
        }
        .avatar-stack { display: flex; align-items: center; justify-content: center; }
        .avatar-item {
          width: 32px; height: 32px; border-radius: 50%;
          border: 2px solid white; margin-left: -10px; object-fit: cover;
        }
        .avatar-item:first-child { margin-left: 0; }
        .pulse-dot {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .5; }
        }
        .glass-dark {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
      `}} />

      {/* ══════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════ */}
      <main className="relative w-full min-h-screen flex flex-col items-center justify-center pt-36 pb-32 px-6 overflow-hidden">

        {/* Large Faded Background Typography */}
        <span className="absolute top-[20%] left-[-2%] text-[clamp(6rem,15vw,12rem)] font-black text-outline pointer-events-none select-none -rotate-12 opacity-60">LOST</span>
        <span className="absolute top-[60%] left-[15%] text-[clamp(4rem,10vw,8rem)] font-black text-outline-teal pointer-events-none select-none opacity-50">PHONES</span>
        <span className="absolute top-[15%] right-[5%] text-[clamp(6rem,15vw,10rem)] font-black text-outline-teal pointer-events-none select-none opacity-50">KEYS</span>
        <span className="absolute top-[50%] right-[-5%] text-[clamp(6rem,15vw,12rem)] font-black text-outline pointer-events-none select-none rotate-6 opacity-60">FOUND</span>

        {/* ── TOP BADGE ── */}
        <div className="bg-white/70 backdrop-blur-md border border-white/50 rounded-full px-2 py-1.5 flex items-center gap-4 animate-fade-up z-20 mb-10 shadow-sm pr-6 mt-10">
          <div className="avatar-stack">
            <img className="avatar-item" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="u1" />
            <img className="avatar-item" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="u2" />
            <img className="avatar-item" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop" alt="u3" />
            <div className="avatar-item bg-[#5cb9a5] flex items-center justify-center text-white text-[10px] font-black z-10 relative">15k+</div>
          </div>
          <span className="text-[14px] font-bold text-slate-700">Items Reconnected with Owners</span>
        </div>

        {/* ── HEADLINE & SUBTEXT ── */}
        <div className="relative z-20 text-center max-w-4xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <h1 className="font-black text-[#0B1528] leading-[1.1] mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
            Recover Your <span className="text-transparent bg-clip-text bg-linear-to-r from-[#5cb9a5] to-[#4ea693]">Lost Items</span> <br className="hidden md:block"/>
            with AI-Powered <span className="text-[#0B1528]">Matching</span>
          </h1>
          <p className="text-[1.1rem] md:text-[1.2rem] text-slate-500 max-w-3xl mx-auto mb-10 leading-relaxed font-semibold">
            Practice with the most advanced AI tracker. Get real-time updates, personalized matching, and comprehensive recovery for lost electronics, wallets, and documents.
          </p>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 shadow-[0_4px_24px_rgba(0,0,0,0.04)] rounded-full px-6 py-3 mb-10">
            <div className="w-2.5 h-2.5 bg-[#5cb9a5] rounded-full pulse-dot"></div>
            <span className="text-[14px] font-bold text-slate-600">150 students are recovering items right now</span>
          </div>

          {/* ── CTAs ── */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full">
            <button onClick={() => handleAction('lost')} className="flex items-center justify-center gap-2 bg-[#0B1528] text-white px-8 py-4 rounded-xl font-black text-[16px] shadow-xl shadow-[#0B1528]/20 hover:-translate-y-1 hover:bg-[#152342] transition-all w-full sm:w-auto min-w-50">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
              Report Lost Item
            </button>
            <button onClick={() => handleAction('found')} className="bg-[#5cb9a5] text-white px-8 py-4 rounded-xl font-black text-[16px] shadow-xl shadow-[#5cb9a5]/25 hover:-translate-y-1 hover:bg-[#4ea693] transition-all w-full sm:w-auto min-w-50">
              Submit Found Item
            </button>
          </div>

          {/* ── TRUST SIGNALS ── */}
          <div className="flex flex-wrap justify-center gap-8 text-[14px] font-bold text-slate-500">
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5cb9a5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              No Registration Required
            </div>
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5cb9a5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              Instant AI Assistance
            </div>
          </div>
        </div>

        {/* ── LEFT & RIGHT STATIC GRAPHICS ── */}
        {/* Left Graphic (Lost Wallet) */}
        <div className="absolute left-[2%] top-[25%] hidden xl:flex flex-col items-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="w-[320px] h-80 bg-white rounded-full flex items-center justify-center overflow-hidden border-[6px] border-white shadow-[0_20px_50px_rgba(11,21,40,0.08)]">
            <img src="https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop" alt="Lost Wallet" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="bg-white px-5 py-2.5 rounded-full border border-slate-100 shadow-lg flex items-center gap-2.5 -mt-6 z-10 text-[13px] font-black text-[#0B1528]">
            <div className="w-2.5 h-2.5 bg-[#5cb9a5] rounded-full"></div>
            AI-Powered Item Mastery
          </div>
        </div>

        {/* Right Graphic (Lost Phone) */}
        <div className="absolute right-[2%] top-[40%] hidden xl:flex flex-col items-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="w-[320px] h-80 bg-white rounded-full flex items-center justify-center overflow-hidden border-[6px] border-white shadow-[0_20px_50px_rgba(11,21,40,0.08)]">
            <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop" alt="Lost Smartphone" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="bg-white px-6 py-4 rounded-4xl border border-slate-100 shadow-xl flex flex-col items-center gap-1 absolute -right-6 top-1/2 z-10 text-center">
             <span className="text-[12px] font-black text-slate-500">Get</span>
             <span className="text-2xl font-black text-[#5cb9a5]">98%</span>
             <span className="text-[12px] font-black text-[#5cb9a5]">Match Rate</span>
             <span className="text-[10px] font-bold text-slate-400 mt-1">with detailed <br/> descriptions</span>
          </div>
          <div className="absolute -top-10 right-10 bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm text-[12px] font-black text-slate-600">
            Smart way to recover
          </div>
        </div>

        {/* Scattered Background Elements */}
        <div className="absolute left-[15%] bottom-[15%] w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center p-3 hidden lg:flex border border-slate-50">
           <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0B1528" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        </div>
        <div className="absolute left-[20%] bottom-[5%] w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center p-3 hidden lg:flex border border-slate-50">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5cb9a5" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
        </div>

      </main>

      {/* ══════════════════════════════════════════════════════
          FEATURES — Premium Dark Cards
      ══════════════════════════════════════════════════════ */}
      <section className="px-6 xl:px-12 max-w-7xl mx-auto w-full relative z-10 my-20 animate-fade-up bg-[#0B1528] rounded-[3rem] py-16" style={{ animationDelay: '0.4s' }}>
        <div className="grid md:grid-cols-3 gap-6 xl:gap-8 px-8">
          <div className="glass-dark p-10 rounded-4xl flex flex-col items-start gap-8 hover:-translate-y-3 transition-all duration-500 group">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#5cb9a5]/20 group-hover:border-[#5cb9a5]/30 transition-all">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5cb9a5" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
            </div>
            <div>
              <h4 className="text-2xl font-black text-white mb-3 tracking-tight">Location Intelligence</h4>
              <p className="text-slate-400 text-[16px] leading-relaxed font-medium">
                Hyper-local item tracking that connects you with findings in your immediate vicinity.
              </p>
            </div>
          </div>

          <div className="glass-dark p-10 rounded-4xl flex flex-col items-start gap-8 hover:-translate-y-3 transition-all duration-500 group">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#5cb9a5]/20 group-hover:border-[#5cb9a5]/30 transition-all">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5cb9a5" strokeWidth="2.5"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
            </div>
            <div>
              <h4 className="text-2xl font-black text-white mb-3 tracking-tight">Neural Matching</h4>
              <p className="text-slate-400 text-[16px] leading-relaxed font-medium">
                Our AI analyzes description patterns to find your belongings with surgical precision.
              </p>
            </div>
          </div>

          <div className="glass-dark p-10 rounded-4xl flex flex-col items-start gap-8 hover:-translate-y-3 transition-all duration-500 group">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#5cb9a5]/20 group-hover:border-[#5cb9a5]/30 transition-all">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5cb9a5" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
            </div>
            <div>
              <h4 className="text-2xl font-black text-white mb-3 tracking-tight">Direct Connection</h4>
              <p className="text-slate-400 text-[16px] leading-relaxed font-medium">
                Securely message finders through our encrypted gateway to arrange safe recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          HOW IT WORKS — Modern Flow
      ══════════════════════════════════════════════════════ */}
      <section className="mt-32 px-6 xl:px-12 max-w-7xl mx-auto w-full mb-32 relative z-10 animate-fade-up" style={{ animationDelay: '0.6s' }}>
        <div className="text-center lg:text-left mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <h3 className="text-[2.8rem] md:text-[3.5rem] font-black text-[#0B1528] tracking-tighter leading-none mb-6">
              The Path to <br /> Recovery
            </h3>
            <p className="text-xl text-slate-500 max-w-lg leading-relaxed font-semibold">
              Reclaiming your belongings shouldn't be a struggle. We’ve simplified the process into three seamless transitions.
            </p>
          </div>
          <div className="hidden lg:block w-32 h-32 text-[#5cb9a5]/20">
            <svg viewBox="0 0 100 100" fill="currentColor"><circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 6" /></svg>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 xl:gap-10">
          <div className="group relative bg-white/60 backdrop-blur-md border border-white/50 p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/20 hover:-translate-y-2 transition-all duration-300">
            <div className="text-[7rem] font-black text-slate-300/60 absolute -top-12 -left-2 pointer-events-none group-hover:text-[#5cb9a5]/20 transition-colors">01</div>
            <div className="relative z-10">
              <h4 className="text-2xl font-black text-[#0B1528] mb-4">Precision Reporting</h4>
              <p className="text-slate-500 text-[16px] leading-relaxed font-bold">
                Log your item with AI-enhanced details. High-fidelity descriptions lead to higher recovery odds.
              </p>
            </div>
          </div>

          <div className="group relative bg-white/60 backdrop-blur-md border border-white/50 p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/20 hover:-translate-y-2 transition-all duration-300">
            <div className="text-[7rem] font-black text-slate-300/60 absolute -top-12 -left-2 pointer-events-none group-hover:text-[#5cb9a5]/20 transition-colors">02</div>
            <div className="relative z-10">
              <h4 className="text-2xl font-black text-[#0B1528] mb-4">Elastic Matching</h4>
              <p className="text-slate-500 text-[16px] leading-relaxed font-bold">
                Our engine cross-references millions of data points to notify you of potential matches instantly.
              </p>
            </div>
          </div>

          <div className="group relative bg-white/60 backdrop-blur-md border border-white/50 p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/20 hover:-translate-y-2 transition-all duration-300">
            <div className="text-[7rem] font-black text-slate-300/60 absolute -top-12 -left-2 pointer-events-none group-hover:text-[#5cb9a5]/20 transition-colors">03</div>
            <div className="relative z-10">
              <h4 className="text-2xl font-black text-[#0B1528] mb-4">Verification & Handover</h4>
              <p className="text-slate-500 text-[16px] leading-relaxed font-bold">
                Securely verify identity and item details before arranging a safe community exchange.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FINAL CTA — State of the Art
      ══════════════════════════════════════════════════════ */}
      <section className="px-6 xl:px-12 max-w-7xl mx-auto w-full mb-32 relative z-10">
        <div className="bg-[#0B1528] rounded-[4rem] px-8 md:px-20 py-24 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-[0_40px_100px_rgba(11,21,40,0.3)] overflow-hidden relative group">
          <div className="absolute inset-0 bg-linear-to-br from-[#1a2b4b] to-[#0B1528] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute -right-24 -top-24 w-125 h-125 rounded-full bg-[#5cb9a5]/5 blur-[100px] pointer-events-none"></div>
          <div className="absolute -left-24 -bottom-24 w-100 h-100 rounded-full bg-[#5cb9a5]/5 blur-[80px] pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <h3 className="text-4xl md:text-[3.5rem] font-black text-white tracking-tighter mb-8 leading-[1.1]">
              Ready to find <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#5cb9a5] to-[#80dfca]">What Matters?</span>
            </h3>
            <p className="text-slate-400 text-xl font-semibold leading-relaxed max-w-lg mx-auto lg:mx-0">
              Join the world's most trusted community-driven recovery network. Join for free, stay for peace of mind.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-5 shrink-0 w-full lg:w-auto">
            <button onClick={() => handleAction('found')} className="bg-[#5cb9a5] text-white px-12 py-6 rounded-full font-black text-[17px] shadow-2xl shadow-[#5cb9a5]/30 hover:-translate-y-2 hover:bg-[#4ea693] transition-all duration-300 whitespace-nowrap w-full sm:w-auto">
              Report Found Item
            </button>
            <button onClick={() => handleAction('lost')} className="bg-white/5 border-2 border-white/10 text-white px-12 py-6 rounded-full font-black text-[17px] hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 whitespace-nowrap w-full sm:w-auto backdrop-blur-sm">
              I Lost Something
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
