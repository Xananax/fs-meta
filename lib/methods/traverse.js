'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = traverse;
function doTraverse(fs, dir, options, operation, depth, level, method, cb) {
    level++;
    fs[method](dir, function (err, dirStats) {
        if (err) {
            return cb(err);
        }
        fs.readdir(dir, function (err, files) {
            if (err) {
                return cb(err);
            }
            var length = files.length;

            var i = 0;
            var doneHasRan = false;
            if (!length) {
                return done();
            }
            function done(err) {
                if (doneHasRan) {
                    return;
                }
                doneHasRan = true;
                if (err) {
                    return cb(err);
                }
                operation(dir, dirStats, options, cb);
            }
            function next(err) {
                if (err) {
                    return done(err);
                }
                if (i >= length) {
                    return done();
                }
                var file = files[i++];
                var filePath = dir + '/' + file;
                fs.stats(filePath, function (err, stats) {
                    if (err) {
                        return done(err);
                    }
                    if (stats.isDirectory() && level < depth) {
                        return doTraverse(fs, filePath, options, operation, depth, level, method, next);
                    }
                    operation(filePath, stats, options, next);
                });
            }
        });
    });
}

function traverse(fs, dir, options, operation, cb) {
    if (typeof options == 'function') {
        cb = operation;
        operation = options;
        options = null;
    }
    var depth = options.depth || Infinity;
    var level = 0;
    var method = options.lstat ? 'lstats' : 'stat';
    doTraverse(fs, dir, options, operation, depth, level, method, cb);
}

module.exports = exports['default'];