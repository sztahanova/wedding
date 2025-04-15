import { useMediaQuery } from "@mantine/hooks";
import { IconBuildingChurch, IconConfetti, IconContract, IconZzz } from "@tabler/icons-react";
import { useCallback } from "react";
import { VerticalTimeline, VerticalTimelineElement, VerticalTimelineElementProps } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useConfetti } from "../../hooks/useConfetti";
import classNames from "./WeddingTimeline.module.css";
import { Places } from "./WeddingTimeline.types";
import { WeddingTimelineElementContent } from "./WeddingTimelineElementContent";

const VERTICAL_TIMELINE_ELEMENT_CONTENT_BG = "rgba(255, 215, 0, 0.8)";

export const WeddingTimeline = () => {
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
    (hasContent = true, throwConfetti = false): Partial<VerticalTimelineElementProps> => ({
      className: classNames.weddingTimelineElement,
      iconClassName: classNames.weddingTimelineIcon,
      dateClassName: classNames.weddingTimelineElementDate,
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
              backgroundColor: VERTICAL_TIMELINE_ELEMENT_CONTENT_BG,
              color: "darkgreen",
              boxShadow: "0 3px 0 rgba(0, 100, 0, 0.4)",
              display: "flex",
              flexDirection: "column",
              marginLeft: isLargeScreen ? undefined : 100,
            },
            contentArrowStyle: {
              border: "16px solid transparent",
              borderRight: `16px solid ${VERTICAL_TIMELINE_ELEMENT_CONTENT_BG}`,
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
          {...timelineElementPropsFactory(false)}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <text y=".65em" font-size="150" fill="gold">
                ⚭
              </text>
            </svg>
          }
        />
        <VerticalTimelineElement {...timelineElementPropsFactory()} date="12:30" icon={<IconBuildingChurch />}>
          <WeddingTimelineElementContent place={Places.CHURCH} />
        </VerticalTimelineElement>
        <VerticalTimelineElement {...timelineElementPropsFactory()} date="14:00" icon={<IconContract />}>
          <WeddingTimelineElementContent place={Places.COURTHOUSE} />
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement {...commonPropsFactory()} icon={<IconCamera />}>
              <Text span className={classNames.weddingTimelineElementTitle}>
                {t("takingPictures")}
              </Text>
              <Text span className={classNames.weddingTimelineElementSubtitle}>
                {t("tbd")}
              </Text>
              <p></p>
            </VerticalTimelineElement> */}
        <VerticalTimelineElement {...timelineElementPropsFactory(true, true)} date="16:00" icon={<IconConfetti />}>
          <WeddingTimelineElementContent place={Places.RECEPTION} />
        </VerticalTimelineElement>
        <VerticalTimelineElement {...timelineElementPropsFactory(false)} icon={<IconZzz />} />
      </VerticalTimeline>
    </div>
  );
};
