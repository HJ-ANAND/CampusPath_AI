import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen w-full font-sans text-[#0B1528] relative overflow-x-hidden flex flex-col">
      {/* ── INLINE STYLES FOR CONSISTENCY ── */}
      <style dangerouslySetInnerHTML={{__html: `
        .text-outline {
          color: transparent;
          -webkit-text-stroke: 1px rgba(11, 21, 40, 0.08);
        }
        .text-outline-teal {
          color: transparent;
          -webkit-text-stroke: 1px rgba(92, 185, 165, 0.25);
        }
      `}} />

      {/* Large Faded Background Typography */}
      <span className="absolute top-[15%] left-[-2%] text-[clamp(6rem,15vw,12rem)] font-black text-outline pointer-events-none select-none -rotate-12 z-0 opacity-60">CONNECT</span>
      <span className="absolute top-[60%] left-[10%] text-[clamp(4rem,10vw,10rem)] font-black text-outline-teal pointer-events-none select-none rotate-6 z-0 opacity-50">SUPPORT</span>
      <span className="absolute top-[25%] right-[2%] text-[clamp(6rem,15vw,12rem)] font-black text-outline pointer-events-none select-none -rotate-6 z-0 opacity-60">HELP</span>
      <span className="absolute bottom-[10%] right-[10%] text-[clamp(4rem,10vw,8rem)] font-black text-outline-teal pointer-events-none select-none z-0 opacity-50">REACH</span>

      {/* ── MAIN CONTENT ── */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-36 md:pt-44 pb-24">
        
        {/* Header Section: Centered and Clean */}
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#0B1528]">
            Let's <span className="text-[#5cb9a5]">Connect</span>
          </h1>
          <p className="max-w-xl mx-auto text-slate-500 text-base md:text-lg font-medium leading-relaxed">
            Quick question or deep collaboration? <br className="hidden md:block"/> 
            We're dedicated to bringing your items home.
          </p>
        </div>

        {/* 2-Column Responsive Grid: Prevents horizontal stretching */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Info & Stats Group */}
          <div className="md:col-span-5 flex flex-col gap-6 md:gap-8">
            
            {/* Contact Details Card */}
            <div className="bg-white/80 backdrop-blur-md border border-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/40 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#5cb9a5]/10 to-transparent rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="space-y-8 relative z-10">
                <div className="flex items-center gap-5 group/item cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-[#0B1528] shrink-0 group-hover/item:bg-[#5cb9a5] group-hover/item:text-white transition-all duration-300 shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-0.5 group-hover/item:text-[#5cb9a5] transition-colors">Email</span>
                    <p className="text-base font-bold text-[#0B1528]">hello@campuspath.ai</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group/item cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-[#5cb9a5]/10 flex items-center justify-center text-[#5cb9a5] shrink-0 group-hover/item:bg-[#5cb9a5] group-hover/item:text-white transition-all duration-300 shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-0.5 group-hover/item:text-[#5cb9a5] transition-colors">Support</span>
                    <p className="text-base font-bold text-[#0B1528]">+91 999 888 7776</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group/item cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-[#0B1528] shrink-0 group-hover/item:bg-[#0B1528] group-hover/item:text-white transition-all duration-300 shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-0.5 group-hover/item:text-[#5cb9a5] transition-colors">Office</span>
                    <p className="text-base font-bold text-[#0B1528]">New Delhi, IN</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Card - Dark Accented */}
            <div className="bg-[#0B1528] p-8 rounded-[2rem] text-white shadow-2xl shadow-[#0B1528]/20 border border-white/5 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#5cb9a5] block mb-3 relative z-10">Global Community</span>
              <h4 className="text-2xl lg:text-3xl font-bold leading-tight mb-6 relative z-10">
                150+ Happy <br/>Reconnections
              </h4>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden relative z-10">
                <div className="h-full w-4/5 bg-[#5cb9a5] rounded-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="md:col-span-7 bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 relative">
            <h3 className="text-2xl font-black text-[#0B1528] mb-10">Drop us a line</h3>
            
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Name Input */}
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-transparent border-b-2 border-slate-100 py-3 text-base font-medium outline-none focus:border-[#5cb9a5] transition-colors peer" 
                    placeholder=" "
                    required
                  />
                  <label htmlFor="name" className="absolute left-0 top-3 text-slate-400 font-bold uppercase text-[10px] tracking-widest transition-all peer-focus:-top-6 peer-focus:text-[#5cb9a5] peer-[:not(:placeholder-shown)]:-top-6 cursor-text">
                    Full Name
                  </label>
                </div>

                {/* Email Input */}
                <div className="relative group">
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-transparent border-b-2 border-slate-100 py-3 text-base font-medium outline-none focus:border-[#5cb9a5] transition-colors peer" 
                    placeholder=" "
                    required
                  />
                  <label htmlFor="email" className="absolute left-0 top-3 text-slate-400 font-bold uppercase text-[10px] tracking-widest transition-all peer-focus:-top-6 peer-focus:text-[#5cb9a5] peer-[:not(:placeholder-shown)]:-top-6 cursor-text">
                    Email Address
                  </label>
                </div>
              </div>

              {/* Message Input */}
              <div className="relative group">
                <textarea 
                  id="message" 
                  rows="4"
                  className="w-full bg-transparent border-b-2 border-slate-100 py-3 text-base font-medium outline-none focus:border-[#5cb9a5] transition-colors peer resize-none" 
                  placeholder=" "
                  required
                ></textarea>
                <label htmlFor="message" className="absolute left-0 top-3 text-slate-400 font-bold uppercase text-[10px] tracking-widest transition-all peer-focus:-top-6 peer-focus:text-[#5cb9a5] peer-[:not(:placeholder-shown)]:-top-6 cursor-text">
                  How can we help?
                </label>
              </div>

              {/* Submit Action */}
              <div className="pt-4">
                <button className="bg-[#0B1528] text-white flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm mx-auto md:mx-0 w-full md:w-auto uppercase tracking-widest hover:bg-[#1a2b4a] hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-[#0B1528]/10 group">
                  Send Message
                  <svg className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Minimal Footer Info */}
        <footer className="mt-24 pt-8 border-t border-slate-200/50 text-center">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            &copy; {new Date().getFullYear()} Lost & Found Network • CampusPath
          </p>
        </footer>

      </main>
    </div>
  );
};

export default Contact;