import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageChooser.css";

export const LanguageChooser = () => {
  const { i18n } = useTranslation();

  const changeLanguageFactory = useCallback((language: string) => () => i18n.changeLanguage(language), [i18n]);

  return (
    <div className="language-chooser-container">
      <button className="language-chooser" onClick={changeLanguageFactory("hu")}>
        HU
      </button>
      <button className="language-chooser" onClick={changeLanguageFactory("en")}>
        EN
      </button>
      <button className="language-chooser" onClick={changeLanguageFactory("ro")}>
        RO
      </button>
    </div>
  );
};
