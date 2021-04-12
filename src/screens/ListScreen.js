import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Carter", age: " fart level: expert" },
    { name: "Sonoma", age: " fart level: ladylike" },
    { name: "Quincy", age: " fart level: experienced" },
    { name: "Max", age: " fart level: surprisingly powerful for such a small dog" },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name}-{item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
