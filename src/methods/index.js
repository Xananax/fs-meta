import fs from 'fs-extra';
import {fsMethods} from './fsMethods';
import {fsExtraMethods} from './fsExtraMethods';
import Promise from 'bluebird';
import exists from './exists';
import traverse from './traverse';
import getMeta from './getMeta';
import getMetaRecursive from './getMetaRecursive';
import readdirp from './readdirp';

var methods = {};
for(let name of fsMethods){
	methods[name] = fs[name];
}
for(let name of fsExtraMethods){
	methods[name] = fs[name];
}
Object.assign(methods,{
	exists(src,cb){
		return exists(fs,src,cb)
	}
,	traverse(src,options,operation,cb){
		return traverse(fs,src,options,operation,cb);
	}
,	getMeta(src,options,cb){
		return getMeta(fs,src,options,cb);
	}
,	getMetaRecursive(src,options,cb){
		return getMetaRecursive(fs,src,options,cb);
	}
,	readdirp:readdirp
})

export default methods;