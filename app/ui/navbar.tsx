"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle("overflow-hidden", !isMobileMenuOpen);
  };

  return (
    <nav className="bg-black text-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Text */}
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image
                src="/charminar_logo.png"
                alt="Charminar Logo"
                width={90}
                height={90}
                className="h-14 w-auto max-w-full"
              />
            </Link>
            <div className="flex flex-col">
              <div className="text-xs font-bold text-gold">Charminar</div>
              <div className="text-xs font-medium text-gold">
                Indian Restaurant & Catering
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-gold transition-colors duration-300">
              Home
            </Link>
            <Link href="/menu" className="hover:text-gold transition-colors duration-300">
              Menu
            </Link>
            <Link href="/catering" className="hover:text-gold transition-colors duration-300">
              Catering
            </Link>
            <Link href="/location" className="hover:text-gold transition-colors duration-300">
              Locate Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="hover:text-gold focus:outline-none"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Links */}
        <div
          className={`md:hidden bg-black text-white transition-all duration-300 overflow-y-auto ${
            isMobileMenuOpen ? "h-screen" : "h-0"
          }`}
        >
          <div className="flex flex-col space-y-4 py-6 px-4">
            <Link
              href="/"
              className="hover:text-gold transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="hover:text-gold transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              Menu
            </Link>
            <Link
              href="/catering"
              className="hover:text-gold transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              Catering
            </Link>
            <Link
              href="/location"
              className="hover:text-gold transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              Location
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
