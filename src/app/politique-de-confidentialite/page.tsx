"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faDatabase,
  faLock,
  faUserCheck,
  faCookie,
  faSyncAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const PolitiqueConfidentialitePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-[#1b314e] text-white py-12 pt-35">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <FontAwesomeIcon
            icon={faShieldAlt}
            className="text-5xl text-[#d32a2b] mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Politique de Confidentialité
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Protection de vos données personnelles chez Global Solution &
            Services SARL
          </p>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a href="/" className="text-[#d32a2b] hover:underline">
                  Accueil
                </a>
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
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 bg-[#1b314e] text-white">
              <h2 className="text-2xl font-bold">
                Engagement de confidentialité
              </h2>
              <p>
                Protection de vos données personnelles conformément à la
                législation camerounaise
              </p>
            </div>

            <div className="p-8">
              {/* Introduction */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#1b314e] mb-4">
                  Notre engagement envers votre vie privée
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Chez Global Solution & Services SARL, nous prenons la
                  protection de vos données personnelles très au sérieux. Cette
                  politique de confidentialité explique comment nous collectons,
                  utilisons, partageons et protégeons vos informations lorsque
                  vous visitez notre site web ou utilisez nos services.
                  Conformément à la loi n°2010/012 du 21 décembre 2010 relative
                  à la protection des données à caractère personnel au Cameroun,
                  nous nous engageons à respecter vos droits.
                </p>
              </div>

              {/* Données collectées */}
              <div className="bg-[#f8f9fa] p-6 rounded-lg border border-gray-200 mb-10">
                <h3 className="text-xl font-bold text-[#1b314e] mb-6 flex items-center">
                  <FontAwesomeIcon
                    icon={faDatabase}
                    className="mr-3 text-[#d32a2b]"
                  />
                  Données que nous collectons
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-[#1b314e] mb-3">
                      Informations que vous nous fournissez
                    </h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li className="text-black">Identité (nom, prénom)</li>
                      <li className="text-black">
                        Coordonnées (email, téléphone, adresse)
                      </li>
                      <li className="text-black">
                        Informations professionnelles (entreprise, poste)
                      </li>
                      <li className="text-black">
                        Contenu des communications (emails, messages)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#1b314e] mb-3">
                      Informations collectées automatiquement
                    </h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li className="text-black">
                        Données techniques (adresse IP, navigateur, OS)
                      </li>
                      <li className="text-black">
                        Historique de navigation sur notre site
                      </li>
                      <li className="text-black">
                        Données de cookies et technologies similaires
                      </li>
                      <li className="text-black">
                        Données d&apos;utilisation de nos services
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Utilisation des données */}
              <div className="bg-[#f8f9fa] p-6 rounded-lg border border-gray-200 mb-10">
                <h3 className="text-xl font-bold text-[#1b314e] mb-6 flex items-center">
                  <FontAwesomeIcon
                    icon={faLock}
                    className="mr-3 text-[#d32a2b]"
                  />
                  Utilisation de vos données
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#1b314e]">
                      Finalités principales
                    </h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li className="text-black">
                        Fournir et gérer nos services
                      </li>
                      <li className="text-black">
                        Répondre à vos demandes et questions
                      </li>
                      <li className="text-black">
                        Gérer notre relation commerciale
                      </li>
                      <li className="text-black">
                        Améliorer notre site web et nos services
                      </li>
                      <li className="text-black">
                        Envoyer des communications marketing (avec consentement)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#1b314e]">
                      Bases légales du traitement
                    </h4>
                    <p className="text-black mt-2">
                      Nous traitons vos données sur la base de votre
                      consentement, de l&apos;exécution d&apos;un contrat, ou de
                      nos intérêts légitimes conformément à la loi camerounaise.
                    </p>
                  </div>
                </div>
              </div>

              {/* Partage des données */}
              <div className="bg-[#f8f9fa] p-6 rounded-lg border border-gray-200 mb-10">
                <h3 className="text-xl font-bold text-[#1b314e] mb-6 flex items-center">
                  <FontAwesomeIcon
                    icon={faUserCheck}
                    className="mr-3 text-[#d32a2b]"
                  />
                  Partage de vos données
                </h3>

                <div className="space-y-4">
                  <p className="text-black">
                    Nous ne vendons ni ne louons vos données personnelles à des
                    tiers. Nous pouvons partager vos informations avec :
                  </p>

                  <ul className="list-disc pl-5 space-y-2">
                    <li className="text-black">
                      <span className="font-semibold">
                        Prestataires de services :
                      </span>{" "}
                      Sous-traitants qui nous aident dans nos opérations
                      (hébergement web, service client, marketing)
                    </li>
                    <li className="text-black">
                      <span className="font-semibold">Autorités légales :</span>{" "}
                      Lorsque requis par la loi ou pour protéger nos droits
                    </li>
                    <li className="text-black">
                      <span className="font-semibold">
                        Partenaires commerciaux :
                      </span>{" "}
                      Uniquement avec votre consentement explicite
                    </li>
                  </ul>

                  <p className="text-black">
                    Tous nos partenaires sont tenus contractuellement de
                    protéger vos données conformément à cette politique.
                  </p>
                </div>
              </div>

              {/* Cookies */}
              <div className="bg-[#f8f9fa] p-6 rounded-lg border border-gray-200 mb-10">
                <h3 className="text-xl font-bold text-[#1b314e] mb-6 flex items-center">
                  <FontAwesomeIcon
                    icon={faCookie}
                    className="mr-3 text-[#d32a2b]"
                  />
                  Cookies et technologies similaires
                </h3>

                <div className="space-y-4">
                  <p className="text-black">
                    Notre site utilise des cookies pour améliorer votre
                    expérience. Les cookies sont de petits fichiers texte
                    stockés sur votre appareil lorsque vous visitez notre site.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div>
                      <h4 className="font-semibold text-[#1b314e] mb-2">
                        Types de cookies utilisés
                      </h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li className="text-black">
                          Cookies essentiels (nécessaires au fonctionnement)
                        </li>
                        <li className="text-black">
                          Cookies de performance (analyse d&apos;audience)
                        </li>
                        <li className="text-black">
                          Cookies de fonctionnalité (mémorisation de
                          préférences)
                        </li>
                        <li className="text-black">
                          Cookies marketing (publicités ciblées)
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1b314e] mb-2">
                        Gestion des cookies
                      </h4>
                      <p className="text-black">
                        Vous pouvez contrôler et gérer les cookies via les
                        paramètres de votre navigateur. Notez que la
                        désactivation de certains cookies peut affecter le
                        fonctionnement de notre site.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Droits des utilisateurs */}
              <div className="bg-[#f8f9fa] p-6 rounded-lg border border-gray-200 mb-10">
                <h3 className="text-xl font-bold text-[#1b314e] mb-6 flex items-center">
                  <FontAwesomeIcon
                    icon={faSyncAlt}
                    className="mr-3 text-[#d32a2b]"
                  />
                  Vos droits
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-[#1b314e] mb-3">
                      Droits fondamentaux
                    </h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li className="text-black">
                        <span className="font-semibold">
                          Droit d&apos;accès :
                        </span>{" "}
                        Accéder à vos données personnelles
                      </li>
                      <li className="text-black">
                        <span className="font-semibold">
                          Droit de rectification :
                        </span>{" "}
                        Corriger des données inexactes
                      </li>
                      <li className="text-black">
                        <span className="font-semibold">
                          Droit à l&apos;effacement :
                        </span>{" "}
                        Supprimer vos données
                      </li>
                      <li className="text-black">
                        <span className="font-semibold">
                          Droit d&apos;opposition :
                        </span>{" "}
                        S&apos;opposer à certains traitements
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#1b314e] mb-3">
                      Autres droits
                    </h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li className="text-black">
                        <span className="font-semibold">
                          Droit à la limitation :
                        </span>{" "}
                        Limiter le traitement de vos données
                      </li>
                      <li className="text-black">
                        <span className="font-semibold">
                          Droit à la portabilité :
                        </span>{" "}
                        Recevoir vos données dans un format structuré
                      </li>
                      <li className="text-black">
                        <span className="font-semibold">
                          Droit de retrait :
                        </span>{" "}
                        Retirer votre consentement à tout moment
                      </li>
                      <li className="text-black">
                        <span className="font-semibold">
                          Déposer une réclamation :
                        </span>{" "}
                        Auprès de l&apos;autorité de protection des données
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white rounded-lg">
                  <p className="text-black">
                    Pour exercer vos droits, veuillez nous contacter à
                    l&apos;adresse suivante :{" "}
                    <a
                      href="mailto:contact@globalsolutionandservicessarl.com"
                      className="text-[#d32a2b] font-medium hover:underline"
                    >
                      contact@globalsolutionandservicessarl.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Sécurité et conservation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="bg-[#f8f9fa] p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-[#1b314e] mb-6 flex items-center">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="mr-3 text-[#d32a2b]"
                    />
                    Sécurité des données
                  </h3>

                  <p className="text-black mb-4">
                    Nous mettons en œuvre des mesures techniques et
                    organisationnelles appropriées pour protéger vos données
                    contre :
                  </p>

                  <ul className="list-disc pl-5 space-y-1">
                    <li className="text-black">Accès non autorisé</li>
                    <li className="text-black">Altérations accidentelles</li>
                    <li className="text-black">Divulgations non autorisées</li>
                    <li className="text-black">Destructions illicites</li>
                  </ul>

                  <p className="text-black mt-4">
                    Ces mesures incluent le chiffrement, le contrôle
                    d&apos;accès, et des audits de sécurité réguliers.
                  </p>
                </div>

                <div className="bg-[#f8f9fa] p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-[#1b314e] mb-6 flex items-center">
                    <FontAwesomeIcon
                      icon={faSyncAlt}
                      className="mr-3 text-[#d32a2b]"
                    />
                    Conservation des données
                  </h3>

                  <p className="text-black">
                    Nous conservons vos données personnelles seulement aussi
                    longtemps que nécessaire pour les finalités pour lesquelles
                    elles ont été collectées :
                  </p>

                  <div className="mt-4 space-y-3">
                    <div>
                      <h4 className="font-semibold text-[#1b314e]">
                        Données de contact
                      </h4>
                      <p className="text-black">
                        3 ans après le dernier contact
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1b314e]">
                        Données contractuelles
                      </h4>
                      <p className="text-black">
                        5 ans après la fin du contrat
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1b314e]">
                        Données comptables
                      </h4>
                      <p className="text-black">10 ans conformément à la loi</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modifications et contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="bg-[#f8f9fa] p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-[#1b314e] mb-6">
                    Modifications de la politique
                  </h3>

                  <p className="text-black">
                    Nous pouvons mettre à jour cette politique de
                    confidentialité périodiquement. La version la plus récente
                    sera toujours disponible sur notre site web.
                  </p>

                  <div className="mt-4 p-4 bg-white rounded-lg">
                    <p className="font-semibold text-[#1b314e]">
                      Dernière mise à jour :
                    </p>
                    <p className="text-black">24 juin 2025</p>
                  </div>
                </div>

                <div className="bg-[#1b314e] text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="mr-3 text-[#d32a2b]"
                    />
                    Contact
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">
                        Délégué à la protection des données
                      </h4>
                      <p className="mt-1">Global Solution & Services SARL</p>
                    </div>

                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p>
                        <a
                          href="mailto:contact@globalsolutionandservicessarl.com"
                          className="text-[#d32a2b] hover:underline"
                        >
                          contact@globalsolutionandservicessarl.com
                        </a>
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold">Téléphone</h4>
                      <p>+237 6 92 27 48 72</p>
                    </div>

                    <div>
                      <h4 className="font-semibold">Adresse postale</h4>
                      <p>Douala, Cameroun</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PolitiqueConfidentialitePage;
