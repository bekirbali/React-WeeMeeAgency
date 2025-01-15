import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  // return (
  //   <div className="fixed inset-0 bg-white flex items-center justify-center">
  //     <motion.div
  //       initial={{ opacity: 0, y: 120 }}
  //       animate={{ opacity: 1, y: 0 }}
  //       transition={{ duration: 0.8 }}
  //       className="text-4xl md:text-[96px] font-bold text-primary"
  //     >
  //       WeeMe Agency
  //       <motion.div
  //         className="h-1 bg-primary mt-10"
  //         initial={{ width: 0 }}
  //         animate={{ width: "100%" }}
  //         transition={{ duration: 1.5, ease: "easeInOut" }}
  //       />
  //     </motion.div>
  //   </div>
  // );
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

  return (
    <motion.div
      className="fixed inset-0 bg-white flex items-center justify-center font-bold text-4xl md:text-[128px] text-primary"
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
  );
};

export default LoadingScreen;
