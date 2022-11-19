import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { dummyPosts } from "../../dummy";
import PostCard from "./PostCard";

const handleAddPost = () => {
  return;
};
const handleOpenPost = () => {
  return;
};

export default function BoardScreen() {
  return (
    <View style={styles.container}>
      <View>
        {dummyPosts.map((postData) => {
          return (
            <TouchableOpacity
              onPress={() => handleOpenPost()}
              key={postData.id}
            >
              <PostCard
                id={postData.id}
                title={postData.title}
                date={postData.date}
                authorId={postData.authorId}
                description={postData.description}
                tags={postData.tags}
                style={styles.postContainer}
              />
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity onPress={() => handleAddPost()} style={styles.bottom}>
        <View>
          <MaterialIcons name="add-box" size={72} color="tomato" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 20,
  },
  postContainer: {},
  bottom: {
    bottom: 20,
    right: 20,
    position: "absolute",
  },
});
