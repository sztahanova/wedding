import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { Countdown } from "../components/countdown/Countdown";
import { LanguageChooser } from "../components/language-chooser/LanguageChooser";
import {
  MEDIUM_SCREEN_BREAKPOINT,
  SMALL_SCREEN_BREAKPOINT,
  WEDDING_DATE,
  ZITA_PETI_ALBANIA_LANDSCAPE,
  ZITA_PETI_ALBANIA_PORTRAIT,
} from "../Globals";

export const OnePage = () => {
  const { i18n } = useTranslation();

  const isSmallScreen = useMediaQuery({ query: `(max-width: ${SMALL_SCREEN_BREAKPOINT}px)` });
  const isLargeScreen = useMediaQuery({ query: `(min-width: ${MEDIUM_SCREEN_BREAKPOINT + 1}px)` });

  return (
    <div className="root">
      <img
        src={isSmallScreen ? ZITA_PETI_ALBANIA_PORTRAIT : ZITA_PETI_ALBANIA_LANDSCAPE}
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
        <Countdown />
      </div>
    </div>
  );
};
