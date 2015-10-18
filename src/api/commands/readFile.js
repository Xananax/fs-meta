import src from '../parameterTypes/src';
import encoding from '../parameterTypes/encoding';
import flag from '../parameterTypes/fileFlag';

export default function makeReadFile(fs){
	return {
		name:'readFile'
	,	description:'Reads a file contents'
	,	consume:':'
	,	parameters:[
			src
		]
	,	optionalParameters:[
			encoding
		,	flag
		]
	,	run({src,encoding,flag},cb){
			fs.readFile(src,{encoding,flag})
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}