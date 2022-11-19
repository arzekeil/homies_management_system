import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CostsScreen from "../Splitwise/Splitwise-Tab";
import TodoScreen from "../Todo/Todo-Tab";

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Costs" component={CostsScreen} />
      <Tab.Screen name="Todo" component={TodoScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
