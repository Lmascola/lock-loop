import React,{useContext} from "react";
import {View,Text,StyleSheet} from "react-native";
import {AppContext} from "../context/AppContext";

export default function StatsScreen(){

const {timeSaved,streak}=useContext(AppContext);

return(
<View style={styles.container}>
<Text style={styles.big}>{timeSaved} mins</Text>
<Text style={styles.label}>Reclaimed</Text>

<Text style={styles.small}>
{streak} day streak
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
fontSize:52,
color:"#4DA6FF",
fontWeight:"700"
},
label:{
color:"#fff",
fontSize:22
},
small:{
marginTop:20,
color:"#999"
}
});
