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
import Image from "next/image";

export default function NosServicesPage() {
  const services = [
    {
      id: 1,
      icon: faShippingFast,
      title: "Logistique & Transport",
      description:
        "Nous assurons le transport sécurisé et efficace des matières premières pour cimenteries à travers le Cameroun, avec un suivi précis et des délais optimisés.",
      image: "/images/services/transport.jpg",
      link: "/nos-services/logistique-et-transport",
    },
    {
      id: 2,
      icon: faHardHat,
      title: "Construction & BTP",
      description:
        "Réalisation de projets de construction clé en main, travaux publics et fourniture d’agrégats, avec un haut niveau d’expertise technique et un respect strict des délais.",
      image: "/images/services/construction.jpg",
      link: "/nos-services/construction-et-btp",
    },
    {
      id: 3,
      icon: faTools,
      title: "Maintenance & Ingénierie Industrielle",
      description:
        "Solutions complètes pour la maintenance préventive et corrective, l’automatisation et l’optimisation des installations industrielles.",
      image: "/images/services/maintenance.jpg",
      link: "/nos-services/maintenance-et-ingenieurie",
    },
    {
      id: 4,
      icon: faIndustry,
      title: "Chaudronnerie & Métallerie",
      description:
        "Fabrication sur mesure et maintenance d’ouvrages métalliques, citernes, tuyauteries industrielles, avec des standards de qualité élevés.",
      image: "/images/services/chaudronnerie.jpg",
      link: "/nos-services/chaudronerie-et-metallerie",
    },
    {
      id: 5,
      icon: faBolt,
      title: "Énergie & Systèmes Électriques",
      description:
        "Étude, installation et entretien de systèmes électriques industriels pour garantir performance, sécurité et durabilité.",
      image: "/images/services/energie.jpg",
      link: "/nos-services/energie-et-systeme-electriques",
    },
    {
      id: 6,
      icon: faBriefcase,
      title: "Conseil, Commerce & Formation",
      description:
        "Accompagnement stratégique, commerce international et formations spécialisées pour renforcer vos compétences et votre productivité.",
      image: "/images/services/conseil.jpg",
      link: "/nos-services/conseils-commerce-et-formation",
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* En-tête */}
        <div className="text-center mb-16 pt-20">
          <h1 className="text-4xl font-bold text-[#1b314e] mb-4">
            Nos Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services pensés pour répondre aux
            besoins des cimenteries et industries partenaires. Chaque prestation
            est réalisée avec un souci constant de qualité, sécurité et
            ponctualité.
          </p>
        </div>

        {/* Liste des services */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col lg:flex-row items-center gap-10 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Texte */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-[#d32a2b] text-2xl">
                    <FontAwesomeIcon icon={service.icon} />
                  </div>
                  <h2 className="text-2xl font-bold text-[#1b314e]">
                    {service.title}
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center bg-[#d32a2b] hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition"
                >
                  Découvrir ce service
                  <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
