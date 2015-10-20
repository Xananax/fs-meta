import src from '../parameterTypes/src';
import len from '../parameterTypes/len';

export default function makeTruncate(fs){
	return {
		name:'truncate'
	,	description:'Cause the regular file named by path to be truncated to a size of precisely length bytes. If the file previously was lparameterer than this size, the extra data is lost.  If the file previously was shorter, it is extended, and the extended part reads as null bytes. The file offset is not changed.'
		,	parameters:[
			src
		,	len
		]
	,	run({src,len},cb){
			fs.truncate(src,len)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}