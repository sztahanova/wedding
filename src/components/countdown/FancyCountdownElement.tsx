import { Center, Text } from "@mantine/core";
import classNames from "./FancyCountdownElement.module.css";
import { FancyCountdownElementProps } from "./FancyCountdownElement.types";

export const FancyCountdownElement = ({ value, text }: FancyCountdownElementProps) => {
  return (
    <Center className={classNames.root}>
      <Text className={`fleur-de-leah-regular ${classNames.value}`}>{value}</Text>
      <Text className={classNames.label}>{text}</Text>
    </Center>
  );
};
