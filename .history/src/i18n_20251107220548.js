// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome to Waves",
        college: "MIT Academy of Engineering",
        about: "About Us",
        vision: "Vision",
        events: "Events",
        gallery: "Gallery",
        contact: "Contact",
      },
    },
    hi: {
      translation: {
        welcome: "वेव्स में आपका स्वागत है",
        college: "एमआईटी एकेडमी ऑफ इंजीनियरिंग",
        about: "हमारे बारे में",
        vision: "दृष्टि",
        events: "कार्यक्रम",
        gallery: "गैलरी",
        contact: "संपर्क करें",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
