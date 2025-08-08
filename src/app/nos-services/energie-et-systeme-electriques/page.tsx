import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function EnergieEtSystemeElectriquesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/images/services/energie.jpg" // Mets ton image dans public/images/services
          alt="Énergie et Systèmes Électriques"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1b314e]/70 flex flex-col justify-center items-center text-center text-white px-6">
          <FontAwesomeIcon
            icon={faBolt}
            className="text-4xl mb-4 text-[#d32a2b]"
          />
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Énergie & Systèmes Électriques
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Optimisation, sécurité et performance pour vos installations
            électriques.
          </p>
        </div>
      </div>

      {/* Contenu détaillé */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-[#1b314e] mb-6">
          Un partenaire fiable pour vos projets énergétiques
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Chez <strong>Global Solution & Services SARL</strong>, nous assurons
          la conception, l’installation, la maintenance et le transport
          d’équipements électriques pour les secteurs industriels, commerciaux
          et énergétiques. Nous mettons un point d’honneur à fournir des
          solutions sûres, durables et conformes aux normes internationales.
        </p>

        <h3 className="text-xl font-semibold text-[#1b314e] mb-4">
          Nos domaines d’intervention :
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
          <li>⚡ Études et conception de réseaux électriques industriels</li>
          <li>🔌 Installation et maintenance de systèmes électriques</li>
          <li>🛠 Réparation et optimisation des infrastructures électriques</li>
          <li>📦 Transport et logistique d’équipements électriques</li>
          <li>✅ Mise aux normes et contrôle de conformité</li>
        </ul>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Notre expertise couvre aussi bien les besoins ponctuels que les
          projets de grande envergure, avec un accompagnement personnalisé à
          chaque étape pour garantir performance et fiabilité.
        </p>

        {/* CTA final */}
        <div className="mt-12 text-center">
          <h4 className="text-xl font-bold text-[#1b314e] mb-4">
            Vous avez un projet électrique à réaliser ?
          </h4>
          <p className="text-gray-700 mb-6">
            Contactez nos experts pour obtenir une solution adaptée et un devis
            sur mesure.
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
