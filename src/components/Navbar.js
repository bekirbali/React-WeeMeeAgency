import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { weemeelogo } from "../assets";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollLinks = [
    { name: t("navbar.home"), to: "home" },
    { name: t("navbar.services"), to: "services" },
    { name: t("navbar.references"), to: "references" },
    { name: t("navbar.contact"), to: "contact" },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="cursor-pointer">
            <RouterLink to="/" className="flex items-center">
              <img src={weemeelogo} alt="WeeMeAgency Logo" className="h-12" />
              <span className="text-2xl font-bold text-primary cursor-pointer">
                WeeMeAgency
              </span>
            </RouterLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {isHome ? (
              scrollLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={50}
                  className="text-gray-600 hover:text-primary cursor-pointer transition-colors"
                >
                  {link.name}
                </ScrollLink>
              ))
            ) : (
              <RouterLink
                to="/"
                className="text-gray-600 hover:text-primary cursor-pointer transition-colors"
              >
                {t("navbar.home")}
              </RouterLink>
            )}
            <RouterLink
              to="/faq"
              className="text-gray-600 hover:text-primary cursor-pointer transition-colors"
            >
              {t("navbar.faq")}
            </RouterLink>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {isHome ? (
                scrollLinks.map((link) => (
                  <ScrollLink
                    key={link.name}
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-64}
                    className="text-gray-600 hover:text-primary cursor-pointer transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </ScrollLink>
                ))
              ) : (
                <RouterLink
                  to="/"
                  className="text-gray-600 hover:text-primary cursor-pointer transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("navbar.home")}
                </RouterLink>
              )}
              <RouterLink
                to="/faq"
                className="text-gray-600 hover:text-primary cursor-pointer transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </RouterLink>
              <div className="pt-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
