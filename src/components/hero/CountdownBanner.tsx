import { Overlay } from "@mantine/core";
import classNames from "./CountdownBanner.module.css";

export const CountdownBanner = () => {
  return (
    <div className={classNames.root}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classNames.container}></div>
    </div>
  );
};
