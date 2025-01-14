import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Modal from "./Modal";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacyPolicy: false,
  });

  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.privacyPolicy) {
      alert(t("contact.privacyPolicyRequired"));
      return;
    }
    // Handle form submission here
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_MAIL_KEY
      )
      .then((result) => {
        console.log(result.text, "success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          privacyPolicy: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t("contact.title")}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("contact.phone")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => {
                    // Only allow numbers
                    const value = e.target.value;
                    if (/^\d*$/.test(value)) {
                      handleChange(e); // Update state only if input is valid
                    }
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
                ></textarea>
              </div>
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="privacyPolicy"
                  name="privacyPolicy"
                  checked={formData.privacyPolicy}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
                <label
                  htmlFor="privacyPolicy"
                  className="text-sm text-gray-600"
                >
                  {t("contact.privacyPolicyStart")}{" "}
                  <button
                    type="button"
                    onClick={() => setShowPrivacyModal(true)}
                    className="text-primary hover:underline"
                  >
                    {t("footer.privacy")}
                  </button>{" "}
                  {t("contact.and")}{" "}
                  <button
                    type="button"
                    onClick={() => setShowTermsModal(true)}
                    className="text-primary hover:underline"
                  >
                    {t("footer.terms")}
                  </button>{" "}
                  {t("contact.privacyPolicyEnd")} *
                </label>
              </div>
              <button type="submit" className="btn-primary w-full">
                {t("contact.send")}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {/* {t("contact.title")} */}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPinIcon className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-gray-600">
                      123 Business Street, Suite 100, City, Country
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <PhoneIcon className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-gray-600">+1 (234) 567-8900</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <EnvelopeIcon className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-gray-600">contact@weemeagency.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40489.35547171636!2d28.92614065270649!3d41.03861390783588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e7a7777c43%3A0x4c76cf3dcc8b330b!2sGalata%20Kulesi!5e0!3m2!1str!2str!4v1736768242670!5m2!1str!2str"
                  width="600"
                  height="450"
                  allowFullScreen=""
                  title="map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
        title={t("footer.privacy")}
      >
        <div className="prose prose-sm">
          <h2>{t("privacyPolicy.title")}</h2>
          <p>{t("privacyPolicy.lastUpdated")}</p>
          <h3>{t("privacyPolicy.collection.title")}</h3>
          <p>{t("privacyPolicy.collection.content")}</p>
          <h3>{t("privacyPolicy.usage.title")}</h3>
          <p>{t("privacyPolicy.usage.content")}</p>
          <h3>{t("privacyPolicy.protection.title")}</h3>
          <p>{t("privacyPolicy.protection.content")}</p>
          <h3>{t("privacyPolicy.cookies.title")}</h3>
          <p>{t("privacyPolicy.cookies.content")}</p>
          <h3>{t("privacyPolicy.contact.title")}</h3>
          <p>{t("privacyPolicy.contact.content")}</p>
        </div>
      </Modal>

      {/* Terms of Service Modal */}
      <Modal
        isOpen={showTermsModal}
        onClose={() => setShowTermsModal(false)}
        title={t("footer.terms")}
      >
        <div className="prose prose-sm">
          <h2>{t("terms.title")}</h2>
          <p>{t("terms.lastUpdated")}</p>
          <h3>{t("terms.acceptance.title")}</h3>
          <p>{t("terms.acceptance.content")}</p>
          <h3>{t("terms.services.title")}</h3>
          <p>{t("terms.services.content")}</p>
          <h3>{t("terms.intellectual.title")}</h3>
          <p>{t("terms.intellectual.content")}</p>
          <h3>{t("terms.liability.title")}</h3>
          <p>{t("terms.liability.content")}</p>
          <h3>{t("terms.contact.title")}</h3>
          <p>{t("terms.contact.content")}</p>
        </div>
      </Modal>
    </section>
  );
};

export default Contact;
