import src from '../argumentTypes/src';

export default function makeEnsureLink(fs){
	return {
		name:'ensureLink'
	,	description:'Ensures that the link exists. If the directory structure does not exist, it is created.'
	,	consume:':'
	,	args:[
			src
		]
	,	run({src},cb){
			fs.ensureLink(src)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}