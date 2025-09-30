import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-gray-900 text-white py-6 pt-35">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Contactez-nous</h1>
          <p className="mt-2 text-gray-300">
            Notre équipe d&apos;experts est à votre disposition pour tous vos
            projets électriques et technologiques
          </p>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                {/*eslint-disable-next-line @next/next/no-html-link-for-pages */}
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
              <li className="text-gray-500">Contact</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Formulaire de contact */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Demande de devis ou information
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#3b82f6] focus:border-[#3b82f6]"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Entreprise
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#3b82f6] focus:border-[#3b82f6]"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#3b82f6] focus:border-[#3b82f6]"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#3b82f6] focus:border-[#3b82f6]"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Type de projet *
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#3b82f6] focus:border-[#3b82f6]"
                      required
                    >
                      <option value="">Sélectionnez un type de projet</option>
                      <option value="electricite-batiment">
                        Électricité Bâtiment
                      </option>
                      <option value="electricite-industrielle">
                        Électricité Industrielle
                      </option>
                      <option value="reseau-informatique">
                        Réseau Informatique
                      </option>
                      <option value="domotique">
                        Domotique & Automatisation
                      </option>
                      <option value="surveillance">
                        Vidéosurveillance & Sécurité
                      </option>
                      <option value="solaire">
                        Énergie Solaire & Renouvelable
                      </option>
                      <option value="maintenance">
                        Maintenance & Dépannage
                      </option>
                      <option value="etude">Étude & Conseil Technique</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Budget estimé (optionnel)
                    </label>
                    <select
                      id="budget"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#3b82f6] focus:border-[#3b82f6]"
                    >
                      <option value="">Sélectionnez une fourchette</option>
                      <option value="0-500k">0 - 500 000 FCFA</option>
                      <option value="500k-2m">500 000 - 2 000 000 FCFA</option>
                      <option value="2m-5m">2 000 000 - 5 000 000 FCFA</option>
                      <option value="5m+">Plus de 5 000 000 FCFA</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Description du projet *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#3b82f6] focus:border-[#3b82f6]"
                      placeholder="Décrivez votre projet en détail : surface, type de bâtiment, besoins spécifiques..."
                      required
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-[#3b82f6] hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium text-lg transition duration-300"
                    >
                      Demander un devis gratuit
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Coordonnées */}
            <div className="lg:w-1/2">
              <div className="bg-gray-900 text-white p-8 rounded-xl shadow-lg border border-gray-700">
                <h2 className="text-2xl font-bold mb-6">Nos coordonnées</h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-[#3b82f6] text-2xl mr-4 mt-1">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Adresse</h3>
                      <p className="text-gray-200">Douala, Cameroun</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-[#3b82f6] text-2xl mr-4 mt-1">
                      <FontAwesomeIcon icon={faPhoneAlt} />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Téléphone</h3>
                      <p className="text-gray-200">+237 658 298 002</p>
                      <p className="text-gray-200">+237 682 840 911</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-[#3b82f6] text-2xl mr-4 mt-1">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Email</h3>
                      <p className="text-gray-200 break-all">
                        techworldrevolution23@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-[#3b82f6] text-2xl mr-4 mt-1">
                      <FontAwesomeIcon icon={faClock} />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">
                        Heures d&#39;ouverture
                      </h3>
                      <p className="text-gray-200">
                        Lundi - Vendredi: 8h - 18h
                      </p>
                      <p className="text-gray-200">Samedi: 9h - 13h</p>
                      <p className="text-gray-200 text-sm mt-1">
                        Service d&apos;urgence disponible 24h/24
                      </p>
                    </div>
                  </div>
                </div>

                {/* Carte */}
                <div className="mt-8 mb-8">
                  <h3 className="font-medium text-lg mb-4">Localisation</h3>
                  <div className="bg-gray-200 border-2 border-dashed border-gray-600 rounded-xl w-full h-64 flex items-center justify-center text-gray-500">
                    <iframe
                      title="TechWorld Revolution localisation"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31838.4257399989!2d9.70205691083984!3d4.060501400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d8a7aadbb17%3A0x3d6a0f6048e759aa!2sLyc%C3%A9e%20de%20Makepe!5e0!3m2!1sfr!2scm!4v1749055023555!5m2!1sfr!2scm"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>

                {/* Réseaux sociaux */}
                <div className="mt-10">
                  <h3 className="font-medium text-lg mb-4">Suivez-nous</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/profile.php?id=61553668943195"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-[#3b82f6] hover:text-white transition duration-300"
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                      className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-[#3b82f6] hover:text-white transition duration-300"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                      href="https://linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-[#3b82f6] hover:text-white transition duration-300"
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a
                      href="https://wa.me/237658298002"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-[#3b82f6] hover:text-white transition duration-300"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Questions fréquentes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Trouvez rapidement des réponses à vos questions sur nos services
              électriques et technologiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Quels sont vos délais d&apos;intervention ?
              </h3>
              <p className="text-gray-600">
                Pour les urgences électriques, nous intervenons sous 2 heures.
                Pour les projets sur mesure, nous établissons un planning
                détaillé après étude technique de votre projet.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Proposez-vous des solutions domotiques ?
              </h3>
              <p className="text-gray-600">
                Oui, nous installons des systèmes domotiques complets :
                éclairage intelligent, gestion du chauffage, sécurité connectée
                et contrôle à distance de vos équipements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Êtes-vous certifiés pour les installations solaires ?
              </h3>
              <p className="text-gray-600">
                Notre équipe est formée et certifiée pour l&apos;installation de
                panneaux solaires photovoltaïques. Nous garantissons des
                installations aux normes avec un rendement optimal.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Quelle est votre zone d&apos;intervention ?
              </h3>
              <p className="text-gray-600">
                Nous intervenons principalement dans la région de Douala et ses
                environs. Pour les projets industriels ou complexes, nous
                pouvons nous déplacer sur l&apos;ensemble du territoire
                camerounais.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Offrez-vous des services de maintenance ?
              </h3>
              <p className="text-gray-600">
                Oui, nous proposons des contrats de maintenance préventive et
                corrective pour tous types d&apos;installations électriques et
                systèmes technologiques.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Travaillez-vous avec des matériaux de qualité ?
              </h3>
              <p className="text-gray-600">
                Nous utilisons exclusivement des matériaux de qualité
                supérieure, conformes aux normes en vigueur, pour garantir la
                sécurité et la durabilité de vos installations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
