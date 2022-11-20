import { View } from "react-native";
import { Box, Text, Pressable, Flex } from "@react-native-material/core";
import { Profile } from "../../components/Profile";
import { MaterialIcons } from "@expo/vector-icons";
import { palette } from "../../palette";

export default function PaymentDetails({ navigation, route }) {
  const data = route.params.data;
  const date = new Date(data.date);

  return (
    <View style={{ flex: 1, margin: 20 }}>
      <Flex direction="row" style={{ alignItems: "center" }}>
        <Pressable onPressOut={() => navigation.navigate("PaymentsScreen")}>
          <MaterialIcons name={"arrow-back"} size={20} style={{ width: 30 }} />
        </Pressable>

        <Text variant="h5">
          {date.toDateString().slice(4, -5)} - {data.title}
        </Text>
      </Flex>
      <Box
        w={"100%"}
        h={"40%"}
        mt={20}
        mb={20}
        style={{
          backgroundColor: palette.LIGHTGREY,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>upload receipt</Text>
      </Box>
      <Box>
        <Text>Payer:</Text>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text>- </Text>
          <Profile id={data.id} />
          <Text> paid ${Number(data.amount).toFixed(2)}</Text>
        </Box>
      </Box>
      <Text style={{ marginTop: 10 }}>Pending</Text>
      {/* {data.payees.filter((payee) => !payee.paid).length > 0 ? (
        data.payees
          .filter((payee) => !payee.paid)
          .map((payee) => (
            <Box
              key={payee.id}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text>- </Text>
              <Profile id={payee.id} />
              <Text> owes ${Number(payee.amount).toFixed(2)}</Text>
            </Box>
          ))
      ) : (
        <Text> - All paid! 🎉 </Text>
      )} */}
      <Text style={{ marginTop: 10 }}>Paid</Text>
      {/* {data.payees
        .filter((payee) => payee.paid)
        .map((payee) => (
          <Box
            key={payee.id}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text>- </Text>
            <Profile id={payee.id} />
            <Text> paid ${Number(payee.amount).toFixed(2)}</Text>
          </Box>
        ))} */}
    </View>
  );
}
