import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons';

import PaymentsScreen from "../Payments/index";
import TodoScreen from "../Todo/index";
import BoardScreen from "../Board/index";
import GroupScreen from "../Group/index";

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Payments') {
            iconName = 'attach-money';
          } else if (route.name === 'Todo') {
            iconName = 'assignment';
          } else if (route.name === "Board") {
            iconName = 'comment-bank';
          } else if (route.name === "Group") {
            iconName = "people-alt";
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Payments" component={PaymentsScreen} options={{ headerTitle: "Payments" }} />
      <Tab.Screen name="Todo" component={TodoScreen} options={{ headerTitle: "Weekly Chores" }} />
      <Tab.Screen name="Board" component={BoardScreen} options={{ headerTitle: "Discussion Board" }} />
      <Tab.Screen name="Group" component={GroupScreen} options={{ headerTitle: "Group" }} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
