import src from '../parameterTypes/src';
import atime from '../parameterTypes/atime';
import mtime from '../parameterTypes/mtime';

export default function makeUtimes(fs){
	return {
		name:'utimes'
	,	description:'changes the access and modification times of the inode specified by filename to the actime and modtime fields of times respectively.'
		,	parameters:[
			src
		,	atime
		,	mtime
		]
	,	run({src,atime,mtime},cb){
			fs.utimes(src,atime,mtime)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}