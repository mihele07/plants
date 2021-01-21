import React from "react";
import { Touchable } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

const PlantItem = (props) => {
  console.log(props);

  return (
    <View style={styles.plantItem}>
      <TouchableOpacity onPress={props.onSelectPlant}>
        <View>
          <View style={{ ...styles.plantRow, ...styles.plantHeader }}>
            <Text style={styles.title} numberOfLines={1}>
              {props.name}
            </Text>
            <Image source={props.image} style={styles.detailImage} />

            <Text>Cost starting at: ${props.price}</Text>
            <Text>Max Growth: {props.maxGrowth}</Text>
            <Text>Poisonous for Pets: No</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PlantItem;

const styles = StyleSheet.create({
  plantRow: {
    flexDirection: "row",
  },

  plantItem: {
    height: 400,
    width: "100%",
    backgroundColor: "white",
    borderBottomWidth: 10,
  },

  plantHeader: {
    height: "90%",
    flexDirection: "column",
  },
  plantDetail: {
    paddingHorizontal: 10,
    alignItems: "center",
  },

  detailImage: {
    width: "100%",
    height: "100%",
  },

  title: {
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 12,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
});
