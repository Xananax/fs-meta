import src from '../argumentTypes/src';

export default function makeReadDir(fs){
	return {
		name:'readdir'
	,	description:'list files in a directory'
	,	consume:':'
	,	args:[
			src
		]
	,	run({src},cb){
			fs.readdir(src)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}