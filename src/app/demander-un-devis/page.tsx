"use client";

import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileInvoice,
  faTruck,
  faBoxes,
  faGlobeAmericas,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

const DemanderUnDevisPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-[#1b314e] text-white py-12 pt-35">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <FontAwesomeIcon
            icon={faFileInvoice}
            className="text-5xl text-[#d32a2b] mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Demander un devis
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Remplissez notre formulaire pour obtenir une estimation précise de
            vos besoins logistiques
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
              <li className="text-gray-500">Demande de devis</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Formulaire Google Forms */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 bg-[#1b314e] text-white">
                  <h2 className="text-2xl font-bold">Formulaire de demande</h2>
                  <p>
                    Remplissez tous les champs pour obtenir un devis
                    personnalisé
                  </p>
                </div>

                {/* Intégration Google Forms - CORRECTIONS APPLIQUÉES ICI */}
                <div className="p-1">
                  <iframe
                    title="Formulaire de demande de devis"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSe-QtnAxQgM0CCbD2HQ_pGjRqO11o3-f8JYdYNs_VLdMNX6-A/viewform?embedded=true"
                    width="640"
                    height="877"
                    style={{ border: 0 }}
                  >
                    Chargement…
                  </iframe>
                </div>
              </div>

              <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Note importante :</strong> Tous les champs marqués
                      d&#39;un astérisque (*) sont obligatoires. Plus vos
                      informations seront précises, plus notre devis sera exact.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Informations complémentaires */}
            <div className="lg:w-1/3">
              <div className="bg-[#f8f9fa] rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-[#1b314e] mb-6">
                  <FontAwesomeIcon
                    icon={faTruck}
                    className="mr-2 text-[#d32a2b]"
                  />
                  Comment obtenir un devis précis
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#1b314e] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-[#1b314e]">
                        Détails de l&#39;expédition
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Précisez le poids, les dimensions et la nature de vos
                        marchandises.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#1b314e] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-[#1b314e]">
                        Origine et destination
                      </h4>
                      <p className="text-gray-600 text-sm">
                        <FontAwesomeIcon
                          icon={faGlobeAmericas}
                          className="mr-1 text-[#d32a2b]"
                        />
                        Indiquez les adresses exactes de prise en charge et de
                        livraison.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#1b314e] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-[#1b314e]">
                        Type de service
                      </h4>
                      <p className="text-gray-600 text-sm">
                        <FontAwesomeIcon
                          icon={faBoxes}
                          className="mr-1 text-[#d32a2b]"
                        />
                        Standard, express, frigorifique - précisez vos besoins.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#1b314e] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium text-[#1b314e]">
                        Délais souhaités
                      </h4>
                      <p className="text-gray-600 text-sm">
                        <FontAwesomeIcon
                          icon={faCalendarCheck}
                          className="mr-1 text-[#d32a2b]"
                        />
                        Dates de ramassage et de livraison attendues.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-bold text-[#1b314e] mb-3">
                    Pourquoi choisir nos services ?
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Devis personnalisés sous 24h</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Tarifs compétitifs sans frais cachés</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Suivi en temps réel de vos envois</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Assurance incluse pour tous vos envois</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-[#1b314e] mb-4">
                  Besoin d&#39;aide ?
                </h3>
                <p className="text-gray-600 mb-4">
                  Notre équipe est disponible pour vous guider dans votre
                  demande de devis.
                </p>
                <div className="flex items-center text-[#d32a2b] font-medium">
                  <svg
                    className="h-5 w-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +237 6 92 27 48 72
                </div>
                <div className="flex items-center text-[#1b314e] mt-2">
                  <svg
                    className="h-5 w-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  contact@globalsolutionandservicessarl.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1b314e]">
              Questions fréquentes sur les devis
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1b314e] mb-3">
                Combien de temps pour recevoir mon devis ?
              </h3>
              <p className="text-gray-600">
                Nous nous engageons à vous fournir un devis personnalisé dans un
                délai de 24 heures ouvrées après réception de votre demande
                complète. Pour les demandes urgentes, contactez-nous directement
                par téléphone.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1b314e] mb-3">
                Les devis sont-ils payants ?
              </h3>
              <p className="text-gray-600">
                Non, tous nos devis sont entièrement gratuits et sans
                engagement. Nous vous fournissons une estimation détaillée des
                coûts pour vos projets logistiques sans frais préalables.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1b314e] mb-3">
                Puis-je modifier ma demande après soumission ?
              </h3>
              <p className="text-gray-600">
                Oui, vous pouvez nous contacter à tout moment pour modifier les
                paramètres de votre demande. Nous adapterons votre devis en
                conséquence dans les plus brefs délais.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1b314e] mb-3">
                Quelle est la durée de validité d&#39;un devis ?
              </h3>
              <p className="text-gray-600">
                Nos devis sont valables 30 jours à compter de la date
                d&#39;émission. Passé ce délai, les tarifs sont susceptibles
                d&#39;être révisés en fonction des fluctuations du marché des
                transports.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemanderUnDevisPage;
