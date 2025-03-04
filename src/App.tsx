import { Duration, intervalToDuration } from "date-fns";
import { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./App.css";

const NUMBER_OF_DAYS_IN_WEEK = 7;
const NUMBER_OF_MINUTES_IN_HOUR = 60;
const NUMBER_OF_SECONDS_IN_MINUTE = 60;
const NUMBER_OF_MILLISECONDS_IN_SECOND = 1000;

function App() {
  const [countdown, setCountdown] = useState<Duration>();

  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });
  const isMediumScreen = useMediaQuery({ query: "(max-width: 1100px)" });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1101px)" });

  useEffect(() => {
    updateCountdown();
  }, []);

  const updateCountdown = useCallback(() => {
    const rawDuration: Duration = intervalToDuration({
      start: new Date(),
      end: new Date(2025, 9, 25, 23, 59, 59),
    });

    const weeks = Math.floor((rawDuration.days ?? 0) / NUMBER_OF_DAYS_IN_WEEK);
    const days = (rawDuration.days ?? 0) % NUMBER_OF_DAYS_IN_WEEK;

    setCountdown({ ...rawDuration, weeks, days });
  }, []);

  setInterval(updateCountdown, NUMBER_OF_MILLISECONDS_IN_SECOND * NUMBER_OF_SECONDS_IN_MINUTE * NUMBER_OF_MINUTES_IN_HOUR);

  console.log({ isSmallScreen, isMediumScreen, isLargeScreen });

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
        <div className="fleur-de-leah-regular highlighted-text main-text date">2025. október 25.</div>
        {countdown != null ? (
          <div className=" main-text countdown">{`Még ${countdown.months} hónap, ${countdown.weeks} hét, ${countdown.days} nap!`}</div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
