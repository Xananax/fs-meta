import fs from '../../../src';
var rootDir = require('path').resolve(__dirname+'/../../fixtures');

describe('traverse',()=>{
	describe('traverse(path)',()=>{
		it('should traverse all files for the given path',done=>{
			var counter = 0;
			fs.traverse(rootDir,(filePath,stats,options,next)=>{
				//console.log(counter,filePath)
				counter++;
				next();
			})
			.then(()=>{
				counter.should.equal(15);
				done();
			})
			.error(done);
		})
	})
	describe('traverse(path,{depth:n})',()=>{
		it('should traverse all files for the given path until the given depth `n`',done=>{
			var counter = 0;
			fs.traverse(rootDir,{depth:1},(filePath,stats,options,next)=>{
				counter++;
				next();
			})
			.then(()=>{
				counter.should.equal(5);
				done();
			})
			.error(done);
		})
	})
	describe('traverse(path,{depth:0})',()=>{
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
	describe('traverse(path,{lstat:true})',()=>{
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