const StatsSection = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold mb-2">50+</h3>
            <p className="text-gray-300">Projets réalisés</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">100%</h3>
            <p className="text-gray-300">Clients satisfaits</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">24/7</h3>
            <p className="text-gray-300">Support technique</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">3+</h3>
            <p className="text-gray-300">Années d'expérience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;