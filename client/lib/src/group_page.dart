import 'package:flutter/material.dart';

class Group extends StatefulWidget {
  const Group({super.key});

  @override
  State<Group> createState() => _MyWidgetState();
}

class _MyWidgetState extends State<Group> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('My Group'),
        backgroundColor: Colors.deepOrange[300],
      ),
    );
  }
}