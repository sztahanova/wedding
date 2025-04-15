import { Stack, Text } from "@mantine/core";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { WeddingTimelineElementContentProps } from "./WeddingTimeline.types";
import classNames from "./WeddingTimelineElementContent.module.css";
import { getEmbeddedMapProps, getPlacePrefix } from "./WeddingTimelineElementContent.utils";

export const WeddingTimelineElementContent = ({ place }: WeddingTimelineElementContentProps) => {
  const { t, i18n } = useTranslation();

  const prefix = useMemo<string>(() => getPlacePrefix(place), [place]);

  return (
    <Stack gap="md">
      {/* <Text span className={classNames.weddingTimelineElementTitle}>
        {t(prefix)}
      </Text> */}
      <Text span className={classNames.weddingTimelineElementSubtitle}>
        {t(`${prefix}Place`)}
      </Text>
      <Text span className={classNames.weddingTimelineElementAddress}>
        {t(`${prefix}Address`)}
      </Text>
      <div className={classNames.weddingTimelineElementMapContainer}>
        <iframe {...getEmbeddedMapProps(place, classNames.weddingTimelineElementMap, i18n.language)} />
      </div>
    </Stack>
  );
};
