var reg = /hex|utf8|utf-8|ascii|binary|base64|ucs2|ucs-2|utf16le|utf-16le|raw/;

export default function validEncoding(args){
	return (typeof args === 'string' && reg.test(args))
}