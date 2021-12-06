document.getElementById('elementoOndeVoceEsta').parentNode.style.color = 'red';

document.getElementById('primeiroFilhoDoFilho').innerText = 'fazendo o exercicio';

console.log(document.getElementById('pai').firstElementChild);

console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);

console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);

console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);

console.log(document.getElementById('pai').children[2]);

let paiOndeVoceEsta = document.querySelector('#pai');
let irmaoOndeVoceEsta = document.createElement('section');
irmaoOndeVoceEsta.innerText = 'testanduu';

paiOndeVoceEsta.appendChild(irmaoOndeVoceEsta);

let OndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
let filhoOndeVoceEsta = document.createElement('section');

OndeVoceEsta.appendChild(filhoOndeVoceEsta);

let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
let filhoDofilho = document.createElement('section');

primeiroFilhoDoFilho.appendChild(filhoDofilho);