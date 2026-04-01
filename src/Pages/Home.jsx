import React, { useState, useEffect } from "react";

const API_KEY = "AIzaSyChnKYGzhyrV7-OyI-i05j8a-4vcz_nM3Q";

function Home() {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (description) console.log("Description updated:", description);
  }, [description]);

  const generateDescription = async () => {
    if (!description.trim()) return;
    setLoading(true);
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: "Rewrite this into a proper, clear, and detailed lost item description. Don't include formatting like markdown: " + description }] }],
          }),
        }
      );
      const data = await response.json();
      if (!response.ok) { console.error("API Error:", data); return; }
      if (data.candidates?.length > 0) setDescription(data.candidates[0].content.parts[0].text);
      else alert("Failed to generate description.");
    } catch (e) { alert("Error generating description."); }
    finally { setLoading(false); }
  };

  const generateTitle = async () => {
    if (!description.trim()) { alert("Please write a description first."); return; }
    setLoading(true);
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: "Generate a short, catchy, and clean title (max 6-8 words) for this lost item description. Provide only the title, no quotes or extra text: " + description }] }],
          }),
        }
      );
      const data = await response.json();
      if (!response.ok) { console.error("API Error:", data); return; }
      if (data.candidates?.length > 0) setTitle(data.candidates[0].content.parts[0].text);
      else alert("Failed to generate title.");
    } catch (e) { alert("Error generating title."); }
    finally { setLoading(false); }
  };

  return (
    <div className="w-full relative font-sans text-slate-800 overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════
          HERO — left copy + scattered full-canvas widgets
      ══════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden">

        {/* Ghost watermark words — bigger, more visible */}
        <span
          className="pointer-events-none select-none absolute font-black text-slate-900/[0.05] leading-none tracking-tighter hidden lg:block"
          style={{ fontSize: "clamp(7rem,14vw,13rem)", top: "2%", left: "-1%" }}
        >
          Lost
        </span>
        <span
          className="pointer-events-none select-none absolute font-black text-slate-900/[0.05] leading-none tracking-tighter hidden lg:block"
          style={{ fontSize: "clamp(7rem,14vw,13rem)", bottom: "4%", right: "-1%" }}
        >
          Found
        </span>

        {/* Main flex row */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 xl:px-16 flex flex-col lg:flex-row items-center min-h-screen">

          {/* ── LEFT: Hero copy — 48% wide ── */}
          <div className="w-full lg:w-[48%] flex flex-col justify-center pt-28 lg:pt-0 pb-16 lg:pb-0 shrink-0"
            style={{ left: "-90px", position: "relative", bottom: "-15px" }}>

            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-xl border border-white/60 shadow-md px-5 py-2.5 rounded-full mb-8 self-start">
              <span className="w-2.5 h-2.5 rounded-full bg-[#5cb9a5] animate-pulse"></span>
              <span className="text-[14px] font-semibold text-slate-600 tracking-wide">120+ items reconnected this month</span>
            </div>

            <h1
              className="font-extrabold text-[#0B1528] tracking-tight leading-[1.0] mb-7"
              style={{ fontSize: "clamp(3rem, 6vw, 5.8rem)" }}
            >
              Reconnect<br />
              <span className="text-[#5cb9a5]">What</span> Matters
            </h1>

            <p className="text-[1.1rem] xl:text-[1.2rem] text-slate-500 max-w-[420px] mb-11 leading-relaxed font-medium">
              A premium platform to securely report and find lost belongings with intelligent matching.
            </p>

            <div className="flex flex-wrap gap-3.5 mb-8">
              <button className="bg-[#0B1528] text-white px-9 py-4 rounded-full font-bold text-[15px] shadow-xl shadow-[#0B1528]/25 hover:-translate-y-1 hover:bg-[#152342] transition-all duration-300">
                Search Item
              </button>
              <button
                onClick={() => setShowForm(true)}
                className="bg-[#2D3E56] text-white px-9 py-4 rounded-full font-bold text-[15px] shadow-xl shadow-[#2D3E56]/20 hover:-translate-y-1 hover:bg-[#3B4D68] transition-all duration-300"
              >
                Report Lost
              </button>
              <button className="bg-[#5cb9a5] text-white px-9 py-4 rounded-full font-bold text-[15px] shadow-xl shadow-[#5cb9a5]/30 hover:-translate-y-1 hover:bg-[#4ea693] transition-all duration-300">
                Report Found
              </button>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-[14px] text-slate-500 font-medium">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5cb9a5" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>
                Verified & Encrypted
              </div>
              <div className="flex items-center gap-2 text-[14px] text-slate-500 font-medium">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5cb9a5" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                Instant AI Matching
              </div>
            </div>
          </div>

          {/* ── RIGHT: Floating widgets canvas — 52% wide, tall ── */}
          <div className="hidden lg:block relative flex-1 h-screen min-h-[800px]">

            {/* ─ WIDGET 1: Stats — top-left of zone, big nums, hard left lean ─ */}
            <div
              className="absolute bg-white/78 backdrop-blur-2xl p-7 rounded-[2rem] shadow-2xl shadow-slate-300/40 border border-white/70 w-[186px] animate-float-delayed"
              style={{ top: "430px", left: "-30px", transform: "rotate(-6deg)" }}
            >
              <h3 className="text-[3.4rem] font-black text-[#0B1528] leading-none mb-1">120+</h3>
              <p className="text-[13px] font-semibold text-slate-400 mb-5">posts matched</p>
              <div className="w-10 h-[2px] bg-slate-200 mb-5"></div>
              <h3 className="text-[3.4rem] font-black text-[#0B1528] leading-none mb-1">84%</h3>
              <p className="text-[13px] font-semibold text-slate-400">faster recovery</p>
            </div>

            {/* ─ WIDGET 2: Recent Lost Item — top-right, tall image ─ */}
            <div
              className="absolute bg-white/82 backdrop-blur-2xl p-5 rounded-[2.2rem] shadow-2xl shadow-slate-300/40 border border-white/70 w-[240px] animate-float"
              style={{ top: "60px", left: "-200px", transform: "rotate(3.5deg)" }}
            >
              <h4 className="text-[15px] font-bold text-[#0B1528] mb-3">Recent Lost Item</h4>
              <div className="w-full h-[155px] bg-slate-100 rounded-2xl overflow-hidden mb-3 shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=400&auto=format&fit=crop"
                  alt="Wallet"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[12px] font-semibold text-slate-500">Wallet — Central Park, NY</p>
            </div>

            {/* ─ WIDGET 3: Found Match — centre-right, dominant card ─ */}
            <div
              className="absolute bg-white/88 backdrop-blur-2xl p-6 rounded-[2.2rem] shadow-2xl shadow-slate-300/50 border border-white/70 w-[276px] animate-float-delayed z-20"
              style={{ top: "100px", right: "-165px", transform: "rotate(-3deg)" }}
            >
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-[15px] font-bold text-[#0B1528]">Found Match</h4>
                <span className="bg-[#5cb9a5] text-white text-[11px] font-bold px-3 py-1.5 rounded-full">95% Match</span>
              </div>
              <div className="flex items-center justify-between gap-3 bg-white/60 p-3 rounded-2xl border border-white/80 mb-3.5 shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=150&auto=format&fit=crop"
                  alt="iPhone"
                  className="w-[62px] h-[82px] object-cover rounded-xl shadow"
                />
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" className="text-[#5cb9a5]"><path d="M5 12l5 5L20 7" /></svg>
                </div>
                <div className="relative w-[62px] h-[82px]">
                  <img
                    src="https://images.unsplash.com/photo-1591337676273-9bf232f54eb8?q=80&w=150&auto=format&fit=crop"
                    alt="Found iPhone"
                    className="w-full h-full object-cover rounded-xl shadow"
                  />
                  <div className="absolute -top-2 -right-2 bg-white rounded-full p-[3px] shadow-md border border-slate-100">
                    <div className="bg-[#5cb9a5] rounded-full p-[3px]">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 font-medium leading-relaxed">Blue iPhone — matched with report 2 days ago</p>
            </div>

            {/* ─ WIDGET 4: Category pills — mid area, pushed left and down ─ */}
            <div
              className="absolute bg-white/78 backdrop-blur-2xl py-3 px-4 rounded-full shadow-xl shadow-slate-200/40 border border-white/70 flex items-center gap-2 animate-float-slow"
              style={{ top: "450px", left: "260px", transform: "rotate(5deg)" }}
            >
              <span className="bg-[#0B1528] text-white text-[13px] font-bold px-4 py-2 rounded-full">Wallet</span>
              <span className="text-slate-600 text-[13px] font-bold px-3 py-2 hover:bg-white/80 rounded-full cursor-pointer transition-colors">ID Card</span>
              <span className="text-slate-600 text-[13px] font-bold px-3 py-2 hover:bg-white/80 rounded-full cursor-pointer transition-colors">Keys</span>
            </div>

            {/* ─ WIDGET 5: Contact / Chat — mid-left, below pills ─ */}
            <div
              className="absolute bg-white/78 backdrop-blur-2xl px-5 py-4 rounded-[1.6rem] shadow-xl shadow-slate-200/40 border border-white/70 flex items-center gap-4 animate-float"
              style={{ top: "150px", right: "250px", transform: "rotate(-4deg)" }}
            >
              <div className="w-11 h-11 rounded-full bg-slate-50 flex items-center justify-center shrink-0 shadow-inner border border-white/80">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-600">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-[#0B1528] leading-tight">Contact / Chat</h4>
                <p className="text-[12px] text-slate-400 font-medium mt-0.5">Message finder securely</p>
              </div>
            </div>

            {/* ─ WIDGET 6: Safe & Secure — centre-lower, drifted right ─ */}
            <div
              className="absolute bg-white/78 backdrop-blur-2xl px-5 py-4 rounded-[1.6rem] shadow-xl shadow-slate-200/40 border border-white/70 flex items-center gap-4 animate-float-slow"
              style={{ bottom: "140px", left: "130px", transform: "rotate(3deg)" }}
            >
              <div className="w-11 h-11 rounded-full bg-slate-50 flex items-center justify-center shrink-0 shadow-inner border border-white/80">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-600">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-[#0B1528] leading-tight">Safe & Secure</h4>
                <p className="text-[12px] text-slate-400 font-medium mt-0.5">Verified & Encrypted</p>
              </div>
            </div>

            {/* ─ WIDGET 7: Live Activity — bottom-right, larger card ─ */}
            <div
              className="absolute bg-white/78 backdrop-blur-2xl px-6 py-5 rounded-[2rem] shadow-xl shadow-slate-200/40 border border-white/70 animate-float-delayed"
              style={{ bottom: "150px", right: "30px", transform: "rotate(-3.5deg)" }}
            >
              <h4 className="text-[15px] font-bold text-[#0B1528] mb-2.5 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#5cb9a5] animate-pulse inline-block"></span>
                Live Activity
              </h4>
              <p className="text-[13px] text-slate-500 font-semibold mb-1">📍 Found: Gold Ring</p>
              <p className="text-[13px] text-slate-500 font-semibold">🔍 Lost: Backpack</p>
            </div>

            {/* ─ WIDGET 8: Map / Location — bottom-left, pushed into corner ─ */}
            <div
              className="absolute bg-white/78 backdrop-blur-2xl px-5 py-4 rounded-[1.5rem] shadow-xl shadow-slate-200/40 border border-white/70 flex items-center gap-3 animate-float"
              style={{ bottom: "350px", right: "-200px", transform: "rotate(5deg)" }}
            >
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 shadow-inner border border-white/80">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-600">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-[#0B1528] leading-tight">Map / Location</h4>
                <p className="text-[11px] text-slate-400 font-medium mt-0.5">Near Central Library</p>
              </div>
            </div>

          </div>{/* end floating zone */}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FEATURES — dark navy cards
      ══════════════════════════════════════════════════════ */}
      <section className="px-6 xl:px-16 max-w-7xl mx-auto w-full relative z-10 mb-6">
        <div className="grid md:grid-cols-3 gap-6 xl:gap-8">
          <div className="bg-[#0B1528] p-10 rounded-[32px] shadow-2xl shadow-[#0B1528]/20 flex flex-col items-start gap-6 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 rounded-2xl bg-[#1A2642] flex items-center justify-center shrink-0 border border-white/5">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#5cb9a5" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-2.5">Location Based</h4>
              <p className="text-slate-400 text-[16px] leading-relaxed">Find lost and found items near your current location instantly without the hassle.</p>
            </div>
          </div>
          <div className="bg-[#0B1528] p-10 rounded-[32px] shadow-2xl shadow-[#0B1528]/20 flex flex-col items-start gap-6 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 rounded-2xl bg-[#1A2642] flex items-center justify-center shrink-0 border border-white/5">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#5cb9a5" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
              </svg>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-2.5">Smart Matching</h4>
              <p className="text-slate-400 text-[16px] leading-relaxed">Automatically match reported lost items with found posts using our intelligent AI system.</p>
            </div>
          </div>
          <div className="bg-[#0B1528] p-10 rounded-[32px] shadow-2xl shadow-[#0B1528]/20 flex flex-col items-start gap-6 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 rounded-2xl bg-[#1A2642] flex items-center justify-center shrink-0 border border-white/5">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#5cb9a5" strokeWidth="2">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-2.5">Instant Message</h4>
              <p className="text-slate-400 text-[16px] leading-relaxed">Connect securely with the person who found your item quickly and effortlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          HOW IT WORKS — asymmetric elevated middle
      ══════════════════════════════════════════════════════ */}
      <section className="mt-28 px-6 xl:px-16 max-w-7xl mx-auto w-full mb-28 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-5xl md:text-6xl font-extrabold text-[#0B1528] tracking-tight">
            How It Works
          </h3>
          <p className="text-xl text-slate-500 mt-5 max-w-xl mx-auto leading-relaxed">
            Three simple steps to reunite with your belongings.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 xl:gap-8 items-end">
          <div className="bg-white p-12 xl:p-14 rounded-[40px] flex flex-col items-center text-center shadow-2xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 border border-slate-50">
            <div className="w-24 h-24 mb-6 text-[#5cb9a5]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <div className="text-6xl font-black text-slate-100 mb-3">01</div>
            <h4 className="text-2xl font-bold text-[#0B1528] mb-3">Report</h4>
            <p className="text-slate-500 text-[16px] leading-relaxed font-medium">Easily log your lost or found item with details and photos.</p>
          </div>

          {/* Middle card — dark, elevated more aggressively */}
          <div className="bg-[#0B1528] p-12 xl:p-14 rounded-[40px] flex flex-col items-center text-center shadow-2xl shadow-[#0B1528]/30 hover:-translate-y-2 transition-transform duration-300 md:-translate-y-10">
            <div className="w-24 h-24 mb-6 text-[#5cb9a5]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
            </div>
            <div className="text-6xl font-black text-white/10 mb-3">02</div>
            <h4 className="text-2xl font-bold text-white mb-3">Match</h4>
            <p className="text-slate-400 text-[16px] leading-relaxed font-medium">Our intelligent system finds potential matches instantly.</p>
          </div>

          <div className="bg-white p-12 xl:p-14 rounded-[40px] flex flex-col items-center text-center shadow-2xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 border border-slate-50">
            <div className="w-24 h-24 mb-6 text-[#5cb9a5]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            </div>
            <div className="text-6xl font-black text-slate-100 mb-3">03</div>
            <h4 className="text-2xl font-bold text-[#0B1528] mb-3">Reconnect</h4>
            <p className="text-slate-500 text-[16px] leading-relaxed font-medium">Securely message and arrange a reunion with verified users.</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          AI REPORT MODAL
      ══════════════════════════════════════════════════════ */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
          <div className="bg-white w-full max-w-2xl rounded-[32px] shadow-2xl border border-white/20 overflow-hidden">
            <div className="p-10">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-extrabold text-[#0B1528] tracking-tight">Report a Lost Item</h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-6">
                <div className="flex flex-col">
                  <label className="text-sm font-bold text-slate-700 mb-3">
                    What did you lose? <span className="text-slate-400 font-normal ml-1">(Brief description)</span>
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full border-2 border-slate-100 bg-slate-50/50 p-5 rounded-2xl focus:ring-4 focus:ring-teal-500/10 focus:border-[#5cb9a5] focus:bg-white outline-none transition-all resize-none min-h-[140px] text-slate-800"
                    placeholder="e.g. black leather wallet near the central library yesterday around 4 PM..."
                  />
                  <button
                    onClick={generateDescription}
                    disabled={loading}
                    className="mt-4 self-start bg-[#0B1528] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#152342] transition-colors shadow-lg disabled:opacity-50 flex items-center gap-2"
                  >
                    {loading ? "Generating..." : "✨ Refine with AI"}
                  </button>
                </div>
                <div className="flex flex-col pt-2">
                  <label className="text-sm font-bold text-slate-700 mb-3">Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border-2 border-slate-100 bg-slate-50/50 p-5 rounded-2xl focus:ring-4 focus:ring-teal-500/10 focus:border-[#5cb9a5] focus:bg-white outline-none transition-all text-slate-800"
                    placeholder="e.g. Lost Black Leather Wallet"
                  />
                  <button
                    onClick={generateTitle}
                    disabled={loading}
                    className="mt-4 self-start bg-teal-50 text-[#3b5e5a] border border-teal-200 px-7 py-3.5 rounded-full font-semibold hover:bg-teal-100 transition-colors disabled:opacity-50 flex items-center gap-2"
                  >
                    {loading ? "Generating..." : "💡 Auto-Generate Title"}
                  </button>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <button className="w-full bg-[#5cb9a5] text-white px-6 py-5 rounded-full font-bold shadow-xl shadow-teal-500/20 hover:bg-[#4ea693] hover:-translate-y-1 transition-all text-lg">
                    Submit Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;