import fs from '../../../src';
var rootDir = require('path').resolve(__dirname+'/../../fixtures');

describe('getMetaRecursive',()=>{
	describe('getMetaRecursive(path)',()=>{
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
	describe('getMetaRecursive(path,{filters})',()=>{
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