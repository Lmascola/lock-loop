import React, { useContext } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { AppContext } from "../context/AppContext";

export default function HomeScreen() {
  const { enabled, timeSaved, streak, updateState } =
    useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LOCKLOOP</Text>

      <Switch
        value={enabled}
        onValueChange={(val)=>
          updateState({
            enabled:val,
            timeSaved,
            streak
          })
        }
      />

      <Text style={styles.status}>
        {enabled ? "Protection Active" : "Disabled"}
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
logo:{
fontSize:38,
color:"#4DA6FF",
fontWeight:"700"
},
status:{
marginTop:20,
color:"#fff"
}
});
