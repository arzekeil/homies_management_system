import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "@react-native-material/core";

export default function MemberCard(props) {
  const { memberFullName } = props;

    return(
        <View style={styles.container}>
            <Avatar label={memberFullName} size={72} autoColor />
            <Text>{memberFullName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
