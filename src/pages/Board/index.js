import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import PostCard from "./PostCard";

const handleAddPost = () => {
  return;
};
const handleOpenPost = () => {
  return;
};

export default function BoardScreen() {
  const posts = [
    {
      postID: 1,
      postTitle: "Should we get a house pet?? OwO",
      postDate: new Date().toISOString().slice(0, 10),
      postAuthor: "Angela Wang",
      postDescription: "I think we should get a cat :3",
      postTags: ["discussion"],
    },
    {
      postID: 2,
      postTitle: "Should we buy an Xbox Series X and a brand new 4K TV :DDDD",
      postDate: new Date().toISOString().slice(0, 10),
      postAuthor: "Angela Wang",
      postDescription: "I think we should get a cat :3",
      postTags: ["gaming", "xbox", ],
    },
  ];

  return (
    <View style={styles.container}>
      <View>
        {posts.map((postData) => {
          return (
            <TouchableOpacity onPress={() => handleOpenPost()} key={postData.postID}>
              <PostCard
                postID={postData.postID}
                postTitle={postData.postTitle}
                postDate={postData.postDate}
                postAuthor={postData.postAuthor}
                postDescription={postData.postDescription}
                postTags={postData.postTags}
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
  },
  postContainer: {},
  bottom: {
    bottom: 20,
    right: 20,
    position: "absolute",
  },
});
