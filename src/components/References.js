import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { alarga, sorbil, suzenia } from "../assets";

// Placeholder logos (replace with actual company logos)
// const logos = Array(3).fill("/logo-placeholder.png");
const logos = [
  {
    name: "Alarga",
    logo: alarga,
  },
  {
    name: "Sorbil",
    logo: sorbil,
  },
  {
    name: "Suzenia",
    logo: suzenia,
  },
];

const References = () => {
  const { t } = useTranslation();

  return (
    <section id="references" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t("references.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            {t("references.subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full flex items-center justify-center"
            >
              <div className="w-full max-w-[250px] aspect-[4/3] flex items-center justify-center transition-all cursor-pointer p-4">
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="max-w-full max-h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600">
            
          </p>
        </motion.div> */}
      </div>
    </section>
  );
};

export default References;
