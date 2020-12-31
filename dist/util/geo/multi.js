"use strict";

exports.__esModule = true;
exports.default = void 0;

var _default = geometry => {
  if (geometry == null) return;
  geometry = geometry.geometry || geometry;
  if (!geometry.type) throw new Error('type is required');
  if (!geometry.coordinates) throw new Error('coordinates is required');
  const isSingle = geometry.type.indexOf('Multi') !== 0;
  if (!isSingle) return geometry; // is a multi, return early

  const {
    type,
    coordinates,
    ...rest
  } = geometry;
  return {
    type: `Multi${type}`,
    ...rest,
    coordinates: [coordinates]
  };
};

exports.default = _default;
module.exports = exports.default;