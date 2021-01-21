import React from "react";
import PlantList from "./PlantList";
import { PLANTS } from "../data/plants-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "./CustomHeaderButton";

const FavoritesScreen = (props) => {
  // Dummy Data
  const favPlants = PLANTS.filter(
    (plant) => plant.id === "3" || plant.id === "4"
  );
  return <PlantList listItems={favPlants} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "My Favorites",
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

export default FavoritesScreen;
