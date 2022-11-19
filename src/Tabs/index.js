import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from '@expo/vector-icons';

import CostsScreen from "../Splitwise/index";
import TodoScreen from "../Todo/index";

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Costs') {
            iconName = 'dollar-sign';
          } else if (route.name === 'Todo') {
            iconName = 'list';
          }

          // You can return any component that you like here!
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Costs" component={CostsScreen} />
      <Tab.Screen name="Todo" component={TodoScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
