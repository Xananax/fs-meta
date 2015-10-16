import src from '../argumentTypes/src';

export default function makeRmDir(fs){
	return {
		name:'rmdir'
	,	description:'Remove the DIRECTORY(ies), if they are empty.'
	,	consume:':'
	,	args:[
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