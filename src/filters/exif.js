import exif from 'exif-parser';

export default function exifFilter(obj,options,cb,fs){
	if(obj.extension !== 'jpeg' && obj.extension !== 'jpg'){return cb(null,obj);}
	fs.readFile(obj.path,function(err,buffer){
		if(err){return cb(err);}
		let parser = exif.create(buffer);
		var result = parser.parse();
		obj.tags = result.tags;
		if(result.hasThumbnail()){
			let {width,height} = result.getThumbnailSize();
			let tnbBuffer = result.getThumbnailBuffer();
			obj.thumbnail = {width,height,tnbBuffer};
		}
		cb(null,obj);
	})
}