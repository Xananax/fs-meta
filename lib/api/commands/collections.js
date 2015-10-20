'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = collections;

var validCommands = ['get', 'add', 'root', 'remove', 'edit'];

function collections(fs) {
	return {
		name: 'collections',
		description: 'manages collections of files',
		parameters: [{
			name: 'command',
			valid: validCommands,
			validate: function validate(arg) {
				return validCommands.indexOf(arg) >= 0;
			}
		}],
		optionalParameters: [{
			name: 'file_id',
			description: 'a file id'
		}, {
			name: 'group_id',
			description: 'a group id'
		}, {
			name: 'file_path',
			description: 'a file path'
		}, {
			name: 'group_name',
			description: 'a group name'
		}, {
			name: 'groups',
			description: 'an array of group ids'
		}, {
			name: 'files',
			description: 'an array of file ids'
		}],
		run: function run(_ref, cb) {
			var command = _ref.command;
			var dest = _ref.dest;
			var clobber = _ref.clobber;
			var preserveTimestamps = _ref.preserveTimestamps;
			var filter = _ref.filter;

			fs.copy(src, dest, { clobber: clobber, preserveTimestamps: preserveTimestamps, filter: filter }).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];