import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
  button: {
    alignItems: "center",
    marginVertical: 32,
    backgroundColor: '#D3D3D3',
    padding: 8,
    borderRadius: 4
  },
  form: {
    gap: 12,
  },
  inputInline: {
    flexDirection: "row",
    gap: 12,
  },
  inputSmall: {
    width: 80,
    textAlign: "center",
  },
});
