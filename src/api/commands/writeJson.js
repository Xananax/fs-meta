import src from '../parameterTypes/src';
import json from '../parameterTypes/json';

export default function makeWriteJson(fs){
	return {
		name:'writeJson'
	,	description:'Writes an object to a JSON file'
	,	consume:':'
	,	parameters:[
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