import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  MagnifyingGlassIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ChatBubbleBottomCenterTextIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";
import "../index.css";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("services.seoAudit"),
      description: t("services.seoAuditDesc"),
      icon: MagnifyingGlassIcon,
    },
    {
      title: t("services.webAnalysis"),
      description: t("services.webAnalysisDesc"),
      icon: ChartBarIcon,
    },
    {
      title: t("services.contentStrategy"),
      description: t("services.contentStrategyDesc"),
      icon: DocumentTextIcon,
    },
    {
      title: t("services.socialMedia"),
      description: t("services.socialMediaDesc"),
      icon: ChatBubbleBottomCenterTextIcon,
    },
    {
      title: t("services.advertising"),
      description: t("services.advertisingDesc"),
      icon: MegaphoneIcon,
    },
  ];

  return (
    <section id="services" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t("services.title")}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 0, x: -50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.3,
              }}
              className="bg-[#fafafa] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            >
              <service.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
