import { Duration, intervalToDuration } from "date-fns";
import { useCallback, useEffect, useState } from "react";
import {
  NUMBER_OF_DAYS_IN_WEEK,
  NUMBER_OF_MILLISECONDS_IN_SECOND,
  NUMBER_OF_MINUTES_IN_HOUR,
  NUMBER_OF_SECONDS_IN_MINUTE,
  WEDDING_DATE,
} from "../Globals";

export const useCountdown = (): Duration => {
  const [countdown, setCountdown] = useState<Duration>({ years: 0, months: 0, weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

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

  return countdown;
};
