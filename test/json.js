import fs from '../src';
var rootDir = __dirname+'/fixtures';

describe('# GET API',()=>{
	describe('## api.run(methodName,args,cb)',()=>{
		it('should run the command specified by methodName',done=>{
			fs.makeAPI(rootDir,{})
			.then(api=>api.run('readdir',['/']))
			.then(answer=>{
				answer.result.should.be.an.Array();
				answer.result.should.containEql('directory')
				done()
			})
			.error(done)
		});
	});
	describe('## api.runPath(path,cb)',()=>{
		it('should run the command specified by methodName',done=>{
			fs.makeAPI(rootDir,{})
			.then(api=>api.runPath('readdir/directory/subDirectory'))
			.then(answer=>{
				answer.result.should.be.an.Array();
				answer.result.length.should.equal(3);
				done()
			})
			.error(done)
		});
	});
	describe('## api.run(\'help\',cb)',()=>{
		it('should return a summary of all commands',done=>{
			fs.makeAPI(rootDir,{})
			.then(api=>api.runPath('help'))
			.then(answer=>{
				answer.result.should.be.an.Object();
				answer.result.should.have.property('methods');
				done()
			})
			.error(done)
		})
	});
	describe('## api.middleware(req,res,next)',done=>{
		it('should',done=>{
			var req = {
				path:'getmeta/./'
			,	query:{}
			,	method:'GET'
			}
			var res = {
				json(result){
					if(result.response == 'error'){return done(result);}
					result.result.should.have.property('basename')
					done();
				}
			}
			fs.makeAPI(rootDir,{})
			.then(api=>api.middleware(req,res,done))
			.error(done)
		})
	})
})