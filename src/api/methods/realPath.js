import src from '../argumentTypes/src';

export default function makeRealPath(fs,{realPathCache}){
	return {
		name:'realpath'
	,	description:'expands all symbolic links and resolves references to /./, /../ and extra / characters in the null-terminated string named by path to produce a canonicalized absolute pathname. The resulting path will have no symbolic link, /./ or /../ components.'
	,	consume:':'
	,	args:[
			src
		]
	,	run({src,cache},cb){
			fs.realpath(src,realPathCache)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}