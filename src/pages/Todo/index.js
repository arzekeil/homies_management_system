import { Text } from "@react-native-material/core";
import React, { useEffect, useState } from "react";
import { Keyboard, ScrollView, StyleSheet, View } from "react-native";

import TaskInputField from "./TaskInput";
import TaskItem from "./TaskItem";

import { dummyTasks } from "../../dummy";

export default function TodoScreen() {
  const [tasks, setTasks] = useState(dummyTasks);

  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  };

  const deleteTask = (deleteIndex) => {
    const isDone = tasks[deleteIndex];
    tasks[deleteIndex].done = !isDone.done;
    console.log(isDone)
  };

  const today = new Date();

  const firstDay = new Date(today.setDate(today.getDate() - today.getDay()));
  const lastDay = new Date(today.setDate(today.getDate() - today.getDay() + 6));

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text variant="h5">
          This week ({firstDay.toDateString().slice(4, -5)} -{" "}
          {lastDay.toDateString().slice(4, -5)})
        </Text>

        {console.log(tasks)}
        {tasks.map((task, index) => {
          console.log(task);
          return (
            <View key={index} style={styles.taskContainer}>
              <TaskItem
                index={index + 1}
                title={task.title}
                owner={task.owner}
                date={task.date}
                done={task.done}
                deleteTask={() => deleteTask(index)}
              />
            </View>
          );
        })}
      </ScrollView>
      <TaskInputField addTask={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    // backgroundColor: "#1E1A3C",
  },
  heading: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  },
});
