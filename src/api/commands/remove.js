import src from '../parameterTypes/src';

export default function makeRemove(fs){
	return {
		name:'remove'
	,	description:'Removes a file or directory. The directory can have contents. Like rm -rf'
	,	consume:':'
	,	parameters:[
			src
		]
	,	run({src},cb){
			fs.remove(src)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}