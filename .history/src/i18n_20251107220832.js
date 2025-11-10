import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        about: "About Us",
        vision: "Vision",
        events: "Events",
        gallery: "Gallery",
        footerText: "© 2025 WAVES MITAOE. All rights reserved.",
      },
    },
    hi: {
      translation: {
        home: "मुखपृष्ठ",
        about: "हमारे बारे में",
        vision: "दृष्टि",
        events: "कार्यक्रम",
        gallery: "गैलरी",
        footerText: "© 2025 WAVES MITAOE. सर्वाधिकार सुरक्षित।",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
