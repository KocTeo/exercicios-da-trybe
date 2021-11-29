let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* exercicio 1
for(let i = 0; i<numbers.length; i++){
    console.log(numbers[i]);
} */

/* exercicio 2, 3 e 4 
let soma = 0;
for(let i = 0; i<numbers.length; i++){
    soma = soma + numbers[i];
}
console.log(soma);
let mediaArit = soma/numbers.length;
console.log(mediaArit);

if(mediaArit>20){
    console.log('valor maior que 20');
} else{
    console.log('valor menos que 20')
} */

/* exercicio 6
let numImpar = 0;
for(let i = 0; i<numbers.length; i++){
    if(numbers[i]%2!=0){
        numImpar++
    }
}
if(numImpar>0){
    console.log(numImpar);
} else{
    console.log('nenhum valor ímpar encontrado');
} */

/* exercicio 5 e 7 
numbers.sort(function(a, b){
    return a-b;
})
console.log(numbers[numbers.length-1]);

numbers.sort(function(a, b){
    return b-a;
})
console.log(numbers[numbers.length-1]); */



/* exercicio 8 e 9
let numbers = [];
let i;
for(i = 1; i<26; i++){
    numbers.push(i);
}
console.log(numbers);

for(i = 0; i<numbers.length; i++){
    console.log(numbers[i]/2)
} */