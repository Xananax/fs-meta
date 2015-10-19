import fs from '../../../src';
var rootDir = require('path').resolve(__dirname+'/../../fixtures');

describe('exists',()=>{
	describe('exists(path)',()=>{
		it('say if a file exists',done=>{
			var boxed = fs.boxed(rootDir);
			boxed.exists('/style.css')
				.then((exists)=>{
					exists.should.be.true();
					done();
				})
				.error(done)
		})
		it('should return an error if a file does not exist',done=>{
			var boxed = fs.boxed(rootDir);
			boxed.exists('/notAFile.css')
				.then((exists)=>{
					done(new Error('this should not happen'))
				})
				.error(err=>done())
		})
	})
});