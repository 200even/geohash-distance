'use strict'
var Geohash = require('latlon-geohash')

exports.inKm = function (firstHash, secondHash) {
  var loc1 = Geohash.decode(firstHash)
  var loc2 = Geohash.decode(secondHash)
  return distanceBetweenCoordinates(loc1, loc2, 6371)
}

exports.inMiles = function (firstHash, secondHash) {
  var loc1 = Geohash.decode(firstHash)
  var loc2 = Geohash.decode(secondHash)
  return distanceBetweenCoordinates(loc1, loc2, 3959)
}

function degreesToRadians (degrees) {
  return degrees * Math.PI / 180
}

function distanceBetweenCoordinates (loc1, loc2, radius) {
  var dLat = degreesToRadians(loc2.lat - loc1.lat)
  var dLon = degreesToRadians(loc2.lon - loc1.lon)

  var lat1 = degreesToRadians(loc1.lat)
  var lat2 = degreesToRadians(loc2.lat)

  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return radius * c
}
