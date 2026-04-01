import React, { useState, useEffect } from "react";

const API_KEY = "PUT_YOUR_API_KEY";

function Home() {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  // Simple useEffect to log description changes as requested
  useEffect(() => {
    if (description) {
      console.log("Description updated:", description);
    }
  }, [description]);

  const generateDescription = async () => {
    if (!description.trim()) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text:
                      "Rewrite this into a proper, clear, and detailed lost item description. Don't include formatting like markdown: " +
                      description,
                  },
                ],
              },
            ],
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        console.error("API Error Response:", data);
        return;
      }

      if (data.candidates && data.candidates.length > 0) {
        const aiText = data.candidates[0].content.parts[0].text;
        setDescription(aiText);
      } else {
        console.error("Unexpected API Response format:", data);
        alert("Failed to generate description. Please try again.");
      }
    } catch (error) {
      console.error("Error generating description:", error);
      alert("Error generating description.");
    } finally {
      setLoading(false);
    }
  };

  const generateTitle = async () => {
    if (!description.trim()) {
      alert("Please generate or write a description first.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text:
                      "Generate a short, catchy, and clean title (max 6-8 words) for this lost item description. Provide only the title, no quotes or extra text: " +
                      description,
                  },
                ],
              },
            ],
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        console.error("API Error Response:", data);
        return;
      }

      if (data.candidates && data.candidates.length > 0) {
        const aiTitle = data.candidates[0].content.parts[0].text;
        setTitle(aiTitle);
      } else {
        console.error("Unexpected API Response format:", data);
        alert("Failed to generate title. Please try again.");
      }
    } catch (error) {
      console.error("Error generating title:", error);
      alert("Error generating title.");
    } finally {
      setLoading(false);
    }
  };

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
          <button
            onClick={() => setShowForm(true)}
            className="bg-black text-white px-8 py-3 rounded-full font-medium shadow-md hover:bg-gray-800 transition"
          >
            Report Lost Item
          </button>
          <button className="bg-white border text-gray-900 border-gray-300 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition">
            Report Found Item
          </button>
        </div>
      </section>

      {/* AI FORM SECTION (Conditionally Rendered) */}
      {showForm && (
        <section className="mt-12 px-6 w-full max-w-2xl mx-auto animate-fade-in">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Report a Lost Item
              </h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-400 hover:text-gray-600 text-sm font-medium"
              >
                Close
              </button>
            </div>

            <div className="space-y-6">
              {/* Description Input */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">
                  What did you lose? (Write a rough idea first)
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full border border-gray-300 p-4 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition resize-none min-h-30"
                  placeholder="e.g. black wallet near library yesterday"
                ></textarea>
                <button
                  onClick={generateDescription}
                  disabled={loading}
                  className="mt-3 align-self-start bg-gray-900 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition shadow-sm w-fit disabled:opacity-50"
                >
                  {loading
                    ? "Generating..."
                    : "✨ Generate Description with AI"}
                </button>
              </div>

              {/* Title Input */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border border-gray-300 p-4 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition"
                  placeholder="e.g. Lost Black Wallet Near Library"
                />
                <button
                  onClick={generateTitle}
                  disabled={loading}
                  className="mt-3 align-self-start bg-gray-100 text-gray-900 border border-gray-300 px-5 py-2.5 rounded-lg font-medium hover:bg-gray-200 transition shadow-sm w-fit disabled:opacity-50"
                >
                  {loading ? "Generating..." : "💡 Generate Title"}
                </button>
              </div>

              <div className="pt-4 mt-6 border-t border-gray-100">
                <button className="w-full bg-black text-white px-6 py-4 rounded-xl font-bold shadow-md hover:bg-gray-800 transition">
                  Submit Report
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

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
