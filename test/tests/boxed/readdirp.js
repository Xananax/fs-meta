import fs from '../../../src';
var rootDir = require('path').resolve(__dirname+'/../../fixtures');

describe('readdirp',()=>{
	describe('readdirp(path)',()=>{
		it('should loop through first-level files in the given directory',done=>{
			var boxed = fs.boxed(rootDir);
			var counter = 0
			boxed.readdirp('',(fileInfo)=>{
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
			var boxed = fs.boxed(rootDir);
			var counter = 0
			boxed.readdirp('',{depth:10},(fileInfo)=>{
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