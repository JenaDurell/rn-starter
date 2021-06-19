import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Who farted???</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Fart Demo"
      />
      <Button
        title="get over to the fart page motherfucker, farts happening now, Carter is in the lead!"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="and you thought you couldn't see a fart"
        onPress={() => navigation.navigate("Image")}
      />

      <Button
        title="count my farts"
        onPress={() => navigation.navigate("Counter")}
      />

      <Button
        title="color my farts"
        onPress={() => navigation.navigate("Color")}
      />

      <Button
        title="farts squared"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        title="farts as text"
        onPress={() => navigation.navigate("Text")}
      />
       <Button
        title="fart in a box"
        onPress={() => navigation.navigate("Box")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
