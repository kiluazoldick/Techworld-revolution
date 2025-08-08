import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function ConseilsCommerceEtFormationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/images/services/conseil.jpg" // Mets ton image dans public/images/services
          alt="Conseil, Commerce & Formation"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1b314e]/70 flex flex-col justify-center items-center text-center text-white px-6">
          <FontAwesomeIcon
            icon={faBriefcase}
            className="text-4xl mb-4 text-[#d32a2b]"
          />
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Conseil, Commerce & Formation
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Stratégies gagnantes, développement commercial et transfert de
            compétences.
          </p>
        </div>
      </div>

      {/* Contenu détaillé */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-[#1b314e] mb-6">
          Accompagnement stratégique et formations sur mesure
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Chez <strong>Global Solution & Services SARL</strong>, nous mettons à
          votre disposition notre expertise en conseil stratégique, commerce
          international et formation technique pour vous aider à atteindre vos
          objectifs. Que vous soyez une PME, une grande entreprise ou une
          organisation publique, nous vous accompagnons avec des solutions
          concrètes et personnalisées.
        </p>

        <h3 className="text-xl font-semibold text-[#1b314e] mb-4">
          Nos domaines d’intervention :
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
          <li>
            📈 Conseil en stratégie commerciale et développement d’affaires
          </li>
          <li>🌍 Assistance au commerce international et import/export</li>
          <li>🎯 Formation professionnelle et technique sur mesure</li>
          <li>🤝 Coaching d’équipes et renforcement de capacités</li>
          <li>💡 Études de marché et accompagnement à la prise de décision</li>
        </ul>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Notre objectif : vous fournir les clés pour booster vos performances,
          renforcer vos équipes et conquérir de nouveaux marchés tout en
          garantissant la qualité et la durabilité de vos actions.
        </p>

        {/* CTA final */}
        <div className="mt-12 text-center">
          <h4 className="text-xl font-bold text-[#1b314e] mb-4">
            Prêt à développer votre activité ?
          </h4>
          <p className="text-gray-700 mb-6">
            Discutons de vos besoins et trouvons ensemble la meilleure
            stratégie.
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
