import 'package:flutter/material.dart';
import './screens/login.dart';
import './screens/Welcome/welcome_screen.dart';
import './screens/home.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  static const String _title = 'Login ';

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: _title,
      home: Scaffold(
        body: const WelcomeScreen(),
      ),
    );
  }
}
