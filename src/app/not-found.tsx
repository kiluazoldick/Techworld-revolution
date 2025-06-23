// pages/404.tsx
import React from "react";
import Head from "next/head";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#1b314e] to-[#0d2038]">
      <Head>
        <title>Page en développement - Global Solution & Services</title>
        <meta
          name="description"
          content="Cette page est actuellement en développement"
        />
      </Head>

      {/* En-tête avec logo */}
      <header className="pt-8 px-6">
        <div className="max-w-7xl mx-auto">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <div className="bg-[#d32a2b] w-10 h-10 rounded-md flex items-center justify-center text-white text-xl font-bold mr-2">
                G
              </div>
              <h1 className="text-white text-xl font-bold">
                <span className="text-[#d32a2b]">G</span>lobal
                <span className="text-[#d32a2b]">S</span>olution &
                <span className="text-[#d32a2b]">S</span>ervices
              </h1>
            </div>
          </Link>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl">
          {/* Animation de construction */}
          <div className="mb-10 flex justify-center">
            <div className="relative">
              <div className="w-40 h-40 bg-[#d32a2b] bg-opacity-20 rounded-full flex items-center justify-center">
                <div className="w-24 h-24 bg-[#d32a2b] bg-opacity-30 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#d32a2b] rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white animate-pulse"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Icônes de construction */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg">
                <svg
                  className="w-8 h-8 text-[#d32a2b]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            404
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Page en cours de développement
          </h2>

          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Notre équipe travaille activement à la création de cette page pour
            vous offrir une expérience complète. Veuillez revenir plus tard pour
            découvrir son contenu finalisé. En attendant, nous vous invitons à
            explorer les autres sections de notre site qui sont déjà
            disponibles.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/"
              className="bg-[#d32a2b] hover:bg-red-700 text-white font-medium py-3 px-8 rounded-md transition duration-300 transform hover:-translate-y-1"
            >
              Retour à l&#39;accueil
            </Link>

            <Link
              href="/contact"
              passHref
              className="bg-white hover:bg-gray-100 text-[#1b314e] font-medium py-3 px-8 rounded-md transition duration-300 transform hover:-translate-y-1"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </main>

      {/* Pied de page */}
      <footer className="py-6 px-4 text-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} Global Solution & Services SARL. Tous
          droits réservés.
        </p>
      </footer>
    </div>
  );
};

export default NotFoundPage;
