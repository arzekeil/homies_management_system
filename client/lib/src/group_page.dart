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
      body: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                margin: const EdgeInsets.symmetric(vertical: 30),
                child: Row(
                  children: [
                    Container(
                      margin: const EdgeInsets.all(10.0),
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        color: Colors.teal.shade200,
                      ),
                      alignment: Alignment.center,
                      child: const Icon(
                        Icons.battery_alert,
                        color: Colors.white,
                        size: 102,
                      ),
                    ),
                    const Text(
                      "Arzekeil De Leon",
                      style:
                          TextStyle(fontSize: 24, fontWeight: FontWeight.w600),
                    ),
                  ],
                ),
              ),
            ],
          ),
          const Divider(
            height: 0,
            thickness: 0.5,
            indent: 0,
            endIndent: 0,
            color: Colors.black,
          ),
          Column(
            children: [
              Container(
                margin: const EdgeInsets.only(left: 75, right: 75, top: 25),
                child: const Text(
                  "In da house",
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.w400),
                ),
              ),
              Container(
                margin: const EdgeInsets.only(left: 75, right: 75, top: 50),
                child: Column(
                  children: [
                    Card(
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: const <Widget>[
                          ListTile(
                            leading: Icon(
                              Icons.cabin,
                              color: Colors.pinkAccent,
                              size: 32,
                            ),
                            title: Text('Angela Wang'),
                          ),
                        ],
                      ),
                    ),
                    Card(
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: const <Widget>[
                          ListTile(
                            leading: Icon(
                              Icons.bug_report,
                              color: Colors.purple,
                              size: 32,
                            ),
                            title: Text('oWo Bot qwwq'),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
