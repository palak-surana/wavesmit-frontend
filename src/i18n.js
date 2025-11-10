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
          welcome: "Welcome to Waves",
          home: "Home",
          about: "About Us",
          vision: "Vision",
          events: "Events",
          gallery: "Gallery",
          nss: "NSS",
          awards: "Awards & Achievements",
          report: "Report",
          contact: "Contact",
          guest_lectures: "Guest Lectures",
          workshops: "Workshops",
          social_outreach: "Social Outreach",
          scicon: "Scicon",
          quick_links: "Quick Links",
          mit_place: "MIT Academy of Engineering",
          mit_location: "Alandi, Pune",
          footer_rights: "All Rights Reserved",
          tagline: "💫 Where innovation meets compassion NSS × WAVES.",
        },
      },
      hi: {
        translation: {
          welcome: "वेव्स में आपका स्वागत है",
          home: "मुख्य पृष्ठ",
          about: "हमारे बारे में",
          vision: "दृष्टि",
          events: "कार्यक्रम",
          gallery: "गैलरी",
          nss: "एनएसएस",
          awards: "पुरस्कार और उपलब्धियाँ",
          report: "रिपोर्ट",
          contact: "संपर्क करें",
          guest_lectures: "अतिथि व्याख्यान",
          workshops: "कार्यशालाएँ",
          social_outreach: "सामाजिक पहुँच",
          scicon: "साइकों",
          quick_links: "त्वरित लिंक",
          mit_place: "एमआईटी एकेडमी ऑफ इंजीनियरिंग",
          mit_location: "आळंदी, पुणे",
          footer_rights: "सर्वाधिकार सुरक्षित",
          tagline: "💫 जहां नवाचार दया से मिलता है NSS × WAVES।",
        },
      },
    },
  });

export default i18n;
