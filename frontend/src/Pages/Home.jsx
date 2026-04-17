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

      {/* Hero Section */}
      <main className="relative w-full min-h-screen flex flex-col items-center justify-center pt-36 pb-32 px-6 overflow-hidden">
        <span className="absolute top-[20%] left-[-2%] text-[clamp(6rem,15vw,12rem)] font-black text-outline pointer-events-none select-none -rotate-12 opacity-60">LOST</span>
        <span className="absolute top-[60%] left-[15%] text-[clamp(4rem,10vw,8rem)] font-black text-outline-teal pointer-events-none select-none opacity-50">PHONES</span>
        <span className="absolute top-[15%] right-[5%] text-[clamp(6rem,15vw,10rem)] font-black text-outline-teal pointer-events-none select-none opacity-50">KEYS</span>
        <span className="absolute top-[50%] right-[-5%] text-[clamp(6rem,15vw,12rem)] font-black text-outline pointer-events-none select-none rotate-6 opacity-60">FOUND</span>

        <div className="bg-white/70 backdrop-blur-md border border-white/50 rounded-full px-2 py-1.5 flex items-center gap-4 animate-fade-up z-20 mb-10 shadow-sm pr-6 mt-10">
          <div className="avatar-stack">
            <img className="avatar-item" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="u1" />
            <img className="avatar-item" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="u2" />
            <img className="avatar-item" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop" alt="u3" />
            <div className="avatar-item bg-[#5cb9a5] flex items-center justify-center text-white text-[10px] font-black z-10 relative">15k+</div>
          </div>
          <span className="text-[14px] font-bold text-slate-700">Items Reconnected with Owners</span>
        </div>

        <div className="relative z-20 text-center max-w-4xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <h1 className="font-black text-[#0B1528] leading-[1.1] mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
            Recover Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5cb9a5] to-[#4ea693]">Lost Items</span> <br className="hidden md:block"/>
            with AI-Powered <span className="text-[#0B1528]">Matching</span>
          </h1>
          <p className="text-[1.1rem] md:text-[1.2rem] text-slate-500 max-w-3xl mx-auto mb-10 leading-relaxed font-semibold">
            Join the most advanced recovery network. Get real-time updates and personalized matching for your belongings.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full">
            <button onClick={() => handleAction('lost')} className="flex items-center justify-center gap-2 bg-[#0B1528] text-white px-8 py-4 rounded-xl font-black text-[16px] shadow-xl shadow-[#0B1528]/20 hover:-translate-y-1 hover:bg-[#152342] transition-all w-full sm:w-auto min-w-[200px]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
              Report Lost Item
            </button>
            <button onClick={() => handleAction('found')} className="bg-[#5cb9a5] text-white px-8 py-4 rounded-xl font-black text-[16px] shadow-xl shadow-[#5cb9a5]/25 hover:-translate-y-1 hover:bg-[#4ea693] transition-all w-full sm:w-auto min-w-[200px]">
              Submit Found Item
            </button>
          </div>
        </div>
      </main>

      {/* How it Works */}
      <section className="px-6 xl:px-12 max-w-7xl mx-auto w-full mb-32 relative z-10">
        <div className="bg-[#0B1528] rounded-[4rem] px-8 md:px-20 py-24 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-[0_40px_100px_rgba(11,21,40,0.3)] overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a2b4b] to-[#0B1528] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <h3 className="text-4xl md:text-[3.5rem] font-black text-white tracking-tighter mb-8 leading-[1.1]">
              Ready to find <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5cb9a5] to-[#80dfca]">What Matters?</span>
            </h3>
            <p className="text-slate-400 text-xl font-semibold leading-relaxed max-w-lg mx-auto lg:mx-0">
              Join the world's most trusted community-driven recovery network.
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