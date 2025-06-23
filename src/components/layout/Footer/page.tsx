// components/Footer.tsx
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
    <footer className="bg-[#1b314e] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Colonne 1: Logo et description */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              <span className="text-[#d32a2b]">G</span>lobal
              <span className="text-[#d32a2b]">S</span>olution &amp;&nbsp;
              <span className="text-[#d32a2b]">S</span>ervices
            </h3>
            <p className="text-gray-300 mb-6">
              Votre partenaire logistique pour des solutions intégrées,
              efficaces et économiques.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#d32a2b] text-xl transition duration-300"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#d32a2b] text-xl transition duration-300"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://linkeding.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#d32a2b] text-xl transition duration-300"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#d32a2b] text-xl transition duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          {/* Colonne 2: Liens rapides */}
          <div>
            <h4 className="font-bold text-lg mb-6">Liens rapides</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href=""
                  className="text-gray-300 hover:text-[#d32a2b] transition duration-300 block"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="/apropos"
                  className="text-gray-300 hover:text-[#d32a2b] transition duration-300 block"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="/nos-services"
                  className="text-gray-300 hover:text-[#d32a2b] transition duration-300 block"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/nos-realisations"
                  className="text-gray-300 hover:text-[#d32a2b] transition duration-300 block"
                >
                  Réalisations
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-[#d32a2b] transition duration-300 block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3: Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Nos services</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/nos-services/logistique-et-transport"
                  className="text-gray-300 hover:text-[#d32a2b] transition duration-300 block"
                >
                  Logistique & Transport
                </a>
              </li>
              <li>
                <a
                  href="/nos-services/construction-et-btp"
                  className="text-gray-300 hover:text-[#d32a2b] transition duration-300 block"
                >
                  Construction & BTP
                </a>
              </li>
              <li>
                <a
                  href="/nos-services/maintenance-et-ingenierie-industrielle"
                  className="text-gray-300 hover:text-[#d32a2b] transition duration-300 block"
                >
                  Maintenance & Ingénierie Industrielle
                </a>
              </li>
              <li>
                <a
                  href="/nos-services/chaudronnerie-et-metallerie"
                  className="text-gray-300 hover:text-[#d32a2b] transition duration-300 block"
                >
                  Chaudronnerie & Métallerie
                </a>
              </li>
              <li>
                <a
                  href="/nos-services/energie-et-systemes-electriques"
                  className="text-gray-300 hover:text-[#d32a2b] transition duration-300 block"
                >
                  Énergie & Systèmes électriques
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4: Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Abonnez-vous à notre newsletter pour recevoir nos dernières
              actualités et offres.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-800 bg-white"
              />
              <button
                type="submit"
                className="bg-[#d32a2b] hover:bg-red-700 px-4 py-2 rounded-r-md transition duration-300"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="text-white" />
              </button>
            </form>
          </div>
        </div>

        {/* Section de copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2025 Global Solution and Services SARL. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="/mention-legale"
              className="text-gray-300 hover:text-[#d32a2b] text-sm transition duration-300"
            >
              Mentions légales
            </a>
            <a
              href="/politique-de-confidentialite"
              className="text-gray-300 hover:text-[#d32a2b] text-sm transition duration-300"
            >
              Politique de confidentialité
            </a>
            <a
              href="/conditions-generale"
              className="text-gray-300 hover:text-[#d32a2b] text-sm transition duration-300"
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
