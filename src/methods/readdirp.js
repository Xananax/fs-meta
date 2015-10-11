import readdirp from 'readdirp';

export default function readdir_recursive(src,options,operation,cb){
	if(typeof options == 'function'){
		cb = operation;
		operation = options;
		options = null;
	}
	options = Object.assign({},options,{
		root:src
	});
	const stream = readdirp(options);
	return (operation && cb) ? 
		(stream
			.on('error',cb)
			.on('data',(entry)=>{
				if(operation(entry)==false){
					stream.destroy()
					cb();
				}
			})
			.on('end',cb)
		) :
		stream
	;
}
