import { ActionIcon, Menu } from "@mantine/core";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { I18N_SUPPORTED_LANGUAGES } from "../../i18n";
import classNames from "./LanguageChooserMenu.module.css";

export const LanguageChooserMenu = () => {
  const { i18n } = useTranslation();

  const changeLanguageFactory = useCallback((language: string) => () => i18n.changeLanguage(language), [i18n]);

  return (
    <Menu classNames={{ itemSection: classNames["menu-item"] }}>
      <Menu.Target>
        <ActionIcon variant="transparent" className={classNames["language-button"]}>
          <span className={`fi fi-${i18n.language === "en" ? "gb" : i18n.language}`} />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        {I18N_SUPPORTED_LANGUAGES.filter((language) => language !== i18n.language).map((language) => (
          <Menu.Item
            key={language}
            leftSection={<span className={`fi fi-${language === "en" ? "gb" : language}`} />}
            onClick={changeLanguageFactory(language)}
          />
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};
