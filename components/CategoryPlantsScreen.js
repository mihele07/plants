import React from "react";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/plants-data";
import PlantList from "./PlantList";

const CategoryPlantsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const availablePlants = useSelector((state) => state.plants.filteredPlants);

  const displayedPlants = availablePlants.filter(
    (plant) => plant.categoryId === catId
  );

  return (
    <PlantList listItems={displayedPlants} navigation={props.navigation} />
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
