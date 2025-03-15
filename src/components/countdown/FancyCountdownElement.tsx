import { Center, Text } from "@mantine/core";
import classNames from "./FancyCountdownElement.module.css";
import { FancyCountdownElementProps } from "./FancyCountdownElement.types";

export const FancyCountdownElement = ({ value, text }: FancyCountdownElementProps) => {
  return (
    <Center className={classNames.countdownElementRoot}>
      <Text className={`fleur-de-leah-regular ${classNames.countdownElementValue}`}>{value}</Text>
      <Text className={classNames.countdownElementLabel}>{text}</Text>
    </Center>
  );
};
