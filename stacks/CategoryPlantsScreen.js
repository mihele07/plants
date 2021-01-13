import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { CATEGORIES } from "../data/plants-data";
import Colors from "../constants/Colors";

const CategoryPlantsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return (
    <View style={styles.menu}>
      <Text>The Categories Plant Screen</Text>
      <Text>{selectedCategory.name}</Text>
      <Button
        title="Go to Details!"
        onPress={() => {
          props.navigation.navigate("PlantDetail");
        }}
      />
    </View>
  );
};

CategoryPlantsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.name,
  };
};

export default CategoryPlantsScreen;

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
