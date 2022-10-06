import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter_map/flutter_map.dart';
// import 'package:flutter_map/flutter_map.dart'; // Suitable for most situations
import 'package:flutter_map/plugin_api.dart'; // Only import if required functionality is not exposed by default
// import 'package:geocoder/geocoder.dart';
// import 'package:geocoder/geocoder.dart';
// import 'package:latlong/latlong.dart';
import 'package:latlong2/latlong.dart';
import 'package:positioned_tap_detector_2/positioned_tap_detector_2.dart';
import 'package:proj4dart/proj4dart.dart';

class Maps extends StatefulWidget {
  const Maps({Key? key}) : super(key: key);

  @override
  State<Maps> createState() => _MapsState();
}

class _MapsState extends State<Maps> {
  LatLng point = LatLng(12.9716, 77.5946);
  // var location = [];
  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        FlutterMap(
          options: MapOptions(
            onTap: (TapPosition, latlng) {
              setState(() {
                point = latlng;
              });
            },
            center: LatLng(12.9716, 77.5946),
            zoom: 13.0,
          ),
          layers: [
            TileLayerOptions(
                urlTemplate:
                    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                subdomains: ['a', 'b', 'c']),
            MarkerLayerOptions(
              markers: [
                Marker(
                  width: 80.0,
                  height: 80.0,
                  point: point,
                  builder: (ctx) => Icon(
                    Icons.add_location,
                    color: Colors.red,
                    size: 60.0,
                  ),
                ),
              ],
            ),
          ],
        ),
      ],
    );
  }
}
