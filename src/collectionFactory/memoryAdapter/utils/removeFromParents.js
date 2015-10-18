import splice from '../../utils/splice';

export default function removeFromParents(db,id,dbClass,collectionName){
	db[dbClass].items = db[dbClass].items.map(item=>{
		var index = item[collectionName].indexOf(id);
		if(index>=0){item[collectionName] =  splice(index,1,item[collectionName]);}
		return item;
	})
}