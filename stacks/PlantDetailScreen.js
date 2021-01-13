import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PlantDetailScreen = (props) => {
  return (
    <View style={styles.menu}>
      <Text>The Plant Detail Screen</Text>
    </View>
  );
};

export default PlantDetailScreen;

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
