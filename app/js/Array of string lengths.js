var arrayOfStrings = ['who', 'what', 'where', 'when', 'how'];

function lengthOfStrings (num){
	console.log(num.length);
	return num.length;
}
var arrayOfLengths = arrayOfStrings.map(lengthOfStrings);

console.log(arrayOfLengths);