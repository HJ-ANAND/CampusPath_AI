function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-20 px-6">
      {/* Header / What is this platform */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
          About Us
        </h2>
        <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
          This platform is a simple and smart solution designed to help people
          recover their lost items easily. Whether it is a wallet, ID card,
          keys, or gadgets, losing important belongings can be stressful. Our
          goal is to make the process of finding them faster and more reliable.
        </p>
      </div>

      <div className="w-full max-w-4xl flex flex-col gap-12">
        {/* Why we built this */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why we built this
          </h3>
          <p className="text-gray-500 leading-relaxed text-lg">
            In everyday life, many people lose their belongings in places like
            colleges, public transport, or crowded areas. Most of the time,
            there is no proper system to report or search for these items.
          </p>
          <p className="text-gray-500 leading-relaxed text-lg mt-4">
            We built this platform to solve that problem by creating a
            centralized and easy-to-use system where people can report lost or
            found items and connect with each other.
          </p>
        </div>

        {/* Two Columns Grid: How it works & What makes us different */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              How it works
            </h3>
            <ul className="space-y-4 text-gray-500 text-lg">
              <li className="flex gap-3">
                <span className="font-bold text-gray-900">1.</span>
                <span>Users can post details of lost or found items.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-gray-900">2.</span>
                <span>
                  The system helps match similar items based on description and
                  location.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-gray-900">3.</span>
                <span>
                  Users can connect and communicate to return the item safely.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              What makes us different
            </h3>
            <ul className="space-y-4 text-gray-500 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-gray-900 mt-1">✦</span>
                <span>
                  Focus on hyperlocal communities (like campuses or societies)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-900 mt-1">✦</span>
                <span>Simple and user-friendly interface</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-900 mt-1">✦</span>
                <span>Faster matching between lost and found items</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-900 mt-1">✦</span>
                <span>Encourages people to help each other</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Our vision */}
        <div className="bg-gray-900 text-white p-8 md:p-12 rounded-3xl shadow-md text-center mt-4">
          <h3 className="text-2xl font-bold mb-4">Our vision</h3>
          <p className="text-gray-300 leading-relaxed text-lg max-w-2xl mx-auto">
            Our vision is to create a trusted and hyperlocal community where
            people help each other recover lost belongings quickly. We aim to
            make this platform useful for colleges, societies, and local areas
            where such issues are common.
          </p>
        </div>

        {/* Final note */}
        <div className="text-center max-w-2xl mx-auto mt-6 mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Final note</h3>
          <p className="text-gray-500 leading-relaxed text-lg">
            We believe that small efforts can make a big difference. By
            connecting people and building trust, we can increase the chances of
            recovering lost items and create a helpful community.
          </p>
        </div>
      </div>

      {/* Embedded Footer */}
      <div className="mt-16 text-gray-400 text-sm font-medium">
        &copy; {new Date().getFullYear()} CampusPath AI. All rights reserved.
      </div>
    </div>
  );
}

export default About;
