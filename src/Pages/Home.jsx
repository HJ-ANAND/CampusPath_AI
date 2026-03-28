function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* 1. HERO SECTION */}
      <section className="flex flex-col items-center text-center mt-32 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
          Lost Something? <br /> Find It Nearby.
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-10">
          A platform built to report lost items and seamlessly connect with
          those who found them around you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-black text-white px-8 py-3 rounded-full font-medium shadow-md hover:bg-gray-800 transition">
            Report Lost Item
          </button>
          <button className="bg-white border text-gray-900 border-gray-300 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition">
            Report Found Item
          </button>
        </div>
      </section>

      {/* 2. FEATURES SECTION */}
      <section className="mt-40 px-6 max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              Location Based
            </h4>
            <p className="text-gray-500 leading-relaxed">
              Find lost and found items near your current location instantly
              without the hassle.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              Smart Matching
            </h4>
            <p className="text-gray-500 leading-relaxed">
              Automatically match reported lost items with found posts using our
              intelligent system.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              Instant Chat
            </h4>
            <p className="text-gray-500 leading-relaxed">
              Connect securely with the person who found your item quickly and
              effortlessly.
            </p>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="mt-40 px-6 max-w-6xl mx-auto w-full">
        <div className="text-center mb-20">
          <h3 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            How It Works
          </h3>
          <p className="text-lg text-gray-500 mt-4 max-w-xl mx-auto">
            Three simple steps to reunite with your belongings, designed for
            speed and security.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Subtle Connecting Line (hidden on mobile) */}
          <div className="hidden md:block absolute top-[40%] left-[10%] right-[10%] h-0.5 bg-linear-to-r from-gray-100 via-gray-300 to-gray-100 -z-10"></div>

          {/* Step 1 */}
          <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            <span className="absolute -top-6 -right-4 text-9xl font-extrabold text-gray-50 group-hover:text-gray-100 transition-colors duration-300 z-0">
              1
            </span>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gray-900 text-white flex items-center justify-center rounded-2xl text-2xl font-bold mb-8 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                01
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">
                Report It
              </h4>
              <p className="text-gray-500 leading-relaxed font-medium">
                Submit details about the item you lost or found. Add photos to
                make finding it even easier.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group md:mt-12">
            <span className="absolute -top-6 -right-4 text-9xl font-extrabold text-gray-50 group-hover:text-gray-100 transition-colors duration-300 z-0">
              2
            </span>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gray-900 text-white flex items-center justify-center rounded-2xl text-2xl font-bold mb-8 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                02
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">
                Smart Match
              </h4>
              <p className="text-gray-500 leading-relaxed font-medium">
                Our system instantly scans posts and notifies you when a
                potential match appears.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group md:mt-24">
            <span className="absolute -top-6 -right-4 text-9xl font-extrabold text-gray-50 group-hover:text-gray-100 transition-colors duration-300 z-0">
              3
            </span>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gray-900 text-white flex items-center justify-center rounded-2xl text-2xl font-bold mb-8 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                03
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">
                Connect App
              </h4>
              <p className="text-gray-500 leading-relaxed font-medium">
                Chat securely through the platform to arrange a safe meetup and
                recover your item.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="mt-40 mb-32 px-6 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-8">
          Start Helping Today
        </h3>
        <button className="bg-black text-white px-10 py-4 rounded-full font-medium shadow-md hover:bg-gray-800 transition">
          Get Started
        </button>
      </section>
    </div>
  );
}

export default Home;
