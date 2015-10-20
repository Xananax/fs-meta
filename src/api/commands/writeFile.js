import src from '../parameterTypes/src';
import data from '../parameterTypes/data';
import encoding from '../parameterTypes/encoding';
import mode from '../parameterTypes/mode';
import flag from '../parameterTypes/fileFlag';

export default function makeWriteFile(fs){
	return {
		name:'writeFile'
	,	description:'Writes data to a file, replacing the file if it already exists.'
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
			fs.writeFile(src,data,{encoding,mode,flag})
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}