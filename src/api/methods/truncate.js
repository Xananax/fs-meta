import src from '../argumentTypes/src';
import len from '../argumentTypes/len';

export default function makeTruncate(fs){
	return {
		name:'truncate'
	,	description:'Cause the regular file named by path to be truncated to a size of precisely length bytes. If the file previously was larger than this size, the extra data is lost.  If the file previously was shorter, it is extended, and the extended part reads as null bytes. The file offset is not changed.'
	,	consume:':'
	,	args:[
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