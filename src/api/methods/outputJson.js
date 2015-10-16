import src from '../argumentTypes/src';
import json from '../argumentTypes/json';

export default function makeOutputJson(fs){
	return {
		name:'outputJson'
	,	description:'Almost the same as writeJson, except that if the directory does not exist, it\'s created.'
	,	consume:':'
	,	args:[
			src
		,	json
		]
	,	run({src,json},cb){
			fs.outputJson(src,json)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}