import src from '../argumentTypes/src';
import dest from '../argumentTypes/dest';
import clobber from '../argumentTypes/clobber';
import preserveTimestamps from '../argumentTypes/preserveTimeStamps';
import filter from '../argumentTypes/filter';

export default function makeCopy(fs){
	return {
		name:'copy'
	,	description:'Copy a file or directory. The directory can have contents. Like cp -r.'
	,	consume:':'
	,	args:[
			src
		,	dest
		]
	,	optionalArgs:[
			clobber
		,	preserveTimestamps
		,	filter
		]
	,	run({src,dest,clobber,preserveTimestamps,filter},cb){
			fs.copy(src,dest,{clobber,preserveTimestamps,filter})
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}