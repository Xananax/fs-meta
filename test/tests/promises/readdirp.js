import fs from '../../../src';
var rootDir = require('path').resolve(__dirname+'/../../fixtures');

describe('readdirp',()=>{
	describe('readdirp(path)',()=>{
		it('should loop through first-level files in the given directory',done=>{
			var counter = 0
			fs.readdirp(rootDir,(fileInfo)=>{
				counter++;
			})
			.then(()=>{
				counter.should.equal(14);
				done();
			})
			.error(done)
		})
	})
	describe('readdirp(path,{depth:n})',()=>{
		it('should loop through directories and sub-directories until `n` level',done=>{
			var counter = 0
			fs.readdirp(rootDir,{depth:10},(fileInfo)=>{
				counter++;
			})
			.then(()=>{
				counter.should.equal(14);
				done();
			})
			.error(done)
		})
	})
})