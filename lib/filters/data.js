'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = dataFilter;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ini = require('ini');

var _ini2 = _interopRequireDefault(_ini);

var _jsYaml = require('js-yaml');

var _jsYaml2 = _interopRequireDefault(_jsYaml);

var _xml2js = require('xml2js');

var _xml2js2 = _interopRequireDefault(_xml2js);

var formats = /ini|yaml|xml|json/i;

function readJson(contents, obj, cb) {
	try {
		obj.data = JSON.parse(contents);
		return cb(null, obj);
	} catch (err) {
		return cb(err);
	}
}

function readXML(contents, obj, cb) {
	_xml2js2['default'].parseString(contents, function (err, data) {
		if (err) {
			return cb(err);
		}
		obj.data = data;
		return cb(null, obj);
	});
}

function readYAML(contents, obj, cb) {
	try {
		obj.data = _jsYaml2['default'].safeLoad(contents, { filename: obj.path, schema: _jsYaml2['default'].DEFAULT_FULL_SCHEMA });
		return cb(null, obj);
	} catch (err) {
		return cb(err);
	}
}

function readINI(contents, obj, cb) {
	try {
		obj.data = _ini2['default'].parse(contents);
		return cb(null, obj);
	} catch (err) {
		return cb(err);
	}
}

function parseData(contents, obj, cb) {
	var ext = obj.extension;
	switch (ext) {
		case 'json':
			return readJson(contents, obj, cb);break;
		case 'xml':
			return readXML(contents, obj, cb);break;
		case 'yaml':
		case 'yml':
			return readYAML(contents, obj, cb);break;
		case 'ini':
			return readINI(contents, obj, cb);break;
		default:
			break;
	}
	return cb(null, obj);
}

function dataFilter(obj, options, cb, fs) {
	if (!formats.test(obj.extension)) {
		return cb(null, obj);
	}
	if (!obj.contents) {
		fs.readFile(obj.path, { encoding: 'utf8' }, function (err, contents) {
			if (err) {
				return cb(err);
			}
			return parseData(contents, obj, cb);
		});
		return;
	}
	parseData(obj.contents, obj, cb);
}

module.exports = exports['default'];