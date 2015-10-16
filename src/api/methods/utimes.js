import src from '../argumentTypes/src';
import atime from '../argumentTypes/atime';
import mtime from '../argumentTypes/mtime';

export default function makeUtimes(fs){
	return {
		name:'utimes'
	,	description:'changes the access and modification times of the inode specified by filename to the actime and modtime fields of times respectively.'
	,	consume:':'
	,	args:[
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