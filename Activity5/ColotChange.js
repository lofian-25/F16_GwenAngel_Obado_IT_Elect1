
import React, { useState } from "react";
import { View, Button, StyleSheet, SafeAreaView } from "react-native";

export default function ColorChange() {
  // Light colors for a softer look
  const colors = {
    pink: "#ffb6c1",
    lightblue: "#add8e6",
    lightgreen: "#90ee90",
    lightyellow: "#fffacd",
  };

  const [bgColor, setBgColor] = useState(colors.pink); // default color

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: bgColor }]}>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.buttonContainer}>
            <Button title="Pink" color={colors.pink} onPress={() => setBgColor(colors.pink)} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Blue" color={colors.lightblue} onPress={() => setBgColor(colors.lightblue)} />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.buttonContainer}>
            <Button title="Green" color={colors.lightgreen} onPress={() => setBgColor(colors.lightgreen)} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Yellow" color={colors.lightyellow} onPress={() => setBgColor(colors.lightyellow)} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    marginBottom: 20,
  },
  buttonContainer: {
    marginHorizontal: 10,
    width: 120,
  },
});