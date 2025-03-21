import { Center, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useTranslation } from "react-i18next";
import { SMALL_SCREEN_BREAKPOINT, WEDDING_DATE } from "../../Globals";
import { FancyCountdown } from "../countdown/FancyCountdown";
import { WeddingLogo } from "../logo/WeddingLogo";
import classNames from "./Hero.module.css";

export const Hero = () => {
  const { t, i18n } = useTranslation();

  const isLargeScreen = useMediaQuery(`(min-width: ${SMALL_SCREEN_BREAKPOINT + 1}px)`);

  return (
    <div className={classNames.heroRoot}>
      <Center className={classNames.heroContainer}>
        <WeddingLogo className={classNames.heroWeddingLogo} isSingleLine={isLargeScreen} />
        <Text
          className={`fleur-de-leah-regular ${classNames.heroDateAndLoc}`}
        >{`${WEDDING_DATE.toLocaleDateString(i18n.language, { year: "numeric", month: "long", day: "2-digit" })} ~ ${t("TgM")}`}</Text>
        <FancyCountdown />
      </Center>
    </div>
  );
};
