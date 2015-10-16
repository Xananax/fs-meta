import src from '../argumentTypes/src';

export default function makeEnsureDir(fs){
	return {
		name:'ensureDir'
	,	description:'Ensures that the directory exists. If the directory structure does not exist, it is created.'
	,	consume:':'
	,	args:[
			src
		]
	,	run({src},cb){
			fs.ensureDir(src)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}