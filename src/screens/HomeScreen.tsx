import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <View>
      
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
  navigation: {
    flex: 2,
    backgroundColor: "red",
  },
  body: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  footer: {
    flex: 1,
    backgroundColor: "cyan",
  },
});
