import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faCheckCircle,
  faFireExtinguisher,
  faBell,
  faPersonWalking,
  faFileShield,
  faTowerBroadcast,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function SecuriteIncendiePage() {
  const servicesDetails = [
    {
      icon: faBell,
      title: "Détection Incendie",
      description:
        "Systèmes de détection automatique avec capteurs smoke et heat",
    },
    {
      icon: faFireExtinguisher,
      title: "Extinction Automatique",
      description:
        "Systèmes sprinklers, gaz et mousse pour extinction automatique",
    },
    {
      icon: faPersonWalking,
      title: "Évacuation",
      description: "Alarmes sonores, balisage et éclairage de sécurité",
    },
    {
      icon: faFileShield,
      title: "Conformité Réglementaire",
      description: "Mise aux normes et attestations de conformité",
    },
    {
      icon: faTowerBroadcast,
      title: "Alarme Incendie",
      description: "Systèmes d'alarme certifiés avec transmission d'alerte",
    },
    {
      icon: faUserShield,
      title: "Formation & SSI",
      description:
        "Formation des équipes et gestion du Service de Sécurité Incendie",
    },
  ];

  const systemesIncendie = [
    {
      type: "SSI Catégorie A",
      description: "Système de sécurité incendie pour ERP de 1ère catégorie",
      applications: [
        "Centres commerciaux",
        "Hôpitaux",
        "Établissements recevant > 1500 personnes",
      ],
      equipements: [
        "Détecteurs automatiques",
        "Désenfumage",
        "Alarme type 1",
        "SSI centralisé",
      ],
    },
    {
      type: "SSI Catégorie B",
      description: "Système pour ERP de 2ème et 3ème catégorie",
      applications: ["Bureaux", "Hôtels", "Établissements 701-1500 personnes"],
      equipements: [
        "Détecteurs manuels",
        "Alarme type 2",
        "Extincteurs",
        "Éclairage sécurité",
      ],
    },
    {
      type: "SSI Catégorie C",
      description: "Système pour petits établissements et habitations",
      applications: [
        "Maisons",
        "Petits commerces",
        "Établissements < 700 personnes",
      ],
      equipements: ["DAAF", "Extincteurs", "Alarme simple", "Signalisation"],
    },
  ];

  const normesReglementations = [
    {
      norme: "NF S 61-931/932",
      description: "Systèmes de détection incendie",
      application: "Détecteurs automatiques, centrales d'alarme",
    },
    {
      norme: "NF S 61-936",
      description: "Équipements d'alarme",
      application: "Diffuseurs sonores, déclencheurs manuels",
    },
    {
      norme: "Arrêté du 25/06/1980",
      description: "Règlementation ERP",
      application: "Classement et obligations des établissements",
    },
    {
      norme: "Code du Travail",
      description: "Sécurité des travailleurs",
      application: "Protection des salariés contre l'incendie",
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
              "url('/images/services/securite-incendie-hero.jpg')",
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
            icon={faShieldAlt}
            className="text-5xl text-[#3b82f6] mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sécurité Incendie
          </h1>
          <p className="text-xl max-w-2xl">
            Protection des personnes et des biens contre les risques
            d&apos;incendie
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
                  src="/images/services/securite-incendie-detail.jpg"
                  alt="Système de sécurité incendie"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                La sécurité incendie, une protection essentielle
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Chez{" "}
                <strong className="text-[#3b82f6]">TechWorld Revolution</strong>
                , nous concevons et installons des systèmes de sécurité incendie
                complets qui protègent vos collaborateurs, vos clients et vos
                biens.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Notre expertise couvre l&apos;ensemble des réglementations en
                vigueur pour les ERP, IGH et établissements industriels.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-[#3b82f6]">
                <p className="text-gray-900 font-semibold">
                  🔥{" "}
                  <span className="text-[#3b82f6]">Réactivité cruciale :</span>
                  Les 3 premières minutes d&apos;un incendie sont déterminantes.
                  Nos systèmes détectent et alertent en moins de 60 secondes.
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
              Nos Solutions Sécurité Incendie
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des systèmes complets pour une protection optimale
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

      {/* Systèmes par Catégorie Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Systèmes par Catégorie d&apos;Établissement
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des solutions adaptées à chaque type d&apos;établissement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {systemesIncendie.map((systeme, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition duration-300"
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#3b82f6] text-white flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    {systeme.type.split(" ")[2]}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {systeme.type}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {systeme.description}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Applications :
                  </h4>
                  <div className="space-y-1">
                    {systeme.applications.map((application, idx) => (
                      <div key={idx} className="flex items-center">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="text-green-500 mr-2 text-sm flex-shrink-0"
                        />
                        <span className="text-gray-600 text-sm">
                          {application}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Équipements :
                  </h4>
                  <div className="space-y-1">
                    {systeme.equipements.map((equipement, idx) => (
                      <div key={idx} className="text-gray-600 text-sm">
                        • {equipement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Normes et Réglementations Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Conformité Réglementaire
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Respect strict des normes et réglementations en vigueur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {normesReglementations.map((norme, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#3b82f6] text-white flex items-center justify-center text-sm font-bold mr-3">
                    {norme.norme.split(" ")[1].charAt(0)}
                  </div>
                  {norme.norme}
                </h3>
                <p className="text-gray-600 mb-3">{norme.description}</p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-[#3b82f6] text-sm font-semibold">
                    Application : {norme.application}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus d'Installation Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Notre Processus d&apos;Intervention
              </h2>

              <div className="space-y-6">
                {[
                  {
                    etape: "Audit de Sécurité",
                    description:
                      "Analyse des risques et diagnostic de conformité",
                  },
                  {
                    etape: "Conception du Système",
                    description: "Étude technique et plans d'implantation",
                  },
                  {
                    etape: "Installation",
                    description: "Pose des équipements et câblage",
                  },
                  {
                    etape: "Mise en Service",
                    description: "Tests, réception et formation",
                  },
                  {
                    etape: "Maintenance",
                    description: "Contrôles périodiques et entretien",
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
                <h3 className="text-2xl font-bold mb-6">
                  Avantages de Nos Systèmes
                </h3>
                <div className="space-y-4">
                  {[
                    "Détection précoce des départs de feu",
                    "Alarme immédiate et évacuation sécurisée",
                    "Conformité réglementaire garantie",
                    "Réduction des primes d'assurance",
                    "Maintenance préventive incluse",
                    "Rapports de conformité détaillés",
                    "Formation du personnel incluse",
                    "Assistance technique 24/7",
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
                    ⚡ <strong>Intervention rapide</strong> - Maintenance
                    corrective sous 24h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance et Contrôles Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Maintenance et Contrôles Périodiques
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                frequence: "Trimestrielle",
                interventions: [
                  "Test des détecteurs",
                  "Vérification alarme",
                  "Contrôle visuel",
                ],
                documents: ["Rapport de test", "Fiche d'intervention"],
              },
              {
                frequence: "Semestrielle",
                interventions: [
                  "Test des diffuseurs",
                  "Contrôle batteries",
                  "Vérification câblage",
                ],
                documents: ["Rapport détaillé", "Attestation de conformité"],
              },
              {
                frequence: "Annuelle",
                interventions: [
                  "Vérification complète",
                  "Test de charge",
                  "Nettoyage équipements",
                ],
                documents: ["Rapport annuel", "Certificat de conformité"],
              },
            ].map((maintenance, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-200"
              >
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-[#3b82f6] text-2xl mx-auto mb-4">
                  {maintenance.frequence.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Maintenance {maintenance.frequence}
                </h3>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Interventions :
                  </h4>
                  <div className="space-y-1">
                    {maintenance.interventions.map((intervention, idx) => (
                      <div key={idx} className="text-gray-600 text-sm">
                        • {intervention}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Documents :
                  </h4>
                  <div className="space-y-1">
                    {maintenance.documents.map((document, idx) => (
                      <div key={idx} className="text-gray-600 text-sm">
                        📄 {document}
                      </div>
                    ))}
                  </div>
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
            Votre sécurité incendie est-elle aux normes ?
          </h2>
          <p className="text-xl mb-10">
            Notre équipe d&apos;experts en sécurité incendie est à votre
            disposition pour un audit gratuit de votre établissement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#3b82f6] hover:bg-blue-700 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300"
            >
              Audit sécurité gratuit
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300"
            >
              Devis conformité
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
