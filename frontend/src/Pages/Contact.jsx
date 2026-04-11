import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-[#f8fafc] text-[#0B1528] font-sans relative overflow-x-hidden">
      {/* ── BACKGROUND ELEMENTS ── */}
      {/* Minimalist Grid Pattern - significantly lower opacity */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#0B1528 1px, transparent 1px), linear-gradient(90deg, #0B1528 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      {/* Soft Decorative Ambient Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5cb9a5]/10 rounded-full blur-[120px] -z-10 translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-200/50 rounded-full blur-[120px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

      {/* ── MAIN CONTENT ── */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-24">
        
        {/* Header Section: Centered and Clean */}
        <div className="text-center mb-16 space-y-3">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#0B1528]">
            Let's <span className="text-[#5cb9a5]">Connect</span>
          </h1>
          <p className="max-w-xl mx-auto text-slate-500 text-base md:text-lg font-medium leading-relaxed">
            Quick question or deep collaboration? <br className="hidden md:block"/> 
            We're dedicated to bringing your items home.
          </p>
        </div>

        {/* 2-Column Responsive Grid: Prevents horizontal stretching */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Info & Stats Group */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Contact Details Card */}
            <div className="bg-white/80 backdrop-blur-md border border-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/40">
              <div className="space-y-8">
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-[#0B1528] shrink-0 group-hover:bg-[#5cb9a5] group-hover:text-white transition-all">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-0.5">Email</span>
                    <p className="text-base font-bold text-[#0B1528]">hello@campuspath.ai</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-[#5cb9a5]/10 flex items-center justify-center text-[#5cb9a5] shrink-0 group-hover:bg-[#5cb9a5] group-hover:text-white transition-all">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-0.5">Support</span>
                    <p className="text-base font-bold text-[#0B1528]">+91 999 888 7776</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-[#0B1528] shrink-0 group-hover:bg-[#0B1528] group-hover:text-white transition-all">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-0.5">Office</span>
                    <p className="text-base font-bold text-[#0B1528]">New Delhi, IN</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Card - Dark Accented */}
            <div className="bg-[#0B1528] p-8 rounded-[2rem] text-white shadow-2xl shadow-[#0B1528]/20 border border-white/5">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#5cb9a5] block mb-3">Global Community</span>
              <h4 className="text-2xl font-bold leading-tight mb-5">
                150+ Happy <br/>Reconnections
              </h4>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-[#5cb9a5] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50">
            <h3 className="text-2xl font-black text-[#0B1528] mb-10">Drop us a line</h3>
            
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Name Input */}
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-transparent border-b border-slate-200 py-3 text-base font-medium outline-none focus:border-[#5cb9a5] transition-colors peer" 
                    placeholder=" "
                    required
                  />
                  <label htmlFor="name" className="absolute left-0 top-3 text-slate-400 font-bold uppercase text-[10px] tracking-widest transition-all peer-focus:-top-6 peer-focus:text-[#5cb9a5] peer-[:not(:placeholder-shown)]:-top-6">
                    Full Name
                  </label>
                </div>

                {/* Email Input */}
                <div className="relative group">
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-transparent border-b border-slate-200 py-3 text-base font-medium outline-none focus:border-[#5cb9a5] transition-colors peer" 
                    placeholder=" "
                    required
                  />
                  <label htmlFor="email" className="absolute left-0 top-3 text-slate-400 font-bold uppercase text-[10px] tracking-widest transition-all peer-focus:-top-6 peer-focus:text-[#5cb9a5] peer-[:not(:placeholder-shown)]:-top-6">
                    Email Address
                  </label>
                </div>
              </div>

              {/* Message Input */}
              <div className="relative group">
                <textarea 
                  id="message" 
                  rows="3"
                  className="w-full bg-transparent border-b border-slate-200 py-3 text-base font-medium outline-none focus:border-[#5cb9a5] transition-colors peer resize-none" 
                  placeholder=" "
                  required
                ></textarea>
                <label htmlFor="message" className="absolute left-0 top-3 text-slate-400 font-bold uppercase text-[10px] tracking-widest transition-all peer-focus:-top-6 peer-focus:text-[#5cb9a5] peer-[:not(:placeholder-shown)]:-top-6">
                  How can we help?
                </label>
              </div>

              {/* Submit Action */}
              <div className="pt-4">
                <button className="bg-[#0B1528] text-white flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-[#1a2b4a] hover:-translate-y-1 transition-all shadow-lg shadow-[#0B1528]/10 group">
                  Send Message
                  <svg className="group-hover:translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Minimal Footer Info */}
        <footer className="mt-20 pt-8 border-t border-slate-100 text-center">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">
            &copy; {new Date().getFullYear()} Lost & Found Network • CampusPath
          </p>
        </footer>

      </main>
    </div>
  );
};

export default Contact;