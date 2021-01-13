import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FiltersScreen = (props) => {
  return (
    <View style={styles.menu}>
      <Text>The Filters Screen</Text>
    </View>
  );
};

export default FiltersScreen;

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
