import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "@react-native-material/core";
import { Profile } from "../../../../components/Profile";

export default function MemberCard(props) {
  const { id } = props;

  return (
    <View style={styles.container}>
      <Profile id={id} size={50} fullName />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "2.5%",
    paddingBottom: "2.5%",
    borderWidth: 1,
    bordercolor: "grey",
    borderRadius: 20,
    backgroundColor: "white",
  },
  avatar: {
    marginLeft: "2.5%",
  },
  nameText: {
    marginRight: "15%",
  },
});
