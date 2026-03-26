function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-20 px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Lost Something? Find It Nearby 🔍
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl">
          A simple platform to report lost items and connect with people
          who found them around you.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
            Report Lost Item
          </button>

          <button className="bg-green-600 text-white px-6 py-2 rounded-lg">
            Report Found Item
          </button>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="mt-20 text-center px-6 max-w-2xl">
        <h3 className="text-2xl font-bold mb-4">Why This Matters</h3>
        <p className="text-gray-600">
          Losing items like wallets, ID cards, or gadgets is common, but there is
          no organized system to recover them. Our platform makes it easier to
          connect people and increase the chances of finding lost belongings.
        </p>
      </section>
    </div>
  );
}

export default Home;