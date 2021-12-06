let selectBody = document.querySelector('body');
let tituloExercicio = document.createElement('h1');
tituloExercicio.innerText = 'Exercício 5.2 - JavaScript DOM';

document.body.appendChild(tituloExercicio);

let addMainBody = document.createElement('main');
addMainBody.className = 'main-content';

document.body.appendChild(addMainBody); 

let selectMain = document.querySelector('main');
let addSectionMain = document.createElement('section');
addSectionMain.className = 'center-content';

selectMain.appendChild(addSectionMain);

let selectSectionCenter = document.querySelector('section');
let addParagraphMain = document.createElement('p');
addSectionMain.innerText = 'ta dificil mas ta indo';

selectSectionCenter.appendChild(addParagraphMain);

let addSectionLeftMain = document.createElement('section');
addSectionLeftMain.className = 'left-content';

selectMain.appendChild(addSectionLeftMain);

let addSectionRightMain = document.createElement('section');
addSectionRightMain.className = 'right-content';

selectMain.appendChild(addSectionRightMain);

let selectSectionLeftMain = document.querySelector('.left-content');
let addImgLeftSection = document.createElement('img');
addImgLeftSection.src = 'https://picsum.photos/200';

selectSectionLeftMain.appendChild(addImgLeftSection);

let selectSectionRightMain = document.querySelector('.right-content');
let number = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for (let i = 0; i < number.length; i += 1){
    let listaDeNumeros = number[i];

    let itensListaDeNumeros = document.createElement('ul');
    itensListaDeNumeros.innerText = listaDeNumeros;

    selectSectionRightMain.appendChild(itensListaDeNumeros);
}

let addTextMain1 = document.createElement('h3');
selectMain.appendChild(addTextMain1);
addTextMain1.className = 'description';

let addTextMain2 = document.createElement('h3');
selectMain.appendChild(addTextMain2);
addTextMain2.className = 'description';

let addTextMain3 = document.createElement('h3');
selectMain.appendChild(addTextMain3);
addTextMain3.className = 'description';

tituloExercicio.className = 'title';

selectMain.removeChild(addSectionLeftMain);

addSectionRightMain.style.marginRight = 'auto';

selectSectionCenter.style.backgroundColor = 'green';

selectSectionRightMain.removeChild(selectSectionRightMain.lastChild);

selectSectionRightMain.removeChild(selectSectionRightMain.lastChild);