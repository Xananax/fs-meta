import src from '../argumentTypes/src';
import data from '../argumentTypes/data';
import encoding from '../argumentTypes/encoding';
import mode from '../argumentTypes/mode';
import flag from '../argumentTypes/fileFlag';

export default function makeWriteFile(fs){
	return {
		name:'writeFile'
	,	description:'Writes data to a file, replacing the file if it already exists.'
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
			fs.writeFile(src,data,{encoding,mode,flag})
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}