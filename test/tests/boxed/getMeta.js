import fs from '../../../src';
var rootDir = require('path').resolve(__dirname+'/../../fixtures');

describe('getMeta',()=>{
	describe('getMeta(path)',()=>{
		it('should serve a json object about a file',done=>{
			var boxed = fs.boxed(rootDir);
			boxed.getMeta('/style.css')
				.then((meta)=>{
					meta.basename.should.equal('style');
					meta.filename.should.equal('style.css');
					meta.extension.should.equal('css');
					done();
				})
				.error(done)
		})
	})
	describe('getMeta(path,{root:string})',()=>{
		it('should truncate file paths to the provided root',done=>{
			var boxed = fs.boxed(rootDir);
			boxed.getMeta('/style.css',{root:rootDir})
				.then((meta)=>{
					meta.dirname.should.equal('');
					meta.path.should.equal('/style.css');
					done();
				})
				.error(done)			
		});
	})
	describe('getMeta(path,{filters:[]})',()=>{
		it('should process the filter array',done=>{
			var boxed = fs.boxed(rootDir);
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
			boxed.getMeta('/style.css',options)
				.then((meta)=>{
					filterRan.should.be.true;
					done();
				})
				.error(done)
		})
		it('should process the filter array in order',done=>{
			var boxed = fs.boxed(rootDir);
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
			boxed.getMeta('/style.css',options)
				.then((meta)=>{
					meta.number.should.equal(2)
					done();
				})
				.error(done)
		})
	})
});