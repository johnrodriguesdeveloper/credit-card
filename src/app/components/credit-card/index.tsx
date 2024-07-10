import { Text, View } from "react-native";
import { styles } from "./styles";
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type CrediCardProps = {
  cardSide: SharedValue<number>;
};
export function CreditCard({ cardSide }: CrediCardProps) {
  const frontAnimatedStyles = useAnimatedStyle(() => {
    return {};
  });
  return (
    <View>
      <Animated.View style={[styles.card, styles.front]}>
        <View style={styles.header}>
          <View style={[styles.circle, styles.logo]} />
          <Text>Meu Cartão</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.name}>John Rodrigues</Text>
          <View style={styles.flag}>
            <View style={[styles.circle, styles.red]}></View>
            <View style={[styles.circle, styles.orange]}></View>
          </View>
        </View>
      </Animated.View>
      <Animated.View style={[styles.card, styles.back]}>
        <View>
          <Text style={styles.label}>Número do cartão</Text>
          <Text style={styles.value}>1234 4567 7890 0987</Text>
        </View>
        <View style={styles.footer}>
          <View>
            <Text style={styles.label}>Validade</Text>
            <Text style={styles.value}>31/07</Text>
          </View>
          <View>
            <Text style={styles.label}>CVV</Text>
            <Text style={styles.value}>123</Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
}
