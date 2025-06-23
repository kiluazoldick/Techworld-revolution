import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShippingFast,
  faHardHat,
  faTools,
  faIndustry,
  faBolt,
  faBriefcase,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: faShippingFast,
      title: "Logistique & Transport",
      description:
        "Spécialistes du transport de matières premières pour cimenteries, nous disposons d'un réseau national performant et de solutions adaptées.",
      link: "/nos-services/logistique-et-transport",
    },
    {
      id: 2,
      icon: faHardHat,
      title: "Construction & BTP",
      description:
        "Projets de construction clé en main, travaux publics et vente d'agrégats avec une expertise technique de terrain.",
      link: "/nos-services/construction-et-btp",
    },
    {
      id: 3,
      icon: faTools,
      title: "Maintenance & Ingénierie Industrielle",
      description:
        "Solutions techniques pour la maintenance, la production et l'automatisation de vos installations industrielles.",
      link: "/nos-services/maintenance-et-ingenieurie",
    },
    {
      id: 4,
      icon: faIndustry,
      title: "Chaudronnerie & Métallerie",
      description:
        "Fabrication sur mesure de structures métalliques, citernes et tuyauteries avec finitions industrielles de haute qualité.",
      link: "/nos-services/chaudronerie-et-metallerie",
    },
    {
      id: 5,
      icon: faBolt,
      title: "Énergie & Systèmes électriques",
      description:
        "Études, installation et maintenance de systèmes électriques industriels pour une performance et une sécurité optimales.",
      link: "/nos-services/energie-et-systeme-electriques",
    },
    {
      id: 6,
      icon: faBriefcase,
      title: "Conseil, Commerce & Formation",
      description:
        "Accompagnement stratégique, commerce international et formations techniques pour booster vos performances.",
      link: "/nos-services/conseils-commerce-et-formation",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1b314e] mb-4">
            Nos services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous offrons une gamme complète de services logistiques pour
            répondre à tous vos besoins d&#39;approvisionnement et de
            distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-8 shadow-md transition duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 mb-6 rounded-full bg-blue-50 flex items-center justify-center text-[#d32a2b] text-2xl">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3 className="text-xl font-bold text-[#1b314e] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="mt-12">
                <Link
                  href={service.link}
                  className="inline-flex items-center text-[#d32a2b] font-medium hover:text-red-700 bg-transparent border-none cursor-pointer"
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
