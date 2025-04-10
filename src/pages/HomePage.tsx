import { Overlay } from "@mantine/core";
import { Hero } from "../components/hero/Hero";
import { WeddingTimeline } from "../components/timeline/WeddingTimeline";
import classNames from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div className={classNames.homePageRoot}>
      <Overlay opacity={0.4} zIndex={0} className={classNames.homePageOverlay} />
      <div className={`${classNames.homePageImageContainer} ${classNames.homePageContainerFirst}`}>
        <Hero />
      </div>
      <div className={`${classNames.homePageImageContainer} ${classNames.homePageContainerSecond}`}>
        <WeddingTimeline />
      </div>
      <div className={`${classNames.homePageImageContainer} ${classNames.homePageContainerThird}`}>
        <div style={{ height: "500px", width: "100%" }} />
      </div>
    </div>
  );
};
