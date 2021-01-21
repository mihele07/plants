import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "./CustomHeaderButton";
import { CATEGORIES } from "../data/plants-data";
import CategoryTile from "./CategoryTile";
import Colors from "../constants/Colors";

const CategoriesScreen = (props) => {
  const renderCategoryItem = ({ item }) => {
    return (
      <CategoryTile
        imageSrc={require("../images/categories/01_common.jpg")}
        name={item.name}
        color={item.color}
        onSelect={() => {
          props.navigation.navigate("CategoryPlants", {
            categoryId: item.id,
          });
        }}
      />
    );
  };

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item, index) => item.id}
      style={{ width: "100%" }}
    />
  );
};

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Plant Categories",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};
export default CategoriesScreen;
