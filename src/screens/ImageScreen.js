import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../ components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Good tiny toots"
        score="tiny farts for a little bubba"
        imageSource={require("../../assets/beach.jpg")}
      />
      <ImageDetail
        title="Pretty good fart"
        score="solid sail"
        imageSource={require("../../assets/forest.jpg")}
      />
      <ImageDetail
        title="Yikes"
        score="gale force winds"
        imageSource={require("../../assets/mountain.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default ImageScreen;
