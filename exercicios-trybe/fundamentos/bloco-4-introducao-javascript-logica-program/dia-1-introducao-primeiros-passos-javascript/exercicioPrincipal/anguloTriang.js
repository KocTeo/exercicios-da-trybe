const a = 68;
const b = 32;
const c = 80;

if(a>0 && b>0 && c>0){
    if(a+b+c == 180){
        console.log(true);
    } else {
        console.log(false);
    }
} else{
    console.log('Angulos negativos são inválidos');
}