"use client";

import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#1b314e] text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-[#d32a2b]">G</span>lobal
              <span className="text-[#d32a2b]">S</span>olution &
              <span className="text-[#d32a2b]">S</span>ervices
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-white hover:text-[#d32a2b] font-medium transition duration-300"
            >
              Accueil
            </Link>
            <Link
              href="/apropos"
              className="text-white hover:text-[#d32a2b] font-medium transition duration-300"
            >
              À propos
            </Link>
            <Link
              href="/nos-services"
              className="text-white hover:text-[#d32a2b] font-medium transition duration-300"
            >
              Services
            </Link>
            <Link
              href="/nos-realisations"
              className="text-white hover:text-[#d32a2b] font-medium transition duration-300"
            >
              Réalisations
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-[#d32a2b] font-medium transition duration-300"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/demander-un-devis"
              className="bg-[#d32a2b] hover:bg-red-700 text-white px-6 py-2 rounded-md font-medium transition duration-300"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          mobileMenuOpen ? "block" : "hidden"
        } md:hidden bg-[#1b314e] px-4 pb-4`}
      >
        <div className="flex flex-col space-y-3 pt-2">
          <Link
            href="/"
            className="text-white hover:text-[#d32a2b] font-medium py-2"
          >
            Accueil
          </Link>
          <Link
            href="/apropos"
            className="text-white hover:text-[#d32a2b] font-medium py-2"
          >
            À propos
          </Link>
          <Link
            href="/nos-services"
            className="text-white hover:text-[#d32a2b] font-medium py-2"
          >
            Services
          </Link>
          <Link
            href="/nos-realisations"
            className="text-white hover:text-[#d32a2b] font-medium py-2"
          >
            Réalisations
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-[#d32a2b] font-medium py-2"
          >
            Contact
          </Link>
          <Link
            href="/demander-un-devis"
            className="bg-[#d32a2b] hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium text-center"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
