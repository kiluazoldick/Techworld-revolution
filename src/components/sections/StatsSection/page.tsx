const StatsSection = () => {
  return (
    <section className="bg-[#1b314e] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold mb-2">3+</h3>
            <p className="text-gray-300">Années d&#39;expérience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">200+</h3>
            <p className="text-gray-300">Client particuliers satisfaits</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">240000+</h3>
            <p className="text-gray-300">
              tonnes de matières premières transporté par an.
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">5+</h3>
            <p className="text-gray-300">
              cimenteries dans notre portefeuille clients à ce jour.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
