"use strict";

exports.__esModule = true;
exports.default = void 0;

var _turf = require("@turf/turf");

var _lodash = require("lodash");

// 1 = 69 miles
// 0.001 = 1 city block
// 0.0001 = 10 meter
// 0.00001 = 1 meter
// 0.0000001 = actual practical limit of surveying, 11mm
var _default = (geometry, {
  tolerance = 0.00001
} = {}) => {
  if (geometry == null) return;
  geometry = geometry.geometry || geometry;
  if (geometry == null) return;
  const {
    type,
    coordinates,
    ...rest
  } = geometry;
  if (!type) throw new Error('type is required');
  if (!coordinates) throw new Error('coordinates is required');

  if (type === 'LineString' && coordinates.length === 2 && (0, _lodash.isEqual)(coordinates[0], coordinates[1])) {
    throw new Error('Invalid LineString! Only two coordinates that are identical.');
  }

  const res = (0, _turf.simplify)((0, _turf.truncate)(geometry, {
    precision: 6,
    coordinates: 3
  }), {
    tolerance
  });
  return {
    type,
    ...rest,
    coordinates: res.coordinates
  };
};

exports.default = _default;
module.exports = exports.default;