import { View } from "react-native";
import { Box, Pressable, Text } from "@react-native-material/core";
import PaymentsCard from "./PaymentsCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavigationContainer } from "@react-navigation/native";
import { dummyData, dummyUsers } from "../../dummy";
import { MaterialIcons } from "@expo/vector-icons";
import { ProfilePicture } from "../../components/ProfilePicture";

export default function PaymentDetails({ navigation, route }) {
  const data = route.params.data;
  console.log(data);
  const date = new Date(data.date);
  return (
    <View style={{ flex: 1, margin: 20 }}>
      <Text variant="h5">
        {date.toDateString()} - {data.title}
      </Text>
      <Box
        w={"100%"}
        h={"40%"}
        mt={20}
        mb={20}
        style={{
          backgroundColor: "grey",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>image</Text>
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
          <ProfilePicture id={data.id} />
          <Text> paid ${Number(data.amount).toFixed(2)}</Text>
        </Box>
      </Box>
      <Text>Pending</Text>
      {data.payees
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
            <ProfilePicture id={payee.id} />
            <Text> owes ${Number(payee.amount).toFixed(2)}</Text>
          </Box>
        ))}
      <Text>Paid</Text>
      {data.payees
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
            <ProfilePicture id={payee.id} />
            <Text> paid ${Number(payee.amount).toFixed(2)}</Text>
          </Box>
        ))}
    </View>
  );
}
