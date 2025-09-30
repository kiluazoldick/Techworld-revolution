import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faCheckCircle,
  faShieldAlt,
  faEye,
  faMobileScreen,
  faCloudArrowUp,
  faNetworkWired,
  faRecordVinyl,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function CameraSurveillancePage() {
  const servicesDetails = [
    {
      icon: faVideo,
      title: "Installation Caméras",
      description:
        "Installation professionnelle de systèmes de vidéosurveillance IP et analogiques",
    },
    {
      icon: faRecordVinyl,
      title: "Enregistrement",
      description:
        "Solutions NVR/DVR avec stockage sécurisé et retention configurable",
    },
    {
      icon: faMobileScreen,
      title: "Visionnage à Distance",
      description:
        "Accès mobile et web pour surveiller vos locaux depuis n'importe où",
    },
    {
      icon: faShieldAlt,
      title: "Contrôle d'Accès",
      description:
        "Systèmes de badges, codes et reconnaissance pour sécuriser les accès",
    },
    {
      icon: faCloudArrowUp,
      title: "Solutions Cloud",
      description:
        "Surveillance dans le cloud avec stockage externalisé et sauvegarde",
    },
    {
      icon: faNetworkWired,
      title: "Intégration Réseau",
      description:
        "Intégration complète avec vos infrastructures réseaux existantes",
    },
  ];

  const typesCameras = [
    {
      type: "Caméras IP",
      description: "Haute définition et connectivité réseau",
      avantages: [
        "4K Ultra HD",
        "Vision nocturne",
        "Détection intelligente",
        "Audio bidirectionnel",
      ],
    },
    {
      type: "Caméras Analogiques",
      description: "Solutions économiques et fiables",
      avantages: [
        "AHD/TVI/CVI",
        "Installation simple",
        "Compatibilité",
        "Coût réduit",
      ],
    },
    {
      type: "Caméras PTZ",
      description: "Pan-Tilt-Zoom pour couverture large",
      avantages: [
        "Rotation 360°",
        "Zoom optique",
        "Présets automatiques",
        "Suivi intelligent",
      ],
    },
    {
      type: "Caméras Dome",
      description: "Design discret et protection anti-vandalisme",
      avantages: [
        "Design discret",
        "Anti-vandalisme",
        "Vision 360°",
        "Installation intérieur/extérieur",
      ],
    },
  ];

  const applications = [
    {
      secteur: "Entreprises & Bureaux",
      besoins: [
        "Surveillance périmètre",
        "Contrôle accès",
        "Monitoring salle serveur",
      ],
    },
    {
      secteur: "Commerces",
      besoins: [
        "Protection inventaire",
        "Monitoring caisse",
        "Analyse comportement client",
      ],
    },
    {
      secteur: "Résidentiel",
      besoins: [
        "Sécurité habitation",
        "Surveillance enfants",
        "Monitoring propriété",
      ],
    },
    {
      secteur: "Industriel",
      besoins: [
        "Sécurité site",
        "Monitoring processus",
        "Protection équipements",
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
              "url('/images/services/camera-surveillance-hero.jpg')",
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
            icon={faVideo}
            className="text-5xl text-[#3b82f6] mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Caméra de Surveillance
          </h1>
          <p className="text-xl max-w-2xl">
            Solutions de vidéosurveillance intelligentes pour votre sécurité
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
                  src="/images/services/camera-surveillance-detail.jpg"
                  alt="Système de vidéosurveillance"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                La tranquillité d&apos;esprit grâce à la surveillance
                intelligente
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Chez{" "}
                <strong className="text-[#3b82f6]">TechWorld Revolution</strong>
                , nous déployons des systèmes de vidéosurveillance complets qui
                protègent vos biens, vos collaborateurs et votre famille 24h/24
                et 7j/7.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nos solutions combinent technologies avancées et simplicité
                d&apos;utilisation pour une sécurité optimale adaptée à chaque
                besoin.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-[#3b82f6]">
                <p className="text-gray-900 font-semibold">
                  🛡️{" "}
                  <span className="text-[#3b82f6]">Sécurité renforcée :</span>
                  Réduction jusqu&apos;à 60% des risques d&apos;intrusion avec
                  un système de surveillance visible et professionnel.
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
              Nos Solutions de Surveillance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des systèmes complets pour tous vos besoins de sécurité
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

      {/* Types de Caméras Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technologies de Caméras
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choisissez la technologie adaptée à vos besoins spécifiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {typesCameras.map((camera, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#3b82f6] text-white flex items-center justify-center text-sm font-bold mr-3">
                    {index + 1}
                  </div>
                  {camera.type}
                </h3>
                <p className="text-gray-600 mb-4">{camera.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {camera.avantages.map((avantage, idx) => (
                    <div key={idx} className="flex items-start">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-green-500 mr-2 mt-1 flex-shrink-0"
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

      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Applications par Secteur
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des solutions sur mesure pour chaque environnement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((application, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-200"
              >
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-[#3b82f6] text-2xl mx-auto mb-4">
                  <FontAwesomeIcon icon={faEye} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {application.secteur}
                </h3>
                <div className="space-y-2">
                  {application.besoins.map((besoin, idx) => (
                    <div key={idx} className="text-gray-600 text-sm">
                      • {besoin}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fonctionnalités Avancées Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Fonctionnalités Intelligentes
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Détection Intelligente",
                    description:
                      "Reconnaissance de mouvement, détection de ligne, analyse comportementale",
                  },
                  {
                    title: "Alertes en Temps Réel",
                    description:
                      "Notifications push, emails et SMS en cas d'événement suspect",
                  },
                  {
                    title: "Vision Nocturne",
                    description:
                      "Surveillance 24h/24 avec infrarouge et technologie Starlight",
                  },
                  {
                    title: "Analytique Vidéo",
                    description:
                      "Comptage de personnes, analyse de foules, reconnaissance de plaques",
                  },
                ].map((fonction, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#3b82f6] text-white flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {fonction.title}
                      </h4>
                      <p className="text-gray-600">{fonction.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-[#3b82f6] to-blue-600 text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Avantages Clés</h3>
                <div className="space-y-4">
                  {[
                    "Dissuasion visible contre les intrusions",
                    "Preuves vidéo en cas d'incident",
                    "Surveillance à distance 24/7",
                    "Réduction des coûts d'assurance",
                    "Amélioration de la productivité",
                    "Conformité réglementaire",
                    "Intégration avec autres systèmes",
                    "Maintenance proactive incluse",
                  ].map((avantage, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-white text-[#3b82f6] flex items-center justify-center text-xs font-bold mr-3">
                        ✓
                      </div>
                      <span className="text-blue-100">{avantage}</span>
                    </div>
                  ))}
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
                title: "Audit Sécurité",
                description: "Analyse de vos risques et besoins spécifiques",
              },
              {
                step: "2",
                title: "Conception",
                description: "Plan de couverture et choix des équipements",
              },
              {
                step: "3",
                title: "Installation",
                description: "Pose et configuration professionnelle",
              },
              {
                step: "4",
                title: "Formation",
                description: "Prise en main et support technique",
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
            Prêt à sécuriser vos espaces ?
          </h2>
          <p className="text-xl mb-10">
            Notre équipe d&apos;experts en sécurité électronique est à votre
            disposition pour une analyse gratuite de vos besoins.
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
              Devis personnalisé
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
