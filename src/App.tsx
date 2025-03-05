import { Duration, intervalToDuration } from "date-fns";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import "./App.css";

const NUMBER_OF_DAYS_IN_WEEK = 7;
const NUMBER_OF_MINUTES_IN_HOUR = 60;
const NUMBER_OF_SECONDS_IN_MINUTE = 60;
const NUMBER_OF_MILLISECONDS_IN_SECOND = 1000;

const SMALL_SCREEN_BREAKPOINT = 640;
const MEDIUM_SCREEN_BREAKPOINT = 1100;

const WEDDING_DATE = new Date(2025, 9, 25, 23, 59, 59);

function App() {
  const { t, i18n } = useTranslation();

  const [countdown, setCountdown] = useState<Duration>();

  const isSmallScreen = useMediaQuery({ query: `(max-width: ${SMALL_SCREEN_BREAKPOINT}px)` });
  const isLargeScreen = useMediaQuery({ query: `(min-width: ${MEDIUM_SCREEN_BREAKPOINT + 1}px)` });

  useEffect(() => {
    updateCountdown();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateCountdown = useCallback(() => {
    const rawDuration: Duration = intervalToDuration({ start: new Date(), end: WEDDING_DATE });

    const weeks = Math.floor((rawDuration.days ?? 0) / NUMBER_OF_DAYS_IN_WEEK);
    const days = (rawDuration.days ?? 0) % NUMBER_OF_DAYS_IN_WEEK;

    setCountdown({ ...rawDuration, weeks, days });
  }, []);

  setInterval(updateCountdown, NUMBER_OF_MILLISECONDS_IN_SECOND * NUMBER_OF_SECONDS_IN_MINUTE * NUMBER_OF_MINUTES_IN_HOUR);

  return (
    <div className="root">
      <img
        src={isSmallScreen ? "/photos/Zita_Peti_Albania_20230810_640x922.jpg" : "/photos/Zita_Peti_Albania_20230810.jpg"}
        className="background-image"
        alt="Zita és Péter"
      />

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
        {countdown != null ? (
          <div className="main-text countdown">
            {t("countdown", { months: countdown.months, weeks: countdown.weeks, days: countdown.days })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
