import React from "react";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import PlantsNavigator from "./navigation/PlantsNavigator";
import plantsReducer from "./redux/reducers/plants";

enableScreens();

const rootReducer = combineReducers({
  plants: plantsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <PlantsNavigator />
    </Provider>
  );
}
