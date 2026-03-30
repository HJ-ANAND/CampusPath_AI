function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-20 px-6">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          Contact Us
        </h2>
        <p className="text-lg text-gray-500">
          Have a question about a lost item or want to collaborate? Let's talk.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-8">
        {/* Left Side: Form Card */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Send Message
          </h3>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="sr-only" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-colors"
                required
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-colors"
                required
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your Message..."
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-colors resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white font-medium py-4 rounded-xl hover:bg-gray-800 transition-colors shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side: Contact Info Card */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Contact Info
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-xl">
                  📧
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email Us</p>
                  <p className="text-gray-900 font-medium">
                    hello@lostandfound.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-xl">
                  📞
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Call Us</p>
                  <p className="text-gray-900 font-medium">+91 9998887776</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-xl">
                  📍
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Location</p>
                  <p className="text-gray-900 font-medium">New Delhi, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links Sub-section */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h4>
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="px-5 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm font-medium rounded-full transition-colors border border-gray-200"
              >
                GitHub
              </a>
              <a
                href="#"
                className="px-5 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm font-medium rounded-full transition-colors border border-gray-200"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="px-5 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm font-medium rounded-full transition-colors border border-gray-200"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Footer */}
      <div className="mt-16 text-gray-400 text-sm font-medium">
        &copy; {new Date().getFullYear()} CampusPath AI. All rights reserved.
      </div>
    </div>
  );
}

export default Contact;
