import src from '../argumentTypes/src';
import json from '../argumentTypes/json';

export default function makeWriteJson(fs){
	return {
		name:'writeJson'
	,	description:'Writes an object to a JSON file'
	,	consume:':'
	,	args:[
			src
		,	json
		]
	,	run({src,json},cb){
			fs.writeJson(src,json)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}