import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  cardBody: {
    backgroundColor: "#2f3042",
    height: 95,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    shadowColor: "#76E2F6",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 25,
    color: "#fff",
    margin: 8,
  },
});
