// elementos do html

const fraseQualquer = document.getElementById('fraseQualquer');

const procButton = document.getElementById('procButton');
const resultDiv = document.getElementById('resultDiv');

let mensagem;
// Ouvinte evento button

procButton.addEventListener('click', () => {

    let frase = fraseQualquer.value;
    // verificar validade
    if((frase === undefined)){
        mensagem = '<strong>Por favor, insira uma frase válida!</strong>';
    } else {
        if(frase.toLowerCase().indexOf('javascript') >= 0){
            mensagem = `A palavra <strong>Javascript</strong> esta na frase <strong>"${fraseQualquer.value}"</strong>`;
        } else {
            mensagem = `Não existe a palavra <strong>Javascript</strong> na frase <strong>"${fraseQualquer.value}"</strong>`;
        }
        
    }

    resultDiv.innerHTML = mensagem;
})