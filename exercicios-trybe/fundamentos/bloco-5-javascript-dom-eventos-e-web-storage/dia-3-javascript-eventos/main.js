const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

let liTag = document.querySelectorAll('li');

liTag[0].addEventListener("click", recebeClass0);
liTag[1].addEventListener("click", recebeClass1);
liTag[2].addEventListener("click", recebeClass2);

function recebeClass0() {
  firstLi.className = 'tech';
}
function recebeClass1() {
  secondLi.className = 'tech';
}
function recebeClass2() {
  thirdLi.className = 'tech';
}



// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';


myWebpage.addEventListener("dblclick", redirecionaPag);

function redirecionaPag(event){
  
}
// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?


myWebpage.addEventListener("mouseover", mudaCor);

function mudaCor(){
    myWebpage.style.color = 'rgb(144, 238, 144)';
}

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.