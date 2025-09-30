import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faCheckCircle,
  faRulerCombined,
  faHardHat,
  faUsers,
  faCalculator,
  faClipboardCheck,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function IngenierieBTPPage() {
  const servicesDetails = [
    {
      icon: faRulerCombined,
      title: "Études Techniques",
      description:
        "Conception détaillée et plans d'exécution pour vos projets de construction",
    },
    {
      icon: faHardHat,
      title: "Suivi de Chantier",
      description:
        "Coordination et supervision des travaux pour respect des délais et qualité",
    },
    {
      icon: faCalculator,
      title: "Étude de Coûts",
      description:
        "Évaluation précise des coûts et planning financier de votre projet",
    },
    {
      icon: faClipboardCheck,
      title: "Contrôle Qualité",
      description:
        "Vérification conformité aux normes et standards de construction",
    },
    {
      icon: faUsers,
      title: "Coordination",
      description:
        "Gestion des intervenants et synchronisation des différents corps de métier",
    },
    {
      icon: faToolbox,
      title: "Assistance Technique",
      description:
        "Expertise et conseils techniques tout au long de votre projet",
    },
  ];

  const domainesIntervention = [
    {
      domaine: "Bâtiment Résidentiel",
      projets: [
        "Maisons individuelles",
        "Immeubles d'habitation",
        "Résidences",
        "Lotissements",
      ],
      expertises: [
        "Plans architecturaux",
        "Calculs structurels",
        "Études techniques",
        "Suivi execution",
      ],
    },
    {
      domaine: "Bâtiment Commercial",
      projets: ["Bureaux", "Commerces", "Centres commerciaux", "Showrooms"],
      expertises: [
        "Aménagements spécifiques",
        "Circulations",
        "Normes accessibilité",
        "Études flux",
      ],
    },
    {
      domaine: "Bâtiment Industriel",
      projets: ["Usines", "Entrepôts", "Ateliers", "Zones de production"],
      expertises: [
        "Charges lourdes",
        "Circulations engins",
        "Normes sécurité",
        "Implantation machines",
      ],
    },
  ];

  const etapesProjet = [
    {
      phase: "Phase 1 - Conception",
      activites: [
        "Programmation",
        "Esquisse",
        "Avant-projet",
        "Permis de construire",
      ],
      livrables: [
        "Dossier de conception",
        "Plans d'avant-projet",
        "Dossier permis construire",
      ],
    },
    {
      phase: "Phase 2 - Exécution",
      activites: [
        "Plans d'exécution",
        "Cahiers des charges",
        "Consultation entreprises",
        "DCE",
      ],
      livrables: [
        "Dossier de consultation",
        "Plans d'exécution",
        "CCTP",
        "DPGF",
      ],
    },
    {
      phase: "Phase 3 - Réalisation",
      activites: [
        "Direction des travaux",
        "Coordination SPS",
        "Contrôle qualité",
        "Réception",
      ],
      livrables: [
        "PV de réunion",
        "Comptes-rendus",
        "Dossier des ouvrages exécutés",
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
            backgroundImage: "url('/images/services/ingenierie-btp-hero.jpg')",
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
            icon={faBuilding}
            className="text-5xl text-[#3b82f6] mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Ingénierie BTP
          </h1>
          <p className="text-xl max-w-2xl">
            Expertise technique et gestion de projet pour vos constructions
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
                  src="/images/services/ingenierie-btp-detail.jpg"
                  alt="Projet d'ingénierie BTP"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                L&apos;excellence technique au service de vos projets de
                construction
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Chez{" "}
                <strong className="text-[#3b82f6]">TechWorld Revolution</strong>
                , notre département ingénierie BTP vous accompagne de la
                conception à la livraison de vos projets de construction et de
                rénovation.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Notre équipe d&apos;ingénieurs et techniciens expérimentés
                garantit la faisabilité technique, l&apos;optimisation des coûts
                et le respect des délais de vos chantiers.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-[#3b82f6]">
                <p className="text-gray-900 font-semibold">
                  🏗️{" "}
                  <span className="text-[#3b82f6]">
                    Expertise multisectorielle :
                  </span>
                  De la maison individuelle au complexe industriel, nous
                  maîtrisons tous les types de projets de construction.
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
              Nos Prestations d&apos;Ingénierie
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une gamme complète de services pour la réussite de votre projet
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

      {/* Domaines d'Intervention Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Domaines d&apos;Intervention
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expertise technique adaptée à chaque type de projet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {domainesIntervention.map((domaine, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition duration-300"
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#3b82f6] text-white flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {domaine.domaine}
                  </h3>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Types de projets :
                  </h4>
                  <div className="space-y-1">
                    {domaine.projets.map((projet, idx) => (
                      <div key={idx} className="flex items-center">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="text-green-500 mr-2 text-sm flex-shrink-0"
                        />
                        <span className="text-gray-600 text-sm">{projet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Expertises :
                  </h4>
                  <div className="space-y-1">
                    {domaine.expertises.map((expertise, idx) => (
                      <div key={idx} className="text-gray-600 text-sm">
                        • {expertise}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phases de Projet Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Phases de Notre Intervention
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un accompagnement complet de la conception à la livraison
            </p>
          </div>

          <div className="space-y-8">
            {etapesProjet.map((etape, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#3b82f6] text-white flex items-center justify-center text-xl font-bold mr-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {etape.phase}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Activités principales :
                    </h4>
                    <div className="space-y-1">
                      {etape.activites.map((activite, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-[#3b82f6] mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">
                            {activite}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Livrables :
                    </h4>
                    <div className="space-y-1">
                      {etape.livrables.map((livrable, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-green-500 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">
                            {livrable}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nos Atouts Techniques
              </h2>

              <div className="space-y-6">
                {[
                  {
                    titre: "Expertise Technique",
                    description:
                      "Équipe d'ingénieurs expérimentés dans tous les corps d'état",
                  },
                  {
                    titre: "Maîtrise des Coûts",
                    description:
                      "Optimisation budgétaire et contrôle rigoureux des dépenses",
                  },
                  {
                    titre: "Respect des Délais",
                    description:
                      "Planning détaillé et suivi rigoureux de l'avancement",
                  },
                  {
                    titre: "Qualité Garantie",
                    description:
                      "Contrôle qualité systématique et respect des normes",
                  },
                ].map((avantage, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#3b82f6] text-white flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {avantage.titre}
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
                    <div className="text-blue-100">Projets Livrés</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-blue-100">Clients Satisfaits</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">15+</div>
                    <div className="text-blue-100">Ans d&apos;Expérience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">0</div>
                    <div className="text-blue-100">Litiges</div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-700 rounded-lg">
                  <p className="text-sm text-center">
                    📋 <strong>Gestion documentaire</strong> - Suivi rigoureux
                    de tous les documents techniques
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outils et Méthodes Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Méthodologie et Outils
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                outil: "BIM",
                description: "Modélisation 3D des informations du bâtiment",
                avantages: [
                  "Détection collisions",
                  "Visualisation 3D",
                  "Gestion données",
                ],
              },
              {
                outil: "Planning",
                description: "Outils de planification avancée",
                avantages: [
                  "Gantt détaillé",
                  "Chemin critique",
                  "Suivi temps réel",
                ],
              },
              {
                outil: "CCTP Digital",
                description: "Cahiers des charges numériques",
                avantages: ["Accès instantané", "Mises à jour", "Versioning"],
              },
              {
                outil: "Reporting",
                description: "Tableaux de bord personnalisés",
                avantages: [
                  "Indicateurs KPI",
                  "Alertes automatiques",
                  "Analyse prédictive",
                ],
              },
            ].map((outil, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 text-center border border-gray-200"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#3b82f6] text-xl mx-auto mb-3">
                  {outil.outil.charAt(0)}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{outil.outil}</h3>
                <p className="text-gray-600 text-xs mb-2">
                  {outil.description}
                </p>
                <div className="space-y-1">
                  {outil.avantages.map((avantage, idx) => (
                    <div key={idx} className="text-gray-600 text-xs">
                      • {avantage}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Un projet de construction en vue ?
          </h2>
          <p className="text-xl mb-10">
            Notre équipe d&apos;ingénieurs BTP est à votre disposition pour
            étudier la faisabilité technique de votre projet.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#3b82f6] hover:bg-blue-700 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300"
            >
              Étude de faisabilité
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
