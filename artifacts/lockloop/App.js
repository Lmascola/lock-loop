import React,{useContext} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import FocusScreen from "./screens/FocusScreen";
import StatsScreen from "./screens/StatsScreen";
import OnboardingScreen from "./screens/OnboardingScreen";

import {
AppProvider,
AppContext
} from "./context/AppContext";

const Tab=createBottomTabNavigator();

function Main(){

const {onboarded}=useContext(AppContext);

if(!onboarded){
return <OnboardingScreen />;
}

return(
<NavigationContainer>
<Tab.Navigator screenOptions={{
headerShown:false,
tabBarStyle:{
backgroundColor:"#050505"
},
tabBarActiveTintColor:"#4DA6FF"
}}>
<Tab.Screen name="Control" component={HomeScreen}/>
<Tab.Screen name="Focus" component={FocusScreen}/>
<Tab.Screen name="Stats" component={StatsScreen}/>
</Tab.Navigator>
</NavigationContainer>
);
}

export default function App(){
return(
<AppProvider>
<Main/>
</AppProvider>
);
}
