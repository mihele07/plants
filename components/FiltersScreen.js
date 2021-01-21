import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "./CustomHeaderButton";
import Colors from "../constants/Colors";

const FiltersScreen = (props) => {
  const [isEasyToCare, setIsEasyToCare] = useState(false);
  const [doesNotRequireLotsWater, setDoesNotRequireLotsWater] = useState(false);
  const [isPoisinousForPets, setIsPoisinousForPets] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      easyToCare: isEasyToCare,
      notRequiredLotsWater: doesNotRequireLotsWater,
      poisonousForPets: isPoisinousForPets,
    };

    console.log(appliedFilters);
  }, [isEasyToCare, doesNotRequireLotsWater, isPoisinousForPets]);

  useEffect(() => {
    props.navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.menu}>
      <Text style={styles.title}>Select Your Preferences</Text>
      <View style={styles.filterBox}>
        <Text>Easy Care Level</Text>
        <Switch
          trackColor={{ true: Colors.primaryColor }}
          thumbColor="grey"
          value={isEasyToCare}
          onValueChange={(newValue) => setIsEasyToCare(newValue)}
        />
      </View>

      <View style={styles.filterBox}>
        <Text>Does Not require Much Water</Text>
        <Switch
          trackColor={{ true: Colors.primaryColor }}
          thumbColor="grey"
          value={doesNotRequireLotsWater}
          onValueChange={(newValue) => setDoesNotRequireLotsWater(newValue)}
        />
      </View>

      <View style={styles.filterBox}>
        <Text>Is Poisoness To Pets</Text>
        <Switch
          trackColor={{ true: Colors.primaryColor }}
          thumbColor="grey"
          value={isPoisinousForPets}
          onValueChange={(newValue) => setIsPoisinousForPets(newValue)}
        />
      </View>
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filter Plants",
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
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Save" onPress={navData.navigation.getParam("save")} />
      </HeaderButtons>
    ),
  };
};
export default FiltersScreen;

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    alignItems: "center",
  },
  filterBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 10,
  },
  title: {
    fontSize: 22,
    margin: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});
