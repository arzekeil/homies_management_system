import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "@react-native-material/core";

export default function ProfileCard() {
  const userData = {
    userFullName: "Arzekeil Deleon",
  };

  return (
    <View style={styles.container}>
      <Avatar label={userData.userFullName} size={128} autoColor />
      <Text>{userData.userFullName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
});
