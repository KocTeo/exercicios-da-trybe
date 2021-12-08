let selectBody = document.getElementsByTagName('body');


let botaoCorTela = document.createElement('button');
botaoCorTela.id = 'background-color';
botaoCorTela.innerText = 'Troca de cor do Site';
document.body.appendChild(botaoCorTela);

let botaoCorTexto = document.createElement('button');
botaoCorTexto.id = 'color';
botaoCorTexto.innerText = 'Troca cor do texto';
document.body.appendChild(botaoCorTexto);

let botaoTamanhoFonte = document.createElement('button');
botaoTamanhoFonte.id = 'font-size';
botaoTamanhoFonte.innerText = 'Troca tamanho da fonte do texto';
document.body.appendChild(botaoTamanhoFonte);

let botaoEspacoLinha = document.createElement('button');
botaoEspacoLinha.id = 'line-height'
botaoEspacoLinha.innerText = 'Aumenta o espaçamento das linhas';
document.body.appendChild(botaoEspacoLinha);

let botaoTipoFonte = document.createElement('button');
botaoTipoFonte.id = 'font-family';
botaoTipoFonte.innerText = 'Troca tipo de fonte do texto';
document.body.appendChild(botaoTipoFonte);


let selectButtonCorTela = document.getElementById('background-color');

selectButtonCorTela.addEventListener('click', mudandoCorTela);
let cores = ['red', 'blue', 'green', 'rgb(0, 238, 238)'];

function mudandoCorTela() {
    for (let i = 0; i < cores.length; i += 1) {
        if (selectBody[0].style.backgroundColor != cores[i]){
        selectBody[0].style.backgroundColor = cores[i];
        break
        }
    }
}