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

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1b314e] mb-4">
            Contactez-nous
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos
            questions et discuter de vos besoins logistiques.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#d32a2b] focus:border-[#d32a2b]"
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
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#d32a2b] focus:border-[#d32a2b]"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#d32a2b] focus:border-[#d32a2b]"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#d32a2b] focus:border-[#d32a2b]"
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

          <div className="lg:w-1/2">
            <div className="bg-gray-50 p-8 rounded-xl h-full">
              <h3 className="text-xl font-bold text-[#1b314e] mb-6">
                Nos coordonnées
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-[#d32a2b] text-2xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1b314e]">Adresse</h4>
                    <p className="text-gray-600">
                      Douala, Cameroun Carrefour Lycee de Makepe
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 text-[#d32a2b] text-2xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faPhoneAlt} />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1b314e]">Téléphone</h4>
                    <p className="text-gray-600">+237 6 92 27 48 72</p>
                    <p className="text-gray-600">
                      +237 6 78 45 50 28 (Urgence)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 text-[#d32a2b] text-2xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1b314e]">Email</h4>
                    <p className="text-gray-600">
                      contact@globalsolutionandservicessarl.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 text-[#d32a2b] text-2xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faClock} />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1b314e]">
                      Heures d&#39;ouverture
                    </h4>
                    <p className="text-gray-600">Lundi - Vendredi: 8h - 18h</p>
                    <p className="text-gray-600">Samedi: 9h - 13h</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="font-medium text-[#1b314e] mb-4">Suivez-nous</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-full bg-[#1b314e] text-white flex items-center justify-center hover:bg-[#d32a2b] transition duration-300"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="w-10 h-10 rounded-full bg-[#1b314e] text-white flex items-center justify-center hover:bg-[#d32a2b] transition duration-300"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-full bg-[#1b314e] text-white flex items-center justify-center hover:bg-[#d32a2b] transition duration-300"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="w-10 h-10 rounded-full bg-[#1b314e] text-white flex items-center justify-center hover:bg-[#d32a2b] transition duration-300"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
