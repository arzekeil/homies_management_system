import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Avatar } from "@react-native-material/core";
import { palette } from "../../../palette";

export default function ProfileCard() {
  const userData = {
    userFullName: "Arzekeil Deleon",
  };

  const handleOpenProfile = () => {
    return;
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => handleOpenProfile()}
        style={styles.container}
      >
        <Avatar
          label={userData.userFullName}
          size={128}
          color={"white"}
          style={styles.item}
        />
        <Text style={styles.item.text}>{userData.userFullName}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.LIGHTGREY,
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
