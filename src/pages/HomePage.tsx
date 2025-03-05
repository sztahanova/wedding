import { Header } from "../components/header/Header";
import classNames from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div className={classNames.root}>
      <Header />
    </div>
  );
};
