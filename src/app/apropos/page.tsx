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
} from "@fortawesome/free-solid-svg-icons";

const AProposPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Jean Dupont",
      role: "Directeur Général",
      bio: "Avec plus de 15 ans d'expérience dans la logistique industrielle, Jean pilote la stratégie de développement de l'entreprise.",
      img: "/images/jean.jpg",
    },
    {
      id: 2,
      name: "Marie Lambert",
      role: "Assistante administrative",
      bio: "Gestionnaire organisée et efficace, elle assure le bon fonctionnement quotidien de nos services administratifs et logistiques.",
      img: "/images/employe2.jpg",
    },
    {
      id: 3,
      name: "Thomas Martin",
      role: "Responsable logistique",
      bio: "Expert en planification des flux, il coordonne nos opérations de transport pour garantir des livraisons optimales et ponctuelles.",
      img: "/images/employe1.jpg",
    },
    {
      id: 4,
      name: "Antoine Dubois",
      role: "Agent logistique",
      bio: "Opérateur terrain méticuleux, il veille au chargement et à la sécurisation des marchandises selon les normes en vigueur.",
      img: "/images/employe3.jpg",
    },
  ];

  const values = [
    {
      icon: faHandshake,
      title: "Engagement client",
      description:
        "Nous plaçons la satisfaction de nos clients au cœur de notre démarche.",
    },
    {
      icon: faLightbulb,
      title: "Innovation",
      description:
        "Nous recherchons constamment des solutions novatrices pour optimiser vos processus.",
    },
    {
      icon: faShieldAlt,
      title: "Fiabilité",
      description:
        "Nos engagements sont tenus avec rigueur et professionnalisme.",
    },
    {
      icon: faLeaf,
      title: "Responsabilité",
      description:
        "Nous intégrons des pratiques durables dans toutes nos opérations.",
    },
  ];

  return (
    <>
      <Head>
        <title>À Propos - Global Solution & Services</title>
        <meta
          name="description"
          content="Découvrez notre histoire, nos valeurs et notre équipe d'experts en logistique industrielle"
        />
      </Head>

      {/* Bannière d'en-tête */}
      <div className="relative h-[90vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 "
          style={{
            backgroundImage: "url('images/grpe1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "90vh",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b314e] to-transparent opacity-90"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl">
            Votre partenaire en solutions logistiques intégrées
          </h1>
          <p className="text-xl max-w-2xl">
            Depuis 2022, nous accompagnons les industries dans
            l&#39;optimisation de leur chaîne d&#39;approvisionnement
          </p>
        </div>
      </div>

      {/* Section Notre Histoire - CORRIGÉE POUR LE RESPONSIVE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Conteneur image - Ajusté pour le responsive */}
            <div className="w-full md:w-1/2 order-2 md:order-1 mt-8 md:mt-0">
              <div className="relative rounded-xl overflow-hidden shadow-xl aspect-w-16 aspect-h-9">
                <div
                  className="bg-cover bg-center w-full h-full"
                  style={{
                    backgroundImage: "url('images/grp3.jpg')",
                    minHeight: "300px",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b314e] to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm">
                      Fondation de Global Solution & Services SARL
                    </p>
                    <h3 className="text-xl font-bold">Depuis 2022</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Contenu texte - Déplacé en premier sur mobile */}
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <h2 className="text-3xl font-bold text-[#1b314e] mb-6">
                Notre histoire
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Global Solution & Services SARL est née de la volonté de créer
                une entreprise spécialisée dans le transport de matières
                premières pour cimenteries, répondant à un besoin crucial du
                marché camerounais en pleine expansion.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                En 3 ans, nous avons développé un réseau national performant et
                élargi nos services à d&#39;autres secteurs industriels,
                devenant un acteur incontournable de la logistique au Cameroun.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-[#d32a2b] mb-2">
                    3+
                  </div>
                  <div className="text-gray-700">Années d&#39;expertise</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-[#d32a2b] mb-2">
                    200+
                  </div>
                  <div className="text-gray-700">Collaborateurs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos Valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1b314e] mb-4">
              Nos valeurs fondamentales
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ces principes guident chacune de nos actions et décisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-8 shadow-md transition duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 mb-6 rounded-full bg-[#1b314e] flex items-center justify-center text-[#d32a2b] text-2xl">
                  <FontAwesomeIcon icon={value.icon} />
                </div>
                <h3 className="text-xl font-bold text-[#1b314e] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Notre Équipe */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1b314e] mb-4">
              Rencontrez notre équipe
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des experts dédiés à l&#39;excellence de vos opérations
              logistiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition duration-300 hover:shadow-xl"
              >
                <div
                  className="relative h-64"
                  style={{
                    backgroundImage: `url(${member.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "50vh",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b314e] to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1b314e]">
                    {member.name}
                  </h3>
                  <p className="text-[#d32a2b] font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="apropos/notre-equipe"
              className="inline-flex items-center bg-[#d32a2b] hover:bg-red-700 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300"
            >
              Découvrir toute notre équipe
              <FontAwesomeIcon icon={faArrowRight} className=" ml-3" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AProposPage;
