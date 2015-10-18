import src from '../parameterTypes/src';
import dest from '../parameterTypes/dest';
import clobber from '../parameterTypes/clobber';
import preserveTimestamps from '../parameterTypes/preserveTimeStamps';
import filter from '../parameterTypes/filter';

export default function makeCopy(fs){
	return {
		name:'copy'
	,	description:'Copy a file or directory. The directory can have contents. Like cp -r.'
	,	consume:':'
	,	parameters:[
			src
		,	dest
		]
	,	optionalParameters:[
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