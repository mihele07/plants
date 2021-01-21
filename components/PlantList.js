import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import PlantItem from "./PlantItem";

const PlantList = (props) => {
  const renderPlantItem = ({ item }) => {
    console.log(item);
    return (
      <PlantItem
        name={item.name}
        onSelectPlant={() => {}}
        origin={item.origin}
        price={item.price}
        image={item.image}
        maxGrowth={item.maxGrowth}
        isPoisonousForPets={item.isPoisonousForPets}
        careLevel={item.careLevel}
        onSelectPlant={() => {
          props.navigation.navigate({
            routeName: "PlantDetail",
            params: { plantId: item.id },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPlantItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

export default PlantList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
