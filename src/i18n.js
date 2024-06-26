import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languagedetector from "i18next-browser-languagedetector"
import translateEn from "../src/locale/en.json"
import translateAr from "../src/locale/ar.json"



const resources = {
  en: {
    translation: translateEn
  },
  ar: {
    translation: translateAr
  }
};

i18n
  .use(languagedetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false
    },
    React:{
        useSuspense:false
    }
  });

  export default i18n;