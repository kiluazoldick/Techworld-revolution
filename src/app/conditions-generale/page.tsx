// pages/conditions-generales.tsx
import React from "react";
import Head from "next/head";

const ConditionGeneralePage = () => {
  return (
    <>
      <Head>
        <title>Conditions Générales - Global Solution & Services</title>
        <meta
          name="description"
          content="Consultez les conditions générales d'utilisation de Global Solution & Services SARL"
        />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-[#1b314e] text-white py-20 pt-35">
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
                <span className="font-bold">
                  Global Solution & Services SARL
                </span>{" "}
                (ci-après &quot;la Société&quot;). En accédant à nos services,
                vous acceptez d&apos;être lié par ces conditions.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-[#1b314e] mb-6 border-b pb-2">
              1. Objet
            </h2>
            <p className="text-gray-600 mb-8">
              La Société, immatriculée au RCCM sous le numéro
              CM-DLA-01-2023-B12-04266, spécialisée dans les prestations de
              services, commerce général, négoce, import-export, représentation
              commerciale, distribution, conseils et formation, transport,
              logistique générale, vente d&apos;agrégats de construction,
              bâtiments et travaux publics, études et réalisations, maintenances
              industrielles et formation professionnelle, propose ses services
              aux conditions définies ci-après.
            </p>

            <h2 className="text-2xl font-bold text-[#1b314e] mb-6 border-b pb-2">
              2. Acceptation des conditions
            </h2>
            <p className="text-gray-600 mb-8">
              Toute commande passée auprès de la Société implique
              l&apos;acceptation pleine et entière des présentes conditions
              générales, à l&apos;exclusion de toute autre document. Les
              conditions particulières éventuelles prévaudront sur les présentes
              conditions générales.
            </p>

            <h2 className="text-2xl font-bold text-[#1b314e] mb-6 border-b pb-2">
              3. Prestations de services
            </h2>
            <p className="text-gray-600 mb-4">
              Les services proposés par la Société incluent mais ne se limitent
              pas à&nbsp;:
            </p>
            <ul className="list-disc pl-8 text-gray-600 mb-8 space-y-2">
              <li>Transport et logistique de matières premières</li>
              <li>Construction de bâtiments complets et travaux publics</li>
              <li>
                Maintenances industrielles (mécanique générale, électricité
                industrielle, automatisme)
              </li>
              <li>
                Fabrication de structures métalliques et ouvrages chaudronnés
              </li>
              <li>
                Formation professionnelle (sécurité incendie, électricité
                industrielle, etc.)
              </li>
              <li>Conseils et études techniques</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1b314e] mb-6 border-b pb-2">
              4. Commandes et devis
            </h2>
            <p className="text-gray-600 mb-8">
              Toute commande doit faire l&apos;objet d&apos;un devis préalable
              signé par les deux parties. Les devis sont valables 30 jours à
              compter de leur date d&apos;émission. La Société se réserve le
              droit de modifier ses prix en fonction des fluctuations du marché.
            </p>

            <h2 className="text-2xl font-bold text-[#1b314e] mb-6 border-b pb-2">
              5. Prix et paiement
            </h2>
            <p className="text-gray-600 mb-4">
              Les prix sont indiqués en Francs CFA et hors taxes, sauf mention
              contraire. Les conditions de paiement sont précisées dans le devis
              ou la commande.
            </p>
            <p className="text-gray-600 mb-8">
              En cas de retard de paiement, la Société pourra appliquer des
              pénalités de retard au taux légal en vigueur, sans préjudice de
              dommages et intérêts pour recouvrement des frais engagés.
            </p>

            <h2 className="text-2xl font-bold text-[#1b314e] mb-6 border-b pb-2">
              6. Délais d&apos;exécution
            </h2>
            <p className="text-gray-600 mb-8">
              Les délais d&apos;exécution sont indiqués à titre indicatif. La
              Société ne saurait être tenue responsable des retards imputables à
              des cas de force majeure ou à des circonstances indépendantes de
              sa volonté.
            </p>

            <h2 className="text-2xl font-bold text-[#1b314e] mb-6 border-b pb-2">
              7. Propriété intellectuelle
            </h2>
            <p className="text-gray-600 mb-8">
              Tous les documents techniques, études, plans, logiciels et autres
              éléments intellectuels fournis par la Société restent sa propriété
              exclusive. Le client s&apos;interdit toute reproduction ou
              utilisation sans autorisation préalable écrite.
            </p>

            <h2 className="text-2xl font-bold text-[#1b314e] mb-6 border-b pb-2">
              8. Responsabilité
            </h2>
            <p className="text-gray-600 mb-4">
              La Société s&apos;engage à fournir des services conformes aux
              normes professionnelles en vigueur. Sa responsabilité ne pourra en
              aucun cas excéder le montant total de la prestation concernée.
            </p>
            <p className="text-gray-600 mb-8">
              Le client est responsable de fournir des informations exactes et
              complètes nécessaires à la bonne exécution des prestations.
            </p>

            <h2 className="text-2xl font-bold text-[#1b314e] mb-6 border-b pb-2">
              9. Confidentialité
            </h2>
            <p className="text-gray-600 mb-8">
              Les parties s&apos;engagent à garder confidentielles toutes les
              informations échangées dans le cadre de leur relation commerciale.
              Cette obligation persiste pendant 5 ans après la fin de la
              relation contractuelle.
            </p>

            <h2 className="text-2xl font-bold text-[#1b314e] mb-6 border-b pb-2">
              10. Résiliation
            </h2>
            <p className="text-gray-600 mb-8">
              En cas de manquement grave d&apos;une partie à ses obligations,
              l&apos;autre partie pourra résilier le contrat de plein droit, 15
              jours après mise en demeure restée sans effet.
            </p>

            <h2 className="text-2xl font-bold text-[#1b314e] mb-6 border-b pb-2">
              11. Données personnelles
            </h2>
            <p className="text-gray-600 mb-8">
              Conformément à la loi n°2010/012 du 21 décembre 2010 relative à la
              protection des données personnelles, le client dispose d&apos;un
              droit d&apos;accès, de rectification et d&apos;opposition aux
              données le concernant.
            </p>

            <h2 className="text-2xl font-bold text-[#1b314e] mb-6 border-b pb-2">
              12. Litiges et droit applicable
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

            <h2 className="text-2xl font-bold text-[#1b314e] mb-6 border-b pb-2">
              13. Modifications
            </h2>
            <p className="text-gray-600 mb-8">
              La Société se réserve le droit de modifier à tout moment les
              présentes conditions générales. La version applicable est celle en
              vigueur à la date de la commande.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-[#1b314e] mb-4">
                Pour toute question
              </h3>
              <p className="text-gray-600 mb-2">
                Contactez-nous à l&apos;adresse :
                contact@globalsolutionandservicessarl.com
              </p>
              <p className="text-gray-600">
                Par téléphone : +237 6 92 27 48 72
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConditionGeneralePage;
