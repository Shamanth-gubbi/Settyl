import 'dart:convert';

import 'package:flutter/cupertino.dart';
import 'package:http/http.dart' as http;
import 'package:settyl/constants/utils.dart';
import './error_handling.dart';

void httpErrorHandling({
  required http.Response res,
  required BuildContext context,
  required VoidCallback OnSuccess,
}) {
  switch (res.statusCode) {
    case 200:
      OnSuccess();
      break;
    case 400:
      ShowSnagBar(context, jsonDecode(res.body)['message']);
      break;
    case 500:
      ShowSnagBar(context, jsonDecode(res.body)['error']);
      break;
    default:
      ShowSnagBar(context, res.body);
  }
}
