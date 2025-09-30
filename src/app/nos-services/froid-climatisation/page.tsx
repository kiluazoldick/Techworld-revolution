import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSnowflake,
  faCheckCircle,
  faTemperatureArrowDown,
  faToolbox,
  faRecycle,
  faWind,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function FroidClimatisationPage() {
  const servicesDetails = [
    {
      icon: faTemperatureArrowDown,
      title: "Climatisation",
      description:
        "Installation de systèmes de climatisation pour tous types d'espaces",
    },
    {
      icon: faSnowflake,
      title: "Réfrigération",
      description:
        "Solutions de froid pour commerces, restaurants et industries",
    },
    {
      icon: faToolbox,
      title: "Maintenance",
      description: "Entretien préventif et dépannage de vos installations",
    },
    {
      icon: faRecycle,
      title: "Rénovation",
      description:
        "Modernisation de vos anciennes installations pour plus d'efficacité",
    },
    {
      icon: faWind,
      title: "Ventilation",
      description:
        "Systèmes de ventilation et traitement d'air pour qualité d'air optimale",
    },
    {
      icon: faDroplet,
      title: "Pompes à Chaleur",
      description: "Solutions écologiques pour chauffage et rafraîchissement",
    },
  ];

  const applications = [
    {
      secteur: "Résidentiel",
      solutions: [
        "Climatisation split",
        "Multi-split",
        "Gainable",
        "Pompe à chaleur réversible",
      ],
      avantages: [
        "Confort optimal",
        "Économies d'énergie",
        "Discrétion",
        "Contrôle précis",
      ],
    },
    {
      secteur: "Commercial",
      solutions: [
        "Systèmes VRV/VRF",
        "Climatisation centrale",
        "Froid commercial",
        "Caissons de traitement d'air",
      ],
      avantages: [
        "Performance élevée",
        "Gestion centralisée",
        "Faible consommation",
        "Maintenance simplifiée",
      ],
    },
    {
      secteur: "Industriel",
      solutions: [
        "Groupes froids",
        "Salles blanches",
        "Froid industriel",
        "Systèmes à ammoniac",
      ],
      avantages: [
        "Puissance adaptée",
        "Fiabilité",
        "Contrôle processus",
        "Rentabilité",
      ],
    },
  ];

  const technologies = [
    {
      technologie: "Inverter",
      description: "Technologie à vitesse variable pour économies d'énergie",
      avantages: [
        "-40% consommation",
        "Température stable",
        "Démarrage progressif",
        "Longévité accrue",
      ],
    },
    {
      technologie: "VRF/VRV",
      description:
        "Systèmes à débit de réfrigérant variable pour grands espaces",
      avantages: [
        "Zones multiples",
        "Haute efficacité",
        "Flexibilité",
        "Gestion centralisée",
      ],
    },
    {
      technologie: "Géothermie",
      description:
        "Utilisation de l'énergie du sol pour chauffage/rafraîchissement",
      avantages: [
        "Énergie renouvelable",
        "Très haute efficacité",
        "Faible coût exploitation",
        "Écologique",
      ],
    },
    {
      technologie: "Gaz R32",
      description:
        "Nouveau réfrigérant écologique à faible impact environnemental",
      avantages: [
        "GWP réduit de 68%",
        "Haute performance",
        "Conforme réglementation",
        "Économique",
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
              "url('/images/services/froid-climatisation-hero.jpg')",
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
            icon={faSnowflake}
            className="text-5xl text-[#3b82f6] mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Froid & Climatisation
          </h1>
          <p className="text-xl max-w-2xl">
            Des solutions sur mesure pour votre confort thermique
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
                  src="/images/services/froid-climatisation-detail.jpg"
                  alt="Installation climatisation"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Expertise en gestion thermique
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Chez{" "}
                <strong className="text-[#3b82f6]">TechWorld Revolution</strong>
                , nous maîtrisons l&apos;ensemble des technologies du froid et
                de la climatisation pour répondre à tous vos besoins, du
                résidentiel à l&apos;industriel.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Notre approche combine performance énergétique, respect de
                l&apos;environnement et solutions innovantes pour votre confort
                toute l&apos;année.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-[#3b82f6]">
                <p className="text-gray-900 font-semibold">
                  ❄️{" "}
                  <span className="text-[#3b82f6]">Économies garanties :</span>
                  Nos systèmes Inverter permettent jusqu&apos;à 40%
                  d&apos;économies d&apos;énergie par rapport aux technologies
                  conventionnelles.
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
              Nos Domaines d&apos;Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des solutions complètes pour tous vos besoins en froid et
              climatisation
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

      {/* Applications par Secteur Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Solutions par Secteur d&apos;Activité
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des technologies adaptées à chaque environnement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition duration-300"
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#3b82f6] text-white flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    {application.secteur.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {application.secteur}
                  </h3>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Solutions :
                  </h4>
                  <div className="space-y-1">
                    {application.solutions.map((solution, idx) => (
                      <div key={idx} className="flex items-center">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="text-green-500 mr-2 text-sm flex-shrink-0"
                        />
                        <span className="text-gray-600 text-sm">
                          {solution}
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
                    {application.avantages.map((avantage, idx) => (
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

      {/* Technologies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technologies Innovantes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des solutions performantes et respectueuses de
              l&apos;environnement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((techno, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#3b82f6] text-white flex items-center justify-center text-sm font-bold mr-3">
                    {techno.technologie.charAt(0)}
                  </div>
                  {techno.technologie}
                </h3>
                <p className="text-gray-600 mb-4">{techno.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {techno.avantages.map((avantage, idx) => (
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

      {/* Maintenance Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Maintenance et Entretien
              </h2>

              <div className="space-y-6">
                {[
                  {
                    service: "Contrôle annuel",
                    description:
                      "Vérification complète du système et nettoyage des unités",
                  },
                  {
                    service: "Recharge de gaz",
                    description:
                      "Contrôle d'étanchéité et recharge si nécessaire",
                  },
                  {
                    service: "Nettoyage filtres",
                    description: "Nettoyage ou remplacement des filtres à air",
                  },
                  {
                    service: "Dépannage urgent",
                    description:
                      "Intervention rapide en cas de panne ou dysfonctionnement",
                  },
                  {
                    service: "Optimisation",
                    description:
                      "Amélioration des performances et des économies d'énergie",
                  },
                ].map((maintenance, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#3b82f6] text-white flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {maintenance.service}
                      </h4>
                      <p className="text-gray-600">{maintenance.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-[#3b82f6] to-blue-600 text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">
                  Pourquoi Nous Choisir ?
                </h3>
                <div className="space-y-4">
                  {[
                    "Techniciens certifiés F-Gaz",
                    "Pièces détachées d'origine",
                    "Intervention sous 24h",
                    "Devis transparent sans surprise",
                    "Conseils personnalisés",
                    "Solutions écologiques",
                    "Garanties étendues",
                    "Suivi personnalisé",
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
                    📞 <strong>Urgence froid</strong> - Intervention dépannage
                    7j/7 pour commerces alimentaires
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processus d'Installation Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Processus d&apos;Installation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Étude Technique",
                description: "Analyse des besoins et calcul des puissances",
              },
              {
                step: "2",
                title: "Devis Détaillé",
                description: "Proposition technique et financière transparente",
              },
              {
                step: "3",
                title: "Installation",
                description: "Pose professionnelle et mise en service",
              },
              {
                step: "4",
                title: "Formation",
                description: "Prise en main et contrat de maintenance",
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
            Besoin d&apos;une solution froid ou climatisation ?
          </h2>
          <p className="text-xl mb-10">
            Notre équipe d&apos;experts en thermique est à votre disposition
            pour une étude gratuite de vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#3b82f6] hover:bg-blue-700 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300"
            >
              Devis gratuit
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300"
            >
              Dépannage urgent
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
