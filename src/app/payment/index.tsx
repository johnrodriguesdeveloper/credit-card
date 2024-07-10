import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { CreditCard } from "../components/credit-card";
import { useSharedValue } from "react-native-reanimated";

export function Payment() {
  const cardSide = useSharedValue(0);
  return (
    <View style={styles.container}>
      <CreditCard cardSide={cardSide} />
      <TouchableOpacity>
        <Text>Inverter</Text>
      </TouchableOpacity>
    </View>
  );
}
