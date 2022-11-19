import { dummyUsers } from "../dummy";
import { MaterialIcons } from "@expo/vector-icons";
import { Avatar, Box, Text } from "@react-native-material/core";

export function Profile(props) {
  const { id, greyed, avatarOnly } = props;
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
        color={greyed ? "#DBDBDB" : dummyUsers[id].color}
        style={{ margin: 10 }}
        icon={() => (
          <MaterialIcons
            name={dummyUsers[id].icon}
            size={20}
            color={greyed ? "#F2F2F2" : "black"}
          />
        )}
      />
      {avatarOnly ? (
        <></>
      ) : (
        <Text color={greyed ? "#DBDBDB" : "black"}>
          {dummyUsers[id].firstName}
        </Text>
      )}
    </Box>
  );
}
