// components/TestimonialsSection.js
import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Marie Dupont",
      role: "Directrice Logistique",
      company: "Ciments du Sahel",
      content:
        "Leur service de transport est exceptionnel. Ponctualité et professionnalisme garantis à chaque livraison.",
      avatar: "images/marie.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Jean Martin",
      role: "Responsable de Production",
      company: "Industrie Métallurgique SA",
      content:
        "La qualité des structures métalliques fabriquées dépasse nos attentes. Un partenaire fiable pour nos projets complexes.",
      avatar: "images/jean.jpg",
      rating: 4,
    },
    {
      id: 3,
      name: "Sophie Laurent",
      role: "Chef de Projet",
      company: "Groupe BTP Ouest",
      content:
        "Leur expertise en ingénierie industrielle nous a permis d'optimiser nos processus de production de manière significative.",
      avatar: "images/sophie.jpg",
      rating: 5,
    },
  ];

  // Composant pour afficher les étoiles de notation
  const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
      <div className="flex items-center mt-4 pl-8">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-[#d32a2b]" : "text-gray-300"
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

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1b314e] mb-4">
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
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <div
                  className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#d32a2b]"
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
