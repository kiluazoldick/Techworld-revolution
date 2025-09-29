import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Prêt à moderniser vos installations ?
        </h2>
        <p className="text-xl mb-10">
          Contactez nos experts pour une analyse de vos besoins et 
          une proposition sur mesure en électricité et nouvelles technologies.
        </p>
        <Link
          href="/demander-un-devis"
          className="bg-[#3b82f6] hover:bg-blue-700 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300"
        >
          Demander un devis
        </Link>
      </div>
    </section>
  );
};

export default CTASection;