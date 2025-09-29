// pages/notre-equipe.tsx
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const NotreEquipePage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "David Christian",
      role: "Directeur Technique & Fondateur",
      bio: "Full-stack developer et UI/UX designer certifié Google. Expert en installations électriques avec 8+ ans d'expérience dans les courants forts et faibles.",
      img: "/images/directeur-technique.jpg",
      email: "david@techworld-revolution.com",
      phone: "+237 658 298 002",
      expertise: ["Courants Forts", "Réseaux Informatiques", "Domotique"]
    },
    {
      id: 2,
      name: "Ingénieur Électricien",
      role: "Responsable Courants Forts",
      bio: "Spécialiste des installations électriques complètes, du raccordement au réseau jusqu'aux équipements de protection et distribution. Certifié NFC 15-100.",
      img: "/images/ingenieur-courants-forts.jpg",
      email: "courants-forts@techworld-revolution.com",
      phone: "+237 682 840 911",
      expertise: ["Installations Neuves", "Mise aux Normes", "Dépannage"]
    },
    {
      id: 3,
      name: "Technicien Senior",
      role: "Expert Courants Faibles",
      bio: "Expert en systèmes de communication, réseaux informatiques, téléphoniques et solutions de sécurité pour bâtiments intelligents. Formation CISCO certifiée.",
      img: "/images/technicien-reseaux.jpg",
      email: "courants-faibles@techworld-revolution.com",
      phone: "+237 682 840 911",
      expertise: ["Réseaux", "Vidéosurveillance", "Systèmes d'Alarme"]
    },
    {
      id: 4,
      name: "Spécialiste Énergies",
      role: "Responsable Énergies Renouvelables",
      bio: "Expert en installation de panneaux solaires photovoltaïques et systèmes d'énergie verte. Certifié en solutions durables et autonomes.",
      img: "/images/specialiste-energies.jpg",
      email: "energies@techworld-revolution.com",
      phone: "+237 682 840 911",
      expertise: ["Solaire", "Géothermie", "Autonomie Énergétique"]
    },
    {
      id: 5,
      name: "Technicien Domotique",
      role: "Spécialiste Solutions Connectées",
      bio: "Expert en automatisation résidentielle et industrielle. Conception de systèmes domotiques sur mesure pour le confort et les économies d'énergie.",
      img: "/images/technicien-domotique.jpg",
      email: "domotique@techworld-revolution.com",
      phone: "+237 682 840 911",
      expertise: ["Domotique", "Automatisation", "Contrôle à Distance"]
    },
    {
      id: 6,
      name: "Chef de Projet",
      role: "Responsable Réalisations",
      bio: "Gestion et coordination des projets complexes. Garant du respect des délais, budgets et normes de qualité pour toutes nos interventions.",
      img: "/images/chef-projet.jpg",
      email: "projets@techworld-revolution.com",
      phone: "+237 682 840 911",
      expertise: ["Gestion de Projet", "Planification", "Contrôle Qualité"]
    },
    {
      id: 7,
      name: "Technicien Maintenance",
      role: "Responsable SAV & Maintenance",
      bio: "Expert en maintenance préventive et corrective. Intervention rapide pour assurer la continuité de service de vos installations électriques.",
      img: "/images/technicien-maintenance.jpg",
      email: "maintenance@techworld-revolution.com",
      phone: "+237 682 840 911",
      expertise: ["Maintenance", "Dépannage", "Support Technique"]
    },
    {
      id: 8,
      name: "Consultant Technique",
      role: "Expert en Solutions Industrielles",
      bio: "Spécialiste des installations électriques industrielles et automatisation des processus. Accompagnement sur les projets complexes.",
      img: "/images/consultant-industriel.jpg",
      email: "industriel@techworld-revolution.com",
      phone: "+237 682 840 911",
      expertise: ["Industriel", "Automatisme", "Processus"]
    },
  ];

  const departments = [
    {
      name: "Courants Forts",
      count: "4",
      description: "Experts en installations électriques traditionnelles"
    },
    {
      name: "Courants Faibles",
      count: "3",
      description: "Spécialistes réseaux et communication"
    },
    {
      name: "Énergies Vertes",
      count: "2",
      description: "Experts en solutions durables"
    },
    {
      name: "Domotique",
      count: "2",
      description: "Innovateurs en automatisation"
    }
  ];

  return (
    <>
      <Head>
        <title>Notre Équipe - TechWorld Revolution</title>
        <meta
          name="description"
          content="Découvrez l'équipe d'experts TechWorld Revolution : spécialistes en électricité, réseaux, domotique et énergies renouvelables."
        />
      </Head>

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/images/equipe-technique-hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "60vh",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-90"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center text-white">
          <div className="mb-6">
            <Link 
              href="/apropos" 
              className="inline-flex items-center text-white hover:text-blue-300 transition duration-300"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Retour à la page À propos
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl">
            Notre équipe d'experts
          </h1>
          <p className="text-xl max-w-2xl">
            Des spécialistes passionnés dédiés à l'excellence technique et à votre satisfaction
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="text-3xl font-bold text-[#3b82f6] mb-2">
                  {dept.count}
                </div>
                <div className="text-gray-900 font-medium mb-1">{dept.name}</div>
                <div className="text-gray-600 text-sm">{dept.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Rencontrez nos experts techniques
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une équipe pluridisciplinaire maîtrisant tous les aspects des installations électriques et technologiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition duration-300 hover:shadow-xl border border-gray-200 group"
              >
                <div
                  className="relative h-72 bg-gray-200"
                  style={{
                    backgroundImage: `url(${member.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                    <div className="text-white">
                      <div className="flex space-x-2 mb-2">
                        {member.expertise.slice(0, 2).map((skill, index) => (
                          <span 
                            key={index}
                            className="bg-[#3b82f6] bg-opacity-80 text-xs px-2 py-1 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#3b82f6] font-medium mb-3 text-sm">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center text-gray-600 text-sm">
                        <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 mr-2 text-[#3b82f6]" />
                        <span className="truncate">{member.email}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-[#3b82f6]" />
                        <span>{member.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Un projet avec notre équipe ?
          </h2>
          <p className="text-xl mb-10">
            Contactez directement nos experts pour discuter de votre projet électrique ou technologique
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#3b82f6] hover:bg-blue-700 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300"
            >
              Contacter un expert
            </Link>
            <Link
              href="/nos-services"
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300"
            >
              Voir nos services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotreEquipePage;