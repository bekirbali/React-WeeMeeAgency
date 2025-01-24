import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useLocation, useNavigate } from "react-router-dom";

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const faqItems = [
    {
      key: "seo-nedir",
      question: t("faq.items.seo-nedir.question"),
      answer: t("faq.items.seo-nedir.answer"),
    },
    {
      key: "seo-calismalari-nelerdir",
      question: t("faq.items.seo-calismalari-nelerdir.question"),
      answer: t("faq.items.seo-calismalari-nelerdir.answer"),
    },
    {
      key: "seo-calismalari-ne-kadar-surede-sonuc-verir",
      question: t(
        "faq.items.seo-calismalari-ne-kadar-surede-sonuc-verir.question"
      ),
      answer: t("faq.items.seo-calismalari-ne-kadar-surede-sonuc-verir.answer"),
    },
    {
      key: "seo-hizmeti-almanin-faydalari",
      question: t("faq.items.seo-hizmeti-almanin-faydalari.question"),
      answer: t("faq.items.seo-hizmeti-almanin-faydalari.answer"),
    },
    {
      key: "web-sitesi-analizi-neden-onemlidir",
      question: t("faq.items.web-sitesi-analizi-neden-onemlidir.question"),
      answer: t("faq.items.web-sitesi-analizi-neden-onemlidir.answer"),
    },
    {
      key: "web-sitesi-analizi-kapsaminda-neler-yapilir",
      question: t(
        "faq.items.web-sitesi-analizi-kapsaminda-neler-yapilir.question"
      ),
      answer: t("faq.items.web-sitesi-analizi-kapsaminda-neler-yapilir.answer"),
    },
    {
      key: "web-sitesi-analizi-hangi-araclarla-yapilir",
      question: t(
        "faq.items.web-sitesi-analizi-hangi-araclarla-yapilir.question"
      ),
      answer: t("faq.items.web-sitesi-analizi-hangi-araclarla-yapilir.answer"),
    },
    {
      key: "web-sitesi-analizinin-faydalari",
      question: t("faq.items.web-sitesi-analizinin-faydalari.question"),
      answer: t("faq.items.web-sitesi-analizinin-faydalari.answer"),
    },
    {
      key: "icerik-stratejisi-nedir",
      question: t("faq.items.icerik-stratejisi-nedir.question"),
      answer: t("faq.items.icerik-stratejisi-nedir.answer"),
    },
    {
      key: "icerik-stratejisi-neden-onemlidir",
      question: t("faq.items.icerik-stratejisi-neden-onemlidir.question"),
      answer: t("faq.items.icerik-stratejisi-neden-onemlidir.answer"),
    },
    {
      key: "hangi-tür-icerikler-uretiyorsunuz",
      question: t("faq.items.hangi-tür-icerikler-uretiyorsunuz.question"),
      answer: t("faq.items.hangi-tür-icerikler-uretiyorsunuz.answer"),
    },
    {
      key: "icerikler-seo-uyumlu-mu-olacak",
      question: t("faq.items.icerikler-seo-uyumlu-mu-olacak.question"),
      answer: t("faq.items.icerikler-seo-uyumlu-mu-olacak.answer"),
    },
    {
      key: "sosyal-medya-yonetimi-nedir",
      question: t("faq.items.sosyal-medya-yonetimi-nedir.question"),
      answer: t("faq.items.sosyal-medya-yonetimi-nedir.answer"),
    },
    {
      key: "hangi-sosyal-medya-platformlarinda-hizmet-veriyorsunuz",
      question: t(
        "faq.items.hangi-sosyal-medya-platformlarinda-hizmet-veriyorsunuz.question"
      ),
      answer: t(
        "faq.items.hangi-sosyal-medya-platformlarinda-hizmet-veriyorsunuz.answer"
      ),
    },
    {
      key: "sosyal-medya-yonetiminin-faydalari",
      question: t("faq.items.sosyal-medya-yonetiminin-faydalari.question"),
      answer: t("faq.items.sosyal-medya-yonetiminin-faydalari.answer"),
    },
    {
      key: "sosyal-medya-stratejiniz-nedir",
      question: t("faq.items.sosyal-medya-stratejiniz-nedir.question"),
      answer: t("faq.items.sosyal-medya-stratejiniz-nedir.answer"),
    },
    {
      key: "dijital-pazarlama-nedir",
      question: t("faq.items.dijital-pazarlama-nedir.question"),
      answer: t("faq.items.dijital-pazarlama-nedir.answer"),
    },
    {
      key: "dijital-pazarlama-hizmetleri-nelerdir",
      question: t("faq.items.dijital-pazarlama-hizmetleri-nelerdir.question"),
      answer: t("faq.items.dijital-pazarlama-hizmetleri-nelerdir.answer"),
    },
    {
      key: "dijital-pazarlama-calismalarinin-faydalari-nelerdir",
      question: t(
        "faq.items.dijital-pazarlama-calismalarinin-faydalari-nelerdir.question"
      ),
      answer: t(
        "faq.items.dijital-pazarlama-calismalarinin-faydalari-nelerdir.answer"
      ),
    },
    {
      key: "dijital-pazarlama-stratejiniz-nedir",
      question: t("faq.items.dijital-pazarlama-stratejiniz-nedir.question"),
      answer: t("faq.items.dijital-pazarlama-stratejiniz-nedir.answer"),
    },
  ];

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    const questionIndex = faqItems.findIndex((item) => item.key === hash);
    if (questionIndex !== -1) {
      setOpenIndex(questionIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

  const toggleQuestion = (index) => {
    const newIndex = openIndex === index ? null : index;
    setOpenIndex(newIndex);

    if (newIndex !== null) {
      navigate(`#${faqItems[index].key}`);
    } else {
      navigate("");
    }
  };

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
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="h-6 w-6 text-gray-500" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
