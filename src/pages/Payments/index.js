import { View } from "react-native";
import { Text, Stack } from "@react-native-material/core";
import PaymentsCard from "./PaymentsCard";

const dummyData = [
  {
    amount: 11.11,
    title: "eggs",
    date: "2022-11-19",
    payees: [
      {
        amount: 2,
        id: 2,
        paid: false,
      },
    ],
    payer: 1,
  },
  {
    amount: 22.22,
    date: "2022-11-19",
    title: "lasgna",
    payees: [
      {
        amount: 3,
        id: 1,
        paid: false,
      },
      {
        amount: 5.5,
        id: 3,
        paid: true,
      },
    ],
    payer: 2,
  },
];

const dummyUsers = { 1: "arzq", 2: "ang" };

export default function PaymentsScreen() {
  return (
    <View style={{ flex: 1, margin: 20 }}>
      <Text>November 2022</Text>
      {dummyData.map((data) => (
        <PaymentsCard
          payer={dummyUsers[data.payer]}
          payees={data.payees}
          amount={data.amount}
          title={data.title}
          date={data.date}
        />
      ))}
    </View>
  );
}
