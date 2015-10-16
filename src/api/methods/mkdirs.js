import src from '../argumentTypes/src';

export default function makeMkdirs(fs){
	return {
		name:'mkdirs'
	,	description:'Creates a directory. If the parent hierarchy doesn\'t exist, it\'s created. Like mkdir -p.'
	,	consume:':'
	,	args:[
			src
		]
	,	run({src},cb){
			fs.mkdirs(src)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}