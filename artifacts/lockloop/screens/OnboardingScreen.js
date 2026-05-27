import React,{useState,useContext} from "react";
import {
ScrollView,
View,
Text,
TextInput,
TouchableOpacity,
StyleSheet
} from "react-native";

import {AppContext} from "../context/AppContext";

export default function OnboardingScreen(){

const {update}=useContext(AppContext);

const [name,setName]=useState("");
const [goal,setGoal]=useState(null);
const [strictness,setStrictness]=useState(null);

const goals=[
{name:"Focus",desc:"Prioritize productive work sessions"},
{name:"Sleep Better",desc:"Reduce late-night scrolling"},
{name:"Study",desc:"Protect learning attention"},
{name:"Reduce Addiction",desc:"Break compulsive social loops"}
];

const modes=[
{name:"Gentle",desc:"Soft reminders"},
{name:"Balanced",desc:"Reflection + puzzles"},
{name:"Aggressive",desc:"Hard intervention locks"}
];

const finish=()=>{
if(!name.trim()||!goal||!strictness)return;
update({
name:name.trim(),
goal,
strictness,
sessionLength:15,
timeSaved:0,
onboarded:true,
enabled:false,
memory:[]
});
};

return(
<ScrollView style={styles.container} contentContainerStyle={styles.content}>

<Text style={styles.brand}>LOCKLOOP</Text>

<Text style={styles.header}>What's your name?</Text>

<TextInput
style={styles.input}
placeholder="Enter your name"
placeholderTextColor="#444"
value={name}
onChangeText={setName}
/>

<Text style={styles.header}>What are you solving?</Text>

{goals.map(item=>(
<TouchableOpacity
key={item.name}
style={[styles.card,goal===item.name&&styles.selected]}
onPress={()=>setGoal(item.name)}
>
<Text style={styles.title}>{item.name}</Text>
<Text style={styles.desc}>{item.desc}</Text>
</TouchableOpacity>
))}

<Text style={styles.header}>Protection style</Text>

{modes.map(item=>(
<TouchableOpacity
key={item.name}
style={[styles.card,strictness===item.name&&styles.selected]}
onPress={()=>setStrictness(item.name)}
>
<Text style={styles.title}>{item.name}</Text>
<Text style={styles.desc}>{item.desc}</Text>
</TouchableOpacity>
))}

<TouchableOpacity
style={[styles.start,(!name.trim()||!goal||!strictness)&&styles.startDisabled]}
onPress={finish}
>
<Text style={styles.startText}>Enter LockLoop</Text>
</TouchableOpacity>

</ScrollView>
);
}

const styles=StyleSheet.create({
container:{flex:1,backgroundColor:"#050505"},
content:{padding:25,paddingBottom:60},
brand:{
color:"#4DA6FF",
fontSize:28,
fontWeight:"700",
textAlign:"center",
marginTop:20,
marginBottom:10,
letterSpacing:4
},
header:{
color:"#4DA6FF",
fontSize:22,
marginVertical:20,
fontWeight:"700"
},
input:{
backgroundColor:"#111",
borderRadius:18,
padding:18,
color:"#fff",
fontSize:16,
marginBottom:10
},
card:{
backgroundColor:"#111",
padding:18,
borderRadius:18,
marginBottom:14
},
selected:{borderWidth:2,borderColor:"#4DA6FF"},
title:{color:"#fff",fontSize:18,fontWeight:"600"},
desc:{color:"#888",marginTop:6},
start:{
backgroundColor:"#4DA6FF",
padding:20,
borderRadius:18,
marginTop:30
},
startDisabled:{backgroundColor:"#1a3a5c"},
startText:{textAlign:"center",color:"#fff",fontWeight:"700",fontSize:16}
});
