"use client"

import Link from "next/link";
import React, { useState } from "react";

const AlertBanner = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-red-900">
          MZBlogs.
        </Link>

        {/* Desktop Menu */}
        <div className="hidden text-2xl md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-500">
            Home
          </Link>
          <Link href="#" className="text-gray-700 hover:text-blue-500">
            Magazines
          </Link>
         
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-gray-700 hover:text-blue-500"
          onClick={toggleMobileMenu}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link
            href="/"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100 hover:text-blue-500"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100 hover:text-blue-500"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100 hover:text-blue-500"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100 hover:text-blue-500"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default AlertBanner;
