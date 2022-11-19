import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "@react-native-material/core";

export default function MemberCard(props) {
  const { memberFullName } = props;

    return(
        <View style={styles.container}>
            <Avatar label={memberFullName} size={72} color={"lightgrey"} style={styles.avatar} />
            <Text style={styles.nameText}>{memberFullName}</Text>
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
  },
  avatar: {
    marginLeft: "2.5%",
  },
  nameText: {
    marginRight: "30%",
  },
});
