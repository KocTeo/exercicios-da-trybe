const valorCusto = 31;
const valorVenda = 80;
const imposto = (valorCusto*0.2);
const valorTotal = valorCusto+imposto;

const lucro = valorVenda - valorTotal;

if(valorCusto<0 || valorVenda<0){
    console.log('Os valores de custo ou venda não podem ser 0');
}

console.log(lucro);