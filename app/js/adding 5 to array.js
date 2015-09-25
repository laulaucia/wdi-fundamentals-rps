var oldArray = [12, 45, 6, 23, 19, 20, 20, 15, 30, 42];
var newArray = []
function addingToArray(num) {
  return num += 5;
}
for (var i=0; i<oldArray.length; i+=1){
    newArray.push(addingToArray(oldArray[i]));
}
console.log(newArray)