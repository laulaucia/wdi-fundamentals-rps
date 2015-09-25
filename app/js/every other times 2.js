var oldArray = [12, 45, 6, 23, 19, 20, 20, 15, 30, 42];
var newArray = [];

function doublingOdds(odd) {
  return odd * 2;
}

for (var i=0; i<oldArray.length; i++){
    if ( i % 2 == 0 ){
        newArray.push(doublingOdds(oldArray[i]));
    } else {
        newArray.push(oldArray[i])   
    }
}
console.log(newArray);