import React, { useState } from "react";
import { Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";

import PlantsNavigator from "./navigation/PlantsNavigator";

enableScreens();

export default function App() {
  return <PlantsNavigator />;
}
