import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faCheckCircle,
  faHome,
  faTemperatureArrowDown,
  faShieldAlt,
  faPlug,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function DomotiqueElectroniquePage() {
  const servicesDetails = [
    {
      icon: faHome,
      title: "Maison Connectée",
      description:
        "Solutions complètes pour automatiser votre habitat et optimiser le confort",
    },
    {
      icon: faLightbulb,
      title: "Éclairage Intelligent",
      description:
        "Contrôle et automatisation de l'éclairage pour économies et ambiance",
    },
    {
      icon: faTemperatureArrowDown,
      title: "Gestion Climatique",
      description:
        "Thermostats connectés et contrôle intelligent du chauffage/climatisation",
    },
    {
      icon: faShieldAlt,
      title: "Sécurité Connectée",
      description:
        "Alarmes, détecteurs et systèmes de sécurité intégrés et pilotables à distance",
    },
    {
      icon: faPlug,
      title: "Gestion Énergétique",
      description:
        "Monitoring et optimisation de la consommation électrique de votre habitat",
    },
    {
      icon: faVideo,
      title: "Audiovisuel Intelligent",
      description:
        "Systèmes home cinéma, enceintes connectées et distribution multimédia",
    },
  ];

  const solutionsDomotique = [
    {
      type: "Résidentiel",
      description: "Solutions complètes pour maisons et appartements",
      fonctionnalites: [
        "Éclairage intelligent",
        "Chauffage connecté",
        "Sécurité intégrée",
        "Scénarios personnalisés",
      ],
      avantages: [
        "Confort optimal",
        "Économies d'énergie",
        "Sécurité renforcée",
        "Pilotage à distance",
      ],
    },
    {
      type: "Commercial",
      description: "Automatisation pour bureaux et espaces professionnels",
      fonctionnalites: [
        "Gestion énergétique",
        "Contrôle accès",
        "Climatisation intelligente",
        "Monitoring centralisé",
      ],
      avantages: [
        "Réduction coûts",
        "Productivité",
        "Image moderne",
        "Maintenance proactive",
      ],
    },
    {
      type: "Premium",
      description: "Solutions haut de gamme sur mesure",
      fonctionnalites: [
        "Intégration totale",
        "Personnalisation avancée",
        "Matériaux premium",
        "Support VIP",
      ],
      avantages: [
        "Expérience unique",
        "Fiabilité absolue",
        "Design intégré",
        "Service personnalisé",
      ],
    },
  ];

  const protocoles = [
    {
      nom: "KNX",
      description: "Standard professionnel pour bâtiments intelligents",
      avantages: [
        "Interopérabilité",
        "Fiabilité",
        "Évolutivité",
        "Norme internationale",
      ],
    },
    {
      nom: "Zigbee",
      description: "Protocole sans fil mesh pour solutions résidentielles",
      avantages: [
        "Faible consommation",
        "Portée étendue",
        "Réseau auto-cicatrisant",
        "Compatibilité large",
      ],
    },
    {
      nom: "Wi-Fi",
      description: "Connectivité universelle pour appareils grand public",
      avantages: [
        "Installation simple",
        "Pas de hub requis",
        "Contrôle direct",
        "Large compatibilité",
      ],
    },
    {
      nom: "Z-Wave",
      description: "Protocole dédié à la domotique résidentielle",
      avantages: [
        "Interférences minimales",
        "Batterie longue durée",
        "Écosystème mature",
        "Sécurité renforcée",
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
              "url('/images/services/domotique-electronique-hero.jpg')",
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
            icon={faLightbulb}
            className="text-5xl text-[#3b82f6] mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Domotique & Électronique
          </h1>
          <p className="text-xl max-w-2xl">
            L&apos;intelligence au service de votre confort et de votre sécurité
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
                  src="/images/services/domotique-electronique-detail.jpg"
                  alt="Système domotique intelligent"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Transformez votre habitat en maison intelligente
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Chez{" "}
                <strong className="text-[#3b82f6]">TechWorld Revolution</strong>
                , nous concevons des solutions domotiques sur mesure qui
                unissent technologie de pointe et simplicité d&apos;utilisation
                pour révolutionner votre quotidien.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                De l&apos;éclairage intelligent à la sécurité connectée, nous
                automatisons chaque aspect de votre habitat pour plus de
                confort, de sécurité et d&apos;économies.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-[#3b82f6]">
                <p className="text-gray-900 font-semibold">
                  🏠{" "}
                  <span className="text-[#3b82f6]">Confort intelligent :</span>
                  Jusqu&apos;à 30% d&apos;économies d&apos;énergie grâce à
                  l&apos;automatisation du chauffage et de l&apos;éclairage,
                  avec un confort optimal préservé.
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
              Nos Solutions Domotiques
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une automatisation complète pour tous vos besoins
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

      {/* Solutions par Type Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Solutions Sur Mesure
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des approches adaptées à chaque type de projet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutionsDomotique.map((solution, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition duration-300"
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#3b82f6] text-white flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {solution.type}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {solution.description}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Fonctionnalités :
                  </h4>
                  <div className="space-y-1">
                    {solution.fonctionnalites.map((fonction, idx) => (
                      <div key={idx} className="flex items-center">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="text-green-500 mr-2 text-sm flex-shrink-0"
                        />
                        <span className="text-gray-600 text-sm">
                          {fonction}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Avantages :
                  </h4>
                  <div className="space-y-1">
                    {solution.avantages.map((avantage, idx) => (
                      <div key={idx} className="text-gray-600 text-sm">
                        • {avantage}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protocoles Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technologies et Protocoles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nous maîtrisons l&apos;ensemble des technologies du marché
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {protocoles.map((protocole, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#3b82f6] text-white flex items-center justify-center text-sm font-bold mr-3">
                    {protocole.nom.charAt(0)}
                  </div>
                  {protocole.nom}
                </h3>
                <p className="text-gray-600 mb-4">{protocole.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {protocole.avantages.map((avantage, idx) => (
                    <div key={idx} className="flex items-center">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-green-500 mr-2 text-sm flex-shrink-0"
                      />
                      <span className="text-gray-600 text-sm">{avantage}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scénarios d'Usage Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Scénarios Intelligents
              </h2>

              <div className="space-y-6">
                {[
                  {
                    scenario: "Réveil en douceur",
                    description:
                      "L'éclairage s'allume progressivement, les stores s'ouvrent et la cafetière se met en route",
                  },
                  {
                    scenario: "Mode absence",
                    description:
                      "Simulation de présence, optimisation du chauffage et activation de la sécurité",
                  },
                  {
                    scenario: "Soirée cinéma",
                    description:
                      "L'éclairage s'adapte, les stores se ferment et le home cinéma se met en route",
                  },
                  {
                    scenario: "Nuit sécurisée",
                    description:
                      "Verrouillage automatique, activation des alarmes et veilleuse de couloir",
                  },
                ].map((scenario, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#3b82f6] text-white flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {scenario.scenario}
                      </h4>
                      <p className="text-gray-600">{scenario.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-[#3b82f6] to-blue-600 text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Avantages Concrets</h3>
                <div className="space-y-4">
                  {[
                    "Économies d'énergie jusqu'à 30%",
                    "Confort de vie amélioré",
                    "Sécurité renforcée 24/7",
                    "Gain de temps quotidien",
                    "Valorisation du patrimoine",
                    "Maintenance proactive",
                    "Contrôle à distance total",
                    "Évolutivité garantie",
                  ].map((avantage, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-white text-[#3b82f6] flex items-center justify-center text-xs font-bold mr-3">
                        ✓
                      </div>
                      <span className="text-blue-100">{avantage}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-700 rounded-lg">
                  <p className="text-sm text-center">
                    📱 <strong>Contrôle unifié</strong> - Application mobile
                    unique pour tous vos équipements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processus Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Processus de Conception
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Audit & Conseil",
                description:
                  "Analyse de vos besoins et recommandations personnalisées",
              },
              {
                step: "2",
                title: "Conception",
                description:
                  "Architecture technique et planning d'installation détaillé",
              },
              {
                step: "3",
                title: "Installation",
                description: "Pose discrète et configuration des équipements",
              },
              {
                step: "4",
                title: "Formation",
                description: "Prise en main et paramétrage de vos scénarios",
              },
            ].map((etape, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 rounded-full bg-[#3b82f6] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition duration-300">
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
            Prêt à rendre votre habitat intelligent ?
          </h2>
          <p className="text-xl mb-10">
            Notre équipe d&apos;experts en domotique est à votre disposition
            pour concevoir la solution sur mesure qui transformera votre
            quotidien.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#3b82f6] hover:bg-blue-700 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300"
            >
              Diagnostic gratuit
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300"
            >
              Démonstration
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
