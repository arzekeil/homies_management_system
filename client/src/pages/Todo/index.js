import { Text } from "@react-native-material/core";
import React, { useEffect, useState } from "react";
import { Keyboard, ScrollView, StyleSheet, View } from "react-native";

import TaskInputField from "./TaskInput";
import TaskItem from "./TaskItem";

import { dummyTasks } from "../../dummy";

export default function TodoScreen() {
  const [newData, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      await fetch("http://10.0.2.2:8000/todos", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setLoading(false);
          return json;
        })
        .catch((error) => {
          console.error(error);
        });
    };
    getData();
  }, []);

  const addNewTask = async () => {
    await fetch("http://10.0.2.2:8000/todos", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        return json;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  };

  const deleteTask = (deleteIndex) => {
    const isDone = newData[deleteIndex];
    newData[deleteIndex].done = !isDone.done;
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

        {!loading &&
          newData.map((task, index) => {
            return (
              <View key={index} style={styles.taskContainer}>
                <TaskItem
                  index={index + 1}
                  title={task.title}
                  owner={task.userId}
                  date={task.dueDate}
                  done={task.isCompleted}
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
