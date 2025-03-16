import { Center, Overlay, Text } from "@mantine/core";
import { IconBackhoe } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { Header } from "../components/header/Header";
import classNames from "./UnderConstruction.module.css";

export const UnderConstruction = () => {
  const { t } = useTranslation();

  return (
    <div className={classNames.underConstructionRoot}>
      <Overlay color="#fff" opacity={0.9} zIndex={1} />

      <Header />

      <div className={classNames.underConstructionContainer}>
        <Center className={classNames.underConstructionInnerContainer}>
          <IconBackhoe size="min(60vw, 60vh)" color="darkgreen" strokeWidth={1.5} />
          <Text className={classNames.underConstructionText}>{t("underConstruction")}</Text>
        </Center>
      </div>
    </div>
  );
};
