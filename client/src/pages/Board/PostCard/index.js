import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Chip } from "@react-native-material/core";
import { Entypo } from "@expo/vector-icons";
import { palette } from "../../../palette";
import { Profile } from "../../../components/Profile";

export default function PostCard(props) {
  const { id, title, date, authorId, description, tags } = props;

  const handleOpenOptions = () => {
    return <View></View>;
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Profile id={authorId} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
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
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.header}>{title}</Text>
        <Text>{description}</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.tagContainer} paddingTop={10}>
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
      </View>
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
    alignItems: "center",
    backgroundColor: palette.WHITE,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
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
    maxWidth: "50%",
  },
  tags: {
    marginTop: 0,
    marginLeft: 5,
  },
  optionsIcon: {
    marginTop: 0,
    marginLeft: 5,
  },
  textContainer: {
    marginLeft: 10,
    paddingRight: 5,
  },
});
