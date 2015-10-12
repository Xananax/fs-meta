"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = escapeRegExp;

function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

module.exports = exports["default"];