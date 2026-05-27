import React,{useContext} from "react";
import {
View,
Text,
TouchableOpacity,
StyleSheet,
ScrollView
} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useRouter} from "expo-router";
import DashboardCard from "../components/DashboardCard";
import {AppContext} from "../context/AppContext";

function getGreeting(){
const hour=new Date().getHours();
if(hour>=5&&hour<12) return "Good morning";
if(hour>=12&&hour<17) return "Good afternoon";
if(hour>=17&&hour<21) return "Good evening";
return "Good night";
}

export default function HomeScreen(){
const router=useRouter();
const{
name,
goal,
timeSaved,
strictness,
enabled,
update,
sessionLength,
memory
}=useContext(AppContext);

const toggleSession=()=>{
update({
name,
goal,
strictness,
sessionLength,
timeSaved,
onboarded:true,
enabled:!enabled,
memory
});
};

return(
<ScrollView
style={styles.container}
contentContainerStyle={{alignItems:"center",paddingBottom:120}}
>
<View style={styles.header}>
<View>
<Text style={styles.greeting}>{getGreeting()},</Text>
<Text style={styles.name}>
{name?`${name} 👋`:"there 👋"}
</Text>
</View>
<TouchableOpacity onPress={()=>router.push("/(tabs)/profile")}>
<Ionicons name="person-circle-outline" size={36} color="#fff" />
</TouchableOpacity>
</View>

<DashboardCard
title="Today's Focus Goal"
value={`${sessionLength} min`}
subtitle={goal}
/>

<TouchableOpacity
style={[styles.start,enabled&&styles.stopBtn]}
onPress={toggleSession}
>
<Ionicons
name={enabled?"stop-circle-outline":"play"}
size={22}
color="#fff"
/>
<Text style={styles.startText}>
{enabled?"Stop Session":"Start Focus Session"}
</Text>
</TouchableOpacity>

<View style={styles.quoteBox}>
<Text style={styles.quote}>
"Distraction is the enemy of deep work."
</Text>
<Text style={styles.author}>— LockLoop</Text>
</View>

<View style={styles.statsRow}>
<View style={styles.smallCard}>
<Text style={styles.smallNumber}>{timeSaved}</Text>
<Text style={styles.smallLabel}>mins saved</Text>
</View>
<View style={styles.smallCard}>
<Text style={styles.smallNumber}>{strictness}</Text>
<Text style={styles.smallLabel}>mode</Text>
</View>
</View>

</ScrollView>
);
}

const styles=StyleSheet.create({
container:{flex:1,backgroundColor:"#050505"},
header:{
width:"90%",
marginTop:70,
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center"
},
greeting:{color:"#888",fontSize:16},
name:{color:"#fff",fontSize:32,fontWeight:"700"},
start:{
backgroundColor:"#4DA6FF",
width:"90%",
padding:20,
borderRadius:22,
marginTop:20,
flexDirection:"row",
justifyContent:"center",
alignItems:"center"
},
stopBtn:{backgroundColor:"#1a1a2e",borderWidth:1,borderColor:"#4DA6FF"},
startText:{color:"#fff",fontSize:18,fontWeight:"700",marginLeft:10},
quoteBox:{
backgroundColor:"#111",
width:"90%",
padding:20,
borderRadius:22,
marginTop:20
},
quote:{color:"#fff",fontSize:16},
author:{color:"#4DA6FF",marginTop:10},
statsRow:{
flexDirection:"row",
width:"90%",
justifyContent:"space-between",
marginTop:20
},
smallCard:{
backgroundColor:"#111",
width:"48%",
padding:20,
borderRadius:20
},
smallNumber:{color:"#fff",fontSize:24,fontWeight:"700"},
smallLabel:{color:"#888",marginTop:8}
});
