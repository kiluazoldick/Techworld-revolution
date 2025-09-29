// pages/conditions-generales.tsx
import React from "react";
import Head from "next/head";
import Link from "next/link";

const ConditionGeneralePage = () => {
  return (
    <>
      <Head>
        <title>Conditions Générales - TechWorld Revolution</title>
        <meta
          name="description"
          content="Consultez les conditions générales d'utilisation de TechWorld Revolution - Expert en installations électriques et solutions technologiques"
        />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-20 pt-35">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Conditions Générales
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Dernière mise à jour : 14 octobre 2024
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="prose lg:prose-xl max-w-none">
            <div className="mb-12">
              <p className="text-lg text-gray-600">
                Les présentes conditions générales régissent l&apos;utilisation
                des services fournis par{" "}
                <span className="font-bold text-gray-900">
                  TechWorld Revolution
                </span>{" "}
                (ci-après &quot;la Société&quot;). En accédant à nos services,
                vous acceptez d&apos;être lié par ces conditions.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-300">
              1. Objet
            </h2>
            <p className="text-gray-600 mb-8">
              La Société, spécialisée dans les installations électriques pour courants forts 
              et courants faibles, propose des solutions sur mesure pour répondre aux besoins 
              de ses clients, qu&apos;il s&apos;agisse de bâtiments résidentiels, commerciaux 
              ou industriels. Nos domaines d&apos;expertise incluent l&apos;électricité bâtiment, 
              l&apos;électricité industrielle, les réseaux informatiques, la domotique, 
              l&apos;électronique et les énergies renouvelables.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-300">
              2. Acceptation des conditions
            </h2>
            <p className="text-gray-600 mb-8">
              Toute commande passée auprès de la Société implique
              l&apos;acceptation pleine et entière des présentes conditions
              générales, à l&apos;exclusion de toute autre document. Les
              conditions particulières éventuelles prévaudront sur les présentes
              conditions générales.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-300">
              3. Prestations de services
            </h2>
            <p className="text-gray-600 mb-4">
              Les services proposés par la Société incluent mais ne se limitent
              pas à&nbsp;:
            </p>
            <ul className="list-disc pl-8 text-gray-600 mb-8 space-y-2">
              <li>Installations électriques complètes pour bâtiments neufs</li>
              <li>Rénovation et mise aux normes d&apos;installations existantes</li>
              <li>Étude et conception de plans électriques</li>
              <li>Dépannage électrique rapide et efficace</li>
              <li>Installation de réseaux informatiques et téléphoniques</li>
              <li>Systèmes de sécurité et vidéosurveillance</li>
              <li>Solutions domotiques et d&apos;automatisation</li>
              <li>Installation de panneaux solaires photovoltaïques</li>
              <li>Maintenance préventive et corrective</li>
              <li>Conseils techniques et audit d&apos;installations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-300">
              4. Commandes et devis
            </h2>
            <p className="text-gray-600 mb-8">
              Toute commande doit faire l&apos;objet d&apos;un devis préalable
              signé par les deux parties. Les devis sont valables 30 jours à
              compter de leur date d&apos;émission. La Société se réserve le
              droit de modifier ses prix en fonction des fluctuations du marché
              des matériaux électriques et des coûts de main-d&apos;œuvre.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-300">
              5. Prix et paiement
            </h2>
            <p className="text-gray-600 mb-4">
              Les prix sont indiqués en Francs CFA et hors taxes, sauf mention
              contraire. Les conditions de paiement sont précisées dans le devis
              ou la commande. Un acompte de 30% est généralement requis pour le
              lancement des travaux.
            </p>
            <p className="text-gray-600 mb-8">
              En cas de retard de paiement, la Société pourra appliquer des
              pénalités de retard au taux légal en vigueur, sans préjudice de
              dommages et intérêts pour recouvrement des frais engagés.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-300">
              6. Délais d&apos;exécution
            </h2>
            <p className="text-gray-600 mb-8">
              Les délais d&apos;exécution sont indiqués à titre indicatif. La
              Société ne saurait être tenue responsable des retards imputables à
              des cas de force majeure, à des difficultés d&apos;approvisionnement 
              en matériaux spécifiques ou à des circonstances indépendantes de
              sa volonté.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-300">
              7. Garanties et normes
            </h2>
            <p className="text-gray-600 mb-4">
              Toutes nos installations sont réalisées dans le respect des normes 
              électriques en vigueur (NFC 15-100 et normes spécifiques selon les domaines). 
              Nous utilisons exclusivement des matériaux de qualité supérieure pour garantir 
              la sécurité et la fiabilité de nos installations.
            </p>
            <p className="text-gray-600 mb-8">
              La Société garantit ses installations contre tout vice de conception 
              ou de réalisation pendant une période de 12 mois à compter de la réception des travaux.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-300">
              8. Propriété intellectuelle
            </h2>
            <p className="text-gray-600 mb-8">
              Tous les documents techniques, études, plans, schémas électriques 
              et autres éléments intellectuels fournis par la Société restent sa propriété 
              exclusive. Le client s&apos;interdit toute reproduction ou utilisation sans 
              autorisation préalable écrite.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-300">
              9. Responsabilité
            </h2>
            <p className="text-gray-600 mb-4">
              La Société s&apos;engage à fournir des services conformes aux
              normes professionnelles en vigueur dans le domaine électrique. 
              Sa responsabilité ne pourra en aucun cas excéder le montant total 
              de la prestation concernée.
            </p>
            <p className="text-gray-600 mb-8">
              Le client est responsable de fournir des informations exactes et
              complètes nécessaires à la bonne exécution des prestations, 
              notamment concernant l&apos;existant électrique et les spécificités techniques du bâtiment.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-300">
              10. Sécurité et accès
            </h2>
            <p className="text-gray-600 mb-8">
              Le client s&apos;engage à mettre à disposition de la Société un accès 
              sécurisé et approprié aux locaux concernés par les travaux. 
              Il doit également signaler toute particularité ou risque spécifique 
              lié à l&apos;environnement de travail.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-300">
              11. Confidentialité
            </h2>
            <p className="text-gray-600 mb-8">
              Les parties s&apos;engagent à garder confidentielles toutes les
              informations échangées dans le cadre de leur relation commerciale, 
              notamment les schémas électriques, les plans d&apos;installation 
              et les données techniques. Cette obligation persiste pendant 3 ans 
              après la fin de la relation contractuelle.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-300">
              12. Résiliation
            </h2>
            <p className="text-gray-600 mb-8">
              En cas de manquement grave d&apos;une partie à ses obligations,
              l&apos;autre partie pourra résilier le contrat de plein droit, 15
              jours après mise en demeure restée sans effet.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-300">
              13. Données personnelles
            </h2>
            <p className="text-gray-600 mb-8">
              Conformément à la loi n°2010/012 du 21 décembre 2010 relative à la
              protection des données personnelles, le client dispose d&apos;un
              droit d&apos;accès, de rectification et d&apos;opposition aux
              données le concernant.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-300">
              14. Litiges et droit applicable
            </h2>
            <p className="text-gray-600 mb-4">
              Les présentes conditions sont régies par le droit camerounais.
              Tout litige relatif à leur interprétation ou exécution sera soumis
              aux tribunaux compétents de Douala.
            </p>
            <p className="text-gray-600 mb-8">
              Les parties s&apos;engagent à rechercher une solution amiable
              avant tout recours contentieux.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-300">
              15. Modifications
            </h2>
            <p className="text-gray-600 mb-8">
              La Société se réserve le droit de modifier à tout moment les
              présentes conditions générales. La version applicable est celle en
              vigueur à la date de la commande.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mt-12 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Pour toute question
              </h3>
              <p className="text-gray-600 mb-2">
                Contactez-nous à l&apos;adresse : techworldrevolution23@gmail.com
              </p>
              <p className="text-gray-600 mb-4">
                Par téléphone : +237 658 298 002 / +237 682 840 911
              </p>
              <p className="text-gray-600 text-sm">
                Ou consultez nos autres pages légales :{" "}
                <Link href="/mention-legale" className="text-[#3b82f6] hover:underline">
                  Mentions légales
                </Link>{" "}
                •{" "}
                <Link href="/politique-de-confidentialite" className="text-[#3b82f6] hover:underline">
                  Politique de confidentialité
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConditionGeneralePage;