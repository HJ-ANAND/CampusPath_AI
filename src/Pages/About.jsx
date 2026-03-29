import React from "react";
import lostFoundHero from "../assets/lost_found_hero.png";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={lostFoundHero}
          alt="Lost and Found Items"
          className="absolute inset-0 w-full h-full object-cover opacity-30 scale-105"
        />
        <div className="relative text-center px-4 max-w-4xl animate-fade-in">
          <h1 className="text-6xl font-black text-blue-900 mb-6 tracking-tight drop-shadow-sm">
            Lost It? <span className="text-blue-600">Find It.</span>
          </h1>
          <p className="text-xl text-gray-700 font-medium max-w-2xl mx-auto leading-relaxed">
            Connecting communities to recover what matters most. Our 
            <span className="text-blue-700 font-bold"> Hyperlocal Lost & Found Network</span> 
            is built to bring your belongings back home.
          </p>
        </div>
      </section>

      {/* The Problem & Solution */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold text-red-600 flex items-center gap-3">
              <span className="text-3xl">💥</span> The Problem
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed italic">
              "Losing a wallet or an ID card is stressful, but the lack of a centralized system makes recovery a matter of pure luck."
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-gray-700 font-medium p-4 bg-red-50 rounded-xl border border-red-100 shadow-sm transition hover:shadow-md cursor-default">
                <span className="text-2xl">❌</span> No centralized system to report lost items.
              </li>
              <li className="flex items-center gap-4 text-gray-700 font-medium p-4 bg-red-50 rounded-xl border border-red-100 shadow-sm transition hover:shadow-md cursor-default">
                <span className="text-2xl">📉</span> Extremely low chances of recovery without connection.
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold text-blue-600 flex items-center gap-3">
              <span className="text-3xl">💡</span> Our Solution
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed text-justify">
                We provide a location-based network that connects you with people in your immediate area. 
                By focusing on <strong>college campuses, societies, and metro stations</strong>, we increase 
                the speed of recovery and build a trusted community of helpers.
              </p>
              <div className="p-6 bg-blue-50 rounded-2xl border-l-8 border-blue-600 text-blue-900 font-medium shadow-sm">
                <h4 className="font-bold text-xl mb-2 italic">Building a Safer Campus Community</h4>
                <p>Ensuring every lost item has a path back to its owner through collaboration and hyperlocal awareness.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Platform Features</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Built with safety and efficiency as our priority.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition border border-gray-100 group">
            <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition">🔍</div>
            <h3 className="text-2xl font-bold mb-4">Detailed Posting</h3>
            <p className="text-gray-600 leading-relaxed">Add titles, descriptions, specific locations, and even upload images to make identification easier for the finder.</p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition border border-gray-100 group">
            <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition">📲</div>
            <h3 className="text-2xl font-bold mb-4">Instant Alerts</h3>
            <p className="text-gray-600 leading-relaxed">Receive notifications as soon as someone reports an item that matches your description and location.</p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition border border-gray-100 group">
            <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition">🛡️</div>
            <h3 className="text-2xl font-bold mb-4">Secure Chat</h3>
            <p className="text-gray-600 leading-relaxed">Communicate securely with other users through our identity-masked chat system to arrange safe pickups.</p>
          </div>
        </div>
      </section>

      {/* Hyperlocal Use Cases */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Optimized for Hyperlocal Environments</h2>
        <div className="flex flex-wrap justify-center gap-16">
          <div className="flex flex-col items-center group cursor-default">
            <div className="text-6xl mb-4 group-hover:rotate-12 transition">🏫</div>
            <span className="font-bold text-gray-400 uppercase tracking-widest text-sm group-hover:text-blue-500 transition">College Campus</span>
          </div>
          <div className="flex flex-col items-center group cursor-default">
            <div className="text-6xl mb-4 group-hover:-rotate-12 transition">🏢</div>
            <span className="font-bold text-gray-400 uppercase tracking-widest text-sm group-hover:text-blue-500 transition">Societies</span>
          </div>
          <div className="flex flex-col items-center group cursor-default">
            <div className="text-6xl mb-4 group-hover:scale-125 transition">🚇</div>
            <span className="font-bold text-gray-400 uppercase tracking-widest text-sm group-hover:text-blue-500 transition">Metro Stations</span>
          </div>
        </div>
      </section>

      {/* Final CTA Footer */}
      <section className="bg-blue-900 py-24 px-6 text-center text-white">
        <h2 className="text-5xl font-black mb-10 tracking-tight italic">Find what matters. Helping is free.</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-white text-blue-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-50 transition transform hover:scale-105 shadow-2xl">
            Start Finding Now
          </button>
          <button className="bg-transparent border-2 border-white/50 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition">
            How it Works
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;




