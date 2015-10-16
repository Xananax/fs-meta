import src from '../argumentTypes/src';
import dest from '../argumentTypes/dest';

export default function makeSymLink(fs){
	return {
		name:'symlink'
	,	description:'creates a symbolic link named linkpath which contains the string target.'
	,	consume:':'
	,	args:[
			src
		,	dest
		]
	,	run({src,dest},cb){
			fs.symlink(src,dest)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}