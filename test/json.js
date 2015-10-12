import fs from '../src';
var rootDir = __dirname+'/fixtures';
var api = fs.makeAPI(rootDir);

describe('# GET API',()=>{
	describe('## api(methodName,args,cb)',()=>{
		it('should run the command specified by methodName',done=>{
			api('readdir',['/'],(err,res)=>{
				res.result.should.be.an.Array();
				done();
			});
		});
	});
	describe('## api.run(path,cb)',()=>{
		it('should run the command specified by methodName',done=>{
			api.run('readdir/./',(err,res)=>{
				res.result.should.be.an.Array();
				done();
			});
		});
	});
	describe('## api.run(\'--help\',cb)',()=>{
		it('should return a summary of all commands',done=>{
			api.run('--help',(err,res)=>{
				res.result.should.be.an.Object;
				done();
			})
		})
	});
	describe('## api.middleware(req,res)',()=>{
		it('should',done=>{
			var req = {
				path:'getmeta/./'
			,	query:{}
			}
			var res = {
				json(result){
					if(result.response == 'error'){return done(result);}
					result.result.should.have.property('basename')
					done();
				}
			}
			api.middleware(req,res);
		})
	})
})