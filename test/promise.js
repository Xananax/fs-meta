import fs from '../src';
var rootDir = __dirname+'/fixtures';

describe.skip('# Promise API',()=>{
	describe('## traverse',()=>{
		describe('###  traverse(path)',()=>{
			it('should traverse all files for the given path',done=>{
				var counter = 0;
				fs.traverse(rootDir,(filePath,stats,options,next)=>{
					//console.log(counter,filePath)
					counter++;
					next();
				})
				.then(()=>{
					counter.should.equal(14);
					done();
				})
				.error(done);
			})
		})
		describe('###  traverse(path,{depth:n})',()=>{
			it('should traverse all files for the given path until the given depth `n`',done=>{
				var counter = 0;
				fs.traverse(rootDir,{depth:1},(filePath,stats,options,next)=>{
					counter++;
					next();
				})
				.then(()=>{
					counter.should.equal(4);
					done();
				})
				.error(done);
			})
		})
		describe('###  traverse(path,{depth:0})',()=>{
			it('should be equivalent to calling stat on the root directory',done=>{
				var counter = 0;
				fs.traverse(rootDir,{depth:0},(filePath,stats,options,next)=>{
					counter++;
					next();
				})
				.then(()=>{
					counter.should.equal(1);
					done();
				})
				.error(done);
			})
		})
		describe('###  traverse(path,{lstat:true})',()=>{
			it('should use lstat instead of stat',done=>{
				var calls = 0
				function bothDone(err){
					calls++;
					if(calls>2){return;}
					if(err){
						calls = 10;
						done(err);
					}
					if(calls==2){
						done();
					}
				}

				fs.traverse(rootDir,{lstat:true},(filePath,stats,options,next)=>{
					if(filePath.match(/frontblueprintLink.jpg/)){
						stats.isSymbolicLink().should.be.true
					}
					next();
				})
				.then(()=>{
					bothDone();
				})
				.error(bothDone);

				fs.traverse(rootDir,{lstat:false},(filePath,stats,options,next)=>{
					if(filePath.match(/frontblueprintLink.jpg/)){
						stats.isSymbolicLink().should.be.false
					}
					next();
				})
				.then(()=>{
					bothDone();
				})
				.error(bothDone);
			})
		})
	})

	describe('## readdirp',()=>{
		describe('###  readdirp(path)',()=>{
			it('should loop through first-level files in the given directory',done=>{
				var counter = 0
				fs.readdirp(rootDir,(fileInfo)=>{
					counter++;
				})
				.then(()=>{
					counter.should.equal(13);
					done();
				})
				.error(done)
			})
		})
		describe('###  readdirp(path,{depth:n})',()=>{
			it('should loop through directories and sub-directories until `n` level',done=>{
				var counter = 0
				fs.readdirp(rootDir,{depth:10},(fileInfo)=>{
					counter++;
				})
				.then(()=>{
					counter.should.equal(13);
					done();
				})
				.error(done)
			})
		})
	})

	describe('## getMeta',()=>{
		describe('###  getMeta(path)',()=>{
			it('should serve a json object about a file',done=>{
				fs.getMeta(rootDir+'/style.css')
					.then((meta)=>{
						meta.basename.should.equal('style');
						meta.filename.should.equal('style.css');
						meta.extension.should.equal('css');
						done();
					})
					.error(done)
			})
		})
		describe('###  getMeta(path,{root:string})',()=>{
			it('should truncate file paths to the provided root',done=>{
				fs.getMeta(rootDir+'/style.css',{root:rootDir})
					.then((meta)=>{
						meta.dirname.should.equal('');
						meta.path.should.equal('/style.css');
						done();
					})
					.error(done)			
			});
		})
		describe('###  getMeta(path,{filters:[]})',()=>{
			it('should process the filter array',done=>{
				var filterRan = false;
				var options = {
					filters:[
						function(meta,options,next,fs){
				            if(meta.extension == 'css'){
				            	filterRan = true;
				            }
				            next(null,meta);
				        }
			        ]
				}
				fs.getMeta(rootDir+'/style.css',options)
					.then((meta)=>{
						filterRan.should.be.true;
						done();
					})
					.error(done)
			})
			it('should process the filter array in order',done=>{
				var filterRan = false;
				var options = {
					filters:[
						function first(meta,options,next,fs){
				            if(meta.extension == 'css'){
				            	meta.number = 1;
				            }
				            next(null,meta);
				        }
					,	function second(meta,options,next,fs){
				            if(meta.extension == 'css'){
				            	meta.number = meta.number+1;
				            }
				            next(null,meta);
				        }
			        ]
				}
				fs.getMeta(rootDir+'/style.css',options)
					.then((meta)=>{
						meta.number.should.equal(2)
						done();
					})
					.error(done)
			})
		})
	});

	describe('## getMetaRecursive',()=>{
		describe('## getMetaRecursive(path)',()=>{
			it('should get metadata recursively for all files in a directory',done=>{
				fs.getMetaRecursive(rootDir+'/directory')
				.then(({files,indexes})=>{
					files.length.should.equal(11)
					files[indexes[rootDir+'/directory']].files.length.should.equal(7)
					files[indexes[rootDir+'/directory/subDirectory']].files.length.should.equal(3)
					done()
				})
				.error(done)
			});
		});
		describe('## getMetaRecursive(path,{filters})',()=>{
			it('should apply filters recursively for all files in a directory',done=>{
				fs.getMetaRecursive(rootDir+'/directory',{
					filters:[
						function(meta,options,next,fs){
				            if(meta.extension == 'ini'){
				            	meta.filter = true;
				            }
				            next(null,meta);
				        }
					]
				})
				.then(({files,indexes})=>{
					var iniFileIndex = indexes[rootDir+'/directory/subDirectory/test.ini'];
					var iniFileMeta = files[iniFileIndex];
					iniFileMeta.should.have.property('filter');
					iniFileMeta.filter.should.be.true;
					done()
				})
				.error(done)
			});
		});
	})

	describe('## boxed',()=>{
		describe('## boxed(rootDir)',()=>{
			it('should return an instance of fsm boxed to the rootDir provided',done=>{
				var boxed = fs.boxed(rootDir);
				boxed.readdir('')
				.then(files=>{
					files.length.should.equal(3);
					done()
				})
				.error(done)
			})
		})
		describe('## boxed(rootDir).getMeta',()=>{
			it('should return meta properties with `rootDir` removed',done=>{
				var boxed = fs.boxed(rootDir);
				boxed.getMeta('/directory')
				.then(meta=>{
					meta.path.should.equal('/directory')
					done()
				})
				.error(done)
			})
		})
	})
})