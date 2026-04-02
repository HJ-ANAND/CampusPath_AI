import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Message sent successfully! We will get back to you shortly.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus(null), 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full relative overflow-hidden font-sans text-slate-800 pb-12">
      <div className="relative z-10 flex flex-col items-center">

        {/* Header Section */}
        <section className="relative flex flex-col items-center text-center mt-8 px-6 max-w-4xl mx-auto w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B1528] tracking-tight mb-4 font-[serif]">
            Get In Touch
          </h1>
          <p className="text-base text-slate-500 font-medium max-w-2xl leading-relaxed">
            Have questions about our platform or need support with a reported item? We're here to help you around the clock.
          </p>
        </section>

        {/* Contact Layout */}
        <section className="px-6 mx-auto w-full relative z-10" style={{ width: "70%", marginTop: "65px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

            {/* Left side: Contact Information Cards */}
            <div className="flex flex-col gap-6 justify-between">
              <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 border border-slate-50 flex-1 flex flex-col justify-center">
                <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center text-[#5cb9a5] mb-5 shadow-inner">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </div>
                <h4 className="text-xl font-bold text-[#0B1528] mb-2">Email Support</h4>
                <p className="text-slate-500 font-medium text-[15px] mb-4 leading-relaxed">Drop us a line anytime. We reply within 24 hours.</p>
                <div className="text-[#5cb9a5] font-bold text-[15px] tracking-wide">support@lostfound.com</div>
              </div>

              <div className="bg-[#0B1528] p-6 md:p-8 rounded-[2rem] shadow-2xl shadow-[#0B1528]/20 hover:-translate-y-2 transition-transform duration-300 flex-1 flex flex-col justify-center">
                <div className="w-12 h-12 bg-[#1A2642] rounded-2xl flex items-center justify-center text-[#5cb9a5] mb-5 shadow-inner border border-white/5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Call Us Directly</h4>
                <p className="text-slate-400 font-medium text-[15px] mb-4 leading-relaxed">Need urgent help? Give us a call.</p>
                <div className="text-white font-bold text-[15px] tracking-wide">+1 (800) 123-4567</div>
              </div>
            </div>

            {/* Right side: The Form Card */}
            <div className="lg:col-span-2 bg-white p-8 lg:p-10 rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-50 relative overflow-hidden h-full">
              {/* Decorative background element on form card */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-teal-50 rounded-full blur-[40px] pointer-events-none"></div>

              <h3 className="text-2xl font-extrabold text-[#0B1528] mb-6 relative z-10">Send a Message</h3>

              {status && (
                <div className="mb-4 p-4 bg-[#f8fbfa] border border-teal-100 text-teal-800 rounded-xl font-bold text-sm animate-fade-in flex items-center gap-3 relative z-10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-teal-500"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  {status}
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="w-full">
                    <label className="block text-slate-700 font-bold mb-2 text-sm">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-[#f8fbfa] border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#5cb9a5] focus:bg-white transition-all shadow-inner"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block text-slate-700 font-bold mb-2 text-sm">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full bg-[#f8fbfa] border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#5cb9a5] focus:bg-white transition-all shadow-inner"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-2 text-sm">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                    className="w-full bg-[#f8fbfa] border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#5cb9a5] focus:bg-white transition-all shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-2 text-sm">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="3"
                    placeholder="Write your message here..."
                    className="w-full bg-[#f8fbfa] border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#5cb9a5] focus:bg-white transition-all shadow-inner resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="mt-2 bg-[#0B1528] text-white px-8 py-3 rounded-full font-bold text-sm shadow-xl shadow-[#0B1528]/20 hover:-translate-y-1 hover:bg-[#152342] transition-all duration-300 w-full sm:w-auto self-start flex items-center justify-center gap-2 block mx-auto"
                >
                  Send Message
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                </button>
              </form>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
