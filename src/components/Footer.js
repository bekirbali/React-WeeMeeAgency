import React from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t("navbar.home"), to: "home" },
    { name: t("navbar.services"), to: "services" },
    { name: t("navbar.references"), to: "references" },
    { name: t("navbar.contact"), to: "contact" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "https://www.instagram.com/weemeagency/" },
    { name: "Twitter", href: "https://www.instagram.com/weemeagency/" },
    { name: "LinkedIn", href: "https://www.instagram.com/weemeagency/" },
    { name: "Instagram", href: "https://www.instagram.com/weemeagency/" },
  ];

  return (
    <footer className="bg-secondary text-white">
      <div className="container">
        <div className="py-12 px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="col-span-1">
              <h3 className="text-2xl font-bold mb-4">WeeMeAgency</h3>
              <p className="text-gray-300">{t("footer.description")}</p>
            </div>

            {/* Quick Links */}
            <div className="col-span-1">
              <h4 className="text-lg font-semibold mb-4">
                {t("footer.quickLinks")}
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      spy={true}
                      smooth={true}
                      offset={-64}
                      duration={50}
                      className="text-gray-300 hover:text-white cursor-pointer transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <RouterLink
                    to="/faq"
                    className="text-gray-300 hover:text-white cursor-pointer transition-colors"
                  >
                    {t("navbar.faq")}
                  </RouterLink>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="col-span-1">
              <h4 className="text-lg font-semibold mb-4">
                {t("footer.followUs")}
              </h4>
              <ul className="space-y-2">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <RouterLink
                      target="_blank"
                      to={link.href}
                      spy={true}
                      smooth={true}
                      offset={-64}
                      duration={50}
                      className="text-gray-300 hover:text-white cursor-pointer transition-colors"
                    >
                      {link.name}
                    </RouterLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm cursor-default">
              © {currentYear} WeeMeAgency. {t("footer.rights")}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
