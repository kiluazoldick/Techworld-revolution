import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSolarPanel,
  faCheckCircle,
  faSun,
  faWind,
  faLeaf,
  faBolt,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function EnergiesRenouvelablesPage() {
  const servicesDetails = [
    {
      icon: faSolarPanel,
      title: "Solaire Photovoltaïque",
      description:
        "Installation de panneaux solaires pour production d'électricité verte",
    },
    {
      icon: faSun,
      title: "Chauffage Solaire",
      description: "Systèmes solaires thermiques pour eau chaude et chauffage",
    },
    {
      icon: faWind,
      title: "Éolien",
      description:
        "Solutions éoliennes pour sites isolés et complément solaire",
    },
    {
      icon: faLeaf,
      title: "Géothermie",
      description: "Pompes à chaleur géothermiques pour chauffage écologique",
    },
    {
      icon: faBolt,
      title: "Autoconsommation",
      description: "Solutions pour consommer votre propre production d'énergie",
    },
    {
      icon: faHome,
      title: "Solutions Résidentielles",
      description: "Kits solaires complets pour maisons et appartements",
    },
  ];

  const solutionsSolaire = [
    {
      type: "Résidentiel",
      puissance: "3 à 9 kWc",
      avantages: [
        "Autoconsommation",
        "Revente surplus",
        "Indépendance énergétique",
      ],
      applications: ["Maisons individuelles", "Appartements", "Villas"],
    },
    {
      type: "Commercial",
      puissance: "10 à 100 kWc",
      avantages: [
        "Réduction facture",
        "Image écologique",
        "Rentabilité rapide",
      ],
      applications: ["Bureaux", "Commerces", "Entrepôts"],
    },
    {
      type: "Industriel",
      puissance: "100+ kWc",
      avantages: ["Compétitivité", "Stabilité coûts", "RSE"],
      applications: ["Usines", "Zones industrielles", "Grands complexes"],
    },
  ];

  const avantages = [
    {
      titre: "Économies",
      description: "Réduction jusqu'à 70% de votre facture d'électricité",
      details: [
        "Amortissement 5-7 ans",
        "Revenus revente surplus",
        "Stabilité tarifaire",
      ],
    },
    {
      titre: "Écologie",
      description: "Réduction de votre empreinte carbone",
      details: [
        "Énergie 100% verte",
        "Zéro émission CO₂",
        "Contribution développement durable",
      ],
    },
    {
      titre: "Indépendance",
      description: "Autonomie énergétique partielle ou totale",
      details: [
        "Production locale",
        "Résilience réseau",
        "Sécurité d'approvisionnement",
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
              "url('/images/services/energies-renouvelables-hero.jpg')",
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
            icon={faSolarPanel}
            className="text-5xl text-[#3b82f6] mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Énergies Renouvelables
          </h1>
          <p className="text-xl max-w-2xl">
            Solutions vertes pour un avenir énergétique durable
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
                  src="/images/services/energies-renouvelables-detail.jpg"
                  alt="Installation panneaux solaires"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                L&apos;énergie du futur, disponible aujourd&apos;hui
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Chez{" "}
                <strong className="text-[#3b82f6]">TechWorld Revolution</strong>
                , nous vous accompagnons dans votre transition énergétique avec
                des solutions renouvelables performantes, rentables et
                écologiques.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Du solaire photovoltaïque à la géothermie, nous concevons des
                systèmes sur mesure qui maximisent votre production
                d&apos;énergie verte.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-[#3b82f6]">
                <p className="text-gray-900 font-semibold">
                  🌞{" "}
                  <span className="text-[#3b82f6]">Rentabilité garantie :</span>
                  Amortissement typique de 5 à 7 ans avec 25+ ans de production
                  d&apos;énergie gratuite grâce à nos installations solaires.
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
              Nos Solutions Énergétiques
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des technologies vertes adaptées à tous vos besoins
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

      {/* Solutions Solaires Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Solutions Solaires Sur Mesure
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des installations adaptées à chaque type de projet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutionsSolaire.map((solution, index) => (
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
                  <p className="text-[#3b82f6] font-semibold">
                    {solution.puissance}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Avantages :
                  </h4>
                  <div className="space-y-1">
                    {solution.avantages.map((avantage, idx) => (
                      <div key={idx} className="flex items-center">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="text-green-500 mr-2 text-sm flex-shrink-0"
                        />
                        <span className="text-gray-600 text-sm">
                          {avantage}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Applications :
                  </h4>
                  <div className="space-y-1">
                    {solution.applications.map((app, idx) => (
                      <div key={idx} className="text-gray-600 text-sm">
                        • {app}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir les Énergies Renouvelables ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {avantages.map((avantage, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-200"
              >
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-[#3b82f6] text-2xl mx-auto mb-4">
                  {index === 0 && "💰"}
                  {index === 1 && "🌍"}
                  {index === 2 && "⚡"}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {avantage.titre}
                </h3>
                <p className="text-gray-600 mb-4">{avantage.description}</p>
                <div className="space-y-2">
                  {avantage.details.map((detail, idx) => (
                    <div key={idx} className="text-gray-600 text-sm">
                      • {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Notre Processus d&apos;Installation
              </h2>

              <div className="space-y-6">
                {[
                  {
                    etape: "Étude de Faisabilité",
                    description:
                      "Analyse technique, simulation production et rentabilité",
                  },
                  {
                    etape: "Conception",
                    description:
                      "Plans détaillés, choix équipements et démarches administratives",
                  },
                  {
                    etape: "Installation",
                    description:
                      "Pose professionnelle, raccordement et tests de performance",
                  },
                  {
                    etape: "Mise en Service",
                    description: "Formation, suivi et maintenance préventive",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#3b82f6] text-white flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {step.etape}
                      </h4>
                      <p className="text-gray-600">{step.description}</p>
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
                    <div className="text-3xl font-bold mb-2">25+</div>
                    <div className="text-blue-100">Ans de Garantie</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">70%</div>
                    <div className="text-blue-100">Économies Énergie</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">5-7</div>
                    <div className="text-blue-100">Ans Amortissement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">0</div>
                    <div className="text-blue-100">Émission CO₂</div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-700 rounded-lg">
                  <p className="text-sm text-center">
                    📞 <strong>Subventions disponibles</strong> - Aides de
                    l&apos;état et crédits d&apos;impôt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technologies Utilisées
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                tech: "Panneaux Monocristallins",
                efficacite: "22%+",
                usage: "Haute performance",
              },
              {
                tech: "Onduleurs Hybrides",
                efficacite: "98%",
                usage: "Autoconsommation optimale",
              },
              {
                tech: "Batteries Lithium",
                efficacite: "95%+",
                usage: "Stockage intelligent",
              },
              {
                tech: "Systèmes Monitoring",
                efficacite: "100%",
                usage: "Suivi en temps réel",
              },
            ].map((techno, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 text-center border border-gray-200"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#3b82f6] text-xl mx-auto mb-3">
                  ⚡
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{techno.tech}</h3>
                <div className="text-[#3b82f6] font-semibold text-sm mb-1">
                  {techno.efficacite}
                </div>
                <div className="text-gray-600 text-xs">{techno.usage}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt pour votre transition énergétique ?
          </h2>
          <p className="text-xl mb-10">
            Notre équipe d&apos;experts en énergies renouvelables est à votre
            disposition pour une étude gratuite de votre projet.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#3b82f6] hover:bg-blue-700 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300"
            >
              Étude gratuite
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300"
            >
              Simulation économies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
