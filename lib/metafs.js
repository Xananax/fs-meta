'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _filters = require('./filters');

var _filters2 = _interopRequireDefault(_filters);

var _makeBox = require('./makeBox');

var _makeBox2 = _interopRequireDefault(_makeBox);

var _statToObj = require('./statToObj');

var _statToObj2 = _interopRequireDefault(_statToObj);

var fs = (0, _makeBox2['default'])();
var sync = (0, _makeBox2['default'])(null, { sync: true });
var unpromised = (0, _makeBox2['default'])(null, { unpromised: true });

fs.boxed = _makeBox2['default'];
fs.sync = sync;
fs.unpromised = unpromised;
fs.filters = _filters2['default'];
fs.statToObj = _statToObj2['default'];

exports['default'] = fs;
module.exports = exports['default'];