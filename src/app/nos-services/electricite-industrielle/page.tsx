import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndustry,
  faCheckCircle,
  faCogs,
  faRobot,
  faToolbox,
  faShieldAlt,
  faTachometerAlt,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function ElectriciteIndustriellePage() {
  const servicesDetails = [
    {
      icon: faCogs,
      title: "Installations Industrielles",
      description:
        "Installations électriques complètes pour usines, ateliers et sites de production.",
    },
    {
      icon: faRobot,
      title: "Automatisation",
      description:
        "Automatisation des processus industriels et systèmes de contrôle commande.",
    },
    {
      icon: faToolbox,
      title: "Maintenance",
      description:
        "Maintenance préventive et corrective des installations électriques industrielles.",
    },
    {
      icon: faShieldAlt,
      title: "Sécurité",
      description:
        "Systèmes de protection des personnes et des équipements contre les risques électriques.",
    },
    {
      icon: faTachometerAlt,
      title: "Variation de Vitesse",
      description:
        "Installation et maintenance de variateurs de vitesse pour moteurs électriques.",
    },
    {
      icon: faMicrochip,
      title: "Contrôle Commande",
      description:
        "Tableaux électriques, automates programmables et systèmes de supervision.",
    },
  ];

  const applications = [
    {
      secteur: "Manufacturier",
      exemples: [
        "Lignes de production",
        "Machines-outils",
        "Systèmes de convoyage",
      ],
    },
    {
      secteur: "Agroalimentaire",
      exemples: [
        "Lignes de conditionnement",
        "Chambres froides",
        "Systèmes de pesage",
      ],
    },
    {
      secteur: "Pharmaceutique",
      exemples: [
        "Salles blanches",
        "Systèmes de contrôle",
        "Équipements stériles",
      ],
    },
    {
      secteur: "Énergie",
      exemples: [
        "Sous-stations",
        "Groupes électrogènes",
        "Systèmes de distribution",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('/images/services/electricite-industrielle-hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "50vh",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-90"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center text-white">
          <FontAwesomeIcon
            icon={faIndustry}
            className="text-5xl text-[#3b82f6] mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Électricité Industrielle
          </h1>
          <p className="text-xl max-w-2xl">
            Solutions électriques performantes et fiables pour l&apos;industrie
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-xl aspect-w-16 aspect-h-9">
                <Image
                  src="/images/services/electricite-industrielle-detail.jpg"
                  alt="Installation électrique industrielle"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                L&apos;expertise industrielle au service de votre productivité
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Chez{" "}
                <strong className="text-[#3b82f6]">TechWorld Revolution</strong>
                , nous concevons et réalisons des installations électriques
                industrielles robustes et performantes. Notre expertise couvre
                l&apos;ensemble des besoins électriques des sites industriels,
                de la puissance à l&apos;automatisation.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nous intervenons sur tous types d&apos;industries avec des
                solutions adaptées aux contraintes spécifiques de chaque secteur
                d&apos;activité.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-[#3b82f6]">
                <p className="text-gray-900 font-semibold">
                  ⚡{" "}
                  <span className="text-[#3b82f6]">Expertise technique :</span>
                  Nos ingénieurs maîtrisent les normes industrielles strictes
                  (NF C 15-100, NFC 13-100, NFC 14-100) pour garantir la
                  sécurité et la performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Prestations Électricité Industrielle
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des solutions complètes pour optimiser vos processus industriels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesDetails.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#3b82f6] text-xl mb-4">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domaines d'Application Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Domaines d&apos;Application
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nous intervenons dans tous les secteurs industriels avec des
              solutions adaptées
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#3b82f6] text-white flex items-center justify-center text-sm font-bold mr-3">
                    {index + 1}
                  </div>
                  {application.secteur}
                </h3>
                <div className="space-y-2">
                  {application.exemples.map((exemple, idx) => (
                    <div key={idx} className="flex items-center">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-green-500 mr-3 flex-shrink-0"
                      />
                      <span className="text-gray-600">{exemple}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nos Atouts Industriels
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Expertise Technique",
                    description:
                      "Équipe d'ingénieurs et techniciens spécialisés en électrotechnique industrielle",
                  },
                  {
                    title: "Réactivité",
                    description:
                      "Intervention rapide pour minimiser les temps d'arrêt de production",
                  },
                  {
                    title: "Qualité",
                    description:
                      "Utilisation de composants et matériaux de qualité industrielle",
                  },
                  {
                    title: "Innovation",
                    description:
                      "Veille technologique constante sur les nouvelles solutions industrielles",
                  },
                ].map((avantage, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#3b82f6] text-white flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {avantage.title}
                      </h4>
                      <p className="text-gray-600">{avantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-[#3b82f6] to-blue-600 text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Chiffres Clés</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-blue-100">Projets Industriels</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24h</div>
                    <div className="text-blue-100">Intervention Urgence</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-blue-100">Satisfaction Client</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">15+</div>
                    <div className="text-blue-100">
                      Années d&apos;Expérience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Processus d&apos;Intervention
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Audit & Diagnostic",
                description: "Analyse complète de vos besoins et contraintes",
              },
              {
                step: "2",
                title: "Conception",
                description: "Étude technique et plans détaillés",
              },
              {
                step: "3",
                title: "Réalisation",
                description: "Installation avec suivi qualité rigoureux",
              },
              {
                step: "4",
                title: "Mise en Service",
                description: "Tests et formation du personnel",
              },
            ].map((etape, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#3b82f6] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {etape.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{etape.title}</h3>
                <p className="text-gray-600 text-sm">{etape.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Un projet d&apos;électricité industrielle ?
          </h2>
          <p className="text-xl mb-10">
            Notre équipe d&apos;experts est à votre disposition pour optimiser
            vos installations électriques industrielles.
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
              Consultation technique
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
