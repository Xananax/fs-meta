'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _fsMethodsSync = require('./fsMethodsSync');

var _fsExtraMethodsSync = require('./fsExtraMethodsSync');

var _traverseSync = require('./traverseSync');

var _traverseSync2 = _interopRequireDefault(_traverseSync);

var methods = {};
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = _fsMethodsSync.fsMethodsSync[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var _name = _step.value;

		methods[_name.replace(/Sync$/, '')] = _fsExtra2['default'][_name];
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator['return']) {
			_iterator['return']();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
	for (var _iterator2 = _fsExtraMethodsSync.fsExtraMethodsSync[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
		var _name2 = _step2.value;

		methods[_name2.replace(/Sync$/, '')] = _fsExtra2['default'][_name2];
	}
} catch (err) {
	_didIteratorError2 = true;
	_iteratorError2 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion2 && _iterator2['return']) {
			_iterator2['return']();
		}
	} finally {
		if (_didIteratorError2) {
			throw _iteratorError2;
		}
	}
}

Object.assign(methods, {
	traverse: function traverse(src, op) {
		return (0, _traverseSync2['default'])(_fsExtra2['default'], src, op);
	}
});

exports['default'] = methods;
module.exports = exports['default'];