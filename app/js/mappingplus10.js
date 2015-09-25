function addTen (x){
	console.log(x+10);
	return x+10;
}
var plusTenArray = [1,2,3,4].map(addTen);
console.log(plusTenArray);