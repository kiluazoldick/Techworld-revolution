import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      image: "/images/projet-electricite-batiment.jpg",
      title: "Installation électrique complète - Immeuble résidentiel",
      description:
        "Réalisation d'une installation électrique neuve avec domotique intégrée pour un immeuble de 12 appartements. Respect des normes NFC 15-100.",
    },
    {
      id: 2,
      image: "/images/projet-industriel.jpg",
      title: "Automatisation industrielle - Usine de production",
      description:
        "Mise en place d'un système d'automatisation pour une ligne de production. Réduction de 30% du temps de cycle et amélioration de la sécurité.",
    },
    {
      id: 3,
      image: "/images/projet-solaire.jpg",
      title: "Installation panneaux solaires - Complexe commercial",
      description:
        "Installation d'un système photovoltaïque de 50kW pour l'autoconsommation. Réduction de 60% de la facture énergétique annuelle.",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nos réalisations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez certains de nos projets récents et les solutions que nous
            avons apportées à nos clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl overflow-hidden shadow-lg transition duration-300 transform hover:-translate-y-2 relative bg-white border border-gray-200"
            >
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={256}
                  className="w-full h-64 object-cover"
                  style={{ objectFit: "cover" }}
                  priority={project.id === 1}
                />
                <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-75 transition duration-300 flex items-center justify-center">
                  <button
                    type="button"
                    className="text-white font-bold text-lg underline focus:outline-none"
                    aria-label={`Voir les détails de ${project.title}`}
                    tabIndex={0}
                  >
                    Voir les détails
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/nos-realisations"
            className="inline-flex items-center text-[#3b82f6] font-medium hover:text-blue-700 bg-transparent border-none cursor-pointer"
            passHref
          >
            Voir toutes nos réalisations{" "}
            <FontAwesomeIcon className="pl-2" icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;