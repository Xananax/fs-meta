import src from '../parameterTypes/src';
import uid from '../parameterTypes/uid';
import gid from '../parameterTypes/gid';

export default function makeLchown(fs){
	return {
		name:'lchown'
	,	description:'lchown is like chown, but does not dereference symbolic links.'
		,	parameters:[
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