import src from '../parameterTypes/src';
import mode from '../parameterTypes/mode';

export default function makeChmod(fs){
	return {
		name:'chmod'
	,	description:'chmod changes the file mode bits of each given file according to mode, which can be either a symbolic representation of changes to make, or an octal number representing the bit pattern for the new mode bits.'
		,	parameters:[
			src
		,	mode
		]
	,	run({src,mode},cb){
			fs.chmod(src,mode)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}