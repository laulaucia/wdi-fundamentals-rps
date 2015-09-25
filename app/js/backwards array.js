var oldArray = [12, 45, 6, 23, 19, 20, 20, 15, 30, 42];
var newArray = [];

for (var i = (oldArray.length - 1); i >= 0; i -= 1) {
  newArray.push(oldArray[i]);
}

console.log(newArray);