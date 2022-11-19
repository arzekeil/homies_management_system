import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "@react-native-material/core";

export default function ProfileCard() {
  const userData = {
    userFullName: "Arzekeil Deleon",
  };

  return (
    <View style={styles.container}>
      <Avatar label={userData.userFullName} size={128} color={"white"} style={styles.item} />
      <Text style={styles.item.text}>{userData.userFullName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "tomato",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    margin: "5%",
    text: {
      fontSize: 20,
      fontWeight: "600",
    },
  },
});