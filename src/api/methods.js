import methods from './methods/index';

export default function makeMethods(fs,opts){
	return methods.map(m=>m(fs,opts))
}