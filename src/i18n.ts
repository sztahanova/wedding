import i18n, { InitOptions } from "i18next";
import en from "./translation/en.json";
import hu from "./translation/hu.json";
import ro from "./translation/ro.json";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en,
  hu,
  ro,
};

const i18nOptions: InitOptions = {
  debug: true,
  resources,
  supportedLngs: ["hu", "en", "ro"],
  fallbackLng: "hu",
  returnObjects: true,
  react: {
    useSuspense: true,
  },
};

export const initI18n = () => {
  i18n.use(LanguageDetector).use(initReactI18next).init(i18nOptions);
  i18n.changeLanguage();
};
