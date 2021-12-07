import React from "react";
import { StyleSheet, TouchableNativeFeedback, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../config";

const AddButton = ({ name, onPress }) => {
  return (
    <View style={styles.icoContainer}>
      <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('rgba(255, 255, 255, 1)', true)} onPress={onPress}>
        <View style={styles.inner}>
          <FontAwesome5 name={name} style={styles.ico} />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  icoContainer: {
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: colors.primaryLight,
    position: "absolute",
    bottom: 20,
    left: "50%",
    transform: [
      {
        translateX: -40,
      },
    ],
  },
  inner: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ico: {
    color: colors.text,
    fontSize: 48,
  },
});
