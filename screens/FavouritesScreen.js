import React from "react";
import { StyleSheet, Text, View } from "react-native";

const favouritesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>the favourite meals screen</Text>
    </View>
  );
};

export default favouritesScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }
});
