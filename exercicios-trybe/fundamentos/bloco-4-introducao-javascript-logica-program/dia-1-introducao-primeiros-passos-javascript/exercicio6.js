let statusCandidato = 'aprovada';

switch(statusCandidato){
    case 'aprovada':
        console.log('Aprovada(o)!');
        break;
    case 'lista':
        console.log('Lista');
        break;
    case 'reprovada':
        console.log('Reprovada(o)');
        break;
    default:
        console.log('Não se aplica');
}