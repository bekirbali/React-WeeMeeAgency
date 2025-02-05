import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            WeeMeAgency
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <a href="#services" className="hover:text-blue-600">
              Services
            </a>
            <a href="#references" className="hover:text-blue-600">
              References
            </a>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
            <Link to="/faq" className="hover:text-blue-600">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
