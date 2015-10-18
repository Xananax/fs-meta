import src from '../parameterTypes/src';
import dest from '../parameterTypes/dest';

export default function makeSymLink(fs){
	return {
		name:'symlink'
	,	description:'creates a symbolic link named linkpath which contains the string tparameteret.'
	,	consume:':'
	,	parameters:[
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