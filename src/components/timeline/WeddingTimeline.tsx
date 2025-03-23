import { IconBuildingChurch, IconCamera, IconConfetti, IconContract, IconZzz } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { VerticalTimeline, VerticalTimelineElement, VerticalTimelineElementProps } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const commonProps: Partial<VerticalTimelineElementProps> = {
  className: "wedding-timeline-element",
  iconStyle: {
    background: "darkgreen",
    color: "gold",
    boxShadow: "0 0 0 2px gold, inset 0 1px 0 rgba(0, 0, 0, .08), 0 2px 0 4px rgba(0, 0, 0, .05)",
  },
  intersectionObserverProps: { triggerOnce: false },
};

export const WeddingTimeline = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: "10rem 0" }}>
      <VerticalTimeline lineColor="darkgreen" layout="2-columns">
        <VerticalTimelineElement
          {...commonProps}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <text y=".65em" font-size="150" fill="gold">
                ⚭
              </text>
            </svg>
          }
        />
        <VerticalTimelineElement {...commonProps} date={t("tbd")} icon={<IconContract />}>
          <h3 className="wedding-timeline-element-title">{t("civilWedding")}</h3>
          <h4 className="wedding-timeline-element-subtitle">{t("tbd")}</h4>
          <p></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement {...commonProps} date={t("tbd")} icon={<IconBuildingChurch />}>
          <h3 className="wedding-timeline-element-title">{t("churchWedding")}</h3>
          <h4 className="wedding-timeline-element-subtitle">{t("tbd")}</h4>
          <p></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement {...commonProps} date={t("tbd")} icon={<IconCamera />}>
          <h3 className="wedding-timeline-element-title">{t("takingPictures")}</h3>
          <h4 className="wedding-timeline-element-subtitle">{t("tbd")}</h4>
          <p></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement {...commonProps} date={t("tbd")} icon={<IconConfetti />}>
          <h3 className="wedding-timeline-element-title">{t("weddingReception")}</h3>
          <h4 className="wedding-timeline-element-subtitle">{t("tbd")}</h4>
          <p></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement {...commonProps} icon={<IconZzz />} />
      </VerticalTimeline>
    </div>
  );
};
