import id3 from 'id3js';

export default function id3Filter(obj,options,cb){
	if(obj.extension!=='mp3'){return cb(null,obj);}
	id3({ file:obj.path, type: id3.OPEN_LOCAL }, function(err, tags) {
		if(err){return cb(err);}
		for(var n in tags.v1){
			if(typeof tags.v1[n] !== 'string'){continue;}
			tags.v1[n] = tags.v1[n].replace(/\u0000/g,'');
		}
		obj.tags = tags;
		return cb(null,obj);
	});
}