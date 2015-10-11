# fs-meta

----

## Purpose:

promised equivalent to [fs-extra](https://github.com/jprichardson/node-fs-extra), with a few key differences:

- All async functions are promisified by default (but you can opt out of that)
- Async and sync versions are on two different objects. To use async functions, require `('fs-meta')`, and for sync versions, require `('fs-meta').syncFs`
- `readDir` is a proxy for `readdir` (finally, no more stupid typos).
- `exists` is made to follow nodeback protocol (eg: `fsm.exists(file,(err,exists))`) and is as such promisified too
- Bundles [readdirp](https://github.com/thlorenz/readdirp) as `fsm.readdirp`
- Can read meta-data from audio, images files, and load data from json/xml filesni/yaml files.
- Can recurse through a directory and apply filters to files
- Can create an instance of `fsm` boxed to a certain directory (all operations will therefore take root into this directory).

----

## Usage:

install:

```sh
npm install --save fs-meta
```

Then:

```js
var fsm = require('fs-meta');

fsm.readFile('path/to/file')
    .then(contents=>console.log(contents))
    .error(err=>throw err);

```

or:

```js
var fsm = require('fs-meta').syncFs;

var contents = fsm.readFile('path/to/file');
//etc
```

or

```js
var fsm = require('fs-meta').unpromised;
//functionally a drop-in replacement for fs.
fsm.readFile('path/to/file',function(err,contents){
    //etc
})
```

----

## Added Methods:

### fsm.traverse(path[,options],operation)

```js
function operation(filePath,stats,options,next){
    doSomethingWithFile(filePath,next);
}
var options = {
    depth:10 //defaults to infinity
,   lstat:false / filesf true, uses lstat instead of stat
}
fsm.traverse(path,options,operation)
    .then(()=>console.log('done'))
    .error(err=>throw err)
```

Directories' files are traversed first, and their parent directory *last*.


### fsm.readdirp(src[[,options],operation])

**There is no sync version of this method**.  
returns a stream, see [readdirp](https://github.com/thlorenz/readdirp)

```js
function operation(fileInfo){
    doSomethingWithFile(fileInfo);
}
var options = {
    depth:10 //defaults to infinity
,   lstat:false / filesf true, readdirp uses fsm.lstat instead of fsm.stat in order to stat files and includes symlink entries in the stream along with files
,   fileFilter:null //filter to include/exclude files found
,   directoryFilter: null//filter to include/exclude directories found and to recurse into
,   entryType: 'files' //determines if data events on the stream should be emitted for 'files', 'directories', 'both', or 'all'. Setting to 'all' will also include entries for other types of file descriptors like character devices, unix sockets and named pipes. Defaults to 'files'.
}
fsm.traverse(path,options,operation)
    .then(()=>console.log('done'))
    .error(err=>throw err)
```


### fsm.getMeta(path[,options])

**There is no sync version of this method**.  

Similar to `stats`, but with three differences:

- If `options.followSymLinks` is `true`, it will automatically follow symlinks, and provide stats for both the symlink and the symlinked file
- The stats object emitted is a pure object, without functions, and suitable for json storage. It also has additional properties
- if the array `options.filters` exists, filters provided will be run one by one on each file.

```js
var collectedJson = []
var options = {
    lstat:true //false will use stat instead of lstat
,   followSymLinks:true //does nothing if `lstat` is false
,   filters:[
        fsm.filters.fileSize
    ,   fsm.filters.image
    ,   function(stat,options,next,fs){
            if(stat.extension == 'json'){
                collectedJson.push(stat);
                stat._isCollected = true;
            }
            next(null,stat);
        }
    ]
}
fsm.getMeta(__dirname,options)
    .then(()=>console.log(done))
    .error(err=>throw err)
```

Available filters and stat object are described below.


### fsm.getMetaRecursive(path[,options])

**There is no sync version of this method**.  

Bundles `getMeta` and `traverse`.  
Options are:
- `lstat`: if `true`, will use 'lstat' instead of 'stat'. Defaults to `true`.
- `followSymLinks`: if `true`, will follow symlinks and append the real file info to the symlink info. Defaults to `true`.
- `filters` an array of filters to apply. Defaults to an empty array
- `depth`: how many recursions before stopping. Defaults to `Infinity`.

Just like in `fsm.recurse`, filters are applied to files first, and parent directories last. This allows any changes in the directory to be operated before you operate on the directory itself.

```js
var options = {
    lstat:true //false will use stat instead of lstat
,   followSymLinks:true //does nothing if `lstat` is false
,   depth:10
,   filters:[
        fsm.filters.fileSize
    ,   fsm.filters.image
    ]
}
fsm.getMetaRecursive(__dirname,options)
    .then(files=>console.log(files))
    .error(err=>throw err)
```

### fsm.statToObj(stats)

Transforms a native node stats object into the json object described above. Used internally by `getMeta` and `getMetaRecursive`. The description of the stat object is below.

### fsm.boxed(rootDirPath[,sync[,unpromised]])

creates a new instance of fs-meta that is constrained to the given `rootDirPath`.

- `rootDirPath`: root directory for all operations
- `sync`: if `true`, will provide a sync version of fs-meta (that is, all methods will be sync methods);
- `unpromised`: if true, will return regular nodebacks-accepting functions

```js
var publicBoxedFs = fsm.boxed(path.join(__dirname,'public'));
publicBoxedfsm.readdir('js'),then()//...etc

// or:
var publicBoxedFsNoPromises = fsm.boxed(path.join(__dirname,'public'),false,true);
publicBoxedfsm.readdir('js',function(err,files){})//...etc

//or:
var publicBoxedFsSync = fsm.boxed(path.join(__dirname,'public'),true);
var files = publicBoxedfsm.readdir('js')//...etc
```

----

### Global Properties

### fsm.syncFs

Provides a copy of fs-meta, but with all sync methods.

### fsm.unpromised

Provides a copy of fs-meta, but with regular methods instead of methods returning promises. 

### fsm.filters

Pre-made filters for usage in `getMeta` and `getMetaRecursive`. Filters are described below.

-----

### Stat Object

The `stat` object used in `getMeta` and `getMetaRecursive` contains the following properties:

- `basename`: the name of the file, without extension
- `filename`: the name of the file, with extension
- `path`: the full path of the file
- `dirname`: path, without the file itself
- `extension`: extension, without the dot, lower cased
- `isFile`:boolean
- `isDirectory`:boolean
- `isBlockDevice`:boolean
- `isCharacterDevice`:boolean
- `isSymbolicLink`:boolean (always false if `lstat` wasn't used)
- `isFIFO`:boolean
- `isSocket`:boolean
- `isHidden`: posix systems only: true if the filename begins with a dot
- `mimeType`: mime type of the file, directories are `'inode/directory'`, unknown mime types are `application/octet-stream'`
- `mime`:the mime type split at '/'. So `'image/jpeg'` becomes `['image','jpeg']`.
- And all the stuff ported directly from the regular stat object: `dev`,`ino`,`mode`,`nlink`,`uid`,`gid`,`rdev`,`size`,`blksize`,`blocks`,`atime`,`mtime`,`ctime`,`birthtime`

This object is augmented by the filters that get applied.

---

## Filters

A filter has the following signature:
```js
function customFilter(stats,options,next,fs){
    trySomething(stats,(err,properties){
        if(err){return next(err);}
        stats.newProperty = properties.newProperty;
        next(null,stats);
    })
}
```

- `stats` is the transformed `stats` object described above
- `options` is whatever you passed to `getMeta` or `getMetaRecursive`. You may add your own properties, if you want to.
- `next` is the function you should call when you're done processing. It is a regular nodeback, call it with `error` as the first argument, or the `stats` object as the second argument.
- `fs` is a `graceful-fs` instance (in other words, no promises or additional functions are available on this instance).

### Available filters:

All filters are exposed on `fsm.filters`. They are:

#### fsm.filters.data

reads json, xml, ini, and yaml files, and appends any data found to a property called `data`.

example data:

```js
stat = {
    //normal stat properties
,   data:{
        //json parsed data from the file
    }
}
```


#### fsm.filters.exif

reads exif properties from jpegs

example data:
```js
stat = {
    // normal stat properties...
,    "exif": {
        "image": {
            "Orientation": 1,
            "XResolution": 200,
            "YResolution": 200,
            "ResolutionUnit": 2,
            "Software": "Adobe Photoshop CS Windows",
            "ModifyDate": "2004:05:20 20:21:43",
            "ExifOffset": 164
        },
        "thumbnail": {
            "Compression": 6,
            "XResolution": 72,
            "YResolution": 72,
            "ResolutionUnit": 2,
            "ThumbnailOffset": 302,
            "ThumbnailLength": 4438
        },
        "exif": {
            "ColorSpace": 65535,
            "ExifImageWidth": 2269,
            "ExifImageHeight": 1535
        },
        "gps": {},
        "interoperability": {},
        "makernote": {}
    }
}
```

#### fsm.filters.fileSize

adds human-readable file size to the object

example data:

```js
var stat = {
    // normal stat properties...
,   humanSize:'12Mb'
}
```


#### fsm.filters.id3

Reads id3 data from mp3s

example data:

```js
var stat = {
    // normal stat properties...
,   tags:{
        "title": "Allegro from Duet in C Major",
        "album": "Some Album",
        "artist": "Someone",
        "year": "2000",
        "v1": {
            "title": "Allegro from Duet in C Major",
            "artist": "Someone",
            "album": "Some Album",
            "year": "2000",
            "comment": "",
            "track": 1,
            "version": 1.1,
            "genre": "Classical"
        },
        "v2": {
            "version": [4,0],
            "title": "Allegro from Duet in C Major",
            "artist": "Someone",
            "album": "Some Album",
            "genre": "Classical",
            "recording-time": "2000",
            "track": "1",
            "copyright": "",
            "language": "",
            "publisher": ""
        }
    }
}
```

#### fsm.filters.image

Reads image size from bmps, gifs, jpegs, pngs, psds, tiffs, webps, and svgs

example data:

```js
var stat = {
    // normal stat properties...
,   size:{
        "height": 1535,
        "width": 2269,
        "type": "jpg"
    },
}
```

#### fsm.filters.text

Reads contents from txt, html, info, md, markdown, json, xml, ini, yaml, and css

example data:

```js
var stat = {
    // normal stat properties...
,   contents:'utf-8 string representation of the file contents'
}
```

#### fsm.filters.types

Adds a "types" array to the stat object, which may in certain cases be more useful than the mime types.

example data:

```js
var stat = {
    // normal stat properties...
,   types:['directory']
}
```

types possible are:
- `'data'`: for json,xml,ini, and yaml files
- `'text'`: for txt,html,info,md,markdown,json,xml,ini,yaml,css files
- `'formatted'`: for html,md, and markdown files
- `'archive'`: for zip,rar,tar,gz, and lzh files
- `'audio'`: for wav,mp3, and ogg files
- `'image'`: for bmp,gif,jpeg,png,psd,tiff,webp,ico, and svg files
- `'bitmap'`: for bmp,gif,jpeg,png,psd,tiff,webp, and ico files
- `'vector'`: for svg files

Types rack up, so an svg files with get `types:['image','vector']`, and a json file will get `types:['data','text']`.


-----

## Tests & Compile

```sh
npm install --dev
```

tests:
```sh
npm test
```

Compile:
```sh
npm run compile
```

----

## MIT License

Copyright © Jad Sarout

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.