import src from '../argumentTypes/src';
import accessMode from '../argumentTypes/accessMode';

export default function makeAccess(fs){
	return {
		name:'access'
	,	description:'Tests a user\'s permissions for the file specified by path. mode is an optional integer that specifies the accessibility checks to be performed. The following constants define the possible values of mode. It is possible to create a mask consisting of the bitwise OR of two or more values.'
	,	consume:':'
	,	args:[
			src
		]
	,	optionalArgs:[
			accessMode
		]
	,	run({src,mode},cb){
			fs.access(src,mode)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}