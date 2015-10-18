import processStat from './processStat';

export default function getMeta(fs,src,options,cb,stat){
	if(typeof options == 'function'){
		cb = options;
		options = null;
	}
	if(stat){
		return processStat(fs,src,options,cb)(null,stat);
	}
	var lstat = (options && ('lstat' in options)) ? options.lstat : true;
	if(lstat){
		fs.lstat(src,processStat(fs,src,options,cb))
	}else{
		fs.stat(src,processStat(fs,src,options,cb))
	}
}

