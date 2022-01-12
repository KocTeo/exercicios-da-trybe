const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} + ' ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }

  testingScope(true);

  // segundo exercicio
  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordenando = arr => {
    let tamanhoArray = arr.length;
    for(let i = 0; i < tamanhoArray; i += 1){
      for(let j = 0; j < (tamanhoArray - i); j += 1) {
        if(arr[j] > arr[j+1]) {
          let aux = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = aux;
        }
      }
    }
    return arr;
  }

console.log(ordenando(oddsAndEvens));