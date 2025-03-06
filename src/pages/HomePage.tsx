import { Header } from "../components/header/Header";
import { Hero } from "../components/hero/Hero";
import classNames from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div className={classNames.root}>
      <Header />
      <Hero />
    </div>
  );
};
