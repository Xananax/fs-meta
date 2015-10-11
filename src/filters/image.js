import sizeOf from 'image-size';

let formats = /bmp|gif|jpe?g|png|psd|tiff|webp|svg/

export default function imageFilter(obj,options,cb){
	if(!formats.test(obj.extension)){return cb(null,obj);}
	let {width,height} = sizeOf(obj.path);
	obj.dimensions = {width,height};
	cb(null,obj);
}