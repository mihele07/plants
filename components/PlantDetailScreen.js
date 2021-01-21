import React from "react";
import {
  ScrollView,
  Image,
  Button,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { PLANTS } from "../data/plants-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const PlantDetailScreen = (props) => {
  const plantId = props.navigation.getParam("plantId");

  const selectedPlant = PLANTS.find((plant) => plant.id === plantId);
  return (
    <ScrollView style={styles.main}>
      <Image source={selectedPlant.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.text}>
          Cost starting at: ${selectedPlant.price}
        </Text>
        <Text style={styles.text}>Max Growth: {selectedPlant.maxGrowth}</Text>
        <Text style={styles.text}>Poisonous for Pets: No</Text>
      </View>
      <View>
        <Text style={styles.titles}>Description</Text>
        <View style={styles.infoBorder}>
          <Text style={styles.text2}>{selectedPlant.info}</Text>
        </View>
        <Text style={styles.titles}>Watering Instructions</Text>
        <View style={styles.infoBorder}>
          <Text style={styles.text2}>{selectedPlant.watering}</Text>
        </View>
        <Text style={styles.titles}>Lighting Information</Text>
        <View style={styles.infoBorder}>
          <Text style={styles.text2}>{selectedPlant.lighting}</Text>
        </View>
        <Text style={styles.titles}>Humidity Information</Text>
        <View style={styles.infoBorder}>
          <Text style={styles.text2}>{selectedPlant.humidity}</Text>
        </View>
        <Text style={styles.titles}>Temperture Informatiom</Text>
        <View style={styles.infoBorder}>
          <Text style={styles.text2}>{selectedPlant.temperature}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

PlantDetailScreen.navigationOptions = (navigationData) => {
  const plantId = navigationData.navigation.getParam("plantId");
  const selectedPlant = PLANTS.find((plant) => plant.id === plantId);
  return {
    headerTitle: selectedPlant.name,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("Mark as favorite");
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default PlantDetailScreen;

const styles = StyleSheet.create({
  plantRow: {
    flexDirection: "row",
  },
  plantHeader: {
    height: "90%",
    flexDirection: "column",
  },
  detailImage: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: 350,
  },
  details: {
    padding: 20,
  },
  text: {
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  titles: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  text2: {
    fontWeight: "bold",
    paddingHorizontal: 10,
    margin: 5,
    fontSize: 15,
  },
  infoBorder: {
    borderWidth: 3,
    margin: 10,
    backgroundColor: "#CBF1F5",
    borderColor: "#88304E",
  },
  main: {
    backgroundColor: "white",
  },
});
