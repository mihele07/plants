import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { CATEGORIES } from "../data/plants-data";
import Colors from "../constants/Colors";

const CategoriesScreen = (props) => {
  const renderCategoryItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          {
            props.navigation.navigate("CategoryPlants", {
              categoryId: item.id,
            });
          }
        }}
      >
        <View>
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item, index) => item.id}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Plant Categories",
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  gridItem: {
    flex: 1,
    margin: 20,
    height: 160,
  },
});
