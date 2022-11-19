import { StyleSheet, Text, View } from "react-native";
import { Avatar, Chip } from "@react-native-material/core";

export default function PostCard(props) {
  const { postID, postTitle, postDate, postAuthor, postDescription, postTags } =
    props;
  return (
    <View style={styles.container}>
      <Avatar label={postAuthor} size={36} color={"lightgrey"} />
      <View style={styles.tagContainer}>
        {postTags.map((postTag) => {
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
      <Text style={styles.date}>{postDate}</Text>
      <Text style={styles.header}>{postTitle}</Text>
      <Text>{postDescription}</Text>
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
