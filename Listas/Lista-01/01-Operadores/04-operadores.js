// elementos do html

const fraseQualquer1 = document.getElementById('fraseQualquer1');
const fraseQualquer2 = document.getElementById('fraseQualquer2');

const procButton = document.getElementById('procButton');
const resultDiv = document.getElementById('resultDiv');

let mensagem;
// Ouvinte evento button

procButton.addEventListener('click', () => {

    let frase1 = fraseQualquer1.value;
    let frase2 = fraseQualquer2.value;

    // verificar validade
    if((frase1 === undefined) || (frase2 === undefined)){
        mensagem = '<strong>Por favor, insira uma frase válida!</strong>';
    } else {
        if(frase1.toLowerCase() === frase2.toLowerCase()){
            mensagem = `A frase <strong>"${frase1}"</strong> é igual a frase <strong>"${frase2}"</strong>`;
        } else {
            mensagem = `A frase <strong>"${frase1}"</strong> não é igual a frase <strong>"${frase2}"</strong>`;
        }
        
    }

    resultDiv.innerHTML = mensagem;
})