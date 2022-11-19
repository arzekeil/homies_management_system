import { View } from "react-native";
import { Text } from "@react-native-material/core";
import PaymentsCard from "./PaymentsCard";
import Payments from "./Payments";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PaymentDetails from "./PaymentDetails";

const baseURL =
  "https://cors-anywhere.herokuapp.com/https://hackwestern-2022-default-rtdb.firebaseio.com/payments.json";

const Stack = createNativeStackNavigator();

export default function PaymentsScreen() {
  // const [payments, setPayments] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const source = axios.CancelToken.source();
  //   const fetchPayments = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get(baseURL, {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         data: {},
  //       });
  //       console.log(response);
  //       if (response.status == 200) {
  //         setPayments(response.data);
  //         setLoading(false);
  //         return;
  //       } else {
  //         throw new Error("Failed to fetch users");
  //       }
  //     } catch (error) {
  //       JSON.stringify(error);
  //       console.warn(error);
  //     }
  //   };
  //   fetchPayments();
  //   return () => source.cancel("Data fetching cancelled");
  // }, []);

  // fetch(baseURL)
  //   .then((response) => {
  //     setPayments(response.data);
  //     console.log(response.data);
  //   })
  //   .then(setLoading(false));

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
