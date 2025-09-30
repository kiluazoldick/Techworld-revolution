"use client";

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faScaleBalanced,
  faFileContract,
  faPhone,
  faEnvelope,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const MentionsLegalesPage = () => {
  return (
    <>
      <Head>
        <title>Mentions Légales - TechWorld Revolution</title>
        <meta
          name="description"
          content="Mentions légales de TechWorld Revolution - Informations juridiques sur notre entreprise spécialisée en installations électriques, courants forts/faibles et solutions technologiques."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header avec le même style que la page À propos */}
        <div className="relative h-[50vh] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: "url('/images/mentions-legales-hero.jpg')",
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
              icon={faScaleBalanced}
              className="text-5xl text-[#3b82f6] mb-4"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mentions Légales
            </h1>
            <p className="text-xl max-w-3xl">
              Informations juridiques relatives à TechWorld Revolution
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
                <li className="text-gray-500">Mentions légales</li>
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
                <h2 className="text-2xl font-bold">Informations légales</h2>
                <p>Conformément aux dispositions légales en vigueur</p>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Informations de l'entreprise */}
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <FontAwesomeIcon
                        icon={faBuilding}
                        className="mr-3 text-[#3b82f6]"
                      />
                      Société
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Dénomination sociale
                        </h4>
                        <p className="text-gray-600">TechWorld Revolution</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Forme juridique
                        </h4>
                        <p className="text-gray-600">Entreprise individuelle</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Siège social
                        </h4>
                        <p className="text-gray-600">Douala, Cameroun</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Numéro de téléphone
                        </h4>
                        <p className="text-gray-600">+237 658 298 002</p>
                        <p className="text-gray-600">+237 682 840 911</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <p className="text-gray-600">
                          techworldrevolution23@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Activités */}
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <FontAwesomeIcon
                        icon={faFileContract}
                        className="mr-3 text-[#3b82f6]"
                      />
                      Domaines d&apos;activité
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Expertises principales
                        </h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li className="text-gray-600">
                            Installations électriques courants forts
                          </li>
                          <li className="text-gray-600">
                            Systèmes courants faibles et réseaux
                          </li>
                          <li className="text-gray-600">
                            Solutions domotiques et automatismes
                          </li>
                          <li className="text-gray-600">
                            Énergies renouvelables
                          </li>
                          <li className="text-gray-600">
                            Sécurité et vidéosurveillance
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Secteurs d&apos;intervention
                        </h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li className="text-gray-600">Résidentiel</li>
                          <li className="text-gray-600">Commercial</li>
                          <li className="text-gray-600">Industriel</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Propriété intellectuelle */}
                <div className="mt-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Propriété intellectuelle
                  </h3>

                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <p className="text-gray-600">
                      L&apos;ensemble des éléments accessibles sur le site
                      (textes, graphismes, images, logos, icônes, sons,
                      logiciels, etc.) reste la propriété exclusive de TechWorld
                      Revolution ou de ses partenaires. Toute reproduction,
                      représentation, modification, publication, adaptation de
                      tout ou partie des éléments du site, quel que soit le
                      moyen ou le procédé utilisé, est interdite sans
                      l&apos;autorisation écrite préalable de TechWorld
                      Revolution.
                    </p>
                    <p className="mt-4 text-gray-600">
                      Le logo TechWorld Revolution, les couleurs corporates
                      (bleu #0074C6 et ses déclinaisons) et la typographie Leo
                      Rounded Pro sont des éléments protégés de l&apos;identité
                      visuelle de l&apos;entreprise.
                    </p>
                  </div>
                </div>

                {/* Protection des données */}
                <div className="mt-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Protection des données personnelles
                  </h3>

                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <p className="text-gray-600">
                      Conformément à la réglementation en vigueur en matière de
                      protection des données personnelles, vous disposez
                      d&apos;un droit d&apos;accès, de rectification et de
                      suppression des données vous concernant. Vous pouvez
                      exercer ce droit en nous contactant à l&apos;adresse
                      suivante :{" "}
                      <a
                        href="mailto:techworldrevolution23@gmail.com"
                        className="text-[#3b82f6] hover:underline ml-1"
                      >
                        techworldrevolution23@gmail.com
                      </a>
                    </p>
                    <p className="mt-4 text-gray-600">
                      Les données collectées sur ce site sont exclusivement
                      destinées à un usage interne et ne seront en aucun cas
                      cédées ou vendues à des tiers. Nous nous engageons à
                      protéger la confidentialité de vos informations
                      personnelles.
                    </p>
                  </div>
                </div>

                {/* Hébergement */}
                <div className="mt-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Hébergement
                  </h3>

                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Éditeur du site
                        </h4>
                        <p className="text-gray-600">TechWorld Revolution</p>
                        <p className="mt-2 text-gray-600">
                          Directeur de la publication : David Christian
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Hébergeur
                        </h4>
                        <p className="text-gray-600">Vercel Inc.</p>
                        <p className="mt-1 text-gray-600">
                          340 S Lemon Ave #4133
                        </p>
                        <p className="text-gray-600">Walnut, CA 91789</p>
                        <p className="mt-1 text-gray-600">
                          Site web:{" "}
                          <a
                            href="https://vercel.com"
                            className="text-[#3b82f6] hover:underline"
                          >
                            https://vercel.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="mt-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="mr-3 text-[#3b82f6]"
                    />
                    Contact
                  </h3>

                  <div className="bg-gradient-to-r from-[#3b82f6] to-blue-600 text-white p-8 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-bold mb-4">Coordonnées</h4>

                        <div className="flex items-start mb-4">
                          <FontAwesomeIcon
                            icon={faPhone}
                            className="mt-1 mr-3 text-white"
                          />
                          <div>
                            <p>Téléphone</p>
                            <p className="font-medium">+237 658 298 002</p>
                            <p className="font-medium">+237 682 840 911</p>
                          </div>
                        </div>

                        <div className="flex items-start mb-4">
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className="mt-1 mr-3 text-white"
                          />
                          <div>
                            <p>Email</p>
                            <p className="font-medium">
                              techworldrevolution23@gmail.com
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <FontAwesomeIcon
                            icon={faBuilding}
                            className="mt-1 mr-3 text-white"
                          />
                          <div>
                            <p>Zone d&apos;intervention</p>
                            <p className="font-medium">Douala et région</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold mb-4">
                          Service client
                        </h4>
                        <p>
                          Pour toute question relative aux mentions légales, à
                          la protection des données ou à nos services, notre
                          équipe est à votre disposition.
                        </p>
                        <div className="mt-6">
                          <Link
                            href="/contact"
                            className="inline-flex items-center bg-white hover:bg-gray-100 text-[#3b82f6] px-6 py-3 rounded-md font-bold transition duration-300"
                          >
                            Nous contacter
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="ml-3"
                            />
                          </Link>
                        </div>
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

export default MentionsLegalesPage;
