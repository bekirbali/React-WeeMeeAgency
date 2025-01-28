import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../index.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(false);
  const [lang, setLang] = useState(i18n.language);

  const toggleLanguage = () => {
    setIsEnglish((prev) => !prev);
    i18n.changeLanguage(lang === "tr" ? "en" : "tr");
    setLang(lang === "tr" ? "en" : "tr");
  };

  return (
    <div
      className="toggle-wrapper"
      onClick={() => {
        return toggleLanguage();
      }}
    >
      <div className={`toggle-switch ${isEnglish ? "active" : ""}`}>
        <button className="toggle-knob" />
        <button className={`label left ${isEnglish ? "" : "text-white"}`}>
          TR
        </button>
        <button className={`${isEnglish ? "text-white" : ""} label right`}>
          EN
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
