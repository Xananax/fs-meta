import fs from 'fs-extra';
import {fsMethodsSync} from './fsMethodsSync';
import {fsExtraMethodsSync} from './fsExtraMethodsSync';
import traverseSync from './traverseSync';

var methods = {};
for(let name of fsMethodsSync){
	methods[name.replace(/Sync$/,'')] = fs[name];
}
for(let name of fsExtraMethodsSync){
	methods[name.replace(/Sync$/,'')] = fs[name];
}
Object.assign(methods,{
	traverse:function(src,op){
		return traverseSync(fs,src,op);
	}
});


export default methods;