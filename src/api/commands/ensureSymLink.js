import src from '../parameterTypes/src';

export default function makeEnsureSymLink(fs){
	return {
		name:'ensureSymlink'
	,	description:'Ensures that the symlink exists. If the directory structure does not exist, it is created.'
		,	parameters:[
			src
		]
	,	run({src},cb){
			fs.ensureSymlink(src)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}