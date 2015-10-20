import fs from '../../../src';
import {apiFactory} from '../../../src/api';
import path from 'path';
var rootDir = path.resolve(__dirname+'/../../fixtures');

describe('api.runCommand(commandName,args,cb)',()=>{
	it('should run the command specified by commandName',done=>{
		apiFactory(fs.boxed(rootDir),{})
		.then(api=>api.runCommand('readdir',['/']))
		.then(answer=>{
			answer.result.should.be.an.Array();
			answer.result.should.containEql('directory')
			done()
		})
		.error(done)
	});
});

describe('api.runPath(path,cb)',()=>{
	it('should run the command specified by commandName',done=>{
		apiFactory(fs.boxed(rootDir),{})
		.then(api=>api.runPath('readdir/directory/subDirectory'))
		.then(answer=>{
			answer.result.should.be.an.Array();
			answer.result.length.should.equal(3);
			done()
		})
		.error(done)
	});
});

describe('api.runCommand(\'help\',cb)',()=>{
	it('should return a summary of all commands',done=>{
		apiFactory(fs.boxed(rootDir),{})
		.then(api=>api.runPath('help'))
		.then(answer=>{
			answer.result.should.be.an.Object();
			answer.result.should.have.property('commands');
			done()
		})
		.error(done)
	})
});

describe('api.middleware(req,res,next)',()=>{
	it('should call res.json on success',done=>{
		var req = {
			path:'/getMeta/./'
		,	query:{}
		,	command:'GET'
		}
		var res = {
			json(result){
				if(result.response == 'error'){return done(result);}
				result.result.should.have.property('basename')
				done();
			}
		}
		apiFactory(fs.boxed(rootDir),{})
		.then(api=>api.middleware(req,res,done))
		.error(done)
	})
})

describe('api.primus',()=>{
	it('should call the spark\'s "write" method',done=>{
		var spark = {
			callback:null
		,	on(str,fn){this.callback = fn;}
		,	emit(){spark.callback({command:'getMeta',src:'.'})}
		,	write(data){
				if(data.error){
					return done(data.nativeError)
				}
				done();
			}
		}
		var primus = {
			callback:null
		,	on(str,fn){this.callback = fn;}
		,	emit(){primus.callback(spark)}
		}

		function wait(fn){
			setTimeout(fn,10);
		}

		apiFactory(fs.boxed(rootDir),{})
		.then(api=>{
			primus.on('connection',spark=>{
				spark.on('data',api.primus(spark))
			});
			setTimeout(primus.emit,20);
			setTimeout(spark.emit,50);
		})
	})
})