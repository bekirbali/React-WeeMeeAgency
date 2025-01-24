// ! yeni yapı
import React from "react";
import { motion } from "framer-motion";
import { weemeelogo } from "../assets";

const LoadingScreen = () => {
  const text = "WeeMe Agency"; // Gösterilecek metin
  const letters = text.split(""); // Harfleri ayır

  // Animasyon varyantları
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1.2 / letters.length, // Harfler arasındaki gecikme
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 250 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const logoVariant = {
    hidden: { opacity: 0, scale: 0.3 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 md:gap-4">
      <motion.img
        src={weemeelogo}
        alt="WeeMe Logo"
        className="w-36 md:w-48"
        variants={logoVariant}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        className="flex items-center justify-center font-bold text-4xl md:text-[128px] text-primary"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, index) => (
          <motion.span key={index} variants={child}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
