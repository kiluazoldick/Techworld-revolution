import Head from "next/head";


import HeroSection from "@/components/sections/HeroSection/page";
import AboutSection from "@/components/sections/AboutSection/page";
import ServicesSection from "@/components/sections/ServicesSection/page";
import StatsSection from "@/components/sections/StatsSection/page";
import PortfolioSection from "@/components/sections/PortfolioSection/page";
import TestimonialsSection from "@/components/sections/TestimonialsSection/page";
import CTASection from "@/components/sections/CTASection/page";
import ContactSection from "@/components/sections/ContactSection/page";
import GoogleMapSection from "@/components/sections/GoogleMapSection/page";
export default function Home() {
  return (
    <>
      <Head>
        <title>
          Global Solution and Services SARL | Votre partenaire en logistique
        </title>
        <meta
          name="description"
          content="Spécialisés dans le transport de matières premières pour cimenteries, nous assurons une logistique fiable et optimisée sur tout le territoire national."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
        <GoogleMapSection />
      </main>
     
    </>
  );
}
