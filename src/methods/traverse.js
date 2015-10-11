function doTraverse(fs,dir,options,operation,depth,level,method,cb){
    level++;
    fs[method](dir,(err,dirStats)=>{
        if(err){return cb(err);}
        fs.readdir(dir,(err,files)=>{
            if(err){return cb(err);}
            const {length} = files;
            var i = 0;
            var doneHasRan = false;
            if(!length){return done();}
            if(level>depth){return done();}
            function done(err){
                if(doneHasRan){return;}
                doneHasRan = true;
                if(err){return cb(err);}
                return operation(dir,dirStats,options,cb);
            }
            (function next(err){
                if(err){return done(err);}
                if(i>=length){return done();}
                var file = files[i++];
                var filePath = dir+'/'+file
                fs[method](filePath,(err,stats)=>{
                    if(err){return done(err);}
                    if(stats.isDirectory() && level<depth){
                        return doTraverse(fs,filePath,options,operation,depth,level,method,next);
                    }
                    operation(filePath,stats,options,next);
                })
            })()
        });
    })
}

export default function traverse(fs,dir,options,operation,cb){
    if(typeof options == 'function'){
        cb = operation;
        operation = options;
        options = null;
    }
    var depth = (options && typeof options.depth == 'number')? options.depth : Infinity;
    var level = 0;
    var method = (options && options.lstat) ? 'lstat' : 'stat'
    return doTraverse(fs,dir,options,operation,depth,level,method,cb)
}