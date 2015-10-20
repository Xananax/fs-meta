import src from '../parameterTypes/src';
import mode from '../parameterTypes/mode';

export default function makeLchmod(fs){
	return {
		name:'lchmod'
	,	description:'lchmod is like chmod, but does not dereference symbolic links.'
		,	parameters:[
			src
		,	mode
		]
	,	run({src,mode},cb){
			fs.lchmod(src,mode)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}