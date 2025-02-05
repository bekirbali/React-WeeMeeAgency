import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 text-left flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="p-4 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What services does WeeMeAgency offer?",
      answer:
        "We offer a comprehensive range of digital services including web development, digital marketing, branding, and social media management.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on scope and complexity. A typical website project might take 4-8 weeks, while ongoing marketing campaigns are tailored to your needs.",
    },
    {
      question: "Do you offer maintenance and support?",
      answer:
        "Yes, we provide ongoing maintenance and support services to ensure your digital assets remain up-to-date and perform optimally.",
    },
    {
      question: "What makes WeeMeAgency different?",
      answer:
        "We combine creative excellence with technical expertise, delivering customized solutions that drive real business results. Our client-first approach ensures your success is our priority.",
    },
  ];

  return (
    <section className="min-h-screen py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h1>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
