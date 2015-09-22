function sayHello(name){
    return "hello "+ name;
}

function areBothEven (a, b){
    if (a % 2===0 && b %2 === 0){
        return true;
    }
    return false;
}

function hotOrNot(temp) {
    if (temp>75){
        return 'hot';
    }
    return 'not hot';
}

function threeIfNull(num){
    if (num === null){
        return 3;
    }
    return num;
}

function greatest(x,y,z){
    if (x>z && x>y){
        return x;
    }
    else if (y>x && y>z){
        return y;
    }
    else if (z>y && z>x){
        return z;
    }
    return 'You did not use numbers for all of your values'
}

