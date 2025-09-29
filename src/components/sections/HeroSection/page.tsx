import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="flex items-center justify-center text-white pt-20"
      style={{
        background:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
        backgroundImage: "url('/images/hero-electricite.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "90vh",
      }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Solutions innovantes en{" "}
          <span className="text-[#3b82f6]">électricité et technologie</span>
        </h1>
        <p className="text-xl mb-10">
          Spécialistes en installations électriques, courants forts et faibles, 
          réseaux informatiques, domotique et énergies renouvelables pour 
          particuliers et professionnels.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="bg-[#3b82f6] hover:bg-blue-700 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300"
          >
            Contactez-nous
          </Link>
          <Link
            href="/nos-services"
            className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300"
          >
            Nos services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;