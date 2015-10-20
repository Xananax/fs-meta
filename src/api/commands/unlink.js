import src from '../parameterTypes/src';

export default function makeUnlink(fs){
	return {
		name:'unlink'
	,	description:'deletes a name from the filesystem.  If that name was the last link to a file and no processes have the file open, the file is deleted and the space it was using is made available for reuse.'
		,	parameters:[
			src
		]
	,	run({src},cb){
			fs.unlink(src)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}