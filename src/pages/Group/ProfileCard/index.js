import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { palette } from "../../../palette";
import { Profile } from "../../../components/Profile";
import { dummyUsers } from "../../../dummy";

export default function ProfileCard() {
  const userData = {
    id: 1,
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
        <Profile id={userData.id} size={100} fullName />
      </TouchableOpacity>
      <View style={styles.desc}>
        <Text>{dummyUsers[userData.id].description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderColor: "grey",
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    wordWrap: "normal",
    marginLeft: -20,
    minHeight: "30%",
  },
  item: {
    margin: "5%",
    text: {
      fontSize: 20,
      fontWeight: "600",
    },
  },
  desc: { marginHorizontal: 40, marginTop: 20 },
});
