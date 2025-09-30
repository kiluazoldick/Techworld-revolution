"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="flex items-center justify-center text-white pt-20 relative"
      style={{
        backgroundImage: "url('/images/hero-electricite.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "90vh",
      }}
    >
      {/* Overlay léger pour améliorer la lisibilité */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3))",
        }}
      ></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Titre avec animation slide depuis le haut */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Solutions innovantes en{" "}
          <motion.span
            className="text-[#3b82f6]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            électricité et technologie
          </motion.span>
        </motion.h1>

        {/* Description avec animation depuis la gauche */}
        <motion.p
          className="text-xl mb-10"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Spécialistes en installations électriques, courants forts et faibles,
          réseaux informatiques, domotique et énergies renouvelables pour
          particuliers et professionnels.
        </motion.p>

        {/* Boutons avec animation depuis la droite */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="bg-[#3b82f6] hover:bg-blue-700 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300 block"
            >
              Contactez-nous
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/nos-services"
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300 block"
            >
              Nos services
            </Link>
          </motion.div>
        </motion.div>

        {/* Flèche animée pour indiquer le scroll */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-white text-2xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
