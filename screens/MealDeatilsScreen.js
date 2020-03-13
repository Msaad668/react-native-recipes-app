import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MealDeatilsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>the meal details screen!!</Text>
    </View>
  );
};

export default MealDeatilsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
