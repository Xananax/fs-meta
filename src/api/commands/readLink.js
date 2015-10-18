import src from '../parameterTypes/src';

export default function makeReadLink(fs){
	return {
		name:'readlink'
	,	description:'places the contents of the symbolic link pathname in the buffer buf, which has size bufsiz.  readlink() does not append a null byte to buf.  It will truncate the contents (to a length of bufsiz characters), in case the buffer is too small to hold all of the contents.'
	,	consume:':'
	,	parameters:[
			src
		]
	,	run({src},cb){
			fs.readlink(src)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}