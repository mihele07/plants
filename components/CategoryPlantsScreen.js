import React from "react";

import { CATEGORIES, PLANTS } from "../data/plants-data";
import PlantList from "./PlantList";

const CategoryPlantsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const displayedPlants = PLANTS.filter((plant) => plant.categoryId === catId);

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
