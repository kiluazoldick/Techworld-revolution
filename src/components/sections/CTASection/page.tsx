import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-20 bg-[#1b314e] text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Prêt à optimiser votre logistique ?
        </h2>
        <p className="text-xl mb-10">
          Contactez nos experts pour une analyse de vos besoins logistiques et
          une proposition sur mesure.
        </p>
        <Link
          href="/demander-un-devis"
          className="bg-[#d32a2b] hover:bg-red-700 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300"
        >
          Demander un devis
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
