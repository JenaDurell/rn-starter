import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const CounterScreen = () => {

const [counter, setCounter ]= useState(0)
  
  return (
    <View>
      <Button
        title="add a fart"
        onPress={() => {
          setCounter(counter + 1)
        }}
      />
      <Button
        title="subtract a fart"
        onPress={() => {
          setCounter(counter -1)
        }}
      />
      <Text>Current Count: {counter} farts</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
