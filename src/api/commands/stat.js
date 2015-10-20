import src from '../parameterTypes/src';

export default function makeStat(fs){
	return {
		name:'stat'
	,	description:'return information about a file pointed to by buf.  No permissions are required on the file itself'
		,	parameters:[
			src
		]
	,	run({src},cb){
			fs.stat(src)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}