import i18n, { InitOptions } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./translation/en.json";
import hu from "./translation/hu.json";
import ro from "./translation/ro.json";

export const I18N_SUPPORTED_LANGUAGES = [
  { languageCode: "hu", label: "Magyar" },
  { languageCode: "en", label: "English" },
  { languageCode: "ro", label: "Română" },
];

const resources = {
  en,
  hu,
  ro,
};

const i18nOptions: InitOptions = {
  debug: true,
  resources,
  supportedLngs: I18N_SUPPORTED_LANGUAGES.map(({ languageCode }) => languageCode),
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
