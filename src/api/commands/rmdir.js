import src from '../parameterTypes/src';

export default function makeRmDir(fs){
	return {
		name:'rmdir'
	,	description:'Remove the DIRECTORY(ies), if they are empty.'
		,	parameters:[
			src
		]
	,	run({src},cb){
			fs.rmdir(src)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}