import { IconBuildingChurch, IconCamera, IconConfetti, IconContract, IconZzz } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const WeddingTimeline = () => {
  const { t } = useTranslation();

  return (
    <VerticalTimeline
    //   intersectionObserverProps={{
    //     rootMargin: "0px 0px -40px 0px",
    //     triggerOnce: false,
    //   }}
    >
      <VerticalTimelineElement
        className="wedding-timeline-element"
        iconStyle={{ background: "darkgreen", color: "gold" }}
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <text y=".65em" font-size="150" fill="gold">
              ⚭
            </text>
          </svg>
        }
      />
      <VerticalTimelineElement
        className="wedding-timeline-element"
        // contentStyle={{ background: "darkgreen", color: "gold" }}
        contentArrowStyle={{ borderRight: "7px solid darkgreen" }}
        date={t("tbd")}
        iconStyle={{ background: "darkgreen", color: "gold" }}
        icon={<IconContract />}
      >
        <h3 className="wedding-timeline-element-title">{t("civilWedding")}</h3>
        <h4 className="wedding-timeline-element-subtitle">{t("tbd")}</h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="wedding-timeline-element"
        date={t("tbd")}
        iconStyle={{ background: "darkgreen", color: "gold" }}
        icon={<IconBuildingChurch />}
      >
        <h3 className="wedding-timeline-element-title">{t("churchWedding")}</h3>
        <h4 className="wedding-timeline-element-subtitle">{t("tbd")}</h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="wedding-timeline-element"
        date={t("tbd")}
        iconStyle={{ background: "darkgreen", color: "gold" }}
        icon={<IconCamera />}
      >
        <h3 className="wedding-timeline-element-title">{t("takingPictures")}</h3>
        <h4 className="wedding-timeline-element-subtitle">{t("tbd")}</h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="wedding-timeline-element"
        date={t("tbd")}
        iconStyle={{ background: "darkgreen", color: "gold" }}
        icon={<IconConfetti />}
      >
        <h3 className="wedding-timeline-element-title">{t("weddingReception")}</h3>
        <h4 className="wedding-timeline-element-subtitle">{t("tbd")}</h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="wedding-timeline-element"
        iconStyle={{ background: "darkgreen", color: "gold" }}
        icon={<IconZzz />}
      />
    </VerticalTimeline>
  );
};
