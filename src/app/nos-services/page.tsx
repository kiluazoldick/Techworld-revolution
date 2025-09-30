import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faNetworkWired,
  faSolarPanel,
  faShieldAlt,
  faBuilding,
  faIndustry,
  faHome,
  faVideo,
  faLightbulb,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

export default function NosServicesPage() {
  const services = [
    {
      id: 1,
      icon: faBolt,
      title: "Électricité Bâtiment",
      description:
        "Installations électriques complètes pour bâtiments résidentiels, commerciaux et industriels. De la conception à la réalisation, nous garantissons sécurité et conformité aux normes.",
      image: "/images/services/electricite-batiment.jpg",
      link: "/nos-services/electricite-batiment",
    },
    {
      id: 2,
      icon: faIndustry,
      title: "Électricité Industrielle",
      description:
        "Solutions électriques pour l'industrie : automatisation, motorisation, tableaux de commande et maintenance préventive pour une productivité optimale.",
      image: "/images/services/electricite-industrielle.jpg",
      link: "/nos-services/electricite-industrielle",
    },
    {
      id: 3,
      icon: faNetworkWired,
      title: "Réseaux Informatiques",
      description:
        "Conception et installation d'infrastructures réseau performantes et sécurisées. Câblage structuré, Wi-Fi professionnel et solutions de connectivité avancées.",
      image: "/images/services/reseaux-informatiques.jpg",
      link: "/nos-services/reseaux-informatiques",
    },
    {
      id: 4,
      icon: faVideo,
      title: "Caméra de Surveillance",
      description:
        "Systèmes de vidéosurveillance et contrôle d'accès pour sécuriser vos locaux. Solutions IP, analogiques et intelligentes avec monitoring à distance.",
      image: "/images/services/camera-surveillance.jpg",
      link: "/nos-services/camera-surveillance",
    },
    {
      id: 5,
      icon: faSolarPanel,
      title: "Énergies Renouvelables",
      description:
        "Installation de panneaux solaires photovoltaïques, systèmes géothermiques et solutions d'énergie verte pour l'autonomie énergétique et les économies durables.",
      image: "/images/services/energies-renouvelables.jpg",
      link: "/nos-services/energies-renouvelables",
    },
    {
      id: 6,
      icon: faLightbulb,
      title: "Domotique & Électronique",
      description:
        "Solutions domotiques complètes pour automatiser votre habitat ou entreprise. Contrôle de l'éclairage, chauffage, sécurité et appareils électroménagers.",
      image: "/images/services/domotique-electronique.jpg",
      link: "/nos-services/domotique-electronique",
    },
    {
      id: 7,
      icon: faBuilding,
      title: "Ingénierie BTP",
      description:
        "Accompagnement technique dans vos projets de construction et rénovation. Étude de plans, suivi de chantier et coordination des travaux électriques.",
      image: "/images/services/ingenierie-btp.jpg",
      link: "/nos-services/ingenierie-btp",
    },
    {
      id: 8,
      icon: faShieldAlt,
      title: "Sécurité Incendie",
      description:
        "Installation et maintenance de systèmes d'alarme incendie, détection de fumée et équipements de sécurité conformes aux normes en vigueur.",
      image: "/images/services/securite-incendie.jpg",
      link: "/nos-services/securite-incendie",
    },
    {
      id: 9,
      icon: faHome,
      title: "Froid & Climatisation",
      description:
        "Installation et maintenance de systèmes de climatisation, ventilation et réfrigération pour tous types de bâtiments et besoins spécifiques.",
      image: "/images/services/froid-climatisation.jpg",
      link: "/nos-services/froid-climatisation",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Même style que la page À propos */}
      <div className="relative h-[60vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/images/services-hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "60vh",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-90"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl">
            Nos Services
          </h1>
          <p className="text-xl max-w-2xl">
            Une gamme complète de services électriques et technologiques pour
            particuliers et professionnels
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Expertise technique et solutions innovantes
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Chez{" "}
              <strong className="text-[#3b82f6]">TechWorld Revolution</strong>,
              nous proposons des services complets en installations électriques,
              courants forts et faibles, réseaux informatiques et solutions
              technologiques avancées. Notre expertise couvre tous vos besoins,
              de l&apos;électricité bâtiment aux énergies renouvelables.
            </p>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Container */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-xl overflow-hidden shadow-xl aspect-w-16 aspect-h-10">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-30"></div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-[#3b82f6] text-2xl mr-4">
                      <FontAwesomeIcon icon={service.icon} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <Link
                    href={service.link}
                    className="inline-flex items-center bg-[#3b82f6] hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300"
                  >
                    Découvrir ce service
                    <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Domaines d&apos;Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une expertise technique couvrant tous les aspects des
              installations électriques et technologiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Expertise Courants Forts */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="w-16 h-16 mb-6 rounded-full bg-blue-50 flex items-center justify-center text-[#3b82f6] text-2xl">
                <FontAwesomeIcon icon={faBolt} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Courants Forts
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Installations électriques complètes</li>
                <li>• Tableaux divisionnaires et de répartition</li>
                <li>• Mise aux normes des bâtiments</li>
                <li>• Éclairage et puissance</li>
                <li>• Automatismes industriels</li>
              </ul>
            </div>

            {/* Expertise Courants Faibles */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="w-16 h-16 mb-6 rounded-full bg-blue-50 flex items-center justify-center text-[#3b82f6] text-2xl">
                <FontAwesomeIcon icon={faNetworkWired} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Courants Faibles
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Réseaux informatiques et téléphoniques</li>
                <li>• Systèmes de vidéosurveillance</li>
                <li>• Contrôle d&apos;accès et alarmes</li>
                <li>• Solutions domotiques</li>
                <li>• Audiovisuel et home cinéma</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Un projet électrique ou technologique ?
          </h2>
          <p className="text-xl mb-10">
            Notre équipe d&apos;experts est à votre disposition pour étudier
            votre projet et vous proposer la solution la plus adaptée à vos
            besoins.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#3b82f6] hover:bg-blue-700 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300"
            >
              Demander un devis
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
