import exif from 'exif-parser';

export default function dirSize(obj,options,cb,fs){
	if(!obj.isDirectory){return cb(null,obj);}
	fs.readdir(obj.path,function(err,files){
		if(err){return cb(err);}
		var size = 0;
		if(!files.length){return cb(null,obj);}
		var i = 0
		var length = files.length;
		(function next(){
			if(i>=length){
				obj.size = size
				return cb(null,obj);
			}
			currFile = files[i++];
			fs.stat(obj.path+'/'+currFile,(err,stat)=>{
				if(err){return cb(err);}
				size+=stat.size;
				next();
			})
		})();
	})
}