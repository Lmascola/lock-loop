import React, {useState} from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

export default function HomeScreen() {

const [enabled,setEnabled]=useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LOCKLOOP</Text>

      <Text style={styles.subtitle}>
        Attention Defense System
      </Text>

      <Switch
      value={enabled}
      onValueChange={setEnabled}
      />

      <Text style={styles.status}>
        {enabled ? "Protection Active" : "Protection Disabled"}
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
color:"#4DA6FF",
fontSize:38,
fontWeight:"700"
},
subtitle:{
color:"#aaa",
marginVertical:20
},
status:{
color:"#fff",
marginTop:20
}
});
