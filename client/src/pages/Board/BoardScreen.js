import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { dummyPosts } from "../../dummy";
import PostCard from "./PostCard";
import { palette } from "../../palette";

export default function BoardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        {dummyPosts.map((postData) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("PostForm", {
                  id: postData.id,
                  title: postData.title,
                  date: postData.date,
                  authorId: postData.authorId,
                  description: postData.description,
                  tags: postData.tags,
                })
              }
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
      <TouchableOpacity
        onPress={() => navigation.navigate("PostForm", { id: -1 })}
        style={styles.bottom}
      >
        <View>
          <MaterialIcons name="add-box" size={72} color={palette.FLAME} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 0,
  },
  postContainer: {},
  bottom: {
    bottom: 10,
    right: 10,
    position: "absolute",
  },
});
