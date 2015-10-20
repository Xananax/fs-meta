import src from '../parameterTypes/src';

export default function makeEmptyDir(fs){
	return {
		name:'emptyDir'
	,	description:'Ensures that a directory is empty. If the directory does not exist, it is created. The directory itself is not deleted.'
		,	parameters:[
			src
		]
	,	run({src},cb){
			fs.emptyDir(src)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}