import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BoardScreen from "./BoardScreen";
import PostForm from "./PostForm";

const Stack = createNativeStackNavigator();

export default function PaymentsScreen() {
  return (
    <Stack.Navigator
      initialRouteName="BoardScreen"
      screenOptions={{
        headerMode: "screen",
        headerShown: false,
      }}
    >
      <Stack.Screen name="BoardScreen" component={BoardScreen} />
      <Stack.Screen name="PostForm" component={PostForm} />
    </Stack.Navigator>
  );
}
