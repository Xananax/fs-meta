'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = options;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilsToType = require('../utils/toType');

var _utilsToType2 = _interopRequireDefault(_utilsToType);

function options(description, def) {
	if (typeof description !== 'string') {
		var descriptionStr = '';
		for (var n in description) {
			descriptionStr += n + ': (' + (0, _utilsToType2['default'])(def[n]) + ') ' + description[n] + ' Defaults to \'' + def[n] + '\'\n';
		}
		description = descriptionStr;
	}
	return {
		name: 'options',
		description: description,
		defaults: def,
		required: false,
		coerce: function coerce(args) {
			return Object.assign({}, def, args);
		}
	};
}

module.exports = exports['default'];