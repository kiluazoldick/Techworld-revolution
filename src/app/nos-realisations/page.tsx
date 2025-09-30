import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faBolt,
  faNetworkWired,
  faSolarPanel,
} from "@fortawesome/free-solid-svg-icons";

export default function NosRealisationsPage() {
  const projects = [
    {
      id: 1,
      image: "/images/realisation-electricite-batiment.jpg",
      title: "Installation électrique complète - Bâtiment résidentiel",
      description:
        "Installation électrique complète pour une résidence de standing avec intégration domotique et solutions énergétiques durables.",
      details: [
        "Câblage électrique courants forts et faibles",
        "Tableau divisionnaire sécurisé",
        "Installation domotique complète",
        "Éclairage LED optimisé",
        "Système de sécurité intégré",
      ],
      result:
        "Livraison en 3 semaines avec certification de conformité aux normes en vigueur.",
      category: "Électricité Bâtiment",
      icon: faBolt,
    },
    {
      id: 2,
      image: "/images/realisation-reseau-entreprise.jpg",
      title: "Réseau informatique structuré - Siège social",
      description:
        "Déploiement d'un réseau informatique performant et sécurisé pour une entreprise de 50 collaborateurs.",
      details: [
        "Câblage réseau fibre optique et cuivre",
        "Switchs managés et routeur haute performance",
        "Points d'accès Wi-Fi professionnels",
        "Sécurisation réseau avancée",
        "Système de sauvegarde cloud",
      ],
      result:
        "Augmentation de 40% de la vitesse réseau et réduction des pannes de 85%.",
      category: "Réseaux Informatiques",
      icon: faNetworkWired,
    },
    {
      id: 3,
      image: "/images/realisation-solaire.jpg",
      title: "Installation solaire photovoltaïque - Complexe commercial",
      description:
        "Mise en place d'un système solaire photovoltaïque pour l'autonomie énergétique d'un centre commercial.",
      details: [
        "Panneaux solaires haute efficacité",
        "Onduleurs intelligents",
        "Système de monitoring en temps réel",
        "Batteries de stockage lithium-ion",
        "Integration au réseau existant",
      ],
      result:
        "Réduction de 70% de la facture électrique et autonomie partielle atteinte.",
      category: "Énergies Renouvelables",
      icon: faSolarPanel,
    },
  ];

  const stats = [
    { number: "50+", label: "Projets électriques réalisés" },
    { number: "30+", label: "Réseaux installés" },
    { number: "15+", label: "Systèmes solaires déployés" },
    { number: "100%", label: "Clients satisfaits" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Même style que la page À propos */}
      <div className="relative h-[60vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/images/realisations-hero.jpg')",
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
            Nos Réalisations
          </h1>
          <p className="text-xl max-w-2xl">
            Découvrez nos projets concrets en installations électriques, réseaux
            informatiques et solutions énergétiques innovantes.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#3b82f6] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Des solutions sur mesure, des résultats concrets
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Chez{" "}
              <strong className="text-[#3b82f6]">TechWorld Revolution</strong>,
              chaque projet est l&apos;occasion de démontrer notre expertise
              technique et notre engagement envers l&apos;excellence. De
              l&apos;électricité bâtiment aux énergies renouvelables, nos
              réalisations témoignent de notre capacité à répondre aux défis les
              plus complexes.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Container */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-xl overflow-hidden shadow-xl aspect-w-16 aspect-h-10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#3b82f6] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#3b82f6] text-xl mr-4">
                      <FontAwesomeIcon icon={project.icon} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-lg mb-6">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Points clés du projet :
                    </h4>
                    <ul className="space-y-2">
                      {project.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="text-green-500 mt-1 mr-3 flex-shrink-0"
                          />
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-[#3b82f6] p-4 rounded-r-lg">
                    <p className="text-gray-900 font-semibold">
                      <span className="text-[#3b82f6]">Résultat :</span>{" "}
                      {project.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technologies Maîtrisées
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nous utilisons les équipements et technologies les plus avancés
              pour garantir la qualité de nos réalisations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Systèmes électriques intelligents",
              "Réseaux fibre optique",
              "Panneaux solaires haute performance",
              "Solutions domotiques",
              "Sécurité électronique",
              "Automatismes industriels",
              "Gestion technique de bâtiment",
              "Éclairage connecté",
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200"
              >
                <div className="text-[#3b82f6] text-lg font-medium">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Même style que la page À propos */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à concrétiser votre projet ?
          </h2>
          <p className="text-xl mb-10">
            Notre équipe d&apos;experts est à votre disposition pour étudier
            votre projet et vous proposer la solution technique la plus adaptée
            à vos besoins.
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
    </div>
  );
}
