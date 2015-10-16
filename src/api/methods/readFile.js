import src from '../argumentTypes/src';
import encoding from '../argumentTypes/encoding';
import flag from '../argumentTypes/fileFlag';

export default function makeReadFile(fs){
	return {
		name:'readFile'
	,	description:'Reads a file contents'
	,	consume:':'
	,	args:[
			src
		]
	,	optionalArgs:[
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