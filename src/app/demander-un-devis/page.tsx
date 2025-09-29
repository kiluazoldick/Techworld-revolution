"use client";

import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileInvoice,
  faBolt,
  faNetworkWired,
  faHome,
  faSolarPanel,
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
      <header className="bg-gray-900 text-white py-12 pt-35">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <FontAwesomeIcon
            icon={faFileInvoice}
            className="text-5xl text-[#3b82f6] mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Demander un devis
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Obtenez une estimation précise pour vos projets électriques et technologiques
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
                <a href="/" className="text-[#3b82f6] hover:underline">
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
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="p-6 bg-gray-900 text-white">
                  <h2 className="text-2xl font-bold">Formulaire de demande de devis</h2>
                  <p>
                    Décrivez votre projet en détail pour obtenir un devis personnalisé
                  </p>
                </div>

                {/* Intégration Google Forms */}
                <div className="p-1">
                  <iframe
                    title="Formulaire de demande de devis TechWorld Revolution"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSe-QtnAxQgM0CCbD2HQ_pGjRqO11o3-f8JYdYNs_VLdMNX6-A/viewform?embedded=true"
                    width="100%"
                    height="877"
                    style={{ border: 0, minHeight: '800px' }}
                  >
                    Chargement…
                  </iframe>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 border-l-4 border-[#3b82f6] p-4 rounded">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-[#3b82f6]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      <strong>Note importante :</strong> Tous les champs marqués
                      d&#39;un astérisque (*) sont obligatoires. Plus votre description 
                      sera précise, plus notre devis sera exact et adapté à vos besoins.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Informations complémentaires */}
            <div className="lg:w-1/3">
              <div className="bg-gray-50 rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  <FontAwesomeIcon
                    icon={faBolt}
                    className="mr-2 text-[#3b82f6]"
                  />
                  Comment obtenir un devis précis
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#3b82f6] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Type de projet
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Précisez s'il s'agit d'une installation neuve, rénovation, 
                        dépannage ou maintenance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#3b82f6] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Surface et localisation
                      </h4>
                      <p className="text-gray-600 text-sm">
                        <FontAwesomeIcon
                          icon={faHome}
                          className="mr-1 text-[#3b82f6]"
                        />
                        Indiquez la surface à équiper et l'adresse exacte du chantier.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#3b82f6] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Spécifications techniques
                      </h4>
                      <p className="text-gray-600 text-sm">
                        <FontAwesomeIcon
                          icon={faNetworkWired}
                          className="mr-1 text-[#3b82f6]"
                        />
                        Courants forts/faibles, puissance nécessaire, équipements spécifiques.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#3b82f6] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Délais souhaités
                      </h4>
                      <p className="text-gray-600 text-sm">
                        <FontAwesomeIcon
                          icon={faCalendarCheck}
                          className="mr-1 text-[#3b82f6]"
                        />
                        Date de début souhaitée et contraintes de planning.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Pourquoi choisir TechWorld Revolution ?
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
                      <span>Expertise certifiée en électricité et nouvelles technologies</span>
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
                      <span>Matériaux de qualité supérieure garantis</span>
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
                      <span>Respect strict des normes NFC 15-100 et réglementations</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Besoin d&#39;aide technique ?
                </h3>
                <p className="text-gray-600 mb-4">
                  Notre équipe d'experts est disponible pour vous conseiller sur votre projet.
                </p>
                <div className="flex items-center text-[#3b82f6] font-medium">
                  <svg
                    className="h-5 w-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +237 658 298 002
                </div>
                <div className="flex items-center text-gray-900 mt-2">
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
                  techworldrevolution23@gmail.com
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <FontAwesomeIcon icon={faSolarPanel} className="mr-2 text-[#3b82f6]" />
                  <strong>Service d'urgence :</strong> Disponible 24h/24 pour les dépannages électriques
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
            <h2 className="text-3xl font-bold text-gray-900">
              Questions fréquentes sur les devis
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Combien de temps pour recevoir mon devis ?
              </h3>
              <p className="text-gray-600">
                Nous vous fournissons un devis personnalisé dans un délai de 24 heures 
                ouvrées après réception de votre demande complète. Pour les projets 
                complexes nécessitant une étude technique, le délai peut être de 48 heures.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Les devis sont-ils payants ?
              </h3>
              <p className="text-gray-600">
                Non, tous nos devis sont entièrement gratuits et sans engagement. 
                Nous vous fournissons une estimation détaillée incluant la main d'œuvre, 
                les matériaux et les délais de réalisation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Proposez-vous une visite technique ?
              </h3>
              <p className="text-gray-600">
                Oui, pour les projets importants nous proposons une visite technique 
                gratuite sur site afin d'établir un devis précis tenant compte des 
                spécificités de votre installation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quelle est la durée de validité d&#39;un devis ?
              </h3>
              <p className="text-gray-600">
                Nos devis sont valables 30 jours à compter de la date d'émission. 
                Passé ce délai, les tarifs peuvent être révisés en fonction des 
                fluctuations du marché des matériaux électriques.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Travaillez-vous avec des matériaux de qualité ?
              </h3>
              <p className="text-gray-600">
                Absolument. Nous utilisons exclusivement des matériaux de qualité 
                supérieure, conformes aux normes en vigueur. Tous nos équipements 
                sont garantis et proviennent de fournisseurs reconnus.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Êtes-vous assurés et certifiés ?
              </h3>
              <p className="text-gray-600">
                Oui, notre entreprise est assurée en responsabilité civile professionnelle 
                et nos techniciens sont certifiés. Nous respectons scrupuleusement 
                les normes NFC 15-100 pour toutes nos installations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemanderUnDevisPage;