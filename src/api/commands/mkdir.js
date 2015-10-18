import src from '../parameterTypes/src';
import mode from '../parameterTypes/mode';

export default function makeMkdir(fs){
	return {
		name:'mkdir'
	,	description:'attempts to create a directory named pathname.'
	,	consume:':'
	,	parameters:[
			src
		]
	,	optionalParameters:[
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