import src from '../argumentTypes/src';
import uid from '../argumentTypes/uid';
import gid from '../argumentTypes/gid';

export default function makeChown(fs){
	return {
		name:'chown'
	,	description:'Change the owner and/or group of each FILE to OWNER and/or GROUP.'
	,	consume:':'
	,	args:[
			src
		,	uid
		,	gid
		]
	,	run({src,uid,gid},cb){
			fs.chown(src,uid,gid)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}