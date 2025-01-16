import React from "react";
import { Link } from "react-scroll";
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
    { name: "Facebook", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Instagram", href: "#" },
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
                    <Link
                      to="home"
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
              </ul>
            </div>

            {/* Newsletter */}
            {/* <div className="col-span-1">
              <h4 className="text-lg font-semibold mb-4">
                {t("footer.newsletter.title")}
              </h4>
              <p className="text-gray-300 mb-4">
                {t("footer.newsletter.description")}
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder={t("footer.newsletter.placeholder")}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  {t("footer.newsletter.button")}
                </button>
              </form>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm cursor-default">
              © {currentYear} WeeMeAgency. {t("footer.rights")}
            </div>
            {/* <div className="flex space-x-4 text-sm">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-64}
                duration={50}
                className="text-gray-300 hover:text-white cursor-pointer transition-colors"
              >
                {t("footer.privacy")}
              </Link>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-64}
                duration={50}
                className="text-gray-300 hover:text-white cursor-pointer transition-colors"
              >
                {t("footer.terms")}
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
