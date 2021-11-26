let salarioBruto = 3000;
let salarioBase;
let inss;
let impostoRenda;
let salarioTotal;

if(salarioBruto<=1556.94){
    inss = salarioBruto*0.08;
    salarioBase = salarioBruto-inss;
} else if (salarioBruto>1556.94 && salarioBruto<2594.93){
    inss = salarioBruto*0.09;
    salarioBase = salarioBruto-inss;
} else if(salarioBruto>2594.93 && salarioBruto<5189.82){
    inss = salarioBruto*0.11;
    salarioBase = salarioBruto-inss;
} else{
    salarioBase = salarioBruto-570.88;
}
console.log(salarioBase);

if(salarioBase>1903.99 && salarioBase<=2826.65){
    impostoRenda = (salarioBase*0.075)-142.8;
    salarioTotal = salarioBase-impostoRenda;
} else if(salarioBase>=1903.99 && salarioBase<=3751.05){
    impostoRenda = (salarioBase*0.15)- 354.8;
    salarioTotal = salarioBase-impostoRenda;
} else if(salarioBase>=3751.05 && salarioBase<=4664.68){
    impostoRenda = (salarioBase*0.22)- 636.13;
    salarioTotal = salarioBase-impostoRenda;
} else {
    impostoRenda = (salarioBase*0.275)- 869.36;
    salarioTotal = salarioBase-impostoRenda;
}
 
console.log(salarioTotal);