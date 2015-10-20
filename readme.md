# fs-meta

A resilient, cross-platform filesystem API that has a bunch of little pluses. Built on top of [fs-extra](https://github.com/jprichardson/node-fs-extra) and [apido](https://github.com/Xananax/apido).

---

# TL;DR:

An API for the file system that can be used from a REST-like interface (or sockets). It does arguments checking, is pluggable in an express server, is self documenting. It also fetches additional information about files that is not available with the regular `stat`.  
It also has a 'collection' interface that allows you to bundle files into collections (virtual directories). Collections can be nested in collections.
It does it's best to be cross-platform and resilient to Ms Windows idiosyncrasies.

---

# Key Points:

promised equivalent to [fs-extra](https://github.com/jprichardson/node-fs-extra), with a few key differences:

- All async functions are promisified by default (but you can opt out of that)
- Async and sync versions are on two different objects. To use async functions, require `('fs-meta')`, and for sync versions, require `('fs-meta').sync`
- `readDir` is a proxy for `readdir` (finally, no more stupid typos).
- `exists` is made to follow nodeback protocol (eg: `fsm.exists(file,(err,exists))`) and is as such promisified too
- Bundles [readdirp](https://github.com/thlorenz/readdirp) available on `fsm.readdirp`
- Can read meta-data from audio, images files, and load data from json/xml filesni/yaml files. You can add your own filters
- Can recurse through a directory and apply filters to files
- Can create an instance of `fsm` restricted to a certain directory (all operations will therefore take root into this directory). The feature is called `boxed`.
- It has a text interface that always returns json. Can be used for GET requests or command-line
- All methods are self-scoped. In other words, you can do `import {readFile} from 'fs-meta'`

----

# Usage:

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

or sync:

```js
var fsm = require('fs-meta').sync;

var contents = fsm.readFile('path/to/file');
//etc
```

or without promises:

```js
var fsm = require('fs-meta').unpromised;
//functionally a drop-in replacement for fs.
fsm.readFile('path/to/file',function(err,contents){
    //etc
})
```

or as an api:

```js
fsm.makeAPI(rootDir)
    .then(api=>api.runCommand('readdir',['/']))
    .then(answer=>{
        console.log(answer.result) // array of files
    })
    .error(done)
```

----

# Methods:

## All 'fs' and 'fs-extra' methods:

- `rename`
- `ftruncate`
- `truncate`
- `chown`
- `fchown`
- `lchown`
- `chmod`
- `fchmod`
- `lchmod`
- `stat`
- `lstat`
- `fstat`
- `link`
- `symlink`
- `readlink`
- `realpath`
- `unlink`
- `rmdir`
- `mkdir`
- `readdir`
- `close`
- `open`
- `utimes`
- `futimes`
- `fsync`
- `write`
- `read`
- `readFile`
- `writeFile`
- `appendFile`
- `watchFile`
- `unwatchFile`
- `watch`
- `access`
- `copy`
- `createOutputStream`
- `emptyDir`
- `ensureFile`
- `ensureDir`
- `ensureLink`
- `ensureSymlink`
- `mkdirs`
- `move`
- `outputJson`
- `readJson`
- `remove`
- `writeJson`

## fsm.traverse(path[,options],operation) → Promise

```js
function operation(filePath,stats,options,next){
    doSomethingWithFile(filePath,(err)=>{
        if(err){return next(err);}
        return next();
    });
}
var options = {
    depth:10 //defaults to infinity
,   lstat:false // if true, uses lstat instead of stat
}
fsm.traverse(path,options,operation)
    .then(()=>console.log('done'))
    .error(err=>throw err)
```

Directories' files are traversed first, and their parent directory *last*.


## fsm.readdirp(src[[,options],operation]) → Stream

**There is no sync version of this method**.  
returns a stream, see [readdirp](https://github.com/thlorenz/readdirp)

```js
function operation(fileInfo){
    doSomethingWithFile(fileInfo);
}
var options = {
    depth:10 // defaults to 1
,   lstat:false // if true, readdirp uses fsm.lstat instead of fsm.stat in order to stat files and includes symlink entries in the stream along with files
,   fileFilter:null //filter to include/exclude files found
,   directoryFilter: null//filter to include/exclude directories found and to recurse into
,   entryType: 'both' //determines if data events on the stream should be emitted for 'files', 'directories', 'both', or 'all'. Setting to 'all' will also include entries for other types of file descriptors like character devices, unix sockets and named pipes. Defaults to 'files'.
}
fsm.readdirp(path,options,operation)
    .then(()=>console.log('done'))
    .error(err=>throw err)
```

Differences with `traverse`:

- readdirp will *not* process the root directory
- The default depth is 1, not infinity
- You do not need to call `next()` for the processing to continue


## fsm.getMeta(path[,options]) → Promise

**There is no synchronous version of this method**.  

Similar to `stats`, but with three differences:

- If `options.followSymLinks` is `true`, it will automatically follow symlinks, and provide stats for both the symlink and the symlinked file
- The stats object emitted is a pure object, without functions, and suitable for json storage. It also has additional properties
- if the array `options.filters` exists, filters provided will be run one by one on each file.

```js
var collectedJson = []
var options = {
    lstat:true // false will use stat instead of lstat
,   followSymLinks:true // does nothing if `lstat` is false
,   root:'' // if set, all paths will be truncated to this root dir
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


## fsm.getMetaRecursive(path[,options]) → Promise

**There is no synchronous version of this method**.  

Bundles `getMeta` and `traverse`.  
Options are:
- `lstat`: if `true`, will use 'lstat' instead of 'stat'. Defaults to `true`.
- `followSymLinks`: if `true`, will follow symlinks and append the real file info to the symlink info. Defaults to `true`.
- `filters` an array of filters to apply. Defaults to an empty array
- `depth`: how many recursions before stopping. Defaults to `Infinity`.

Just like in `fsm.recurse`, filters are applied to files first, and parent directories last. This allows any changes in the directory to be operated before you operate on the directory itself.

```js
var options = {
    lstat:true // false will use stat instead of lstat
,   followSymLinks:true // does nothing if `lstat` is false
,   depth:10
,   root:__dirname // if set, all paths will be truncated to this root dir
,   filters:[
        fsm.filters.fileSize
    ,   fsm.filters.image
    ]
}
fsm.getMetaRecursive(__dirname,options)
    .then(files=>console.log(files))
    .error(err=>throw err)
```

`getMetaRecursive` returns an object `{indexes,files}`
Directories have a `file` array containing indexes of files in the returned array.

Example of returned object:

```js
{
    indexes:{
        'directory/file.extension':0
    ,   'directory':1
    }
    files:[
        {
            isFile:true
        ,   filename:'file.extension'
            //other regular properties
        }
    ,   {
            isDirectory:true
        ,   filename:'directory'
        ,   files:[0]
            //other regular properties
        }
    ]
}
```

## fsm.statToObj(stats) → Object

Transforms a native node stats object into the json object described above. Used internally by `getMeta` and `getMetaRecursive`. The description of the stat object is below.

## fsm.boxed(rootDirPath[,options]) → fs-meta instance

creates a new instance of fs-meta that is constrained to the given `rootDirPath`.

- `rootDirPath`: root directory for all operations
- `options`: an object that may contain the following properties:
    + `sync`: if `true`, will provide a sync version of fs-meta (that is, all methods will be sync methods);
    + `unpromised`: if true, will return regular nodebacks-accepting functions
    + `filters`: an array of filters to apply by default to `getMeta` and `getMetaRecursive`
    + `methods`: an object of methods that map to fsm methods. Each method provided will wrap the fsm method and be provided with a `this.super` that allows it to call the original method.

```js
var boxedFsm = fsm.boxed(path.join(__dirname,'public'));
boxedFsm.readdir('js'),then()//...etc

// or:
var boxedFsmNoPromises = fsm.boxed(path.join(__dirname,'public'),{unpromised:true});
boxedFsmNoPromises.readdir('js',function(err,files){})//...etc

//or:
var boxedFsmSync = fsm.boxed(path.join(__dirname,'public'),{sync:true});
var files = boxedFsmSync.readdir('js')//...etc
```

Example of method wrapping:

```js
var options = {
    methods:{                   
        stat(filename,cb){
            console.log(`stat called for ${filename}`)
            this.super(filename,(err,stat)=>{
                if(err){cb(err);}
                stat.someNewProperty = 'property';
                cb(null,stat);
            })
        }
    }
});

fsm.boxed(dir,options).stat('some/path')
    .then(stat=>{
        // stat.someNewProperty = 'property'
    })
    .error(/**...**/)
;
```

---

## apiFactory(rootDir[,options]) → Promise

Creates an api through [apido](https://github.com/Xananax/apido).
apido needs to be installed:

```bash
npm install --save apido
```


```js
import {boxed} from 'fs-meta';
import {apiFactory} from 'fs-meta/src/api'; //(or fs-meta/lib/api) if not using ES6

apiFactory(boxed(rootDir),{})
    .then(api=>{
        //api is ready
    })
    .error(done)
```

options is an object and may contain:
- `separator`: a string that specifies the separator between arguments. Defaults to ':'
- `commandSeparator`: a string that specifies the separator between a command and arguments. Defaults to '/'
- All other options are transferred to `fsm.boxed` which `apiFactory` uses internally

returns a function `api` of the following signature:
```js
apiFactory(__dirname)
.then(api=>{
    return api.run(commandName,args)
})
.then(answer=>{
    console.log(answer)
})
.error(err=>{throw err;})
```

where:
- `commandName` is any fsm command
- `args` is an array or object of arguments

For more info, check out the readme at [apido](https://github.com/Xananax/apido)

**note**: all errors returned by `api`, `api.run` and `api.middleware` are json objects.

Instead of using the default `apiFactory` provided, you can compose your own. This would allow you to add your own commands and customizations:

```js
import apido from 'apido'
import {boxed} from 'fs-meta'
import commandsProps from 'fs-meta/src/api/commands'; //apido-compatible list of commands

const fs = boxed('/some/dir');

const additionalMethods = [
    {
        name:'addTodo'
    ,   parameters:[]
    ,   run(props,cb){}
    }
]

function makeAPI(cb){

    apido({
        name:'fs'
    ,   description:'file system manager'
    ,   commands:commandsProps.map(command=>command(fs)).concat(additionalMethods)
    })
    .then(api=>cb(null,api))
    .error(cb)
}
```

**note**: you're better off importing from `fs-meta/lib` than `fs-meta/src`, unless you call babel in this fashion:
```js
require('babel/register')({
    ignore:/node_modules\/(?!fs-meta)/
});
// or, on the command-line:
// babel-node --ignore '/node_modules/(?fs-meta)' script.js
```


----

# Global Properties

## fsm.sync

Provides a copy of fs-meta, but with all sync methods.

## fsm.unpromised

Provides a copy of fs-meta, but with regular methods instead of methods returning promises. 

## fsm.filters

Pre-made filters for usage in `getMeta` and `getMetaRecursive`. Filters are described below.

-----

# 'Meta' Object

The `meta` object used in `getMeta` and `getMetaRecursive` contains the following properties:

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

# Filters

A filter has the following signature:
```js
function customFilter(meta,options,next,fs){
    trySomething(meta,(err,properties){
        if(err){return next(err);}
        meta.newProperty = properties.newProperty;
        next(null,meta);
    })
}
```

- `meta` is the transformed `meta` object described above
- `options` is whatever you passed to `getMeta` or `getMetaRecursive`. You may add your own properties, if you want to.
- `next` is the function you should call when you're done processing. It is a regular nodeback, call it with `error` as the first argument, or the `meta` object as the second argument.
- `fs` is a `graceful-fs` instance (in other words, no promises or additional functions are available on this instance).

## Available filters:

All filters are exposed on `fsm.filters`. They require dependencies that are not included by default. To install all dependencies, do

```bash
npm install --save exif-parser filesize id3js image-size ini js-yaml xml2js
```

### fsm.filters.data

reads json, xml, ini, and yaml files, and appends any data found to a property called `data`.

Needs:
```bash
npm install --save ini js-yaml xml2js
```

example data:

```js
stat = {
    //normal stat properties
,   data:{
        //json parsed data from the file
    }
}
```


### fsm.filters.exif

reads exif properties from jpegs

```bash
npm install --save exif-parser
```

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

### fsm.filters.fileSize

adds human-readable file size to the object

Needs:
```bash
npm install --save filesize
```


example data:

```js
var stat = {
    // normal stat properties...
,   humanSize:'12Mb'
}
```


### fsm.filters.id3

Reads id3 data from mp3s

Needs:

```bash
npm install --save id3js
```

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

### fsm.filters.image

Reads image size from bmps, gifs, jpegs, pngs, psds, tiffs, webps, and svgs

Needs:
```bash
npm install --save image-size
```

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

### fsm.filters.text

Reads contents from txt, html, info, md, markdown, json, xml, ini, yaml, and css

example data:

```js
var stat = {
    // normal stat properties...
,   contents:'utf-8 string representation of the file contents'
}
```

### fsm.filters.types

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

# Tests & Compile

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

# MIT License

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