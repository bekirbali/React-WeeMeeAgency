import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();

  const faqItems = [
    {
      key: "services",
      question: t("faq.items.services.question"),
      answer: t("faq.items.services.answer"),
    },
    {
      key: "timeline",
      question: t("faq.items.timeline.question"),
      answer: t("faq.items.timeline.answer"),
    },
    {
      key: "international",
      question: t("faq.items.international.question"),
      answer: t("faq.items.international.answer"),
    },
    {
      key: "pricing",
      question: t("faq.items.pricing.question"),
      answer: t("faq.items.pricing.answer"),
    },
    {
      key: "existing",
      question: t("faq.items.existing.question"),
      answer: t("faq.items.existing.answer"),
    },
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          {t("faq.title")}
        </motion.h1>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqItems.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.question}
              </h3>
              <p className="text-gray-600">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
