import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faIndustry,
  faNetworkWired,
  faHome,
  faSolarPanel,
  faVideo,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: faBolt,
      title: "Électricité Bâtiment",
      description:
        "Installations électriques complètes pour bâtiments résidentiels et commerciaux. Mise aux normes, dépannage et conception de plans électriques.",
      link: "/nos-services/electricite-batiment",
    },
    {
      id: 2,
      icon: faIndustry,
      title: "Électricité Industrielle",
      description:
        "Solutions pour usines et sites industriels : installation, maintenance préventive et corrective, automatisation des processus industriels.",
      link: "/nos-services/electricite-industrielle",
    },
    {
      id: 3,
      icon: faNetworkWired,
      title: "Réseaux Informatiques",
      description:
        "Conception et installation d'infrastructures réseau performantes et sécurisées. Maintenance et sécurisation des réseaux informatiques.",
      link: "/nos-services/reseau-informatique",
    },
    {
      id: 4,
      icon: faHome,
      title: "Domotique & Électronique",
      description:
        "Solutions innovantes pour automatiser et contrôler à distance l'éclairage, le chauffage, la sécurité et les appareils électroménagers.",
      link: "/nos-services/domotique-electronique",
    },
    {
      id: 5,
      icon: faSolarPanel,
      title: "Énergie Renouvelable",
      description:
        "Installation et maintenance de panneaux solaires photovoltaïques, systèmes de chauffage solaire et solutions géothermiques.",
      link: "/nos-services/energie-renouvelable",
    },
    {
      id: 6,
      icon: faVideo,
      title: "Caméra de Surveillance",
      description:
        "Solutions de vidéosurveillance sur mesure pour sécuriser vos locaux professionnels ou résidentiels. Contrôle d'accès et systèmes d'alarme.",
      link: "/nos-services/camera-surveillance",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nos services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de services en électricité, 
            réseaux informatiques et solutions technologiques innovantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-8 shadow-md transition duration-300 hover:transform hover:-translate-y-2 border border-gray-200"
            >
              <div className="w-16 h-16 mb-6 rounded-full bg-blue-50 flex items-center justify-center text-[#3b82f6] text-2xl">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="mt-12">
                <Link
                  href={service.link}
                  className="inline-flex items-center text-[#3b82f6] font-medium hover:text-blue-700 bg-transparent border-none cursor-pointer"
                >
                  En savoir plus {""}{" "}
                  <FontAwesomeIcon className="pl-2" icon={faArrowRight} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;