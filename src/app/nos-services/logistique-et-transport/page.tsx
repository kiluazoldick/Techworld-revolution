import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faShippingFast,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function LogistiqueEtTransportPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/images/services/transport.jpg"
          alt="Camion de transport"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1b314e]/70 flex flex-col justify-center items-center text-center text-white px-6">
          <FontAwesomeIcon
            icon={faShippingFast}
            className="text-4xl mb-4 text-[#d32a2b]"
          />
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Logistique & Transport
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            La performance au service des bâtisseurs — votre partenaire pour un
            transport sécurisé et optimisé de matières premières à travers tout
            le Cameroun.
          </p>
        </div>
      </div>

      {/* Contenu détaillé */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-[#1b314e] mb-6">
          Une expertise logistique au cœur de vos projets industriels
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Chez <strong>Global Solution & Services SARL</strong>, nous comprenons
          que le transport de matières premières telles que le clinker, le
          gypse, le sable ou la pouzzolane ne se limite pas à déplacer un
          chargement d’un point A à un point B. C’est un maillon essentiel de
          votre chaîne de production. Nous avons donc développé une logistique
          robuste et fiable, pensée pour répondre aux exigences strictes des
          cimenteries, usines de carreaux et industries lourdes.
        </p>

        <h3 className="text-xl font-semibold text-[#1b314e] mb-4">
          Nos engagements :
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
          <li>
            🚛 Flotte moderne équipée de systèmes de suivi GPS en temps réel
          </li>
          <li>
            📍 Couverture nationale, avec présence dans les zones industrielles
            stratégiques
          </li>
          <li>⏱ Respect rigoureux des délais de livraison</li>
          <li>
            🛡 Priorité absolue à la sécurité et à l’intégrité de vos
            marchandises
          </li>
        </ul>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Qu’il s’agisse d’acheminer des matières premières depuis un port
          maritime, une carrière ou un entrepôt de stockage jusqu’à vos lignes
          de production, notre équipe coordonne chaque étape avec précision.
          Nous travaillons en étroite collaboration avec vos responsables
          logistiques pour anticiper les besoins, réduire les coûts et optimiser
          la fluidité des flux.
        </p>

        {/* CTA final */}
        <div className="mt-12 text-center">
          <h4 className="text-xl font-bold text-[#1b314e] mb-4">
            Un besoin urgent ou un projet à planifier ?
          </h4>
          <p className="text-gray-700 mb-6">
            Parlons-en dès aujourd’hui et construisons ensemble la meilleure
            solution logistique pour vos opérations.
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
