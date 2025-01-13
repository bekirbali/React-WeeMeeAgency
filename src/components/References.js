import React from "react";
import { motion } from "framer-motion";

// Placeholder logos (replace with actual company logos)
const logos = Array(6).fill("/logo-placeholder.png");

const References = () => {
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
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            We've helped companies of all sizes achieve their digital goals.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
          {logos.map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                <div className="text-gray-400 font-semibold">
                  LOGO {index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600">
            Join our growing list of satisfied clients and experience the
            difference.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default References;
