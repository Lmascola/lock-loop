import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { AppContext } from "../context/AppContext";

export default function HomeScreen() {
  const { goal, timeSaved } = useContext(AppContext);
  const [enabled, setEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LOCKLOOP</Text>

      <Text style={styles.goal}>{goal}</Text>

      <Switch
        value={enabled}
        onValueChange={setEnabled}
      />

      <Text style={styles.status}>
        {enabled ? "Protection Active" : "Disabled"}
      </Text>

      <Text style={styles.saved}>{timeSaved} mins reclaimed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    fontSize: 38,
    color: "#4DA6FF",
    fontWeight: "700"
  },
  goal: {
    color: "#888",
    fontSize: 14,
    marginTop: 8,
    marginBottom: 24
  },
  status: {
    marginTop: 20,
    color: "#fff"
  },
  saved: {
    marginTop: 32,
    color: "#4DA6FF",
    fontSize: 16
  }
});
