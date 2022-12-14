import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function PostForm({ navigation, route }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const id = route.params.id;

  const handlePostSave = () => {
    navigation.navigate("BoardScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonBar}>
        <TouchableOpacity
          onPress={() => navigation.navigate("BoardScreen")}
          style={styles.bottom}
        >
          <View>
            <MaterialIcons name="close" size={32} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePostSave()}>
          <View>
            {id === -1 ? (
              <MaterialIcons name="send" size={32} color="black" />
            ) : (
              <MaterialIcons name="save" size={32} color="black" />
            )}
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.field}>
          <TextInput
            style={[styles.input, styles.title]}
            onChangeText={setTitle}
            placeholder="Post Title"
            value={title}
          />
        </View>
        <View style={styles.field}>
          <TextInput
            style={[styles.input, styles.description]}
            onChangeText={setDesc}
            placeholder="Post Description"
            value={desc}
            multiline
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 0,
  },
  field: {
    backgroundColor: "white",
    marginBottom: 20,
    margin: 10,
    borderRadius: 20,
  },
  buttonBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
    // backgroundColor: palette.LIGHTGREY,
  },
  contentContainer: {
    flex: 1,
    // backgroundColor: palette.LIGHTGREY,
  },
  input: {
    margin: 15,
  },
  title: {
    fontSize: 36,
    fontWeight: "600",
  },
  description: {
    fontSize: 20,
    fontWeight: "400",
  },
});
