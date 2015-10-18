export default function getCollection(db,collection,options,fn,cb){
	if(!options || !options.recursion || !collection || !collection.length){
		return cb(null,collection);
	}
	const {recursion} = options;
	const opts = {
		recursion:recursion-1
	}
	const {length} = collection;
	const items = [];
	let i = 0;
	let doneCalled = false;
	function done(){
		if(doneCalled){return;}
		doneCalled = true;
		return cb(null,items);
	}
	function next(){
		if(i==length){return done();}
		let id = collection[i++];
		fn(db,id,opts,(err,item)=>{
			if(err){
				return next();
			}
			items.push(item);
			return next();
		});
	}
	next();
}