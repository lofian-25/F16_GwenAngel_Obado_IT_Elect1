import React, { useState } from "react";
import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0); // Initial value is 0

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.counterText}>{count}</Text>

        <View style={styles.buttonRow}>
          <View style={styles.buttonContainer}>
            <Button title="➖ Decrement" onPress={() => setCount(count >0 ?count-1 :count)} />
          </View>

          <View style={styles.buttonContainer}>
            <Button title="➕ Increment" onPress={() => setCount(count + 1)} />
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
  counterText: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 30,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    marginHorizontal: 10,
    width: 140,
  },
});
