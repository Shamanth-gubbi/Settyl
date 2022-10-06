import 'package:flutter/cupertino.dart';

import 'package:flutter/material.dart';

void ShowSnagBar(BuildContext context, String message) {
  ScaffoldMessenger.of(context).showSnackBar(SnackBar(
    content: Text(message),
    duration: const Duration(seconds: 3),
  ));
}
