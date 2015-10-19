import fs from '../../../src';
var rootDir = require('path').resolve(__dirname+'/../../fixtures');



describe('boxed(rootDir)',()=>{
	it('should return an instance of fsm boxed to the rootDir provided',done=>{
		var boxed = fs.boxed(rootDir);
		boxed.readdir('')
		.then(files=>{
			files.length.should.equal(4);
			done()
		})
		.error(done)
	})
})

describe('boxed(rootDir,{methods:{}})',()=>{
	it('should wrap the original function with the one provided',done=>{
		var boxed = fs.boxed(rootDir,{
			methods:{					
				stat(filename,cb){
					this.super(filename+'tory',(err,stat)=>{
						if(err){cb(err);}
						stat.someNewProperty = 'property';
						cb(null,stat);
					})
				}
			}
		});
		boxed.stat('direc')
		.then(stat=>{
			stat.should.have.property('someNewProperty')
			done()
		})
		.error(done)
	})
})

describe('boxed(rootDir,{filters:[]})',()=>{
	it('should provide default filters to getMeta',done=>{
		var filterRan = false;
		var boxed = fs.boxed(rootDir,{
			filters:[
				function(meta,options,next,fs){
					if(meta.extension == 'css'){
						filterRan = true;
					}
					next(null,meta);
				}
			]
		});
		boxed.getMeta('/style.css')
			.then((meta)=>{
				filterRan.should.be.true;
				done();
			})
			.error(done)
	})
	it('should provide default filters to getMetaRecursive',done=>{
		var filterRan = 0;
		var boxed = fs.boxed(rootDir,{
			filters:[
				function(meta,options,next,fs){
					if(meta.extension == 'css'){
						filterRan++
					}
					next(null,meta);
				}
			]
		});
		boxed.getMetaRecursive('')
			.then((meta)=>{
				filterRan.should.be.greaterThan(0)
				done();
			})
			.error(done)
	})
})