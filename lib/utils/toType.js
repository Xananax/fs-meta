"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = toType;

function toType(obj) {
	return Object.prototype.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}

module.exports = exports["default"];