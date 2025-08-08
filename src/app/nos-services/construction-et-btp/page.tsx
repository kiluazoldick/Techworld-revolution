import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHardHat, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function ConstructionEtBtpPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/images/services/construction.jpg" // Image à remplacer par celle de ton dossier
          alt="Chantier BTP"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1b314e]/70 flex flex-col justify-center items-center text-center text-white px-6">
          <FontAwesomeIcon
            icon={faHardHat}
            className="text-4xl mb-4 text-[#d32a2b]"
          />
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Construction & BTP
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Des solutions fiables pour vos projets de construction, de la
            fourniture d’agrégats au transport d’équipements lourds.
          </p>
        </div>
      </div>

      {/* Contenu détaillé */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-[#1b314e] mb-6">
          Un partenaire solide pour bâtir vos ambitions
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Chez <strong>Global Solution & Services SARL</strong>, nous mettons
          notre savoir-faire au service du secteur du bâtiment et des travaux
          publics. Notre expertise couvre la gestion logistique complète pour
          acheminer vos matériaux lourds, équipements industriels et agrégats
          directement sur vos chantiers.
        </p>

        <h3 className="text-xl font-semibold text-[#1b314e] mb-4">
          Ce que nous vous garantissons :
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
          <li>
            🏗 Transport sécurisé de matériaux de construction (ciment, sable,
            gravier, acier...)
          </li>
          <li>🚜 Livraison d’équipements et machines lourdes sur site</li>
          <li>⏱ Respect strict des délais de chantier</li>
          <li>🛡 Conformité aux normes de sécurité BTP</li>
          <li>📍 Couverture nationale pour vos projets multi-sites</li>
        </ul>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Grâce à notre flotte moderne et à nos équipes qualifiées, nous
          assurons un acheminement efficace qui vous permet de concentrer vos
          efforts sur la réalisation de vos ouvrages, sans interruption
          logistique.
        </p>

        {/* CTA final */}
        <div className="mt-12 text-center">
          <h4 className="text-xl font-bold text-[#1b314e] mb-4">
            Besoin d’un transport fiable pour votre prochain chantier ?
          </h4>
          <p className="text-gray-700 mb-6">
            Contactez-nous dès maintenant pour discuter de votre projet et
            obtenir un devis personnalisé.
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
