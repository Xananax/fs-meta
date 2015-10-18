import src from '../parameterTypes/src';

export default function makeUnWatchFile(fs,{watchListener}){
	return {
		name:'unwatchFile'
	,	description:'Stops watching a file'
	,	consume:':'
	,	parameters:[
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