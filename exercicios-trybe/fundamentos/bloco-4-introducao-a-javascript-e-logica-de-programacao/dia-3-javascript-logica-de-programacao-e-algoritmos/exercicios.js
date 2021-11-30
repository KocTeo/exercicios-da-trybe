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

// visto no gabarito do corse

let asteriscos = '*';
let espacos = '';

let meioPiramide = (n + 1) / 2;
let espacoEsquerdo = meioPiramide;
let espacoDireito = meioPiramide;

for (let linha = 0; linha <= meioPiramide; linha += 1) {
  for (let coluna = 0; coluna <= n; coluna += 1) {
    if (coluna > espacoEsquerdo && coluna < espacoDireito) {
      espacos = espacos + asteriscos;
    } else {
      espacos = espacos + ' ';
    }
  }
  console.log(espacos);
  espacos = '';
  espacoDireito += 1;
  espacoEsquerdo -= 1
};