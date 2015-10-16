import src from '../argumentTypes/src';
import data from '../argumentTypes/data';

export default function makeOutputFile(fs){
	return {
		name:'outputFile'
	,	description:'Almost the same as writeFile (i.e. it overwrites), except that if the parent directory does not exist, it\'s created.'
	,	consume:':'
	,	args:[
			src
		,	data
		]
	,	run({src,data},cb){
			fs.outputFile(src,data)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}