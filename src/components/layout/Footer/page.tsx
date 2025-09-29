import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Colonne 1: Logo et description */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              <span className="text-[#3b82f6]">T</span>echworld
              <span className="text-black">R</span>evolution
            </h3>
            <p className="text-gray-600 mb-6">
              Votre partenaire de confiance pour l'électricité bâtiment, industrielle, 
              réseaux informatiques, domotique et énergies renouvelables.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61553668943195"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#3b82f6] text-xl transition duration-300"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#3b82f6] text-xl transition duration-300"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#3b82f6] text-xl transition duration-300"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#3b82f6] text-xl transition duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          {/* Colonne 2: Liens rapides */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-black">Liens rapides</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-[#3b82f6] transition duration-300 block"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="/apropos"
                  className="text-gray-600 hover:text-[#3b82f6] transition duration-300 block"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="/nos-services"
                  className="text-gray-600 hover:text-[#3b82f6] transition duration-300 block"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/nos-realisations"
                  className="text-gray-600 hover:text-[#3b82f6] transition duration-300 block"
                >
                  Réalisations
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 hover:text-[#3b82f6] transition duration-300 block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3: Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-black">Nos services</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/nos-services/electricite-batiment"
                  className="text-gray-600 hover:text-[#3b82f6] transition duration-300 block"
                >
                  Électricité Bâtiment
                </a>
              </li>
              <li>
                <a
                  href="/nos-services/electricite-industrielle"
                  className="text-gray-600 hover:text-[#3b82f6] transition duration-300 block"
                >
                  Électricité Industrielle
                </a>
              </li>
              <li>
                <a
                  href="/nos-services/reseau-informatique"
                  className="text-gray-600 hover:text-[#3b82f6] transition duration-300 block"
                >
                  Réseau Informatique
                </a>
              </li>
              <li>
                <a
                  href="/nos-services/domotique-electronique"
                  className="text-gray-600 hover:text-[#3b82f6] transition duration-300 block"
                >
                  Domotique & Électronique
                </a>
              </li>
              <li>
                <a
                  href="/nos-services/energie-renouvelable"
                  className="text-gray-600 hover:text-[#3b82f6] transition duration-300 block"
                >
                  Énergie Renouvelable
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4: Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-black">Newsletter</h4>
            <p className="text-gray-600 mb-4">
              Abonnez-vous pour recevoir nos dernières actualités et offres.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-800 bg-gray-100 border border-gray-300"
              />
              <button
                type="submit"
                className="bg-[#3b82f6] hover:bg-blue-700 px-4 py-2 rounded-r-md transition duration-300"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="text-white" />
              </button>
            </form>
          </div>
        </div>

        {/* Section de copyright */}
        <div className="border-t border-gray-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2025 TechWorld Revolution. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="/mention-legale"
              className="text-gray-600 hover:text-[#3b82f6] text-sm transition duration-300"
            >
              Mentions légales
            </a>
            <a
              href="/politique-de-confidentialite"
              className="text-gray-600 hover:text-[#3b82f6] text-sm transition duration-300"
            >
              Politique de confidentialité
            </a>
            <a
              href="/conditions-generale"
              className="text-gray-600 hover:text-[#3b82f6] text-sm transition duration-300"
            >
              Conditions générales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;