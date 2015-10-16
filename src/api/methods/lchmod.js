import src from '../argumentTypes/src';
import mode from '../argumentTypes/mode';

export default function makeLchmod(fs){
	return {
		name:'lchmod'
	,	description:'lchmod is like chmod, but does not dereference symbolic links.'
	,	consume:':'
	,	args:[
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