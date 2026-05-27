import React from "react";
import {
View,
Text,
StyleSheet
} from "react-native";
export default function DashboardCard({
title,
value,
subtitle
}){
return(
<View style={styles.card}>
<Text style={styles.title}>
{title}
</Text>
<Text style={styles.value}>
{value}
</Text>
<Text style={styles.subtitle}>
{subtitle}
</Text>
</View>
);
}
const styles=StyleSheet.create({
card:{
backgroundColor:"#111",
padding:20,
borderRadius:22,
width:"90%",
marginVertical:10
},
title:{
color:"#888",
fontSize:14
},
value:{
color:"#fff",
fontSize:34,
fontWeight:"700",
marginTop:10
},
subtitle:{
color:"#4DA6FF",
marginTop:8
}
});
