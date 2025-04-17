import { Button, Group, Overlay } from "@mantine/core";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { Hero } from "../components/hero/Hero";
import { WeddingTimeline } from "../components/timeline/WeddingTimeline";
import { FAQ_LINK, RSVP_LINK } from "../Globals";
import classNames from "./HomePage.module.css";

export const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const navigateToPageFactory = useCallback((link: string) => () => navigate(link), [navigate]);

  return (
    <div className={classNames.homePageRoot}>
      <Overlay opacity={0.4} zIndex={0} className={classNames.homePageOverlay} />

      <div className={`${classNames.homePageImageContainer} ${classNames.homePageContainerFirst}`}>
        <Hero />
      </div>

      <div className={classNames.homePageButtonContainer}>
        <Group justify="center" gap="5vw">
          <Button
            variant="filled"
            color="gold"
            className={classNames.homePageButton}
            size="xl"
            radius="md"
            onClick={navigateToPageFactory(RSVP_LINK)}
          >
            {t("rsvpNow")}
          </Button>
          <Button
            variant="filled"
            color="gold"
            className={classNames.homePageButton}
            size="xl"
            radius="md"
            onClick={navigateToPageFactory(FAQ_LINK)}
          >
            {t("goToFAQ")}
          </Button>
        </Group>
      </div>

      <div className={`${classNames.homePageImageContainer} ${classNames.homePageContainerSecond}`}>
        <WeddingTimeline />
      </div>

      <div className={classNames.homePageButtonContainer}>
        <Group justify="center" gap="5vw">
          <Button variant="filled" color="gold" className={classNames.homePageButton} size="xl" radius="md" onClick={() => null}>
            {t("sendAWish")}
          </Button>
          <Button variant="filled" color="gold" className={classNames.homePageButton} size="xl" radius="md" onClick={() => null}>
            {t("makeAWish")}
          </Button>
        </Group>
      </div>

      <div className={`${classNames.homePageImageContainer} ${classNames.homePageContainerThird}`}>
        <div style={{ height: "800px", width: "100%" }} />
      </div>
    </div>
  );
};
