import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="flex items-center justify-center text-white pt-20"
      style={{
        background:
          "linear-gradient(rgba(27, 49, 78, 0.7), rgba(27, 49, 78, 0.7))",
        backgroundImage: "url('/images/télécharger (1).jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "90vh",
      }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Des solutions globales pour vos{" "}
          <span className="text-[#d32a2b]">besoins logistiques</span>
        </h1>
        <p className="text-xl mb-10">
          Spécialisés dans le transport de matières premières pour cimenteries,
          nous assurons une logistique fiable et optimisée sur tout le
          territoire national.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="bg-[#d32a2b] hover:bg-red-700 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300"
          >
            Contactez-nous
          </Link>
          <Link
            href="/nos-services"
            className="border-2 border-white hover:bg-white hover:text-[#1b314e] text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300"
          >
            Nos services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
