// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "en",
    interpolation: { escapeValue: false },

    resources: {
      en: {
        translation: {
          "Home": "Home",
          "About Us": "About Us",
          "Vision": "Vision",
          "Events": "Events",
          "Gallery": "Gallery",
          "Contact": "Contact",
          "Quick Links": "Quick Links",
          "MIT Academy of Engineering": "MIT Academy of Engineering",
          "Alandi, Pune": "Alandi, Pune",
          "All Rights Reserved": "All Rights Reserved",
          "💫 Where innovation meets compassion NSS × WAVES.": "💫 Where innovation meets compassion NSS × WAVES.",
        },
      },

      hi: {
        translation: {
          "Home": "मुख्य पृष्ठ",
          "About Us": "हमारे बारे में",
          "Vision": "दृष्टि",
          "Events": "कार्यक्रम",
          "Gallery": "गैलरी",
          "Contact": "संपर्क करें",
          "Quick Links": "त्वरित लिंक",
          "MIT Academy of Engineering": "एमआईटी एकेडमी ऑफ इंजीनियरिंग",
          "Alandi, Pune": "आळंदी, पुणे",
          "All Rights Reserved": "सर्वाधिकार सुरक्षित",
          "💫 Where innovation meets compassion NSS × WAVES.": "💫 जहां नवाचार दया से मिलता है NSS × WAVES।",
        },
      },
    },
  });

export default i18n;
