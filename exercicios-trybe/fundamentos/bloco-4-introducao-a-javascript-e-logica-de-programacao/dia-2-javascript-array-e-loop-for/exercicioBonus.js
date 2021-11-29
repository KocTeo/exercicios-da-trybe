let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*for(let k = 1; k<numbers.length; k++){
    for(let j = 0; j<numbers.length-1; j++){
        if(numbers[j]>numbers[j+1]){
            let aux = numbers[j];
            numbers[j] = numbers[j+1];
            numbers[j+1] = aux;
        }
    }
}

console.log(numbers);

for(let k = numbers.length-1; k>0; k--){
    for(let j = 0; j<numbers.length-1; j++){
        if(numbers[j]>numbers[j+1]){
            let aux = numbers[j];
            numbers[j] = numbers[j+1];
            numbers[j+1] = aux;
        }
    }
}

console.log(numbers); */


let multpNum = [];
let numMultp;

for(let i = 0; i<numbers.length; i++){
    if(numbers[i+1]>numbers.length){
        numMultp = numbers[i]*numbers[i+1];
        multpNum.push(numMultp);
    } else{
        numMultp = numbers[i]*2;
        multpNum.push(numMultp);
    }
}

console.log(multpNum);