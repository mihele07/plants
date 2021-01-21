import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CategoryTile = (props) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View
        style={{ ...styles.container, ...{ backgroundColor: props.color } }}
      >
        <Text style={styles.title}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 20,
    height: 160,
  },

  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "right",
  },
});
