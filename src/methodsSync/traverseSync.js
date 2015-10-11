function doTraverseSync(fs,dir,options,operation,depth,level){
    level++;
    var dirStats = fs.statsSync(dir);
    var files = fs.readdirSync(dir);
    const {length} = files;
    var i = 0;
    for(i;i<length;i++){
        var file = files[i];
        var filePath = dir+'/'+file;
        var stats = fs.statsSync(filePath);
        if(stats.isDirectory() && level<depth){
            doTraverse(fs,filePath,options,operation,depth,level)
        }else{
            operation(filePath,stats,options)
        }
    }
    operation(dir,dirStats,options);
}

export default function traverseSync(fs,dir,options,operation){
    if(typeof options == 'function'){
        cb = operation;
        operation = options;
        options = null;
    }
    var depth = options.depth || Infinity;
    var level = 0;
    return doTraverseSync(fs,dir,options,operation,depth,level)

}