import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import CategoriesScreen from "../components/CategoriesScreen";
import CategoryPlantsScreen from "../components/CategoryPlantsScreen";
import PlantDetailScreen from "../components/PlantDetailScreen";
import FavoritesScreen from "../components/FavoritesScreen";
import Colors from "../constants/Colors";
import FiltersScreen from "../components/FiltersScreen";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTintColor: "white",
  headerTitle: "A Screen",
};

const PlantsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },

    CategoryPlants: {
      screen: CategoryPlantsScreen,
    },

    PlantDetail: PlantDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    PlantDetail: PlantDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const tabScreenConfig = {
  Plants: {
    screen: PlantsNavigator,
    navigationOptions: {
      tabBarIcon: () => {
        return <Ionicons name="rose" size={25} color="orange" />;
      },
      tabBarColor: Colors.primaryColor,
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: () => {
        return <Ionicons name="ios-star" size={25} color="orange" />;
      },
      tabBarColor: Colors.accentColor,
    },
  },
};

const PlantsFavTabNavigator = createMaterialBottomTabNavigator(
  tabScreenConfig,
  {
    activeTintColor: "white",
    shifting: true,
    barStyle: {
      backgroundColor: Colors.primaryColor,
    },
  }
);

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const MainNavigator = createDrawerNavigator(
  {
    PlantsFavs: {
      screen: PlantsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Plants",
      },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
    },
  }
);
export default createAppContainer(MainNavigator);
