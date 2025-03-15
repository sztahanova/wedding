import { useMediaQuery } from "@mantine/hooks";
import { useTranslation } from "react-i18next";
import { SimpleCountdown } from "../components/countdown/SimpleCountdown";
import { LanguageChooser } from "../components/language-chooser/LanguageChooser";
import {
  EXTRA_SMALL_SCREEN_BREAKPOINT,
  MEDIUM_SCREEN_BREAKPOINT,
  WEDDING_DATE,
  ZITA_PETI_ALBANIA_LANDSCAPE,
  ZITA_PETI_ALBANIA_PORTRAIT,
} from "../Globals";

export const OnePage = () => {
  const { i18n } = useTranslation();

  const isExtraSmallScreen = useMediaQuery(`(max-width: ${EXTRA_SMALL_SCREEN_BREAKPOINT}px)`);
  const isLargeScreen = useMediaQuery(`(min-width: ${MEDIUM_SCREEN_BREAKPOINT + 1}px)`);

  return (
    <div className="root">
      <img
        src={isExtraSmallScreen ? ZITA_PETI_ALBANIA_PORTRAIT : ZITA_PETI_ALBANIA_LANDSCAPE}
        className="background-image"
        alt="Zita és Péter"
      />
      <LanguageChooser />
      <div className="main-container">
        {isLargeScreen ? (
          <div className="fleur-de-leah-regular highlighted-text main-text zita-peter">Zita &#9901; Péter</div>
        ) : (
          <div className="fleur-de-leah-regular highlighted-text main-text zita-peter">
            Zita
            <br />
            &#9901;
            <br />
            Péter
          </div>
        )}
        <div className="fleur-de-leah-regular highlighted-text main-text date">
          {WEDDING_DATE.toLocaleDateString(i18n.language, { year: "numeric", month: "long", day: "2-digit" })}
        </div>
        <SimpleCountdown />
      </div>
    </div>
  );
};
