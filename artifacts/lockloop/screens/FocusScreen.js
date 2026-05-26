import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function FocusScreen(){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Focus Interventions</Text>
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
    color:"#4DA6FF",
    fontSize:24
  }
});
