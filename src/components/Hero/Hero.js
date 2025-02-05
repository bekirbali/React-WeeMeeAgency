import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to WeeMeAgency
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Your Partner in Digital Success
          </p>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
