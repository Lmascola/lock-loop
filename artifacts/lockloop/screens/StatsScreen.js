import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function StatsScreen(){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Time Saved: 0h</Text>
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
  text:{
    color:"#fff",
    fontSize:24
  }
});
