import src from '../parameterTypes/src';

export default function makeReadJson(fs){
	return {
		name:'readJson'
	,	description:'Reads a JSON file and then parses it into an object.'
		,	parameters:[
			src
		]
	,	run({src},cb){
			fs.readJson(src)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}