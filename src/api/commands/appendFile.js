import src from '../parameterTypes/src';
import data from '../parameterTypes/data';
import encoding from '../parameterTypes/encoding';
import mode from '../parameterTypes/mode';
import flag from '../parameterTypes/fileFlag';

export default function makeAppendFile(fs){
	return {
		name:'appendFile'
	,	description:'Asynchronously append data to a file, creating the file if it does not yet exist. data can be a string or a buffer.'
	,	consume:':'
	,	parameters:[
			src
		,	data
		]
	,	optionalParameters:[
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