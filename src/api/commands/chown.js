import src from '../parameterTypes/src';
import uid from '../parameterTypes/uid';
import gid from '../parameterTypes/gid';

export default function makeChown(fs){
	return {
		name:'chown'
	,	description:'Change the owner and/or group of each FILE to OWNER and/or GROUP.'
		,	parameters:[
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