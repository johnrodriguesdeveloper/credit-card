import { SharedValue } from "react-native-reanimated";

export type CrediCardProps = {
  cardSide: SharedValue<number>;
  data: {
    name: string;
    number: string;
    date: string;
    code: string;
  };
};
