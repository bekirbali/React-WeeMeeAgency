import React from "react";
import { motion } from "framer-motion";
import arcelik from "../assets/arcelik.png";
import mercedes from "../assets/mercedes.png";
import cola from "../assets/cola.png";

const References = () => {
  const clients = [
    { name: "Arçelik", logo: arcelik },
    { name: "Mercedes", logo: mercedes },
    { name: "Coca Cola", logo: cola },
  ];

  const testimonials = [
    {
      text: "WeeMee Agency transformed our digital presence completely. Their strategic approach and creative solutions exceeded our expectations.",
      author: "John Doe",
      position: "Marketing Director",
      company: "Tech Solutions Inc.",
    },
    {
      text: "Working with WeeMee has been a game-changer for our brand. Their team's dedication and expertise are unmatched.",
      author: "Jane Smith",
      position: "CEO",
      company: "Global Innovations",
    },
  ];

  return (
    <section id="references" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our References
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by leading brands worldwide
          </p>
        </motion.div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-20">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-8"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-gray-800">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.position}</p>
                <p className="text-gray-500 text-sm">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
