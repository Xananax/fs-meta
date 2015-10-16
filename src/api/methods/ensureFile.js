import src from '../argumentTypes/src';

export default function makeEnsureFile(fs){
	return {
		name:'ensureFile'
	,	description:'Ensures that the file exists. If the file that is requested to be created is in directories that do not exist, these directories are created. If the file already exists, it is NOT MODIFIED.'
	,	consume:':'
	,	args:[
			src
		]
	,	run({src},cb){
			fs.ensureFile(src)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}