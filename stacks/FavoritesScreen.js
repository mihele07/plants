import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FavoritesScreen = (props) => {
  return (
    <View style={styles.menu}>
      <Text>The Categories Favorites Screen</Text>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
