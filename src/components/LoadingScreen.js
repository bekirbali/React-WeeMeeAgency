// ! yeni yapı
import React from "react";
import { motion } from "framer-motion";
import { weemeelogo } from "../assets";

const LoadingScreen = () => {
  const logoVariant = {
    hidden: { opacity: 0, scale: 0.2 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5 },
    },
  };

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 md:gap-4">
      <motion.img
        src={weemeelogo}
        alt="WeeMe Logo"
        className="w-64 md:w-[480px]"
        variants={logoVariant}
        initial="hidden"
        animate="visible"
      />
    </div>
  );
};

export default LoadingScreen;
