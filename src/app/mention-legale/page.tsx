"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faScaleBalanced,
  faFileContract,
  faUserTie,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const MentionsLegalesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-[#1b314e] text-white py-12 pt-35">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <FontAwesomeIcon
            icon={faScaleBalanced}
            className="text-5xl text-[#d32a2b] mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mentions Légales
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Informations juridiques relatives à Global Solution & Services SARL
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
              <li className="text-gray-500">Mentions légales</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 bg-[#1b314e] text-white">
              <h2 className="text-2xl font-bold">Informations légales</h2>
              <p>Conformément aux dispositions légales en vigueur</p>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Informations de l'entreprise */}
                <div className="bg-[#f8f9fa] p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-[#1b314e] mb-6 flex items-center">
                    <FontAwesomeIcon
                      icon={faBuilding}
                      className="mr-3 text-[#d32a2b]"
                    />
                    Société
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#1b314e]">
                        Dénomination sociale
                      </h4>
                      <p className="text-black">
                        GLOBAL SOLUTION & SERVICES SARL
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1b314e]">
                        Forme juridique
                      </h4>
                      <p className="text-black">
                        Société à responsabilité limitée pluripersonnelle (SARL)
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1b314e]">
                        Capital social
                      </h4>
                      <p className="text-black">900 000 Francs CFA</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1b314e]">RCCM</h4>
                      <p className="text-black">CM-DLA-01-2023-B12-04266</p>
                      <p className="text-sm text-gray-600">
                        Modification enregistrée sous CM-DE-CNR + 2024-M-02728
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1b314e]">
                        Date d&#39;immatriculation
                      </h4>
                      <p className="text-black">
                        2023 (modifiée le 14/10/2024)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Activités */}
                <div className="bg-[#f8f9fa] p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-[#1b314e] mb-6 flex items-center">
                    <FontAwesomeIcon
                      icon={faFileContract}
                      className="mr-3 text-[#d32a2b]"
                    />
                    Activités
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#1b314e]">
                        Activités principales
                      </h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li className="text-black">
                          Construction de bâtiments complets
                        </li>
                        <li className="text-black">
                          Prestations de services et commerce général
                        </li>
                        <li className="text-black">Négoce, import-export</li>
                        <li className="text-black">
                          Représentation commerciale et distribution
                        </li>
                        <li className="text-black">Conseils et formation</li>
                        <li className="text-black">
                          Transport et logistique générale
                        </li>
                        <li className="text-black">
                          Vente d&#39;agrégats de construction
                        </li>
                        <li className="text-black">
                          Bâtiments et travaux publics
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1b314e]">
                        Activités complémentaires
                      </h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li className="text-black">
                          Maintenances industrielles
                        </li>
                        <li className="text-black">
                          Chaudronnerie, tuyauterie, métallurgie
                        </li>
                        <li className="text-black">
                          Formation professionnelle
                        </li>
                        <li className="text-black">
                          Automatisme et programmation industrielle
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dirigeants et Associés */}
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-[#1b314e] mb-6 flex items-center">
                  <FontAwesomeIcon
                    icon={faUserTie}
                    className="mr-3 text-[#d32a2b]"
                  />
                  Dirigeants et Associés
                </h3>

                <div className="bg-[#f8f9fa] p-6 rounded-lg border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-[#1b314e] mb-3">
                        Gérant
                      </h4>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="font-medium text-black">
                          OUM TONYE BERTRAND
                        </p>
                        <p className="text-sm text-gray-600">
                          Né le 19/08/1989 à NTOULENG
                        </p>
                        <p className="text-sm text-gray-600">
                          Nationalité: Camerounaise
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1b314e] mb-3">
                        Associés
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <p className="font-medium text-black">
                            NGO NOWED BEBGA ANNE JENNY
                          </p>
                          <p className="text-sm text-gray-600">
                            Née le 17/09/2004 à BOT MAKAK
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <p className="font-medium text-black">
                            NGO CHOMA INAYA
                          </p>
                          <p className="text-sm text-gray-600">
                            Née le 15/03/2015 à DOUALA
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <p className="font-medium text-black">OUM NOLAN</p>
                          <p className="text-sm text-gray-600">
                            Né le 06/12/2016 à DOUALA
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <p className="font-medium text-black">
                            OUM ANDRY BRYAN LEZAIN
                          </p>
                          <p className="text-sm text-gray-600">
                            Né le 12/05/2020 à DOUALA
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hébergement et publication */}
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-[#1b314e] mb-6">
                  Hébergement et publication
                </h3>

                <div className="bg-[#f8f9fa] p-6 rounded-lg border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-[#1b314e] mb-3">
                        Éditeur du site
                      </h4>
                      <p className="text-black">
                        GLOBAL SOLUTION & SERVICES SARL
                      </p>
                      <p className="mt-2 text-black">
                        Directeur de la publication : OUM TONYE BERTRAND
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1b314e] mb-3">
                        Hébergeur
                      </h4>
                      <p className="text-black">Vercel Inc.</p>
                      <p className="mt-1 text-black">340 S Lemon Ave #4133</p>
                      <p className="text-black">Walnut, CA 91789</p>
                      <p className="mt-1 text-black">
                        Site web:{" "}
                        <a
                          href="https://vercel.com"
                          className="text-[#d32a2b] hover:underline"
                        >
                          https://vercel.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Propriété intellectuelle */}
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-[#1b314e] mb-6">
                  Propriété intellectuelle
                </h3>

                <div className="bg-[#f8f9fa] p-6 rounded-lg border border-gray-200">
                  <p className="text-black">
                    L&#39;ensemble des éléments accessibles sur le site (textes,
                    graphismes, images, logos, icônes, sons, logiciels, etc.)
                    reste la propriété exclusive de GLOBAL SOLUTION & SERVICES
                    SARL ou de ses partenaires. Toute reproduction,
                    représentation, modification, publication, adaptation de
                    tout ou partie des éléments du site, quel que soit le moyen
                    ou le procédé utilisé, est interdite sans l&#39;autorisation
                    écrite préalable de GLOBAL SOLUTION & SERVICES SARL.
                  </p>
                </div>
              </div>

              {/* Protection des données */}
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-[#1b314e] mb-6">
                  Protection des données personnelles
                </h3>

                <div className="bg-[#f8f9fa] p-6 rounded-lg border border-gray-200">
                  <p className="text-black">
                    Conformément à la loi n°2010/012 du 21 décembre 2010
                    relative à la protection des données à caractère personnel,
                    vous disposez d&apos;un droit d&apos;accès, de rectification
                    et de suppression des données vous concernant. Vous pouvez
                    exercer ce droit en nous contactant à l&apos;adresse
                    suivante :{" "}
                    <a
                      href="mailto:contact@globalsolutionandservicessarl.com"
                      className="text-[#d32a2b] hover:underline ml-1"
                    >
                      contact@globalsolutionandservicessarl.com
                    </a>
                  </p>
                  <p className="mt-4 text-black">
                    Les données collectées sur ce site sont exclusivement
                    destinées à un usage interne et ne seront en aucun cas
                    cédées ou vendues à des tiers.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-[#1b314e] mb-6 flex items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="mr-3 text-[#d32a2b]"
                  />
                  Contact
                </h3>

                <div className="bg-[#1b314e] text-white p-8 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold mb-4">Coordonnées</h4>

                      <div className="flex items-start mb-4">
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="mt-1 mr-3 text-[#d32a2b]"
                        />
                        <div>
                          <p>Téléphone</p>
                          <p className="font-medium">+237 6 92 27 48 72</p>
                        </div>
                      </div>

                      <div className="flex items-start mb-4">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="mt-1 mr-3 text-[#d32a2b]"
                        />
                        <div>
                          <p>Email</p>
                          <p className="font-medium">
                            contact@globalsolutionandservicessarl.com
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <FontAwesomeIcon
                          icon={faBuilding}
                          className="mt-1 mr-3 text-[#d32a2b]"
                        />
                        <div>
                          <p>Siège social</p>
                          <p className="font-medium">Douala, Cameroun</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-4">
                        Service juridique
                      </h4>
                      <p>
                        Pour toute question relative aux mentions légales ou à
                        la protection des données, veuillez contacter notre
                        service juridique à l&apos;adresse email suivante :
                      </p>
                      <p className="mt-3">
                        <a
                          href="mailto:juridique@globalsolutionandservicessarl.com"
                          className="font-medium text-[#d32a2b] hover:underline"
                        >
                          contact@globalsolutionandservicessarl.com
                        </a>
                      </p>
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

export default MentionsLegalesPage;
