import fs from '../../src';

describe('fs.sync',()=>{
	it('should exist',()=>{
		fs.should.have.property('sync');
		fs.sync.should.be.an.Object();
	})
})

describe('fs.unpromised',()=>{
	it('should exist',()=>{
		fs.should.have.property('unpromised');
		fs.unpromised.should.be.an.Object();
	})
})

describe('fs.filters',()=>{
	it('should exist',()=>{
		fs.should.have.property('filters');
		fs.filters.should.be.an.Object();
	})
})

describe('fs.statToObj',()=>{
	it('should exist',()=>{
		fs.should.have.property('statToObj');
		fs.statToObj.should.be.an.Function();
	})
})

describe('fs.makeAPI',()=>{
	it('should exist',()=>{
		fs.should.have.property('makeAPI');
		fs.makeAPI.should.be.an.Function();
	})
})