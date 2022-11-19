import { dummyUsers } from "../dummy";
import { MaterialIcons } from "@expo/vector-icons";
import { Avatar, Box, Text } from "@react-native-material/core";

export function Profile(props) {
  const { id, greyed, fullName, size } = props;
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Avatar
        size={size ? size : 30}
        color={greyed ? "#DBDBDB" : dummyUsers[id].color}
        style={{ margin: 10 }}
        icon={() => (
          <MaterialIcons
            name={dummyUsers[id].icon}
            size={size ? (size / 3) * 2 : 20}
            color={greyed ? "#F2F2F2" : "black"}
          />
        )}
      />
      {
        <Text
          color={greyed ? "#DBDBDB" : "black"}
          style={size ? { fontSize: size / 3 } : 16}
        >
          {dummyUsers[id].firstName}{" "}
          {fullName ? dummyUsers[id].lastName : <></>}
        </Text>
      }
    </Box>
  );
}
