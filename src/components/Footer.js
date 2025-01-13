import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", to: "home" },
    { name: "Services", to: "services" },
    { name: "References", to: "references" },
    { name: "Contact", to: "contact" },
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
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1">
              <h3 className="text-2xl font-bold mb-4">WeeMeAgency</h3>
              <p className="text-gray-300">
                Creating exceptional digital experiences that drive growth and
                success.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-span-1">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      spy={true}
                      smooth={true}
                      offset={-64}
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
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-span-1">
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-300 mb-4">
                Subscribe to our newsletter for updates and insights.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} WeeMeAgency. All rights reserved.
            </div>
            <div className="flex space-x-4 text-sm">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
