// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function nadaAcontece(event) {
    event.preventDefault();
}

HREF_LINK.addEventListener('click', nadaAcontece);

function naoSeleciona (event) {
    event.preventDefault();
}

INPUT_CHECKBOX.addEventListener('click', naoSeleciona);

function apenasA(event) {
    if(event.key !== 'a'){
        event.preventDefault();
    }
}

INPUT_TEXT.addEventListener('keypress', apenasA);