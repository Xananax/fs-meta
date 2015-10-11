import fs from '../src';
var rootDir = __dirname+'/fixtures';

describe('fs.getMeta',()=>{
	it('should acquire more meta about a file',done=>{
		fs.getMeta(rootDir+'index.js',(err,meta)=>done())
	})
})