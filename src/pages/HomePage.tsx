import { Overlay } from "@mantine/core";
import { Header } from "../components/header/Header";
import { Hero } from "../components/hero/Hero";
import { WeddingTimeline } from "../components/timeline/WeddingTimeline";
import classNames from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div className={classNames.homePageRoot}>
      <Overlay opacity={0.33} zIndex={0} className={classNames.homePageOverlay} />
      <Header />
      <Hero />
      <WeddingTimeline />
    </div>
  );
};
