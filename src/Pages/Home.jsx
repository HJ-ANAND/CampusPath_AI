function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center p-10">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Your Personalized Career Roadmap 🚀
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          Connect your GitHub, enter your skills, and let AI generate a
          step-by-step roadmap to land your dream role.
        </p>
      </section>
    </div>
  );
}

export default Home;
