import 'package:flutter/material.dart';
import 'package:hackwestern_2022/src/post_detail_page.dart';
import 'package:hackwestern_2022/src/post_form_page.dart';

class Board extends StatefulWidget {
  const Board({super.key});

  @override
  State<Board> createState() => _MyWidgetState();
}

class _MyWidgetState extends State<Board> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Discussion Board'),
        backgroundColor: Colors.deepOrange[300],
      ),
      body: Column(
        children: [
          Container(
            margin: const EdgeInsets.symmetric(horizontal: 15, vertical: 15),
            child: Column(
              children: [
                Center(
                  child: Card(
                    child: InkWell(
                      splashColor: Colors.blue.withAlpha(30),
                      onTap: () {
                        Navigator.of(context).push(
                          MaterialPageRoute(
                            builder: (BuildContext context) {
                              return const PostDetail();
                            },
                          ),
                        );
                      },
                      child: const ListTile(
                        leading: Icon(Icons.person),
                        title: Text('We go jim'),
                        subtitle: Text('yessir'),
                      ),
                    ),
                  ),
                ),
                Center(
                  child: Card(
                    child: InkWell(
                      splashColor: Colors.blue.withAlpha(30),
                      onTap: () {
                        Navigator.of(context).push(
                          MaterialPageRoute(
                            builder: (BuildContext context) {
                              return const PostDetail();
                            },
                          ),
                        );
                      },
                      child: const ListTile(
                        leading: Icon(Icons.person),
                        title: Text('Gaming night with the bois'),
                        subtitle: Text('Meeting at the couch at 5pm'),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.of(context).push(
            MaterialPageRoute(
              builder: (BuildContext context) {
                return const PostForm();
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
