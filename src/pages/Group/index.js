import { StyleSheet, View } from "react-native";

import ProfileCard from "./ProfileCard";
import Members from "./Members";

export default function GroupScreen() {
  return (
    <View>
      <ProfileCard />
      <Members />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
