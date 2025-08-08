import Image from "next/image";
import Link from "next/link";

export default function NosRealisationsPage() {
  const projects = [
    {
      id: 1,
      image: "/images/serv1.jpg",
      title: "Optimisation logistique pour une entreprise agroalimentaire",
      description:
        "Réduction des coûts de 23% et amélioration des délais de livraison grâce à une réorganisation complète de la chaîne de transport.",
      details: [
        "Analyse des flux de transport existants",
        "Mise en place de nouvelles routes optimisées",
        "Suivi GPS en temps réel et reporting hebdomadaire",
      ],
      result:
        "Réduction des coûts de 23% et gain de 2 jours sur les délais moyens.",
    },
    {
      id: 2,
      image: "/images/serv2.jpg",
      title: "Construction d'un entrepôt industriel de 1 200 m²",
      description:
        "Livraison du chantier en 4 mois, respect des normes ISO et intégration d'un système électrique autonome.",
      details: [
        "Gestion complète du projet de construction",
        "Respect strict des délais et normes ISO 9001",
        "Installation d'un système solaire pour autonomie énergétique",
      ],
      result: "Chantier livré avant la date prévue avec 0 non-conformité.",
    },
    {
      id: 3,
      image: "/images/serv3.jpg",
      title: "Maintenance complète d'une ligne de production automatisée",
      description:
        "Zéro interruption pendant la période d'intervention et amélioration de la productivité de 18% en 3 semaines.",
      details: [
        "Diagnostic complet des équipements",
        "Remplacement des pièces défectueuses",
        "Optimisation des paramètres de production",
      ],
      result:
        "Productivité accrue de 18% et amélioration de la fiabilité des machines.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/images/hero-realisations.jpg"
          alt="Nos réalisations"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1b314e]/80 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Nos Réalisations
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Des projets concrets, des résultats mesurables, une expertise
            éprouvée.
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Chez <strong>Global Solution & Services SARL</strong>, chaque projet
          est une opportunité de démontrer notre savoir-faire. Du transport
          stratégique à la construction, en passant par la maintenance
          industrielle, nos réalisations reflètent notre engagement envers la
          qualité, la fiabilité et la satisfaction client.
        </p>
      </div>

      {/* Liste projets */}
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-shrink-0 w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold text-[#1b314e] mb-4">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                {project.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <div className="bg-[#e8f0fe] border-l-4 border-[#1b314e] p-4 text-[#1b314e] font-semibold rounded">
                Résultat clé : {project.result}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA final */}
      <div className="bg-[#1b314e] text-white py-12 text-center mt-20">
        <h2 className="text-3xl font-bold mb-4">
          Vous avez un projet ambitieux ?
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Discutons ensemble de vos besoins et voyons comment nous pouvons
          dépasser vos attentes.
        </p>
        <Link
          href="/demander-un-devis"
          className="inline-block bg-[#d32a2b] hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition"
        >
          Demander un devis
        </Link>
      </div>
    </div>
  );
}
