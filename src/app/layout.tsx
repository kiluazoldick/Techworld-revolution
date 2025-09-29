import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/lib/fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import Header from "@/components/layout/Header/page";
import Footer from "@/components/layout/Footer/page";
import ScrollToTopButton from "@/components/layout/ScrollToTopButton/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechWorld Revolution - Solutions Électriques et Technologiques",
  description: "Votre partenaire de confiance pour l'électricité bâtiment, industrielle, réseaux informatiques, domotique et énergies renouvelables.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {/* Main content area */}
        {children}
        {/* Footer section */}
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}