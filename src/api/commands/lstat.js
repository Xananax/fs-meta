import src from '../parameterTypes/src';

export default function makeLstat(fs){
	return {
		name:'lstat'
	,	description:'lstat is identical to stat, except that if pathname is a symbolic link, then it returns information about the link itself, not the file that it refers to.'
		,	parameters:[
			src
		]
	,	run({src},cb){
			fs.lstat(src)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}