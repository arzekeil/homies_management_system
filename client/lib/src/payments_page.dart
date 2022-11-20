import 'package:flutter/material.dart';
import 'package:hackwestern_2022/src/new_payment_page.dart';

class Payments extends StatefulWidget {
  const Payments({super.key});

  @override
  State<Payments> createState() => _MyWidgetState();
}

class _MyWidgetState extends State<Payments> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Payments'),
        backgroundColor: Colors.deepOrange[300],
      ),
      body: Container(
        margin: const EdgeInsets.symmetric(horizontal: 15, vertical: 15),
        child: Column(
          children: [
            Container(
              child: Column(
                children: [
                  const Text("Pending Payments"),
                ],
              ),
            ),
            Container(
              child: Column(
                children: [
                  const Text("Pending Payments"),
                ],
              ),
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.of(context).push(
            MaterialPageRoute(
              builder: (BuildContext context) {
                return const NewPayment();
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
