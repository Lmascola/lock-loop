import React,{useState,useContext} from "react";
import {
View,
Text,
TouchableOpacity,
StyleSheet
} from "react-native";

import {AppContext} from "../context/AppContext";

export default function OnboardingScreen(){

const {update}=useContext(AppContext);

const [goal,setGoal]=useState("Focus");
const [strictness,setStrictness]=useState("Balanced");

const finish=()=>{
update({
goal,
strictness,
sessionLength:15,
timeSaved:0,
onboarded:true
});
};

return(
<View style={styles.container}>

<Text style={styles.title}>
Why are you here?
</Text>

{["Focus","Sleep Better","Study","Reduce Scrolling"]
.map(item=>(
<TouchableOpacity
key={item}
style={styles.button}
onPress={()=>setGoal(item)}
>
<Text style={styles.text}>{item}</Text>
</TouchableOpacity>
))}

<Text style={styles.title}>
How strict?
</Text>

{["Gentle","Balanced","Aggressive"]
.map(item=>(
<TouchableOpacity
key={item}
style={styles.button}
onPress={()=>setStrictness(item)}
>
<Text style={styles.text}>{item}</Text>
</TouchableOpacity>
))}

<TouchableOpacity
style={styles.finish}
onPress={finish}
>
<Text style={styles.text}>
Start LockLoop
</Text>
</TouchableOpacity>

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
title:{
color:"#4DA6FF",
fontSize:24,
marginBottom:20
},
button:{
backgroundColor:"#111",
padding:14,
margin:8,
width:220,
borderRadius:14
},
finish:{
backgroundColor:"#4DA6FF",
padding:18,
marginTop:30,
borderRadius:16
},
text:{
color:"#fff",
textAlign:"center"
}
});
