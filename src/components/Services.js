import React from "react";
import { motion } from "framer-motion";
import {
  MagnifyingGlassIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ChatBubbleBottomCenterTextIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    title: "SEO DENEMETİMİ",
    description:
      "Web sitenizin arama motoru optimizasyonunu detaylı bir şekilde analiz ederek, görünürlüğünüzü artıracak öneriler sunuyoruz.",
    icon: MagnifyingGlassIcon,
  },
  {
    title: "WEB SİTESİ ANALİZİ",
    description:
      "Sitenizin performansını, kullanıcı deneyimini ve teknik altyapısını kapsamlı bir şekilde inceleyerek iyileştirme fırsatlarını belirliyoruz.",
    icon: ChartBarIcon,
  },
  {
    title: "İÇERİK STRATEJİSİ GELİŞTİRME",
    description:
      "Markanıza özel, hedef kitlenizi etkileyecek ve dönüşüm oranlarını artıracak içerik stratejileri oluşturuyoruz.",
    icon: DocumentTextIcon,
  },
  {
    title: "SOSYAL MEDYA YÖNETİMİ",
    description:
      "Sosyal medya platformlarında markanızı etkili bir şekilde temsil ederek, topluluk etkileşimini ve marka bilinirliğini artırıyoruz.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    title: "REKLAM KAMPANYALARI",
    description:
      "Hedeflerinize uygun, etkili ve ölçülebilir dijital reklam kampanyaları planlayıp yönetiyoruz.",
    icon: MegaphoneIcon,
  },
];

const Services = () => {
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
            Hizmetlerimiz
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Dijital dünyada işletmenizi büyütmek için kapsamlı çözümler
            sunuyoruz.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20, x: -50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.3,
              }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
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
