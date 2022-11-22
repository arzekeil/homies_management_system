import { View, ScrollView } from "react-native";
import { Pressable, Text } from "@react-native-material/core";
import PaymentsCard from "./PaymentsCard";
import { dummyPayments, dummyUsers } from "../../dummy";
import { useEffect, useState } from "react";

export default function Payments({ navigation }) {
  const [newData, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      await fetch("http://10.0.2.2:8000/payments", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setLoading(false);
          return json;
        })
        .catch((error) => {
          console.error(error);
        });
    };
    getData();
  }, []);

  return (
    <ScrollView style={{ flex: 1, margin: 20 }}>
      <Text variant="h5">Pending Payments</Text>
      {!loading &&
        newData
          .filter((payment) => !payment.complete)
          .map((data) => (
            <Pressable
              key={data.id}
              onPressOut={() =>
                navigation.navigate("PaymentDetails", { data: data })
              }
            >
              <PaymentsCard
                payer={dummyUsers[data.userId].firstName}
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
              // payees={data.payees}
              payees={[]}
              amount={data.amount}
              title={data.title}
              date={data.date}
            />
          </Pressable>
        ))}
    </ScrollView>
  );
}
