import React, { userState }from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { useState } from "react/cjs/react.development";

const TextScreen = () => {
    const [name, setName] = useState('')
  return (
    <View>
        <Text>Name your fart</Text>
      <TextInput style={styles.input}
      autoCapitalize="none"
      autoCorrect={false}
      value={name} 
      onChangeText={newValue => setName(newValue) }
      />
      <Text>The name of my fart is {name} </Text>
      {name.length > 3 ? <Text>That's really what I call my fart</Text>: null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 5,
  },
});

export default TextScreen;
