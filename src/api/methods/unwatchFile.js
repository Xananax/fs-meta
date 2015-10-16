import src from '../argumentTypes/src';

export default function makeUnWatchFile(fs,{watchListener}){
	return {
		name:'unwatchFile'
	,	description:'Stops watching a file'
	,	consume:':'
	,	args:[
			src
		]
	,	run({src},cb){
			fs.unwatchFile(src,watchListener)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}