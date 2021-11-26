let pecaXadrez = 'BIsPo';

let pecaMin = pecaXadrez.toLowerCase();

switch(pecaMin){
    case 'rei':
        console.log('Casas a sua volta');
        break;
    case 'rainha':
        console.log('Linha reta, laterais e diagonais');
        break;
    case 'cavalo':
        console.log('Em L');
        break;
    case 'bispo':
        console.log('Em diagonal');
        break;
    case 'torre':
        console.log('Linha reta e laterais');
        break;
    default:
        console.log('Peça inválida');
}