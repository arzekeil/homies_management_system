import { dummyData, dummyUsers } from "../dummy";
import { MaterialIcons } from "@expo/vector-icons";
import { Avatar, Box, Text } from "@react-native-material/core";

export function ProfilePicture(props) {
  const { id } = props;
  console.log(id);
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Avatar
        size={30}
        color={dummyUsers[id].color}
        style={{ margin: 10 }}
        icon={() => (
          <MaterialIcons name={dummyUsers[id].icon} size={20} color="black" />
        )}
      />
      <Text>{dummyUsers[id].firstName}</Text>
    </Box>
  );
}
