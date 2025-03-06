import { Center, Overlay, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { WEDDING_DATE } from "../../Globals";
import { FancyCountdown } from "../countdown/FancyCountdown";
import { WeddingLogo } from "../logo/WeddingLogo";
import classNames from "./Hero.module.css";

export const Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={classNames.root}>
      <Overlay color="#fff" opacity={0.8} zIndex={1} />

      <Center className={classNames.container}>
        <WeddingLogo fontSize="14rem" />
        <Text
          className={`fleur-de-leah-regular ${classNames.dateAndLoc}`}
        >{`${WEDDING_DATE.toLocaleDateString(i18n.language, { year: "numeric", month: "long", day: "2-digit" })} ~ ${t("TgM")}`}</Text>
        <FancyCountdown />
      </Center>
    </div>
  );
};
