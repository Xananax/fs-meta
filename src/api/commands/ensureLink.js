import src from '../parameterTypes/src';

export default function makeEnsureLink(fs){
	return {
		name:'ensureLink'
	,	description:'Ensures that the link exists. If the directory structure does not exist, it is created.'
		,	parameters:[
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