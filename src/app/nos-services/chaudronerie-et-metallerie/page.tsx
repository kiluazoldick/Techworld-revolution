import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndustry, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function ChaudronerieEtMetalleriePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/images/services/chaudronnerie.jpg" // Mets ton image dans public/images/services
          alt="Chaudronnerie et Métallerie"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1b314e]/70 flex flex-col justify-center items-center text-center text-white px-6">
          <FontAwesomeIcon
            icon={faIndustry}
            className="text-4xl mb-4 text-[#d32a2b]"
          />
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Chaudronnerie & Métallerie
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Fabrication sur mesure, précision et robustesse pour vos besoins
            industriels.
          </p>
        </div>
      </div>

      {/* Contenu détaillé */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-[#1b314e] mb-6">
          Des structures métalliques fiables et durables
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Chez <strong>Global Solution & Services SARL</strong>, notre
          département chaudronnerie et métallerie conçoit, fabrique et répare
          des pièces métalliques pour les secteurs industriel, énergétique et de
          la construction. Notre savoir-faire et nos équipements modernes nous
          permettent de répondre aux exigences les plus strictes en matière de
          qualité, de sécurité et de précision.
        </p>

        <h3 className="text-xl font-semibold text-[#1b314e] mb-4">
          Nos prestations incluent :
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
          <li>🏗 Fabrication de structures métalliques sur mesure</li>
          <li>🛠 Réparation et maintenance de citernes et cuves</li>
          <li>🔩 Travaux de tuyauterie industrielle</li>
          <li>⚙ Soudure spécialisée (acier, inox, aluminium...)</li>
          <li>🔥 Fabrication et entretien de chaudières industrielles</li>
        </ul>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Nos équipes maîtrisent les techniques les plus avancées de
          chaudronnerie et de soudure pour garantir la résistance et la
          fiabilité de chaque réalisation, quel que soit le secteur
          d’application.
        </p>

        {/* CTA final */}
        <div className="mt-12 text-center">
          <h4 className="text-xl font-bold text-[#1b314e] mb-4">
            Besoin d’un partenaire fiable pour vos travaux métalliques ?
          </h4>
          <p className="text-gray-700 mb-6">
            Contactez-nous dès aujourd’hui pour obtenir un devis personnalisé et
            bénéficier de notre expertise.
          </p>
          <Link
            href="/demander-un-devis"
            className="inline-flex items-center bg-[#d32a2b] hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition"
          >
            Demander un devis
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
