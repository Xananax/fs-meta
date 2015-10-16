import src from '../argumentTypes/src';
import mode from '../argumentTypes/mode';

export default function makeMkdir(fs){
	return {
		name:'mkdir'
	,	description:'attempts to create a directory named pathname.'
	,	consume:':'
	,	args:[
			src
		]
	,	optionalArgs:[
			mode
		]
	,	run({src,mode},cb){
			fs.mkdir(src,mode)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}