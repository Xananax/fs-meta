import fs from '../../../src';
var rootDir = require('path').resolve(__dirname+'/../../fixtures');
import {fsMethods} from '../../../src/methods/fsMethods';
import {fsExtraMethods} from '../../../src/methods/fsExtraMethods';
import Promise from 'bluebird';

const methods = fsMethods.concat(fsExtraMethods).filter(name=>!/F_OK|R_OK|W_OK|X_OK/.test(name));
const {length} = methods;

export default describe('Regular fs methods',()=>{
	describe('Availability',()=>{
		var i;
		it('should be possible to find all fs and fs-extra methods on fs-meta',()=>{
			for(i=0;i<length;i++){
				fs.should.have.property(methods[i]);
			}
		})
		it('should all be functions',()=>{
			for(i=0;i<length;i++){
				fs[methods[i]].should.be.a.Function();
			}
		})
	})
})