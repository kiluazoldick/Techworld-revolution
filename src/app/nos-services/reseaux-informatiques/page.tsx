import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNetworkWired,
  faCheckCircle,
  faServer,
  faWifi,
  faShieldHalved,
  faCloud,
  faTable,
  faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function ReseauxInformatiquesPage() {
  const servicesDetails = [
    {
      icon: faTable,
      title: "Câblage Structuré",
      description:
        "Installation de réseaux cuivre et fibre optique selon les normes internationales",
    },
    {
      icon: faWifi,
      title: "Réseaux Sans Fil",
      description: "Solutions Wi-Fi professionnelles couvrant tous vos espaces",
    },
    {
      icon: faServer,
      title: "Infrastructure Réseau",
      description:
        "Switchs, routeurs, firewalls et équipements actifs performants",
    },
    {
      icon: faShieldHalved,
      title: "Sécurité Réseau",
      description:
        "Protection avancée contre les cybermenaces et accès non autorisés",
    },
    {
      icon: faCloud,
      title: "Réseaux Cloud",
      description: "Intégration avec les solutions cloud et réseaux hybrides",
    },
    {
      icon: faDiagramProject,
      title: "Supervision",
      description:
        "Monitoring et gestion proactive de votre infrastructure réseau",
    },
  ];

  const typesReseaux = [
    {
      type: "LAN",
      description: "Réseaux locaux pour entreprises et organisations",
      caracteristiques: [
        "Gigabit Ethernet",
        "PoE",
        "VLAN",
        "Qualité de Service",
      ],
    },
    {
      type: "WLAN",
      description: "Réseaux sans fil haute performance",
      caracteristiques: ["Wi-Fi 6/6E", "Mesh Networking", "Hotspot", "Roaming"],
    },
    {
      type: "WAN",
      description: "Interconnexion de sites distants",
      caracteristiques: ["VPN", "MPLS", "SD-WAN", "Liaisons dédiées"],
    },
    {
      type: "Data Center",
      description: "Infrastructures pour centres de données",
      caracteristiques: [
        "Fibre optique",
        "10/40/100 GbE",
        "NaaS",
        "Virtualisation",
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
              "url('/images/services/reseaux-informatiques-hero.jpg')",
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
            icon={faNetworkWired}
            className="text-5xl text-[#3b82f6] mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Réseaux Informatiques
          </h1>
          <p className="text-xl max-w-2xl">
            Infrastructures réseau performantes, sécurisées et évolutives
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
                  src="/images/services/reseaux-informatiques-detail.jpg"
                  alt="Infrastructure réseau informatique"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                La connectivité au service de votre productivité
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Chez{" "}
                <strong className="text-[#3b82f6]">TechWorld Revolution</strong>
                , nous concevons et déployons des infrastructures réseau sur
                mesure qui garantissent performance, sécurité et évolutivité à
                votre entreprise.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                De la petite entreprise au grand groupe, nous adaptons nos
                solutions à vos besoins spécifiques en matière de connectivité
                et de communication.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-[#3b82f6]">
                <p className="text-gray-900 font-semibold">
                  🌐{" "}
                  <span className="text-[#3b82f6]">Performance optimale :</span>
                  Nos réseaux sont conçus pour offrir un débit stable et une
                  latence minimale, essentiels pour vos applications métiers.
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
              Nos Solutions Réseau
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une gamme complète de services pour tous vos besoins en
              connectivité
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

      {/* Types de Réseaux Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Types de Réseaux
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des solutions adaptées à chaque échelle et besoin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {typesReseaux.map((reseau, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#3b82f6] text-white flex items-center justify-center text-sm font-bold mr-3">
                    {reseau.type}
                  </div>
                  {reseau.type}
                </h3>
                <p className="text-gray-600 mb-4">{reseau.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {reseau.caracteristiques.map((caract, idx) => (
                    <div key={idx} className="flex items-center">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-green-500 mr-2 text-sm flex-shrink-0"
                      />
                      <span className="text-gray-600 text-sm">{caract}</span>
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
                Pourquoi nos réseaux ?
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Haute Disponibilité",
                    description:
                      "Architectures redondantes pour une continuité de service maximale",
                  },
                  {
                    title: "Sécurité Renforcée",
                    description:
                      "Protection multi-niveaux contre les menaces internes et externes",
                  },
                  {
                    title: "Évolutivité",
                    description:
                      "Solutions modulaires qui grandissent avec votre entreprise",
                  },
                  {
                    title: "Support 24/7",
                    description:
                      "Assistance technique permanente pour votre infrastructure",
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
                <h3 className="text-2xl font-bold mb-6">
                  Nos Références Techniques
                </h3>
                <div className="space-y-4">
                  {[
                    "Déploiement de réseaux Gigabit Ethernet",
                    "Installation de baies de brassage structurées",
                    "Configuration de VLAN et QoS avancée",
                    "Mise en place de solutions Wi-Fi 6 entreprise",
                    "Déploiement de firewalls nouvelle génération",
                    "Migration vers le SD-WAN",
                    "Supervision réseau avec PRTG/Zabbix",
                    "Sauvegarde et reprise après sinistre",
                  ].map((reference, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-white text-[#3b82f6] flex items-center justify-center text-xs font-bold mr-3">
                        ✓
                      </div>
                      <span className="text-blue-100">{reference}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Étapes de Projet Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Déroulement d&apos;un Projet Réseau
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Audit & Conception",
                description:
                  "Analyse des besoins et conception de l'architecture",
              },
              {
                step: "2",
                title: "Installation",
                description: "Câblage et installation des équipements",
              },
              {
                step: "3",
                title: "Configuration",
                description: "Paramétrage et optimisation des performances",
              },
              {
                step: "4",
                title: "Formation & Support",
                description: "Formation des utilisateurs et support continu",
              },
            ].map((etape, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 rounded-full bg-[#3b82f6] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition duration-300">
                  {etape.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">
                  {etape.title}
                </h3>
                <p className="text-gray-600">{etape.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Besoin d&apos;un réseau performant et sécurisé ?
          </h2>
          <p className="text-xl mb-10">
            Notre équipe d&apos;experts réseau est à votre disposition pour
            concevoir l&apos;infrastructure qui propulsera votre entreprise.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#3b82f6] hover:bg-blue-700 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300"
            >
              Audit réseau gratuit
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300"
            >
              Devis personnalisé
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
