import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      {i18n.language === "tr" ? (
        <button
          className={`px-2 py-1 rounded ${
            i18n.language === "en" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => changeLanguage("en")}
        >
          EN
        </button>
      ) : (
        <button
          className={`px-2 py-1 rounded ${
            i18n.language === "tr" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => changeLanguage("tr")}
        >
          TR
        </button>
      )}
    </div>
  );
};

export default LanguageSwitcher;
