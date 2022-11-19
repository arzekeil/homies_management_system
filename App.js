import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabNavigation from "./src/Tabs/Tabs";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
}
