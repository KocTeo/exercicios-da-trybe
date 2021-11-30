let n = 5;
let aux = '';
let espaços = '';

for(let linha=1; linha<=n; linha++) {
    for(let coluna=1; coluna<=n; coluna++){
        aux += '*';
    }
    console.log(aux)
    aux = '';
}

for(let i = 1; i <= n; i++) { 
    for(let j = 0; j < i; j++) { 
        aux += '*' ;
    } 
    console.log(aux); 
    aux = '';
}

for(let i = 1; i <= n; i++) { 
    for(let j = n-i; j>=1; j--){
        espaços += ' ';
    }
    for(let j = 0; j < i; j++) { 
        aux += '*';
    } 
    console.log(espaços+aux); 
    aux = '';
    espaços = '';
}

for(let linha=1; linha<=n-2; linha++) {
    for(let j = 0; j<=(n/2); j++){
        espaços += ' ';
    }
    for(let coluna=1; coluna<=n; coluna++){
        aux += '*';
    }
    console.log(espaços+aux); 
    aux = '';
}