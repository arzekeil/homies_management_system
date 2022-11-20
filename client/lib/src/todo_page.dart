import 'package:flutter/material.dart';
import 'package:hackwestern_2022/src/new_todo_page.dart';

class TodoList extends StatefulWidget {
  const TodoList({super.key});

  @override
  State<TodoList> createState() => _MyWidgetState();
}

class _MyWidgetState extends State<TodoList> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Weekly Chores'),
        backgroundColor: Colors.deepOrange[300],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.of(context).push(
            MaterialPageRoute(
              builder: (BuildContext context) {
                return const NewTodo();
              },
            ),
          );
        },
        backgroundColor: Colors.deepOrange.shade200,
        child: const Icon(Icons.add),
      ),
    );
  }
}