const a = 3;
const b = 5;
const c = 7;

if(a>b){
    console.log(a);
} else {
    console.log(b);
}

if(a>b && a>c){
    console.log(a);
} else if(b>c){
    console.log(b);
} else{
    console.log(c);
}