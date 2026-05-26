import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [timeSaved, setTimeSaved] = useState(0);
  const [streak, setStreak] = useState(1);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const saved = await AsyncStorage.getItem("lockloop");
    if (saved) {
      const parsed = JSON.parse(saved);
      setTimeSaved(parsed.timeSaved);
      setStreak(parsed.streak);
      setEnabled(parsed.enabled);
    }
  };

  const saveData = async (data) => {
    await AsyncStorage.setItem(
      "lockloop",
      JSON.stringify(data)
    );
  };

  const updateState = (newData) => {
    setTimeSaved(newData.timeSaved);
    setStreak(newData.streak);
    setEnabled(newData.enabled);

    saveData(newData);
  };

  return (
    <AppContext.Provider
      value={{
        timeSaved,
        streak,
        enabled,
        updateState
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
