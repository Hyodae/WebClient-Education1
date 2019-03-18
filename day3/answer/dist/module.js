"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMax;
exports.colorList = exports.isString = void 0;

/*
    @TODO
    - getMax()는 default로 export
    - isString는 일반 export
    - color는 'colorList'로 export
*/
function getMax() {
  return Math.max.apply(Math, arguments);
}

var isString = function isString(val) {
  return typeof val === "string";
};

exports.isString = isString;
var color = ["yellow", "brown", "red", "green", "black"];
exports.colorList = color;