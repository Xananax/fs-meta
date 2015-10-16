import src from '../argumentTypes/src';
import lstat from '../argumentTypes/lstat';
import followSymLinks from '../argumentTypes/followSymLinks';

export default function makeGetMetaRecursive(fs,{filters}){
	return {
		name:'getMetaRecursive'
	,	description:'returns recursive extended stat about a directory and contents, or a file'
	,	consume:':'
	,	args:[
			src
		]
	,	optionalArgs:[
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