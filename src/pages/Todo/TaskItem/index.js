import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Profile } from "../../../components/Profile";

function TaskItem(props) {
  const { date, done, owner, title } = props;

  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <TouchableOpacity onPress={() => props.deleteTask()}>
          <MaterialIcons
            style={styles.markComplete}
            name={done ? "check-circle" : "radio-button-unchecked"}
            size={24}
          />
        </TouchableOpacity>
        <View style={styles.spacingContainer}>
          <Text style={done ? styles.taskComplete : styles.task}>{title} </Text>
          <Profile id={owner} greyed={done ? true : false} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 0,
  },
  index: {
    color: "#fff",
    fontSize: 20,
  },
  taskContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minHeight: 50,
    borderColor: "grey",
    borderWidth: 1,
  },
  spacingContainer: {
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  task: {
    color: "black",
    fontSize: 16,
  },
  taskComplete: {
    color: "grey",
    fontSize: 16,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  markComplete: {
    marginRight: 10,
  },
});

export default TaskItem;
