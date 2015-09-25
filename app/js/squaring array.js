var oldArray = [12, 45, 6, 23, 19, 20, 20, 15, 30, 42];
var newArray = []
function squaringArray(num) {
  return num * num;
}
for (var i=0; i<oldArray.length; i+=1){
    newArray.push(squaringArray(oldArray[i]));
}
console.log(newArray)