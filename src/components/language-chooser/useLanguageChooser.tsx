import { Menu } from "@mantine/core";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { I18N_SUPPORTED_LANGUAGES } from "../../i18n";

export const useLanguageChooser = (showLabel = true) => {
  const { i18n } = useTranslation();

  const changeLanguageFactory = useCallback((language: string) => () => i18n.changeLanguage(language), [i18n]);

  const languageMenuItems = I18N_SUPPORTED_LANGUAGES.filter(({ languageCode }) => languageCode !== i18n.language).map(
    ({ languageCode, label }) => (
      <Menu.Item
        key={languageCode}
        leftSection={<span className={`fi fi-${languageCode === "en" ? "gb" : languageCode}`} />}
        onClick={changeLanguageFactory(languageCode)}
      >
        {showLabel ? label : null}
      </Menu.Item>
    ),
  );

  return { languageMenuItems };
};
