import React from "react";

// Composant pour afficher les étoiles de notation
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex items-center mt-4 pl-8">
      {[...Array(5)].map((_, i) => (
        <svg
          key={`star-${rating}-${i}`}
          className={`w-5 h-5 ${
            i < rating ? "text-[#3b82f6]" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Pierre Mbarga",
      role: "Directeur d'usine",
      company: "Industrie Camerounaise SA",
      content:
        "TechWorld Revolution a réalisé l'installation électrique complète de notre nouvelle usine. Professionnalisme et expertise remarquables. Je recommande !",
      avatar: "/images/temoignage-industrie.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Marie-Louise Ngo",
      role: "Gérante de résidence",
      company: "Résidence Les Palmiers",
      content:
        "Intervention rapide et efficace pour la mise aux normes de notre immeuble. L'équipe est compétente et très réactive. Service de qualité.",
      avatar: "/images/temoignage-residentiel.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "David Fotso",
      role: "Responsable IT",
      company: "Société de Services",
      content:
        "Installation de notre réseau informatique et système de surveillance. Techniciens compétents et solutions adaptées à nos besoins. Excellent rapport qualité-prix.",
      avatar: "/images/temoignage-informatique.jpg",
      rating: 4,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nos clients témoignent
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez ce que nos clients pensent de nos services et de notre
            collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200"
            >
              <div className="flex items-center mb-6">
                <div
                  className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#3b82f6]"
                  style={{
                    backgroundImage: `url(${testimonial.avatar})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm italic">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-0 left-0 text-6xl text-gray-200 font-serif">
                  &quot;
                </div>
                <p className="text-gray-700 pl-8 pt-4 italic mb-4">
                  {testimonial.content}
                </p>
              </div>

              {/* Ajout de la notation en étoiles */}
              <StarRating rating={testimonial.rating} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;