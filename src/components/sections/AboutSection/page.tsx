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
            <h2 className="text-3xl font-bold text-[#1b314e] mb-6">
              Qui sommes-nous ?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Global Solution and Services SARL est un acteur stratégique dans
              le transport de matières premières pour cimenteries sur
              l&apos;ensemble du territoire camerounais, avec une expertise
              logistique éprouvée.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Grâce à notre réseau national solide et notre capacité de
              livraison à grande échelle, nous sommes devenus le partenaire
              privilégié des cimenteries. Notre service international couvre
              également le transport de conteneurs, bois et autres matériaux.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#d32a2b] mr-3 mt-1">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </span>
                <span className="text-gray-700">
                  Équipe d&#39;experts avec plus de 3 ans d&#39;expérience
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d32a2b] mr-3 mt-1">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </span>
                <span className="text-gray-700">
                  Réseau de partenaires dans 5+ pays
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d32a2b] mr-3 mt-1">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </span>
                <span className="text-gray-700">
                  Solutions personnalisées pour chaque client
                </span>
              </li>
            </ul>
            <div className="mt-12">
              <Link
                href="/apropos"
                className="inline-flex items-center text-[#d32a2b] font-medium hover:text-red-700 bg-transparent border-none cursor-pointer"
              >
                En savoir plus {""}{" "}
                <FontAwesomeIcon className="pl-2" icon={faArrowRight} />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/Nature Walk Photos - Download Free High-Quality Pictures _ Freepik.jpg"
                alt="Équipe logistique"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1b314e] to-transparent p-6 text-white">
                <h3 className="text-xl font-bold">
                  Notre équipe à votre service
                </h3>
                <p className="text-sm">
                  Experts dédiés à l&#39;excellence logistique
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
