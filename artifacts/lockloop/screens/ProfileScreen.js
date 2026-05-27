import React,{useContext} from "react";
import {
View,
Text,
TouchableOpacity,
StyleSheet,
ScrollView,
Alert
} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {AppContext} from "../context/AppContext";

export default function ProfileScreen(){
const{
name,
goal,
strictness,
sessionLength,
timeSaved,
memory,
reset
}=useContext(AppContext);

const confirmReset=()=>{
Alert.alert(
"Restart Onboarding",
"This will clear all your settings and take you back to setup. Continue?",
[
{text:"Cancel",style:"cancel"},
{text:"Reset",style:"destructive",onPress:reset}
]
);
};

const Row=({icon,label,value,onPress,danger})=>(
<TouchableOpacity
style={styles.row}
onPress={onPress}
disabled={!onPress}
>
<View style={styles.rowLeft}>
<Ionicons name={icon} size={22} color={danger?"#ff4444":"#4DA6FF"} />
<Text style={[styles.rowLabel,danger&&styles.danger]}>{label}</Text>
</View>
{value?(
<Text style={styles.rowValue}>{value}</Text>
):(
onPress&&<Ionicons name="chevron-forward" size={18} color="#444" />
)}
</TouchableOpacity>
);

return(
<ScrollView style={styles.container} contentContainerStyle={styles.content}>

<View style={styles.avatar}>
<Text style={styles.avatarText}>
{name?name[0].toUpperCase():"?"}
</Text>
</View>
<Text style={styles.nameText}>{name||"No name set"}</Text>
<Text style={styles.subText}>{goal}</Text>

<Text style={styles.section}>Preferences</Text>

<View style={styles.card}>
<Row icon="shield-outline" label="Protection Mode" value={strictness} />
<Row icon="timer-outline" label="Default Session" value={`${sessionLength} min`} />
</View>

<Text style={styles.section}>Stats</Text>

<View style={styles.card}>
<Row icon="time-outline" label="Time Reclaimed" value={`${timeSaved} min`} />
<Row icon="flash-outline" label="Interventions" value={`${memory.length}`} />
</View>

<Text style={styles.section}>History</Text>

<View style={styles.card}>
{memory.length===0?(
<Text style={styles.empty}>No sessions recorded yet.</Text>
):(
memory.slice().reverse().slice(0,10).map((entry,i)=>(
<View key={i} style={styles.historyRow}>
<Text style={styles.historyGoal}>{entry.goal||goal}</Text>
<Text style={styles.historyTime}>{entry.duration||sessionLength} min</Text>
</View>
))
)}
</View>

<Text style={styles.section}>Account</Text>

<View style={styles.card}>
<Row
icon="refresh-outline"
label="Restart Onboarding"
onPress={confirmReset}
/>
</View>

<View style={styles.card}>
<Row
icon="trash-outline"
label="Reset All Data"
onPress={confirmReset}
danger
/>
</View>

</ScrollView>
);
}

const styles=StyleSheet.create({
container:{flex:1,backgroundColor:"#050505"},
content:{alignItems:"center",paddingBottom:80,paddingTop:60},
avatar:{
width:80,
height:80,
borderRadius:40,
backgroundColor:"#1a3a5c",
justifyContent:"center",
alignItems:"center",
borderWidth:2,
borderColor:"#4DA6FF"
},
avatarText:{color:"#4DA6FF",fontSize:32,fontWeight:"700"},
nameText:{color:"#fff",fontSize:24,fontWeight:"700",marginTop:14},
subText:{color:"#888",marginTop:6,marginBottom:10},
section:{
color:"#444",
fontSize:13,
fontWeight:"600",
letterSpacing:1,
alignSelf:"flex-start",
marginLeft:"5%",
marginTop:28,
marginBottom:10
},
card:{
width:"90%",
backgroundColor:"#111",
borderRadius:20,
overflow:"hidden"
},
row:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
padding:18,
borderBottomWidth:1,
borderBottomColor:"#1a1a1a"
},
rowLeft:{flexDirection:"row",alignItems:"center",gap:14},
rowLabel:{color:"#fff",fontSize:16},
rowValue:{color:"#888",fontSize:15},
danger:{color:"#ff4444"},
empty:{color:"#444",padding:18,textAlign:"center"},
historyRow:{
flexDirection:"row",
justifyContent:"space-between",
padding:16,
borderBottomWidth:1,
borderBottomColor:"#1a1a1a"
},
historyGoal:{color:"#fff"},
historyTime:{color:"#4DA6FF"}
});
