import fs from '../../src';
import path from 'path';
import realFs from 'fs';
var rootDir = path.resolve(__dirname+'/../fixtures');

describe('# Collections',()=>{
	describe('# collections(methodName,options)',()=>{
		it('should be a function',()=>{
			fs.collections.should.be.a.Function();
		})
		it('should return the default root group when called with no arguments',done=>{
			fs.collections()
				.then(res=>{
					res.should.have.property('groups');
					res.groups.should.be.an.Array();
					res.groups.length.should.be.aboveOrEqual(1);
					done()
				})
				.error(done);
		})
	})
	describe('# collections("add")',()=>{
		describe('## collections("add",{file:{path:string}})',()=>{		
			it('should add a file to the database',done=>{
				var boxed = fs.boxed(rootDir)
				var fileId;
				boxed.collections('add',{file:{path:'/a',groups:['id0']}})
					.then(file=>{
						fileId = file.id;
						return boxed.collections('dump');
					})
					.then(res=>{
						res.groups.items.should.be.an.Array();
						res.groups.items[0].files.should.be.an.Array();
						res.groups.items[0].files.should.containEql(fileId);
						done()
					})
					.error(done);
			})
		})
		describe('## collections("add",{file:string})',()=>{		
			it('should add a file to the database',done=>{
				var boxed = fs.boxed(rootDir)
				var fileId;
				boxed.collections('add',{file:'/a'})
					.then(file=>{
						fileId = file.id;
						return boxed.collections('dump');
					})
					.then(res=>{
						res.files.items.should.be.an.Array();
						res.files.items[0].id.should.equal(fileId)
						done()
					})
					.error(done);
			})
		})
		describe('## collections("add",{group:{name:string}})',()=>{		
			it('should add a file to the database',done=>{
				var boxed = fs.boxed(rootDir)
				var groupId;
				boxed.collections('add',{group:{name:'test',groups:[{id:'id0'}]}})
					.then(group=>{
						groupId = group.id;
						return boxed.collections('dump');
					})
					.then(res=>{
						res.groups.items.length.should.be.aboveOrEqual(3)
						res.groups.items[2].groups.should.containEql('id0');
						done()
					})
					.error(done);
			})
		})
		describe('## collections("add",{group:string})',()=>{		
			it('should add a file to the database',done=>{
				var boxed = fs.boxed(rootDir)
				var groupId;
				boxed.collections('add',{group:'test'})
					.then(group=>{
						groupId = group.id;
						return boxed.collections('dump');
					})
					.then(res=>{
						res.groups.items.length.should.be.aboveOrEqual(3)
						res.groups.items[2].id.should.equal(groupId)
						done()
					})
					.error(done);
			})
		})
	})
	describe('# collections("edit")',()=>{
		describe('## collections("edit",{file:{id:string}})',()=>{		
			it('should edit a file to the database',done=>{
				var boxed = fs.boxed(rootDir)
				var fileId;
				boxed.collections('add',{file:{path:'/a',groups:['id0']}})
					.then(file=>{
						fileId = file.id;
						file.path.should.equal('/a')
						return boxed.collections('edit',{file:{id:fileId,path:'/b'}});
					})
					.then(file=>{
						file.path.should.equal('/b');
						return boxed.collections('dump');
					})
					.then(res=>{
						res.files.items[0].path.should.equal('/b');
						res.files.indexes.path.should.not.have.ownProperty('/a')
						res.files.indexes.path.should.have.ownProperty('/b')
						done()
					})
					.error(done);
			})
		})
		describe('## collections("edit")',()=>{		
			it('should edit a file to the database',done=>{
				var boxed = fs.boxed(rootDir)
				var groupId;
				boxed.collections('add',{group:{name:'test',groups:[{id:'id0'}]}})
					.then(group=>{
						groupId = group.id;
						group.name.should.equal('test');
						return boxed.collections('edit',{group:{id:groupId,name:'test2'}})
					})
					.then(group=>{
						group.name.should.equal('test2');
						return boxed.collections('dump');
					})
					.then(res=>{
						res.groups.items[2].name.should.equal('test2');
						res.groups.indexes.name.should.have.ownProperty('test2');
						res.groups.indexes.name.should.not.have.ownProperty('test');
						done()
					})
					.error(done);
			})
		})
	})
	describe('# collections("get")',()=>{
		describe('# collections("get",{file_id:idString})',()=>{
			it('should return the file',done=>{

				var boxed = fs.boxed(rootDir);
				boxed.collections('add',{file:'/a'})
					.then(file=>boxed.collections('get',{file_id:file.id}))
					.then(file=>{
						file.path.should.equal('/a');
						done()
					})
					.error(done);
			})
		})
		describe('# collections("get",{file_path:string})',()=>{
			it('should return the file',done=>{

				var boxed = fs.boxed(rootDir);
				boxed.collections('add',{file:'/a'})
					.then(file=>boxed.collections('get',{file_path:'/a'}))
					.then(file=>{
						file.path.should.equal('/a');
						done()
					})
					.error(done);
			})
		})
		describe('# collections("get",{group_id:string})',()=>{
			it('should return the file',done=>{
				var boxed = fs.boxed(rootDir);
				boxed.collections('get',{group_id:'id0'})
					.then(group=>{
						group.name.should.equal('__root__');
						done()
					})
					.error(done);
			})
		})
		describe('# collections("get",{group_name:string})',()=>{
			it('should return the file',done=>{
				var boxed = fs.boxed(rootDir);
				boxed.collections('get',{group_name:'__root__'})
					.then(group=>{
						group.name.should.equal('__root__');
						done()
					})
					.error(done);
			})
		})
	})
	describe('# collections("remove")',()=>{
		describe('# collections("remove",{group:idString})',()=>{
			it('should remove the group',done=>{
				var {collections} = fs.boxed(rootDir);
				collections('add',{group:'a'})
					.then(group=>collections('remove',{group:group.id}))
					.then(()=>collections('dump'))
					.then(res=>{
						res.groups.items.length.should.equal(2);
						done()
					})
					.error(done);	
			})
		})
		describe('# collections("remove",{group:{id:string}})',()=>{
			it('should remove the group',done=>{
				var {collections} = fs.boxed(rootDir);
				collections('add',{group:'a'})
					.then(group=>collections('remove',{group:{id:group.id}}))
					.then(()=>collections('dump'))
					.then(res=>{
						res.groups.items.length.should.equal(2);
						done()
					})
					.error(done);	
			})
		})
		describe('# collections("remove",{file:idString})',()=>{
			it('should remove the file',done=>{
				var {collections} = fs.boxed(rootDir);
				collections('add',{file:'a'})
					.then(file=>collections('remove',{file:file.id}))
					.then(()=>collections('dump'))
					.then(res=>{
						res.files.items.length.should.equal(0);
						done()
					})
					.error(done);	
			})
		})
		describe('# collections("remove",{file:{id:string}})',()=>{
			it('should remove the group',done=>{
				var {collections} = fs.boxed(rootDir);
				collections('add',{file:'a'})
					.then(file=>collections('remove',{file:{id:file.id}}))
					.then(()=>collections('dump'))
					.then(res=>{
						res.files.items.length.should.equal(0);
						done()
					})
					.error(done);	
			})
		})
	})
	describe('# Loading and saving',()=>{
		const fileName = 'db.json';
		function readFile(){
			var contents = realFs.readFileSync(rootDir+'/'+fileName,{encoding:'utf8'});
			var json = JSON.parse(contents);
			return json;
		}
		const {collections} = fs.boxed(rootDir,{collectionPersist:fileName})
		it('should be able to save or load the database',done=>{
			var fileId;
			collections('load')
				.then(()=>collections('save'))
				.then(()=>collections('dump'))
				.then(db=>{
					var json = readFile();
					db.files.items.length.should.equal(0);
					json.files.items.length.should.equal(0);
					return collections('add',{file:{path:'favicon.ico',groups:['id0']}})
				})
				.then(file=>{
					fileId=file.id;
					return collections('dump')
				})
				.then(db=>{
					var json = readFile();
					db.files.items.length.should.equal(1);
					json.files.items.length.should.equal(1);
					return collections('remove',{file:fileId});	
				})
				.then(()=>collections('dump'))
				.then(db=>{
					var json = readFile();
					db.files.items.length.should.equal(0);
					json.files.items.length.should.equal(0);
					done();
				})
				.error(done)
		})
	})
})