import { Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconBuildingChurch, IconConfetti, IconContract, IconZzz } from "@tabler/icons-react";
import { TFunction } from "i18next";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { VerticalTimeline, VerticalTimelineElement, VerticalTimelineElementProps } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useConfetti } from "../../hooks/useConfetti";
import classNames from "./WeddingTimeline.module.css";

export const WeddingTimeline = () => {
  const { t } = useTranslation();
  const { fireConfetti } = useConfetti();
  const isLargeScreen = useMediaQuery("only screen and (min-width: 1170px)") ?? true;

  const throwConfettiWhenInView = useCallback(
    (inView: boolean) => {
      if (inView) {
        fireConfetti();
      }
    },
    [fireConfetti],
  );

  const timelineElementPropsFactory = useCallback(
    (t: TFunction, hasContent = true, throwConfetti = false): Partial<VerticalTimelineElementProps> => ({
      date: hasContent ? t("tbd") : undefined,
      className: classNames.weddingTimelineElement,
      iconClassName: classNames.weddingTimelineIcon,
      iconStyle: {
        width: isLargeScreen ? 100 : 80,
        height: isLargeScreen ? 100 : 80,
        marginLeft: isLargeScreen ? -50 : undefined,
        background: "darkgreen",
        color: "gold",
        boxShadow: "0 0 0 2px gold, inset 0 1px 0 rgba(0, 0, 0, 0.08), 0 2px 0 4px rgba(0, 0, 0, 0.05)",
      },
      ...(hasContent
        ? {
            contentStyle: {
              backgroundColor: "rgba(255, 215, 0, 0.8)",
              color: "darkgreen",
              boxShadow: "0 3px 0 rgba(0, 100, 0, 0.4)",
              display: "flex",
              flexDirection: "column",
              marginLeft: isLargeScreen ? undefined : 100,
            },
            contentArrowStyle: {
              borderRight: "7px solid rgba(255, 215, 0, 0.6)",
            },
          }
        : {}),
      intersectionObserverProps: {
        triggerOnce: false,
        onChange: throwConfetti ? throwConfettiWhenInView : undefined,
      },
    }),
    [isLargeScreen, throwConfettiWhenInView],
  );

  return (
    <div style={{ padding: "10rem 0" }}>
      <VerticalTimeline lineColor="darkgreen" layout="2-columns" className={classNames.weddingTimeline}>
        <VerticalTimelineElement
          {...timelineElementPropsFactory(t, false)}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <text y=".65em" font-size="150" fill="gold">
                ⚭
              </text>
            </svg>
          }
        />
        <VerticalTimelineElement {...timelineElementPropsFactory(t)} icon={<IconContract />}>
          <Text span className={classNames.weddingTimelineElementTitle}>
            {t("civilWedding")}
          </Text>
          <Text span className={classNames.weddingTimelineElementSubtitle}>
            {t("tbd")}
          </Text>
          <div className={classNames.weddingTimelineElementMapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d982.8667615654073!2d24.566203173459563!3d46.546942801311616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474bb7ee9e5a1cdb%3A0x5fa2b06267b5b11!2zQ2FzYSBDxINzxIN0b3JpaWxvcg!5e0!3m2!1sen!2shu!4v1742742996653!5m2!1sen!2shu"
              className={classNames.weddingTimelineElementMap}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement {...commonPropsFactory(t)} icon={<IconCamera />}>
              <Text span className={classNames.weddingTimelineElementTitle}>
                {t("takingPictures")}
              </Text>
              <Text span className={classNames.weddingTimelineElementSubtitle}>
                {t("tbd")}
              </Text>
              <p></p>
            </VerticalTimelineElement> */}
        <VerticalTimelineElement {...timelineElementPropsFactory(t)} icon={<IconBuildingChurch />}>
          <Text span className={classNames.weddingTimelineElementTitle} style={{ fontSize: "2rem" }}>
            {t("churchWedding")}
          </Text>
          <Text span className={classNames.weddingTimelineElementSubtitle}>
            {t("tbd")}
          </Text>
          <div className={classNames.weddingTimelineElementMapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2744.9033739490887!2d24.55804327582189!3d46.52981386171284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474bb7ba399790b9%3A0x58af3a61dce154a6!2sK%C3%B6vesdomb%20Reformed%20Protestant%20Church!5e0!3m2!1sen!2shu!4v1742722864180!5m2!1sen!2shu&language=hu"
              className={classNames.weddingTimelineElementMap}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement {...timelineElementPropsFactory(t, true, true)} icon={<IconConfetti />}>
          <Text span className={classNames.weddingTimelineElementTitle}>
            {t("weddingReception")}
          </Text>
          <Text span className={classNames.weddingTimelineElementSubtitle}>
            {t("tbd")}
          </Text>
          <div className={classNames.weddingTimelineElementMapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2743.099939630061!2d24.56545167582388!3d46.565488959289965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474bb733af387ccb%3A0x4469061df0da3eb!2sTHE%20ISLAND%20Green%20garden%20Events!5e0!3m2!1sen!2shu!4v1742743568111!5m2!1sen!2shu"
              className={classNames.weddingTimelineElementMap}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement {...timelineElementPropsFactory(t, false)} icon={<IconZzz />} />
      </VerticalTimeline>
    </div>
  );
};
