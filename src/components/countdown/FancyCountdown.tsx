import { Group } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useCountdown } from "../../hooks/useCountdown";
import { FancyCountdownElement } from "./FancyCountdownElement";

export const FancyCountdown = () => {
  const { t } = useTranslation();
  const { months, weeks, days, hours } = useCountdown();

  return (
    <div>
      <Group justify="center" gap="xl">
        <FancyCountdownElement value={months} text={t("months", { count: months })} />
        <FancyCountdownElement value={weeks} text={t("weeks", { count: weeks })} />
        <FancyCountdownElement value={days} text={t("days", { count: days })} />
        <FancyCountdownElement value={hours} text={t("hours", { count: hours })} />
      </Group>
    </div>
  );
};
