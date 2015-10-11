import filesize from 'filesize';

export default function sizeFilter(obj,options,cb){
	if(!obj.size){return cb(null,obj);}
	obj.humanSize = filesize(obj.size);
	return cb(null,obj);
}