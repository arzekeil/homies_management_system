import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Avatar, Chip } from "@react-native-material/core";
import { Entypo } from "@expo/vector-icons";
import { palette } from "../../../palette";
import { Profile } from "../../../components/Profile";

export default function PostCard(props) {
  const { id, title, date, authorId, description, tags } = props;

  const handleOpenOptions = () => {
    return;
  };
  return (
    <View style={styles.container}>
      <Profile id={authorId} avatarOnly />
      <View style={styles.tagContainer}>
        {tags.map((postTag) => {
          return (
            <Chip
              label={postTag}
              variant="outlined"
              key={postTag}
              style={styles.tags}
              color={palette.FLAME}
            />
          );
        })}
      </View>
      <Text style={styles.date}>{date}</Text>
      <TouchableOpacity
        onPress={() => handleOpenOptions()}
        style={styles.bottom}
      >
        <View>
          <Entypo
            name="dots-three-vertical"
            size={16}
            color="black"
            style={styles.optionsIcon}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.header}>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: "2.5%",
    borderColor: "black",
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: palette.WHITE,
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
  },
  date: {
    fontSize: 16,
    fontWeight: "400",
  },

  tagContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tags: {
    marginTop: 2,
    marginLeft: 5,
  },
  optionsIcon: {
    marginTop: 6,
    marginLeft: 5,
  },
});
