function doTraverseSync(fs,dir,options,operation,depth,level,method){
    level++;
    var dirStats = fs[method](dir);
    var files = fs.readdirSync(dir);
    const {length} = files;
    var i = 0;
    for(i;i<length;i++){
        var file = files[i];
        var filePath = dir+'/'+file;
        var stats = fs[method](filePath);
        if(stats.isDirectory() && level<depth){
            doTraverseSync(fs,filePath,options,operation,depth,level,method)
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
    var depth = options && typeof options.depth == 'number'? options.depth : Infinity;
    var level = 0;
    var method = (options && options.lstat) ? 'lstatSync' : 'statSync'
    return doTraverseSync(fs,dir,options,operation,depth,level,method)

}