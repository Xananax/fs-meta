import src from '../argumentTypes/src';
import uid from '../argumentTypes/uid';
import gid from '../argumentTypes/gid';

export default function makeLchown(fs){
	return {
		name:'lchown'
	,	description:'lchown is like chown, but does not dereference symbolic links.'
	,	consume:':'
	,	args:[
			src
		,	uid
		,	gid
		]
	,	run({src},cb){
			fs.lchown(src)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}