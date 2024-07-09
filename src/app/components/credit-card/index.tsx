import { Text, View } from "react-native";
import { styles } from "./styles";

export function CreditCard() {
  return (
    <View>
      <View style={[styles.card, styles.front]}>
        <View style={styles.header}>
          <View style={[styles.circle, styles.logo]} />
          <Text>Meu Cartão</Text>
        </View>
        <View styles={styles.footer}>
          <Text style={styles.name}>John Rodrigues</Text>
          <View style={styles.flag}>
            <View style={[styles.circle, styles.red]}></View>
            <View style={[styles.circle, styles.orange]}></View>
          </View>
        </View>
      </View>
      {/* <View style={[styles.card, styles.back]}></View> */}
    </View>
  );
}
