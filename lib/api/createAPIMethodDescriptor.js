'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = createMethodDescriptor;

function createMethodDescriptor(name, description, args) {
	var argsOrder = [];
	var argsDetails = {};
	args.forEach(function (_ref) {
		var name = _ref.name;
		var description = _ref.description;
		var valid_values = _ref.valid_values;
		var required = _ref.required;

		argsDetails[name] = { description: description, valid_values: valid_values, required: required };
		argsOrder.push(required ? name : '[' + name + ']');
	});
	var summary = name + '(' + argsOrder.join(',') + ')';
	return {
		name: name,
		summary: summary,
		description: description,
		argsDetails: argsDetails
	};
}

module.exports = exports['default'];