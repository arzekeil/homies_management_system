import { View } from "react-native";
import { Pressable, Text } from "@react-native-material/core";
import PaymentsCard from "./PaymentsCard";
import { dummyData, dummyUsers } from "../../dummy";

export default function Payments({ navigation }) {
  return (
    <View style={{ flex: 1, margin: 20 }}>
      <Text>November 2022</Text>
      {dummyData.map((data) => (
        <Pressable
          key={data.id}
          onPressOut={() =>
            navigation.navigate("PaymentDetails", { data: data })
          }
        >
          <PaymentsCard
            payer={dummyUsers[data.payer].firstName}
            payees={data.payees}
            amount={data.amount}
            title={data.title}
            date={data.date}
          />
        </Pressable>
      ))}
    </View>
  );
}
