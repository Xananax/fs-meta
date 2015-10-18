export default function extractId(obj){
	if(typeof obj == 'string' || typeof obj == 'number'){return obj;}
	return obj.id;
}