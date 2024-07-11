import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    marginTop: 40,
    width: "100%",
    height: 250,
    borderRadius: 12,
    padding: 32,
    justifyContent: "space-between",
  },
  front: {
    backgroundColor: "#8F26D7",
    backfaceVisibility: "hidden",
    position: "absolute",
  },
  back: {
    backgroundColor: "#8214D1",
    backfaceVisibility: "hidden",
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  logo: {
    backgroundColor: "#86198f",
  },
  nameLog: {
    color: "#DAE1E7",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#DAE1E7",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flag: {
    flexDirection: "row",
  },
  red: {
    backgroundColor: "red",
    marginRight: -12,
  },
  orange: {
    backgroundColor: "orange",
  },
  label: {
    fontSize: 14,
    color: "#a1a1aa",
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#DAE1E7",
  },
});
