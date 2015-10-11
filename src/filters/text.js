import {extensions} from './types';
const formats = extensions.text;

export default function textFilter(obj,options,cb,fs){
	if(!formats.test(obj.extension)){return cb(null,obj);}
	fs.readFile(obj.path,{encoding:'utf8'},function(err,contents){
		if(err){return cb(err);}
		obj.contents = contents;
		return cb(null,obj);
	});
}