"use client";

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faDatabase,
  faLock,
  faUserCheck,
  faCookie,
  faSyncAlt,
  faPhone,
  faEnvelope,
  faBuilding,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const PolitiqueConfidentialitePage = () => {
  return (
    <>
      <Head>
        <title>Politique de Confidentialité - TechWorld Revolution</title>
        <meta
          name="description"
          content="Politique de confidentialité de TechWorld Revolution - Protection de vos données personnelles et engagement envers votre vie privée."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header avec le même style que la page À propos */}
        <div className="relative h-[50vh] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: "url('/images/confidentialite-hero.jpg')",
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
              Politique de Confidentialité
            </h1>
            <p className="text-xl max-w-3xl">
              Protection de vos données personnelles chez TechWorld Revolution
            </p>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="bg-gray-100 py-4">
          <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
            <nav className="text-sm">
              <ol className="list-none p-0 inline-flex">
                <li className="flex items-center">
                  <Link href="/" className="text-[#3b82f6] hover:underline">
                    Accueil
                  </Link>
                  <svg
                    className="w-3 h-3 mx-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </li>
                <li className="text-gray-500">Politique de confidentialité</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <main className="py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              {/* En-tête de section */}
              <div className="p-8 bg-gradient-to-r from-[#3b82f6] to-blue-600 text-white">
                <h2 className="text-2xl font-bold">
                  Engagement de confidentialité
                </h2>
                <p>
                  Protection de vos données personnelles conformément à la
                  législation en vigueur
                </p>
              </div>

              <div className="p-8">
                {/* Introduction */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Notre engagement envers votre vie privée
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Chez{" "}
                      <strong className="text-[#3b82f6]">
                        TechWorld Revolution
                      </strong>
                      , nous prenons la protection de vos données personnelles
                      très au sérieux. Cette politique de confidentialité
                      explique comment nous collectons, utilisons, partageons et
                      protégeons vos informations lorsque vous visitez notre
                      site web ou utilisez nos services. Nous nous engageons à
                      respecter vos droits et à garantir la sécurité de vos
                      informations personnelles.
                    </p>
                  </div>
                </div>

                {/* Données collectées */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <FontAwesomeIcon
                      icon={faDatabase}
                      className="mr-3 text-[#3b82f6]"
                    />
                    Données que nous collectons
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">
                        Informations que vous nous fournissez
                      </h4>
                      <ul className="space-y-3">
                        {[
                          "Identité (nom, prénom)",
                          "Coordonnées (email, téléphone, adresse)",
                          "Informations professionnelles (entreprise, poste)",
                          "Contenu des communications (emails, messages)",
                          "Demandes de devis et projets",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <FontAwesomeIcon
                              icon={faUserCheck}
                              className="text-green-500 mt-1 mr-3 flex-shrink-0"
                            />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">
                        Informations collectées automatiquement
                      </h4>
                      <ul className="space-y-3">
                        {[
                          "Données techniques (adresse IP, navigateur, OS)",
                          "Historique de navigation sur notre site",
                          "Données de cookies et technologies similaires",
                          "Données d'utilisation de nos services",
                          "Pages visitées et temps de consultation",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <FontAwesomeIcon
                              icon={faSyncAlt}
                              className="text-blue-500 mt-1 mr-3 flex-shrink-0"
                            />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Utilisation des données */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="mr-3 text-[#3b82f6]"
                    />
                    Utilisation de vos données
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Finalités principales
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          "Fournir et gérer nos services électriques",
                          "Répondre à vos demandes et questions techniques",
                          "Gérer notre relation commerciale",
                          "Améliorer notre site web et nos services",
                          "Envoyer des communications marketing (avec consentement)",
                          "Assurer la sécurité de nos installations",
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center bg-white p-3 rounded-lg border border-gray-200"
                          >
                            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#3b82f6] mr-3">
                              {index + 1}
                            </div>
                            <span className="text-gray-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Partage des données */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <FontAwesomeIcon
                      icon={faUserCheck}
                      className="mr-3 text-[#3b82f6]"
                    />
                    Partage de vos données
                  </h3>

                  <div className="space-y-4">
                    <p className="text-gray-600 text-lg">
                      Nous ne vendons ni ne louons vos données personnelles à
                      des tiers. Nous pouvons partager vos informations avec :
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                      {[
                        {
                          title: "Prestataires de services",
                          description:
                            "Sous-traitants qui nous aident dans nos opérations (hébergement web, service client)",
                          color: "blue",
                        },
                        {
                          title: "Autorités légales",
                          description:
                            "Lorsque requis par la loi ou pour protéger nos droits et notre sécurité",
                          color: "red",
                        },
                        {
                          title: "Partenaires techniques",
                          description:
                            "Uniquement avec votre consentement explicite pour des services spécifiques",
                          color: "green",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="bg-white p-4 rounded-lg border border-gray-200 text-center"
                        >
                          <div
                            className={`w-12 h-12 rounded-full bg-${item.color}-50 flex items-center justify-center text-${item.color}-500 text-xl mx-auto mb-3`}
                          >
                            <FontAwesomeIcon icon={faShieldAlt} />
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Cookies */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <FontAwesomeIcon
                      icon={faCookie}
                      className="mr-3 text-[#3b82f6]"
                    />
                    Cookies et technologies similaires
                  </h3>

                  <div className="space-y-6">
                    <p className="text-gray-600">
                      Notre site utilise des cookies pour améliorer votre
                      expérience. Les cookies sont de petits fichiers texte
                      stockés sur votre appareil lorsque vous visitez notre
                      site.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">
                          Types de cookies utilisés
                        </h4>
                        <div className="space-y-3">
                          {[
                            {
                              name: "Cookies essentiels",
                              desc: "Nécessaires au fonctionnement du site",
                            },
                            {
                              name: "Cookies de performance",
                              desc: "Analyse d'audience et statistiques",
                            },
                            {
                              name: "Cookies de fonctionnalité",
                              desc: "Mémorisation de vos préférences",
                            },
                            {
                              name: "Cookies marketing",
                              desc: "Publicités ciblées et personnalisées",
                            },
                          ].map((cookie, index) => (
                            <div
                              key={index}
                              className="bg-white p-3 rounded-lg border border-gray-200"
                            >
                              <div className="font-medium text-gray-900">
                                {cookie.name}
                              </div>
                              <div className="text-gray-600 text-sm">
                                {cookie.desc}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">
                          Gestion des cookies
                        </h4>
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <p className="text-gray-600 mb-4">
                            Vous pouvez contrôler et gérer les cookies via les
                            paramètres de votre navigateur. La désactivation de
                            certains cookies peut affecter le fonctionnement de
                            notre site.
                          </p>
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <p className="text-sm text-gray-600">
                              <strong>Conseil :</strong> Consultez la section
                              d&apos;aide de votre navigateur pour apprendre à
                              modifier vos paramètres de cookies.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Droits des utilisateurs */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <FontAwesomeIcon
                      icon={faSyncAlt}
                      className="mr-3 text-[#3b82f6]"
                    />
                    Vos droits
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">
                        Droits fondamentaux
                      </h4>
                      <div className="space-y-3">
                        {[
                          {
                            right: "Droit d'accès",
                            desc: "Accéder à vos données personnelles",
                          },
                          {
                            right: "Droit de rectification",
                            desc: "Corriger des données inexactes",
                          },
                          {
                            right: "Droit à l'effacement",
                            desc: "Supprimer vos données",
                          },
                          {
                            right: "Droit d'opposition",
                            desc: "S'opposer à certains traitements",
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="bg-white p-3 rounded-lg border border-gray-200"
                          >
                            <div className="font-semibold text-gray-900">
                              {item.right}
                            </div>
                            <div className="text-gray-600 text-sm">
                              {item.desc}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">
                        Autres droits
                      </h4>
                      <div className="space-y-3">
                        {[
                          {
                            right: "Droit à la limitation",
                            desc: "Limiter le traitement de vos données",
                          },
                          {
                            right: "Droit à la portabilité",
                            desc: "Recevoir vos données dans un format structuré",
                          },
                          {
                            right: "Droit de retrait",
                            desc: "Retirer votre consentement à tout moment",
                          },
                          {
                            right: "Droit de réclamation",
                            desc: "Auprès de l'autorité de protection des données",
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="bg-white p-3 rounded-lg border border-gray-200"
                          >
                            <div className="font-semibold text-gray-900">
                              {item.right}
                            </div>
                            <div className="text-gray-600 text-sm">
                              {item.desc}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
                    <p className="text-gray-600 text-center">
                      Pour exercer vos droits, veuillez nous contacter à
                      l&apos;adresse suivante :{" "}
                      <a
                        href="mailto:techworldrevolution23@gmail.com"
                        className="text-[#3b82f6] font-medium hover:underline"
                      >
                        techworldrevolution23@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Sécurité et conservation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <FontAwesomeIcon
                        icon={faLock}
                        className="mr-3 text-[#3b82f6]"
                      />
                      Sécurité des données
                    </h3>

                    <p className="text-gray-600 mb-4">
                      Nous mettons en œuvre des mesures techniques et
                      organisationnelles appropriées pour protéger vos données :
                    </p>

                    <div className="space-y-3">
                      {[
                        "Chiffrement des données sensibles",
                        "Contrôle d'accès strict",
                        "Audits de sécurité réguliers",
                        "Sauvegardes automatiques",
                        "Formation du personnel à la protection des données",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center bg-white p-3 rounded-lg border border-gray-200"
                        >
                          <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-500 mr-3">
                            <FontAwesomeIcon
                              icon={faShieldAlt}
                              className="text-sm"
                            />
                          </div>
                          <span className="text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <FontAwesomeIcon
                        icon={faSyncAlt}
                        className="mr-3 text-[#3b82f6]"
                      />
                      Conservation des données
                    </h3>

                    <p className="text-gray-600 mb-4">
                      Nous conservons vos données personnelles seulement aussi
                      longtemps que nécessaire :
                    </p>

                    <div className="space-y-4">
                      {[
                        {
                          type: "Données de contact",
                          duration: "3 ans après le dernier contact",
                        },
                        {
                          type: "Données de projet",
                          duration: "5 ans après la fin du projet",
                        },
                        {
                          type: "Données techniques",
                          duration: "1 an après la collecte",
                        },
                        {
                          type: "Données de facturation",
                          duration: "10 ans conformément à la loi",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="bg-white p-3 rounded-lg border border-gray-200"
                        >
                          <div className="font-semibold text-gray-900">
                            {item.type}
                          </div>
                          <div className="text-gray-600 text-sm">
                            {item.duration}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact et modifications */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Modifications de la politique
                    </h3>

                    <p className="text-gray-600 mb-4">
                      Nous pouvons mettre à jour cette politique de
                      confidentialité périodiquement. La version la plus récente
                      sera toujours disponible sur notre site web.
                    </p>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <p className="font-semibold text-gray-900">
                        Dernière mise à jour :
                      </p>
                      <p className="text-gray-600">
                        {new Date().toLocaleDateString("fr-FR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#3b82f6] to-blue-600 text-white p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-6 flex items-center">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="mr-3 text-white"
                      />
                      Contact
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <FontAwesomeIcon
                          icon={faBuilding}
                          className="mt-1 mr-3 text-white"
                        />
                        <div>
                          <p className="font-semibold">TechWorld Revolution</p>
                          <p className="text-blue-100">Service client</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="mt-1 mr-3 text-white"
                        />
                        <div>
                          <p className="font-semibold">Email</p>
                          <p>
                            <a
                              href="mailto:techworldrevolution23@gmail.com"
                              className="text-white hover:underline"
                            >
                              techworldrevolution23@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="mt-1 mr-3 text-white"
                        />
                        <div>
                          <p className="font-semibold">Téléphone</p>
                          <p>+237 658 298 002</p>
                          <p>+237 682 840 911</p>
                        </div>
                      </div>

                      <div className="pt-4">
                        <Link
                          href="/contact"
                          className="inline-flex items-center bg-white hover:bg-gray-100 text-[#3b82f6] px-4 py-2 rounded-md font-medium transition duration-300"
                        >
                          Nous contacter
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="ml-2"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default PolitiqueConfidentialitePage;
