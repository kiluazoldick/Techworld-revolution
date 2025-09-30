/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
// pages/apropos.tsx
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faLightbulb,
  faShieldAlt,
  faLeaf,
  faArrowRight,
  faBolt,
  faNetworkWired,
  faSolarPanel,
} from "@fortawesome/free-solid-svg-icons";

const AProposPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "David Christian",
      role: "Directeur Technique",
      bio: "Expert en installations électriques avec plus de 8 ans d'expérience dans les courants forts et faibles. Certifié Google et spécialiste full-stack.",
      img: "/images/directeur-technique.jpg",
    },
    {
      id: 2,
      name: "Ingénieur Électricien",
      role: "Responsable Courants Forts",
      bio: "Spécialiste des installations électriques complètes, du raccordement au réseau jusqu'aux équipements de protection et distribution.",
      img: "/images/ingenieur-courants-forts.jpg",
    },
    {
      id: 3,
      name: "Technicien Réseaux",
      role: "Expert Courants Faibles",
      bio: "Expert en systèmes de communication, réseaux informatiques, téléphoniques et solutions de sécurité pour bâtiments intelligents.",
      img: "/images/technicien-reseaux.jpg",
    },
    {
      id: 4,
      name: "Spécialiste Énergies",
      role: "Responsable Énergies Renouvelables",
      bio: "Expert en installation de panneaux solaires photovoltaïques et systèmes d'énergie verte pour l'autonomie énergétique.",
      img: "/images/specialiste-energies.jpg",
    },
  ];

  const values = [
    {
      icon: faBolt,
      title: "Expertise Technique",
      description:
        "Maîtrise parfaite des normes électriques et des dernières technologies en courants forts et faibles.",
    },
    {
      icon: faShieldAlt,
      title: "Sécurité Garantie",
      description:
        "Respect strict des normes de sécurité et utilisation de matériaux de qualité supérieure pour toutes nos installations.",
    },
    {
      icon: faLightbulb,
      title: "Innovation Technologique",
      description:
        "Veille constante sur les nouvelles technologies en domotique, réseaux et énergies renouvelables.",
    },
    {
      icon: faSolarPanel,
      title: "Développement Durable",
      description:
        "Engagement dans les solutions énergétiques durables et respectueuses de l'environnement.",
    },
  ];

  const expertiseAreas = [
    {
      title: "Électricité Bâtiment",
      description: "Installations complètes pour résidentiel et commercial",
      count: "50+",
    },
    {
      title: "Réseaux Informatiques",
      description: "Infrastructures performantes et sécurisées",
      count: "30+",
    },
    {
      title: "Solutions Domotiques",
      description: "Automatisation et contrôle à distance",
      count: "25+",
    },
    {
      title: "Énergies Renouvelables",
      description: "Systèmes solaires et géothermiques",
      count: "15+",
    },
  ];

  return (
    <>
      <Head>
        <title>À Propos - TechWorld Revolution</title>
        <meta
          name="description"
          content="Découvrez TechWorld Revolution : experts en installations électriques, courants forts/faibles, réseaux informatiques, domotique et énergies renouvelables."
        />
      </Head>

      {/* Bannière d'en-tête */}
      <div className="relative h-[90vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/images/apropos-hero-electricite.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "90vh",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-90"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl">
            L'excellence technique au service de vos projets
          </h1>
          <p className="text-xl max-w-2xl">
            Spécialistes en installations électriques, réseaux informatiques et
            solutions technologiques innovantes pour particuliers et
            professionnels.
          </p>
        </div>
      </div>

      {/* Section Notre Histoire */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Conteneur image */}
            <div className="w-full md:w-1/2 order-2 md:order-1 mt-8 md:mt-0">
              <div className="relative rounded-xl overflow-hidden shadow-xl aspect-w-16 aspect-h-9">
                <div
                  className="bg-cover bg-center w-full h-full"
                  style={{
                    backgroundImage: "url('/images/equipe-techworld.jpg')",
                    minHeight: "300px",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm">Fondation de TechWorld Revolution</p>
                    <h3 className="text-xl font-bold">
                      Expertise depuis 3+ ans
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Contenu texte */}
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Notre histoire
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                TechWorld Revolution est née de la passion pour les technologies
                électriques et l'innovation. Notre entreprise s'est spécialisée
                dans les installations électriques, à la fois pour les courants
                forts et les courants faibles, répondant aux besoins croissants
                en solutions technologiques fiables et performantes.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Forts de notre expérience, nous proposons des solutions sur
                mesure pour les bâtiments résidentiels, commerciaux et
                industriels. Notre équipe d'experts formés aux dernières
                technologies et normes en vigueur vous accompagne de la
                conception à la réalisation.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {expertiseAreas.map((area, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                  >
                    <div className="text-3xl font-bold text-[#3b82f6] mb-2">
                      {area.count}
                    </div>
                    <div className="text-gray-900 font-medium">
                      {area.title}
                    </div>
                    <div className="text-gray-600 text-sm mt-1">
                      {area.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Domaines d'Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos domaines d'expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une gamme complète de services pour répondre à tous vos besoins
              électriques et technologiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Expertise Courants Forts */}
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
              <div className="w-16 h-16 mb-6 rounded-full bg-blue-50 flex items-center justify-center text-[#3b82f6] text-2xl">
                <FontAwesomeIcon icon={faBolt} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Courants Forts
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Installations électriques complètes</li>
                <li>• Raccordement au réseau électrique</li>
                <li>• Équipements de protection et distribution</li>
                <li>• Mise aux normes des bâtiments</li>
                <li>• Dépannage électrique rapide</li>
              </ul>
            </div>

            {/* Expertise Courants Faibles */}
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
              <div className="w-16 h-16 mb-6 rounded-full bg-blue-50 flex items-center justify-center text-[#3b82f6] text-2xl">
                <FontAwesomeIcon icon={faNetworkWired} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Courants Faibles
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Réseaux informatiques et téléphoniques</li>
                <li>• Systèmes audiovisuels</li>
                <li>• Sécurité des bâtiments</li>
                <li>• Alarmes incendie et anti-intrusion</li>
                <li>• Solutions de vidéosurveillance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos Valeurs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos valeurs fondamentales
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ces principes guident chacune de nos interventions et
              installations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-8 shadow-md transition duration-300 hover:transform hover:-translate-y-2 border border-gray-200"
              >
                <div className="w-16 h-16 mb-6 rounded-full bg-blue-50 flex items-center justify-center text-[#3b82f6] text-2xl">
                  <FontAwesomeIcon icon={value.icon} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Notre Équipe */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Rencontrez notre équipe
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des experts dédiés à l'excellence technique et à votre
              satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition duration-300 hover:shadow-xl border border-gray-200"
              >
                <div
                  className="relative h-64"
                  style={{
                    backgroundImage: `url(${member.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "256px",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-[#3b82f6] font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/apropos/notre-equipe"
              className="inline-flex items-center bg-[#3b82f6] hover:bg-blue-700 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300"
            >
              Toute notre équipe
              <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Un projet électrique ou technologique ?
          </h2>
          <p className="text-xl mb-10">
            Notre équipe d'experts est à votre disposition pour étudier votre
            projet et vous proposer la solution la plus adaptée à vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#3b82f6] hover:bg-blue-700 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300"
            >
              Demander un devis
            </Link>
            <Link
              href="/nos-services"
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300"
            >
              Découvrir nos services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AProposPage;
