import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Qui sommes-nous ?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              TechWorld Revolution est spécialisée dans les installations électriques, 
              à la fois pour les courants forts et les courants faibles. Nous proposons 
              des solutions sur mesure pour répondre aux besoins de nos clients, qu'il 
              s'agisse de bâtiments résidentiels, commerciaux ou industriels.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Notre équipe est composée d'experts en électricité et en communication, 
              formés aux dernières technologies et normes en vigueur. Nous sommes à 
              l'écoute de nos clients pour comprendre leurs besoins spécifiques et 
              leur proposer des solutions adaptées à leur budget.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#3b82f6] mr-3 mt-1">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </span>
                <span className="text-gray-700">
                  Experts en courants forts et faibles
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3b82f6] mr-3 mt-1">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </span>
                <span className="text-gray-700">
                  Solutions sur mesure résidentielles et industrielles
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3b82f6] mr-3 mt-1">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </span>
                <span className="text-gray-700">
                  Matériaux de qualité supérieure garantis
                </span>
              </li>
            </ul>
            <div className="mt-12">
              <Link
                href="/apropos"
                className="inline-flex items-center text-[#3b82f6] font-medium hover:text-blue-700 bg-transparent border-none cursor-pointer"
              >
                En savoir plus {""}{" "}
                <FontAwesomeIcon className="pl-2" icon={faArrowRight} />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-electricite.jpg"
                alt="Équipe TechWorld Revolution"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6 text-white">
                <h3 className="text-xl font-bold">
                  Notre équipe à votre service
                </h3>
                <p className="text-sm">
                  Experts dédiés à l'excellence technique
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;