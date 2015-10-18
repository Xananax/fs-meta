import src from '../parameterTypes/src';
import dest from '../parameterTypes/dest';

export default function makeRename(fs){
	return {
		name:'rename'
	,	description:'renames a file, moving it between directories if required.'
	,	consume:':'
	,	parameters:[
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