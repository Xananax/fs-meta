# TOC
   - [fs-meta](#fs-meta)
     - [Own Properties](#fs-meta-own-properties)
       - [fs.sync](#fs-meta-own-properties-fssync)
       - [fs.unpromised](#fs-meta-own-properties-fsunpromised)
       - [fs.filters](#fs-meta-own-properties-fsfilters)
       - [fs.statToObj](#fs-meta-own-properties-fsstattoobj)
     - [Promises](#fs-meta-promises)
       - [exists](#fs-meta-promises-exists)
         - [exists(path)](#fs-meta-promises-exists-existspath)
       - [Regular fs methods](#fs-meta-promises-regular-fs-methods)
         - [Availability](#fs-meta-promises-regular-fs-methods-availability)
       - [getMeta](#fs-meta-promises-getmeta)
         - [getMeta(path)](#fs-meta-promises-getmeta-getmetapath)
         - [getMeta(path,{root:string})](#fs-meta-promises-getmeta-getmetapathrootstring)
         - [getMeta(path,{filters:[]})](#fs-meta-promises-getmeta-getmetapathfilters)
       - [getMetaRecursive](#fs-meta-promises-getmetarecursive)
         - [getMetaRecursive(path)](#fs-meta-promises-getmetarecursive-getmetarecursivepath)
         - [getMetaRecursive(path,{filters})](#fs-meta-promises-getmetarecursive-getmetarecursivepathfilters)
       - [readdirp](#fs-meta-promises-readdirp)
         - [readdirp(path)](#fs-meta-promises-readdirp-readdirppath)
         - [readdirp(path,{depth:n})](#fs-meta-promises-readdirp-readdirppathdepthn)
       - [traverse](#fs-meta-promises-traverse)
         - [traverse(path)](#fs-meta-promises-traverse-traversepath)
         - [traverse(path,{depth:n})](#fs-meta-promises-traverse-traversepathdepthn)
         - [traverse(path,{depth:0})](#fs-meta-promises-traverse-traversepathdepth0)
         - [traverse(path,{lstat:true})](#fs-meta-promises-traverse-traversepathlstattrue)
     - [boxed](#fs-meta-boxed)
       - [boxed(rootDir)](#fs-meta-boxed-boxedrootdir)
       - [boxed(rootDir,{methods:{}})](#fs-meta-boxed-boxedrootdirmethods)
       - [boxed(rootDir,{filters:[]})](#fs-meta-boxed-boxedrootdirfilters)
       - [exists](#fs-meta-boxed-exists)
         - [exists(path)](#fs-meta-boxed-exists-existspath)
       - [Regular fs methods](#fs-meta-boxed-regular-fs-methods)
         - [Availability](#fs-meta-boxed-regular-fs-methods-availability)
       - [getMeta](#fs-meta-boxed-getmeta)
         - [getMeta(path)](#fs-meta-boxed-getmeta-getmetapath)
         - [getMeta(path,{root:string})](#fs-meta-boxed-getmeta-getmetapathrootstring)
         - [getMeta(path,{filters:[]})](#fs-meta-boxed-getmeta-getmetapathfilters)
       - [getMetaRecursive](#fs-meta-boxed-getmetarecursive)
         - [getMetaRecursive(path)](#fs-meta-boxed-getmetarecursive-getmetarecursivepath)
         - [getMetaRecursive(path,{filters})](#fs-meta-boxed-getmetarecursive-getmetarecursivepathfilters)
       - [readdirp](#fs-meta-boxed-readdirp)
         - [readdirp(path)](#fs-meta-boxed-readdirp-readdirppath)
         - [readdirp(path,{depth:n})](#fs-meta-boxed-readdirp-readdirppathdepthn)
       - [traverse](#fs-meta-boxed-traverse)
         - [traverse(path)](#fs-meta-boxed-traverse-traversepath)
         - [traverse(path,{depth:n})](#fs-meta-boxed-traverse-traversepathdepthn)
         - [traverse(path,{depth:0})](#fs-meta-boxed-traverse-traversepathdepth0)
         - [traverse(path,{lstat:true})](#fs-meta-boxed-traverse-traversepathlstattrue)
     - [api](#fs-meta-api)
       - [api.runCommand(commandName,args,cb)](#fs-meta-api-apiruncommandcommandnameargscb)
       - [api.runPath(path,cb)](#fs-meta-api-apirunpathpathcb)
       - [api.runCommand('help',cb)](#fs-meta-api-apiruncommandhelpcb)
       - [api.middleware(req,res,next)](#fs-meta-api-apimiddlewarereqresnext)
<a name=""></a>
 
<a name="fs-meta"></a>
# fs-meta
<a name="fs-meta-own-properties"></a>
## Own Properties
<a name="fs-meta-own-properties-fssync"></a>
### fs.sync
should exist.

```js
fsm.should.have.property('sync');
fsm.sync.should.be.an.Object();
```

<a name="fs-meta-own-properties-fsunpromised"></a>
### fs.unpromised
should exist.

```js
fsm.should.have.property('unpromised');
fsm.unpromised.should.be.an.Object();
```

<a name="fs-meta-own-properties-fsfilters"></a>
### fs.filters
should exist.

```js
fsm.should.have.property('filters');
fsm.filters.should.be.an.Object();
```

<a name="fs-meta-own-properties-fsstattoobj"></a>
### fs.statToObj
should exist.

```js
fsm.should.have.property('statToObj');
fsm.statToObj.should.be.an.Function();
```

<a name="fs-meta-promises"></a>
## Promises
<a name="fs-meta-promises-exists"></a>
### exists
<a name="fs-meta-promises-exists-existspath"></a>
#### exists(path)
say if a file exists.

```js
fsm.exists(rootDir + '/style.css').then(function (exists) {
	exists.should.be['true']();
	done();
}).error(done);
```

should return an error if a file does not exist.

```js
fsm.exists(rootDir + '/notAFile.css').then(function (exists) {
	done(new Error('this should not happen'));
}).error(function (err) {
	return done();
});
```

<a name="fs-meta-promises-regular-fs-methods"></a>
### Regular fs methods
<a name="fs-meta-promises-regular-fs-methods-availability"></a>
#### Availability
should be possible to find all fs and fs-extra methods on fs-meta.

```js
for (i = 0; i < length; i++) {
	fsm.should.have.property(methods[i]);
}
```

should all be functions.

```js
for (i = 0; i < length; i++) {
	fsm[methods[i]].should.be.a.Function();
}
```

<a name="fs-meta-promises-getmeta"></a>
### getMeta
<a name="fs-meta-promises-getmeta-getmetapath"></a>
#### getMeta(path)
should serve a json object about a file.

```js
fsm.getMeta(rootDir + '/style.css').then(function (meta) {
	meta.basename.should.equal('style');
	meta.filename.should.equal('style.css');
	meta.extension.should.equal('css');
	done();
}).error(done);
```

<a name="fs-meta-promises-getmeta-getmetapathrootstring"></a>
#### getMeta(path,{root:string})
should truncate file paths to the provided root.

```js
fsm.getMeta(rootDir + '/style.css', { root: rootDir }).then(function (meta) {
	meta.dirname.should.equal('');
	meta.path.should.equal('/style.css');
	done();
}).error(done);
```

<a name="fs-meta-promises-getmeta-getmetapathfilters"></a>
#### getMeta(path,{filters:[]})
should process the filter array.

```js
var filterRan = false;
var options = {
	filters: [function (meta, options, next, fs) {
		if (meta.extension == 'css') {
			filterRan = true;
		}
		next(null, meta);
	}]
};
fsm.getMeta(rootDir + '/style.css', options).then(function (meta) {
	filterRan.should.be['true'];
	done();
}).error(done);
```

should process the filter array in order.

```js
var filterRan = false;
var options = {
	filters: [function first(meta, options, next, fs) {
		if (meta.extension == 'css') {
			meta.number = 1;
		}
		next(null, meta);
	}, function second(meta, options, next, fs) {
		if (meta.extension == 'css') {
			meta.number = meta.number + 1;
		}
		next(null, meta);
	}]
};
fsm.getMeta(rootDir + '/style.css', options).then(function (meta) {
	meta.number.should.equal(2);
	done();
}).error(done);
```

<a name="fs-meta-promises-getmetarecursive"></a>
### getMetaRecursive
<a name="fs-meta-promises-getmetarecursive-getmetarecursivepath"></a>
#### getMetaRecursive(path)
should get metadata recursively for all files in a directory.

```js
fsm.getMetaRecursive(rootDir + '/directory').then(function (_ref) {
	var files = _ref.files;
	var indexes = _ref.indexes;
	files.length.should.equal(11);
	files[indexes[rootDir + '/directory']].files.length.should.equal(7);
	files[indexes[rootDir + '/directory/subDirectory']].files.length.should.equal(3);
	done();
}).error(done);
```

<a name="fs-meta-promises-getmetarecursive-getmetarecursivepathfilters"></a>
#### getMetaRecursive(path,{filters})
should apply filters recursively for all files in a directory.

```js
fsm.getMetaRecursive(rootDir + '/directory', {
	filters: [function (meta, options, next, fs) {
		if (meta.extension == 'ini') {
			meta.filter = true;
		}
		next(null, meta);
	}]
}).then(function (_ref2) {
	var files = _ref2.files;
	var indexes = _ref2.indexes;
	var iniFileIndex = indexes[rootDir + '/directory/subDirectory/test.ini'];
	var iniFileMeta = files[iniFileIndex];
	iniFileMeta.should.have.property('filter');
	iniFileMeta.filter.should.be['true'];
	done();
}).error(done);
```

<a name="fs-meta-promises-readdirp"></a>
### readdirp
<a name="fs-meta-promises-readdirp-readdirppath"></a>
#### readdirp(path)
should loop through first-level files in the given directory.

```js
var counter = 0;
fsm.readdirp(rootDir, function (fileInfo) {
	counter++;
}).then(function () {
	counter.should.equal(14);
	done();
}).error(done);
```

<a name="fs-meta-promises-readdirp-readdirppathdepthn"></a>
#### readdirp(path,{depth:n})
should loop through directories and sub-directories until `n` level.

```js
var counter = 0;
fsm.readdirp(rootDir, { depth: 10 }, function (fileInfo) {
	counter++;
}).then(function () {
	counter.should.equal(14);
	done();
}).error(done);
```

<a name="fs-meta-promises-traverse"></a>
### traverse
<a name="fs-meta-promises-traverse-traversepath"></a>
#### traverse(path)
should traverse all files for the given path.

```js
var counter = 0;
fsm.traverse(rootDir, function (filePath, stats, options, next) {
	//console.log(counter,filePath)
	counter++;
	next();
}).then(function () {
	counter.should.equal(15);
	done();
}).error(done);
```

<a name="fs-meta-promises-traverse-traversepathdepthn"></a>
#### traverse(path,{depth:n})
should traverse all files for the given path until the given depth `n`.

```js
var counter = 0;
fsm.traverse(rootDir, { depth: 1 }, function (filePath, stats, options, next) {
	counter++;
	next();
}).then(function () {
	counter.should.equal(5);
	done();
}).error(done);
```

<a name="fs-meta-promises-traverse-traversepathdepth0"></a>
#### traverse(path,{depth:0})
should be equivalent to calling stat on the root directory.

```js
var counter = 0;
fsm.traverse(rootDir, { depth: 0 }, function (filePath, stats, options, next) {
	counter++;
	next();
}).then(function () {
	counter.should.equal(1);
	done();
}).error(done);
```

<a name="fs-meta-promises-traverse-traversepathlstattrue"></a>
#### traverse(path,{lstat:true})
should use lstat instead of stat.

```js
var calls = 0;
function bothDone(err) {
	calls++;
	if (calls > 2) {
		return;
	}
	if (err) {
		calls = 10;
		done(err);
	}
	if (calls == 2) {
		done();
	}
}
fsm.traverse(rootDir, { lstat: true }, function (filePath, stats, options, next) {
	if (filePath.match(/frontblueprintLink.jpg/)) {
		stats.isSymbolicLink().should.be['true'];
	}
	next();
}).then(function () {
	bothDone();
}).error(bothDone);
fsm.traverse(rootDir, { lstat: false }, function (filePath, stats, options, next) {
	if (filePath.match(/frontblueprintLink.jpg/)) {
		stats.isSymbolicLink().should.be['false'];
	}
	next();
}).then(function () {
	bothDone();
}).error(bothDone);
```

<a name="fs-meta-boxed"></a>
## boxed
<a name="fs-meta-boxed-boxedrootdir"></a>
### boxed(rootDir)
should return an instance of fsm boxed to the rootDir provided.

```js
var boxed = fsm.boxed(rootDir);
boxed.readdir('').then(function (files) {
	files.length.should.equal(4);
	done();
}).error(done);
```

<a name="fs-meta-boxed-boxedrootdirmethods"></a>
### boxed(rootDir,{methods:{}})
should wrap the original function with the one provided.

```js
var boxed = fsm.boxed(rootDir, {
	methods: {
		stat: function stat(filename, cb) {
			this['super'](filename + 'tory', function (err, stat) {
				if (err) {
					cb(err);
				}
				stat.someNewProperty = 'property';
				cb(null, stat);
			});
		}
	}
});
boxed.stat('direc').then(function (stat) {
	stat.should.have.property('someNewProperty');
	done();
}).error(done);
```

<a name="fs-meta-boxed-boxedrootdirfilters"></a>
### boxed(rootDir,{filters:[]})
should provide default filters to getMeta.

```js
var filterRan = false;
var boxed = fsm.boxed(rootDir, {
	filters: [function (meta, options, next, fs) {
		if (meta.extension == 'css') {
			filterRan = true;
		}
		next(null, meta);
	}]
});
boxed.getMeta('/style.css').then(function (meta) {
	filterRan.should.be['true'];
	done();
}).error(done);
```

should provide default filters to getMetaRecursive.

```js
var filterRan = 0;
var boxed = fsm.boxed(rootDir, {
	filters: [function (meta, options, next, fs) {
		if (meta.extension == 'css') {
			filterRan++;
		}
		next(null, meta);
	}]
});
boxed.getMetaRecursive('').then(function (meta) {
	filterRan.should.be.greaterThan(0);
	done();
}).error(done);
```

<a name="fs-meta-boxed-exists"></a>
### exists
<a name="fs-meta-boxed-exists-existspath"></a>
#### exists(path)
say if a file exists.

```js
var boxed = fsm.boxed(rootDir);
boxed.exists('/style.css').then(function (exists) {
	exists.should.be['true']();
	done();
}).error(done);
```

should return an error if a file does not exist.

```js
var boxed = fsm.boxed(rootDir);
boxed.exists('/notAFile.css').then(function (exists) {
	done(new Error('this should not happen'));
}).error(function (err) {
	return done();
});
```

<a name="fs-meta-boxed-regular-fs-methods"></a>
### Regular fs methods
<a name="fs-meta-boxed-regular-fs-methods-availability"></a>
#### Availability
should be possible to find all fs and fs-extra methods on fs-meta.

```js
var boxed = fsm.boxed(rootDir);
for (i = 0; i < length; i++) {
	boxed.should.have.property(methods[i]);
}
```

should all be functions.

```js
var boxed = fsm.boxed(rootDir);
for (i = 0; i < length; i++) {
	boxed[methods[i]].should.be.a.Function();
}
```

<a name="fs-meta-boxed-getmeta"></a>
### getMeta
<a name="fs-meta-boxed-getmeta-getmetapath"></a>
#### getMeta(path)
should serve a json object about a file.

```js
var boxed = fsm.boxed(rootDir);
boxed.getMeta('/style.css').then(function (meta) {
	meta.basename.should.equal('style');
	meta.filename.should.equal('style.css');
	meta.extension.should.equal('css');
	done();
}).error(done);
```

<a name="fs-meta-boxed-getmeta-getmetapathrootstring"></a>
#### getMeta(path,{root:string})
should truncate file paths to the provided root.

```js
var boxed = fsm.boxed(rootDir);
boxed.getMeta('/style.css', { root: rootDir }).then(function (meta) {
	meta.dirname.should.equal('');
	meta.path.should.equal('/style.css');
	done();
}).error(done);
```

<a name="fs-meta-boxed-getmeta-getmetapathfilters"></a>
#### getMeta(path,{filters:[]})
should process the filter array.

```js
var boxed = fsm.boxed(rootDir);
var filterRan = false;
var options = {
	filters: [function (meta, options, next, fs) {
		if (meta.extension == 'css') {
			filterRan = true;
		}
		next(null, meta);
	}]
};
boxed.getMeta('/style.css', options).then(function (meta) {
	filterRan.should.be['true'];
	done();
}).error(done);
```

should process the filter array in order.

```js
var boxed = fsm.boxed(rootDir);
var filterRan = false;
var options = {
	filters: [function first(meta, options, next, fs) {
		if (meta.extension == 'css') {
			meta.number = 1;
		}
		next(null, meta);
	}, function second(meta, options, next, fs) {
		if (meta.extension == 'css') {
			meta.number = meta.number + 1;
		}
		next(null, meta);
	}]
};
boxed.getMeta('/style.css', options).then(function (meta) {
	meta.number.should.equal(2);
	done();
}).error(done);
```

<a name="fs-meta-boxed-getmetarecursive"></a>
### getMetaRecursive
<a name="fs-meta-boxed-getmetarecursive-getmetarecursivepath"></a>
#### getMetaRecursive(path)
should get metadata recursively for all files in a directory.

```js
var boxed = fsm.boxed(rootDir);
boxed.getMetaRecursive('/directory').then(function (_ref) {
	var files = _ref.files;
	var indexes = _ref.indexes;
	files.length.should.equal(11);
	files[indexes['/directory']].files.length.should.equal(7);
	files[indexes['/directory/subDirectory']].files.length.should.equal(3);
	done();
}).error(done);
```

<a name="fs-meta-boxed-getmetarecursive-getmetarecursivepathfilters"></a>
#### getMetaRecursive(path,{filters})
should apply filters recursively for all files in a directory.

```js
var boxed = fsm.boxed(rootDir);
boxed.getMetaRecursive('/directory', {
	filters: [function (meta, options, next, fs) {
		if (meta.extension == 'ini') {
			meta.filter = true;
		}
		next(null, meta);
	}]
}).then(function (_ref2) {
	var files = _ref2.files;
	var indexes = _ref2.indexes;
	var iniFileIndex = indexes['/directory/subDirectory/test.ini'];
	var iniFileMeta = files[iniFileIndex];
	iniFileMeta.should.have.property('filter');
	iniFileMeta.filter.should.be['true'];
	done();
}).error(done);
```

<a name="fs-meta-boxed-readdirp"></a>
### readdirp
<a name="fs-meta-boxed-readdirp-readdirppath"></a>
#### readdirp(path)
should loop through first-level files in the given directory.

```js
var boxed = fsm.boxed(rootDir);
var counter = 0;
boxed.readdirp('', function (fileInfo) {
	counter++;
}).then(function () {
	counter.should.equal(14);
	done();
}).error(done);
```

<a name="fs-meta-boxed-readdirp-readdirppathdepthn"></a>
#### readdirp(path,{depth:n})
should loop through directories and sub-directories until `n` level.

```js
var boxed = fsm.boxed(rootDir);
var counter = 0;
boxed.readdirp('', { depth: 10 }, function (fileInfo) {
	counter++;
}).then(function () {
	counter.should.equal(14);
	done();
}).error(done);
```

<a name="fs-meta-boxed-traverse"></a>
### traverse
<a name="fs-meta-boxed-traverse-traversepath"></a>
#### traverse(path)
should traverse all files for the given path.

```js
var boxed = fsm.boxed(rootDir);
var counter = 0;
boxed.traverse('', function (filePath, stats, options, next) {
	//console.log(counter,filePath)
	counter++;
	next();
}).then(function () {
	counter.should.equal(15);
	done();
}).error(done);
```

<a name="fs-meta-boxed-traverse-traversepathdepthn"></a>
#### traverse(path,{depth:n})
should traverse all files for the given path until the given depth `n`.

```js
var boxed = fsm.boxed(rootDir);
var counter = 0;
boxed.traverse('', { depth: 1 }, function (filePath, stats, options, next) {
	counter++;
	next();
}).then(function () {
	counter.should.equal(5);
	done();
}).error(done);
```

<a name="fs-meta-boxed-traverse-traversepathdepth0"></a>
#### traverse(path,{depth:0})
should be equivalent to calling stat on the root directory.

```js
var boxed = fsm.boxed(rootDir);
var counter = 0;
boxed.traverse('', { depth: 0 }, function (filePath, stats, options, next) {
	counter++;
	next();
}).then(function () {
	counter.should.equal(1);
	done();
}).error(done);
```

<a name="fs-meta-boxed-traverse-traversepathlstattrue"></a>
#### traverse(path,{lstat:true})
should use lstat instead of stat.

```js
var boxed = fsm.boxed(rootDir);
var calls = 0;
function bothDone(err) {
	calls++;
	if (calls > 2) {
		return;
	}
	if (err) {
		calls = 10;
		done(err);
	}
	if (calls == 2) {
		done();
	}
}
boxed.traverse('', { lstat: true }, function (filePath, stats, options, next) {
	if (filePath.match(/frontblueprintLink.jpg/)) {
		stats.isSymbolicLink().should.be['true'];
	}
	next();
}).then(function () {
	bothDone();
}).error(bothDone);
boxed.traverse('', { lstat: false }, function (filePath, stats, options, next) {
	if (filePath.match(/frontblueprintLink.jpg/)) {
		stats.isSymbolicLink().should.be['false'];
	}
	next();
}).then(function () {
	bothDone();
}).error(bothDone);
```

<a name="fs-meta-api"></a>
## api
<a name="fs-meta-api-apiruncommandcommandnameargscb"></a>
### api.runCommand(commandName,args,cb)
should run the command specified by commandName.

```js
apiFactory(fsm.boxed(rootDir), {}).then(function (api) {
	return api.runCommand('readdir', ['/']);
}).then(function (answer) {
	answer.result.should.be.an.Array();
	answer.result.should.containEql('directory');
	done();
}).error(done);
```

<a name="fs-meta-api-apirunpathpathcb"></a>
### api.runPath(path,cb)
should run the command specified by commandName.

```js
apiFactory(fsm.boxed(rootDir), {}).then(function (api) {
	return api.runPath('readdir/directory/subDirectory');
}).then(function (answer) {
	answer.result.should.be.an.Array();
	answer.result.length.should.equal(3);
	done();
}).error(done);
```

<a name="fs-meta-api-apiruncommandhelpcb"></a>
### api.runCommand('help',cb)
should return a summary of all commands.

```js
apiFactory(fsm.boxed(rootDir), {}).then(function (api) {
	return api.runPath('help');
}).then(function (answer) {
	answer.result.should.be.an.Object();
	answer.result.should.have.property('commands');
	done();
}).error(done);
```

<a name="fs-meta-api-apimiddlewarereqresnext"></a>
### api.middleware(req,res,next)
should call res.json on success.

```js
var req = {
	path: '/getMeta/./',
	query: {},
	command: 'GET'
};
var res = {
	json: function json(result) {
		if (result.response == 'error') {
			return done(result);
		}
		result.result.should.have.property('basename');
		done();
	}
};
apiFactory(fsm.boxed(rootDir), {}).then(function (api) {
	return api.middleware(req, res, done);
}).error(done);
```

