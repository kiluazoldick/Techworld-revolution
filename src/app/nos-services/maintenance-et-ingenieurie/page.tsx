import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function MaintenanceEtIngenieriePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/images/services/maintenance.jpg" // Image à mettre dans ton dossier public/images/services
          alt="Maintenance et ingénierie industrielle"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1b314e]/70 flex flex-col justify-center items-center text-center text-white px-6">
          <FontAwesomeIcon
            icon={faTools}
            className="text-4xl mb-4 text-[#d32a2b]"
          />
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Maintenance & Ingénierie Industrielle
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Expertise technique pour assurer la performance et la longévité de
            vos installations.
          </p>
        </div>
      </div>

      {/* Contenu détaillé */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-[#1b314e] mb-6">
          Une expertise au service de votre performance industrielle
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Chez <strong>Global Solution & Services SARL</strong>, nous savons que
          la fiabilité et l’efficacité de vos équipements industriels sont
          essentielles à votre productivité. C’est pourquoi nous proposons des
          solutions de maintenance préventive et corrective, ainsi que des
          services d’ingénierie de pointe adaptés à vos besoins.
        </p>

        <h3 className="text-xl font-semibold text-[#1b314e] mb-4">
          Nos domaines d’intervention :
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
          <li>🔧 Maintenance mécanique, électrique et électronique</li>
          <li>⚙ Réparation et optimisation de machines-outils</li>
          <li>📊 Analyse et diagnostic de performance industrielle</li>
          <li>💡 Automatisation et programmation d’installations</li>
          <li>
            🏭 Conception et mise en service de systèmes industriels sur mesure
          </li>
        </ul>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Grâce à notre équipe d’ingénieurs et techniciens expérimentés, nous
          assurons des interventions rapides, conformes aux normes de sécurité,
          et parfaitement adaptées aux contraintes de votre secteur d’activité.
        </p>

        {/* CTA final */}
        <div className="mt-12 text-center">
          <h4 className="text-xl font-bold text-[#1b314e] mb-4">
            Assurez la continuité de votre production
          </h4>
          <p className="text-gray-700 mb-6">
            Contactez-nous dès maintenant pour un diagnostic complet et un plan
            d’action personnalisé.
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
