'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _fsMethods = require('./fsMethods');

var _fsExtraMethods = require('./fsExtraMethods');

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _exists2 = require('./exists');

var _exists3 = _interopRequireDefault(_exists2);

var _traverse2 = require('./traverse');

var _traverse3 = _interopRequireDefault(_traverse2);

var _getMeta2 = require('./getMeta');

var _getMeta3 = _interopRequireDefault(_getMeta2);

var _getMetaRecursive2 = require('./getMetaRecursive');

var _getMetaRecursive3 = _interopRequireDefault(_getMetaRecursive2);

var _readdirp = require('./readdirp');

var _readdirp2 = _interopRequireDefault(_readdirp);

var methods = {};
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = _fsMethods.fsMethods[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var _name = _step.value;

		methods[_name] = _fsExtra2['default'][_name];
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
	for (var _iterator2 = _fsExtraMethods.fsExtraMethods[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
		var _name2 = _step2.value;

		methods[_name2] = _fsExtra2['default'][_name2];
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
	exists: function exists(src, cb) {
		return (0, _exists3['default'])(_fsExtra2['default'], src, cb);
	},
	traverse: function traverse(src, op, cb) {
		return (0, _traverse3['default'])(_fsExtra2['default'], src, op, cb);
	},
	getMeta: function getMeta(src, options, cb) {
		return (0, _getMeta3['default'])(_fsExtra2['default'], src, options, cb);
	},
	getMetaRecursive: function getMetaRecursive(src, options, cb) {
		return (0, _getMetaRecursive3['default'])(_fsExtra2['default'], src, options, cb);
	},
	readdirp: _readdirp2['default']
});

exports['default'] = methods;
module.exports = exports['default'];