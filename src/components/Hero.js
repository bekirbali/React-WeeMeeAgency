import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="section min-h-screen flex items-center bg-gray-50"
    >
      <div className="container flex flex-col md:flex-row items-center justify-center">
        <div className="grid md:grid-cols-1 gap-8 items-center text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="sr-only">Dijital Pazarlama</h1>
            <h2 className="text-5xl md:text-[108px] font-bold mb-6">
              {t("hero.title")} <span className="text-primary bg-black"></span>
            </h2>
            <p className="text-gray-600 text-lg md:text-2xl mb-8">
              {t("hero.subtitle")}
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-[50%]"
        >
          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-64}
              duration={50}
              className="btn-primary cursor-pointer mx-auto md:scale-150"
            >
              {t("hero.cta")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
