const fatorial = num => {
    let fatorado = 1;
    for(let i = num; i > 1; i -= 1) {
        fatorado *= i;
    }
    return fatorado;
}

console.log(fatorial(4));

const longestWord = frase => {
    let palavras = frase.split(' ')
    let tamanhoMaximo = 0;
    let maiorPalavra = '';

    for(const word of palavras) {
        if(word.length > tamanhoMaximo) {
            tamanhoMaximo = word.length;
            maiorPalavra = word;
        }
    }
    return maiorPalavra
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));