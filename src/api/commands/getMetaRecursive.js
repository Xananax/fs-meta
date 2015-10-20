import src from '../parameterTypes/src';
import lstat from '../parameterTypes/lstat';
import followSymLinks from '../parameterTypes/followSymLinks';

export default function makeGetMetaRecursive(fs,{filters}){
	return {
		name:'getMetaRecursive'
	,	description:'returns recursive extended stat about a directory and contents, or a file'
		,	parameters:[
			src
		]
	,	optionalParameters:[
			lstat
		,	followSymLinks
		]
	,	run({src,lstat,followSymLinks},cb){
			fs.getMetaRecursive(src,{lstat,followSymLinks,filters})
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}