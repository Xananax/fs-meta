export default function exists(fs,path,cb){
	fs.exists(path,function(exists){
		if(!exists){return cb(new Error(`${path} does not exist`),false);}
		return cb(null,true);
	})
}