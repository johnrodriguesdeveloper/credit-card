import { TextBase, View } from "react-native";
import { styles } from "./styles";
import { CreditCard } from "../components/credit-card";

export function Payment() {
  return (
    <View style={styles.container}>
      <CreditCard />
    </View>
  );
}
