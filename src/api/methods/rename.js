import src from '../argumentTypes/src';
import dest from '../argumentTypes/dest';

export default function makeRename(fs){
	return {
		name:'rename'
	,	description:'renames a file, moving it between directories if required.'
	,	consume:':'
	,	args:[
			src
		,	dest
		]
	,	run({src,dest},cb){
			fs.rename(src,dest)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}