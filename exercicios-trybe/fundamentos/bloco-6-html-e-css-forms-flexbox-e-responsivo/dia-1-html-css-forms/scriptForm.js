let selectEstados = document.querySelector('#input-estado');
let estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas','Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul','Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']

for (let i = 0; i < estados.length; i += 1){
    let opcoesEstado = document.createElement('option');
    opcoesEstado.innerText = estados[i];
    opcoesEstado.value = estados[i];
    selectEstados.appendChild(opcoesEstado);
}


