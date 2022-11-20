import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabNavigation from "./src/pages/Tabs/index";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
}
