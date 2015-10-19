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

describe('api.middleware(req,res,next)',done=>{
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