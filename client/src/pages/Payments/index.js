import Payments from "./Payments";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PaymentDetails from "./PaymentDetails";

const Stack = createNativeStackNavigator();

export default function PaymentsScreen() {
  return (
    <Stack.Navigator
      initialRouteName="paymentsScreen"
      screenOptions={{
        headerMode: "screen",
        headerShown: false,
      }}
    >
      <Stack.Screen name="PaymentsScreen" component={Payments} />
      <Stack.Screen name="PaymentDetails" component={PaymentDetails} />
    </Stack.Navigator>
  );
}
