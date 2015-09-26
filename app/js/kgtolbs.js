var massInKg = [55,35,12,10];
function makeLbs (x){
	console.log(x*2.2);
	return x * 2.2;
}

var massInLbs = massInKg.map(makeLbs);

console.log(massInLbs);