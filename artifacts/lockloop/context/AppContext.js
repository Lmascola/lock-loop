import React,{createContext,useState,useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppContext=createContext();

export const AppProvider=({children})=>{

const [goal,setGoal]=useState("");
const [strictness,setStrictness]=useState("Balanced");
const [sessionLength,setSessionLength]=useState(15);
const [timeSaved,setTimeSaved]=useState(0);
const [onboarded,setOnboarded]=useState(false);
const [loaded,setLoaded]=useState(false);

useEffect(()=>{
load();
},[]);

const load=async()=>{
const saved=await AsyncStorage.getItem("lockloop");

if(saved){
const data=JSON.parse(saved);
setGoal(data.goal);
setStrictness(data.strictness);
setSessionLength(data.sessionLength);
setTimeSaved(data.timeSaved);
setOnboarded(data.onboarded);
}

setLoaded(true);
};

const save=async(data)=>{
await AsyncStorage.setItem(
"lockloop",
JSON.stringify(data)
);
};

const update=(data)=>{
setGoal(data.goal);
setStrictness(data.strictness);
setSessionLength(data.sessionLength);
setTimeSaved(data.timeSaved);
setOnboarded(data.onboarded);

save(data);
};

const reset=async()=>{
await AsyncStorage.removeItem("lockloop");
setGoal("");
setStrictness("Balanced");
setSessionLength(15);
setTimeSaved(0);
setOnboarded(false);
};

return(
<AppContext.Provider
value={{
goal,
strictness,
sessionLength,
timeSaved,
onboarded,
loaded,
update,
reset
}}
>
{children}
</AppContext.Provider>
);
};
