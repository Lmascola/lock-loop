import React,{useState,useEffect,useContext} from "react";
import {
View,
Text,
TouchableOpacity,
StyleSheet
} from "react-native";

import {AppContext} from "../context/AppContext";

export default function FocusScreen(){

const {
timeSaved,
streak,
enabled,
updateState
}=useContext(AppContext);

const [seconds,setSeconds]=useState(0);
const [locked,setLocked]=useState(false);

useEffect(()=>{

if(!enabled)return;

const timer=setInterval(()=>{
setSeconds(prev=>{

const next=prev+1;

if(next===20){
setLocked(true);

updateState({
enabled,
timeSaved:timeSaved+20,
streak:streak+1
});
}

return next;

});
},1000);

return()=>clearInterval(timer);

},[enabled]);

return(
<View style={styles.container}>
{!locked?(
<>
<Text style={styles.timer}>
{seconds}s
</Text>
<Text style={styles.sub}>
Monitoring loop behavior
</Text>
</>
):(
<>
<Text style={styles.lock}>
INTERVENTION
</Text>

<TouchableOpacity
style={styles.button}
onPress={()=>{
setLocked(false);
setSeconds(0);
}}
>
<Text style={styles.text}>
Resume Intentionally
</Text>
</TouchableOpacity>
</>
)}
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
timer:{
fontSize:60,
color:"#4DA6FF"
},
sub:{
color:"#999"
},
lock:{
fontSize:34,
color:"#4DA6FF",
fontWeight:"700"
},
button:{
marginTop:30,
backgroundColor:"#4DA6FF",
padding:18,
borderRadius:16
},
text:{
color:"#fff"
}
});
