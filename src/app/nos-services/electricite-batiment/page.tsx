import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faCheckCircle,
  faHome,
  faBuilding,
  faRulerCombined,
  faTools,
  faShieldAlt,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { faIndustry } from "@fortawesome/free-solid-svg-icons/faIndustry";

export default function ElectriciteBatimentPage() {
  const servicesDetails = [
    {
      icon: faHome,
      title: "Installations Neuves",
      description:
        "Installations électriques complètes pour constructions neuves, du tableau principal aux prises et éclairages.",
    },
    {
      icon: faTools,
      title: "Rénovation",
      description:
        "Mise aux normes et modernisation des installations existantes pour plus de sécurité et de performance.",
    },
    {
      icon: faRulerCombined,
      title: "Étude & Conception",
      description:
        "Plans électriques détaillés, calcul des puissances et dimensionnement des circuits selon vos besoins.",
    },
    {
      icon: faShieldAlt,
      title: "Mise aux Normes",
      description:
        "Vérification et mise en conformité de vos installations avec les normes électriques en vigueur.",
    },
    {
      icon: faLightbulb,
      title: "Éclairage",
      description:
        "Solutions d'éclairage intérieur et extérieur, LED, détecteurs de mouvement et variateurs.",
    },
    {
      icon: faBolt,
      title: "Dépannage",
      description:
        "Intervention rapide pour tous types de pannes électriques, 7j/7 pour les urgences.",
    },
  ];

  const normes = [
    "Norme NFC 15-100 pour les installations résidentielles",
    "Protection différentielle 30mA obligatoire",
    "Section des conducteurs adaptée aux puissances",
    "Dispositifs de protection contre les surtensions",
    "Gestion des circuits spécialisés (cuisine, salle de bain)",
    "Accessibilité et repérage des circuits",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('/images/services/electricite-batiment-hero.jpg')",
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
            icon={faBolt}
            className="text-5xl text-[#3b82f6] mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Électricité Bâtiment
          </h1>
          <p className="text-xl max-w-2xl">
            Installations électriques complètes et sécurisées pour tous types de
            bâtiments
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
                  src="/images/services/electricite-batiment-detail.jpg"
                  alt="Installation électrique bâtiment"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                L&apos;excellence technique au service de votre habitat
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Chez{" "}
                <strong className="text-[#3b82f6]">TechWorld Revolution</strong>
                , nous réalisons des installations électriques complètes pour
                les bâtiments résidentiels, commerciaux et industriels. Notre
                expertise couvre tous les aspects de l&apos;électricité
                bâtiment, de la conception à la mise en service.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nous utilisons des matériaux de qualité supérieure et respectons
                scrupuleusement les normes de sécurité pour garantir la
                fiabilité et la durabilité de vos installations.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-[#3b82f6]">
                <p className="text-gray-900 font-semibold">
                  💡 <span className="text-[#3b82f6]">Saviez-vous ?</span> Une
                  installation électrique aux normes réduit de 80% les risques
                  d&apos;incendie d&apos;origine électrique.
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
              Nos Prestations Électricité Bâtiment
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une gamme complète de services pour répondre à tous vos besoins en
              électricité
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

      {/* Normes et Sécurité Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Conformité aux Normes
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Toutes nos installations respectent strictement les normes
                électriques en vigueur pour garantir votre sécurité et celle de
                vos biens.
              </p>

              <div className="space-y-4">
                {normes.map((norme, index) => (
                  <div key={index} className="flex items-start">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-green-500 mt-1 mr-3 flex-shrink-0"
                    />
                    <span className="text-gray-600">{norme}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-[#3b82f6] to-blue-600 text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">
                  Pourquoi choisir TechWorld Revolution ?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-white text-[#3b82f6] flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      ✓
                    </div>
                    <span>
                      Équipe d&apos;électriciens certifiés et expérimentés
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-white text-[#3b82f6] flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      ✓
                    </div>
                    <span>Matériaux de qualité et garantis</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-white text-[#3b82f6] flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      ✓
                    </div>
                    <span>Respect strict des délais convenus</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-white text-[#3b82f6] flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      ✓
                    </div>
                    <span>Service après-vente réactif</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-white text-[#3b82f6] flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      ✓
                    </div>
                    <span>Devis détaillé et transparent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domaines d'Intervention */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Domaines d&apos;Intervention
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Résidentiel",
                description:
                  "Maisons, appartements, villas - Installation complète et rénovation",
                icon: faHome,
              },
              {
                title: "Commercial",
                description:
                  "Bureaux, magasins, restaurants - Solutions adaptées aux professionnels",
                icon: faBuilding,
              },
              {
                title: "Industriel",
                description:
                  "Ateliers, entrepôts, usines - Électricité puissance et automatismes",
                icon: faIndustry,
              },
            ].map((domaine, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-200"
              >
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-[#3b82f6] text-2xl mx-auto mb-4">
                  <FontAwesomeIcon icon={domaine.icon} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {domaine.title}
                </h3>
                <p className="text-gray-600">{domaine.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Un projet d&apos;électricité pour votre bâtiment ?
          </h2>
          <p className="text-xl mb-10">
            Notre équipe d&apos;experts est à votre disposition pour étudier
            votre projet et vous proposer une installation électrique sécurisée
            et performante.
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
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
