import { ActionIcon, Menu } from "@mantine/core";
import { useTranslation } from "react-i18next";
import classNames from "./LanguageChooserMenu.module.css";
import { useLanguageChooser } from "./useLanguageChooser";

export const LanguageChooserMenu = () => {
  const { i18n } = useTranslation();
  const { languageMenuItems } = useLanguageChooser(false);

  return (
    <Menu classNames={{ itemSection: classNames.menuItem }}>
      <Menu.Target>
        <ActionIcon variant="transparent" className={classNames.languageButton}>
          <span className={`fi fi-${i18n.language === "en" ? "gb" : i18n.language}`} />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>{languageMenuItems}</Menu.Dropdown>
    </Menu>
  );
};
