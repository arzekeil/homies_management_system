import 'package:flutter/material.dart';

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
    );
  }
}