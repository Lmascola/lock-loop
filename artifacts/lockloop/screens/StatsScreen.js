import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function StatsScreen(){
  return(
    <View style={styles.container}>
      <Text style={styles.big}>7h 43m</Text>
      <Text style={styles.label}>Time Reclaimed</Text>

      <Text style={styles.small}>
        14 interrupted scroll loops
      </Text>

      <Text style={styles.small}>
        5 day focus streak
      </Text>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#050505",
    justifyContent:"center",
    alignItems:"center"
  },
  big:{
    color:"#4DA6FF",
    fontSize:52,
    fontWeight:"700"
  },
  label:{
    color:"#fff",
    fontSize:22
  },
  small:{
    color:"#888",
    marginTop:12
  }
});
