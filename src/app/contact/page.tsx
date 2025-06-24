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
      <header className="bg-[#1b314e] text-white py-6 pt-35">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Contactez-nous</h1>
          <p className="mt-2 text-gray-300">
            Nous sommes à votre écoute pour répondre à toutes vos questions
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
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#1b314e] mb-6">
                  Envoyez-nous un message
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#d32a2b] focus:border-[#d32a2b]"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#d32a2b] focus:border-[#d32a2b]"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#d32a2b] focus:border-[#d32a2b]"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#d32a2b] focus:border-[#d32a2b]"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#d32a2b] focus:border-[#d32a2b]"
                      required
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="services">Demande de services</option>
                      <option value="quote">Demande de devis</option>
                      <option value="support">Support technique</option>
                      <option value="partnership">Partenariat</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#d32a2b] focus:border-[#d32a2b]"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-[#d32a2b] hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium text-lg transition duration-300"
                    >
                      Envoyer le message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Coordonnées */}
            <div className="lg:w-1/2">
              <div className="bg-[#1b314e] text-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Nos coordonnées</h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-[#d32a2b] text-2xl mr-4 mt-1">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Adresse</h3>
                      <p className="text-gray-200">
                        Douala, Cameroun <br />
                        Carrefour Lycee de Makepe
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-[#d32a2b] text-2xl mr-4 mt-1">
                      <FontAwesomeIcon icon={faPhoneAlt} />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Téléphone</h3>
                      <p className="text-gray-200">+237 6 92 27 48 72</p>
                      <p className="text-gray-200">
                        +237 6 78 45 50 28 (Urgence)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-[#d32a2b] text-2xl mr-4 mt-1">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Email</h3>
                      <p className="text-gray-200 break-all">
                        contact@globalsolutionandservicessarl.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-[#d32a2b] text-2xl mr-4 mt-1">
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
                    </div>
                  </div>
                </div>

                {/* Carte */}
                <div className="mt-8 mb-8">
                  <h3 className="font-medium text-lg mb-4">Localisation</h3>
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-gray-500">
                    <iframe
                      title="Global Solution and Service localisation"
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
                      href="https://facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="w-10 h-10 rounded-full bg-white text-[#1b314e] flex items-center justify-center hover:bg-[#d32a2b] hover:text-white transition duration-300"
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                      className="w-10 h-10 rounded-full bg-white text-[#1b314e] flex items-center justify-center hover:bg-[#d32a2b] hover:text-white transition duration-300"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                      href="https://linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="w-10 h-10 rounded-full bg-white text-[#1b314e] flex items-center justify-center hover:bg-[#d32a2b] hover:text-white transition duration-300"
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a
                      href="https://wa.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className="w-10 h-10 rounded-full bg-white text-[#1b314e] flex items-center justify-center hover:bg-[#d32a2b] hover:text-white transition duration-300"
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
            <h2 className="text-3xl font-bold text-[#1b314e]">
              Questions fréquentes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Trouvez rapidement des réponses à vos questions les plus courantes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1b314e] mb-2">
                Quels sont vos délais de réponse ?
              </h3>
              <p className="text-gray-600">
                Nous nous engageons à répondre à toutes les demandes dans un
                délai de 24 heures ouvrables. Pour les urgences, veuillez
                utiliser notre numéro dédié.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1b314e] mb-2">
                Offrez-vous des services internationaux ?
              </h3>
              <p className="text-gray-600">
                Oui, nous proposons des services logistiques à
                l&#39;international. Contactez-nous pour discuter de vos besoins
                spécifiques et obtenir un devis personnalisé.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1b314e] mb-2">
                Comment puis-je suivre mon colis ?
              </h3>
              <p className="text-gray-600">
                Dès que votre colis est pris en charge, nous vous fournissons un
                numéro de suivi que vous pouvez utiliser sur notre plateforme en
                ligne pour connaître son statut en temps réel.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1b314e] mb-2">
                Quels modes de paiement acceptez-vous ?
              </h3>
              <p className="text-gray-600">
                Nous acceptons les paiements par virement bancaire, carte de
                crédit, Mobile Money et espèces. Tous les détails vous seront
                fournis dans votre devis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
