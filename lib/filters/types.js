'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = getTypeFilter;
var extensions = {
	data: /json|xml|ini|yaml/i,
	text: /txt|html|info|md|markdown|json|xml|ini|yaml|css/i,
	formatted: /html|md|markdown/i,
	archive: /zip|rar|tar|gz|lzh/i,
	audio: /wav|mp3|ogg/i,
	image: /bmp|gif|jpe?g|png|psd|tiff|webp|ico|svg/i,
	bitmap: /bmp|gif|jpe?g|png|psd|tiff|webp|ico/i,
	vector: /svg/i
};

function getTypeFilter(obj, options, cb) {
	obj.types = [];
	if (obj.isDirectory) {
		obj.types.push('directory');
	} else {
		var ext = obj.extension;
		for (var n in extensions) {
			if (extensions[n].test(ext)) {
				obj.types.push(n);
			}
		}
		if (!obj.types.length) {
			obj.types.push('unknown');
		}
	}
	if (obj.link) {
		obj.types.push('symlink');
	}
	cb(null, obj);
}

getTypeFilter.extensions = extensions;
module.exports = exports['default'];