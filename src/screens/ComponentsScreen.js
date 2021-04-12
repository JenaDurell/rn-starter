import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greeting = "Hey good boy!";
  const greetMe = <Text>Hi happy fart dog!</Text>;
  const name = "Carter"
  return (
    <View>
      <Text style={styles.textStyle}>{name} farted</Text>
      <Text>Carter farted</Text>
      <Text style={styles.secondStyle}>{greeting}</Text>
      {greetMe}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  secondStyle: {
      fontSize: 20
  }
});

export default ComponentsScreen;
