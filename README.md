geohash-distance
=======

Functions to calculate the distance between two [geohashes](http://en.wikipedia.org/wiki/Geohash).

Methods summary:

- `inKm`: distance between two geohashes in kilometers.
- `inMiles`: distance between two geohashes in miles.

Install
-------

### from npm

    npm install --save geohash-distance

Usage
-----


- `GeohashDistance.inKm(hash1, hash2)`: return distance in kilometers between the given hashes
- `GeohashDistance.inMiles(hash1, hash2)`: return distance in miles between the given hashes

### Import within node.js

    var GeohashDistance = require('geohash-distance');
