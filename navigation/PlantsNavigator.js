import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import CategoriesScreen from "../stacks/CategoriesScreen";
import CategoryPlantsScreen from "../stacks/CategoryPlantsScreen";
import PlantDetailScreen from "../stacks/PlantDetailScreen";
import Colors from "../constants/Colors";

const PlantsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },

    CategoryPlants: {
      screen: CategoryPlantsScreen,
    },

    PlantDetail: {
      screen: PlantDetailScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: "white",
    },
  }
);

export default createAppContainer(PlantsNavigator);
