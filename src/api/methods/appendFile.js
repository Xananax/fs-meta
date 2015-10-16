import src from '../argumentTypes/src';
import data from '../argumentTypes/data';
import options from '../makeOptionsArgument';
import encoding from '../argumentTypes/encoding';
import mode from '../argumentTypes/mode';
import flag from '../argumentTypes/fileFlag';

export default function makeAppendFile(fs){
	return {
		name:'appendFile'
	,	description:'Asynchronously append data to a file, creating the file if it does not yet exist. data can be a string or a buffer.'
	,	consume:':'
	,	args:[
			src
		,	data
		]
	,	optionalArgs:[
			encoding
		,	mode
		,	flag
		]
	,	run({src,data,encoding,mode,flag},cb){
			fs.appendFile(src,data,{encoding,mode,flag})
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}