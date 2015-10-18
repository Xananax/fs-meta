export default function splice(start,number,arr){
	var newArr = arr.slice();
	newArr.splice(start,number);
	return newArr;
}