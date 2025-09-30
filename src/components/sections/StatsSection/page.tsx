"use client";

import { useEffect, useRef, useState } from "react";

// Définition des types pour les props
interface AnimatedCounterProps {
  value: number;
  suffix: string;
  isInView: boolean;
  delay?: number;
}

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3, rootMargin: "-100px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 50, suffix: "+", label: "Projets réalisés" },
    { value: 100, suffix: "%", label: "Clients satisfaits" },
    { value: 24, suffix: "/7", label: "Support technique" },
    { value: 3, suffix: "+", label: "Années d'expérience" },
  ];

  return (
    <section ref={ref} className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-4xl font-bold mb-2">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  isInView={isInView}
                  delay={index * 200}
                />
              </h3>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Composant pour l'animation du compteur avec types définis
const AnimatedCounter = ({
  value,
  suffix,
  isInView,
  delay = 0,
}: AnimatedCounterProps) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (isInView) {
      const startTime = Date.now();
      const startValue = 0;
      const endValue = value;
      const duration = 2000;

      const updateCounter = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Fonction d'easing pour un effet plus naturel
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(
          startValue + (endValue - startValue) * easeOutQuart
        );

        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          setCount(endValue);
        }
      };

      // Délai avant le démarrage de l'animation
      const timeoutId = setTimeout(() => {
        requestAnimationFrame(updateCounter);
      }, delay);

      return () => clearTimeout(timeoutId);
    }
  }, [isInView, value, delay]);

  return (
    <span className="inline-block">
      {count}
      {suffix}
    </span>
  );
};

export default StatsSection;
