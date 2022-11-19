import { StyleSheet, Text, View } from "react-native";
import { Avatar, Chip } from "@react-native-material/core";
import { Profile } from "../../../components/Profile";

export default function PostCard(props) {
  const { id, title, date, authorId, description, tags } = props;
  const parsedDate = new Date(date);
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
              color="tomato"
            />
          );
        })}
      </View>
      <Text style={styles.date}>{parsedDate.toDateString()}</Text>
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
  },
  tags: {
    marginTop: 2,
    marginLeft: 5,
  },
});
