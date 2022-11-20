import { View } from "react-native";
import { Pressable, Text } from "@react-native-material/core";
import PaymentsCard from "./PaymentsCard";
import { dummyPayments, dummyUsers } from "../../dummy";

export default function Payments({ navigation }) {
  return (
    <View style={{ flex: 1, margin: 20 }}>
      <Text variant="h5">Pending Payments</Text>
      {dummyPayments
        .filter((payment) => !payment.complete)
        .map((data) => (
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

      <Text variant="h5" style={{ marginTop: 20 }}>
        Completed Payments
      </Text>
      {dummyPayments
        .filter((payment) => payment.complete)
        .map((data) => (
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
