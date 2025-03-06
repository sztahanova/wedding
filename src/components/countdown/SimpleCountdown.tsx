import { useTranslation } from "react-i18next";
import { useCountdown } from "../../hooks/useCountdown";
import "./SimpleCountdown.css";

export const SimpleCountdown = () => {
  const { t } = useTranslation();
  const countdown = useCountdown();

  return countdown != null ? (
    <div className="main-text countdown">
      {t("countdown", { months: countdown.months, weeks: countdown.weeks, days: countdown.days, hours: countdown.hours })}
    </div>
  ) : null;
};
