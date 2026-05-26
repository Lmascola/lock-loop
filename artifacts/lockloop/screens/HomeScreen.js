import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LOCKLOOP</Text>
      <Text style={styles.subtitle}>
        Break the scroll before it breaks your time
      </Text>

      <Switch value={true} />

      <Text style={styles.status}>Protection Active</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#050505",
    justifyContent:"center",
    alignItems:"center"
  },
  logo:{
    color:"#4DA6FF",
    fontSize:34,
    fontWeight:"700"
  },
  subtitle:{
    color:"#aaa",
    marginTop:10
  },
  status:{
    color:"#fff",
    marginTop:20
  }
});
