import path from 'path';
import mime from 'mime';

export default function statToObj(src,stat){
	let {dev,ino,mode,nlink,uid,gid,rdev,size,blksize,blocks,atime,mtime,ctime,birthtime} = stat;
	let ext = path.extname(src);
	let basename = path.basename(src,ext);
	let dirname = path.dirname(src);
	let mimeType = (stat.isDirectory()) ? 'inode/directory' : 
		(mime.lookup(src) || 'application/octet-stream')
	;
	let obj = {
		basename
	,	filename:basename+ext
	,	path:src
	,	dirname
	,	extension:ext.replace(/^\./,'').toLowerCase()
	,	isFile:stat.isFile()
	,	isDirectory:stat.isDirectory()
	,	isBlockDevice:stat.isBlockDevice()
	,	isCharacterDevice:stat.isCharacterDevice()
	,	isSymbolicLink:(stat.isSymbolicLink && stat.isSymbolicLink()) || false
	,	isFIFO:stat.isFIFO()
	,	isSocket:stat.isSocket()
	,	isHidden:/^\./.test(basename)
	,	mimeType
	,	mime:mimeType.split('/')
	,	dev,ino,mode,nlink,uid,gid,rdev,size,blksize,blocks,atime,mtime,ctime,birthtime
	}
	return obj;
}