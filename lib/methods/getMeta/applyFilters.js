'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = applyFilters;

function applyFilters(fs, obj, options, cb) {
	if (options && options.filters && options.filters.length) {
		var _ret = (function () {
			var filters = options.filters;
			var length = filters.length;

			(function nextFilter(_x) {
				var _again = true;

				_function: while (_again) {
					var i = _x;
					filter = undefined;
					_again = false;

					if (i >= length) {
						return cb(null, obj);
					}
					var filter = filters[i];
					if (!filter) {
						_x = i + 1;
						_again = true;
						continue _function;
					}
					if (typeof filter !== 'function') {
						throw new Error('filter is not a function');
					}
					filter(obj, options, function (err, obj) {
						if (err) {
							return cb(err);
						}
						nextFilter(i + 1);
					}, fs);
				}
			})(0);
			return {
				v: undefined
			};
		})();

		if (typeof _ret === 'object') return _ret.v;
	}
	return cb(null, obj);
}

module.exports = exports['default'];