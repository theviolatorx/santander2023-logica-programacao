// elementos do html

const numQualquer = document.getElementById('numQualquer');

const procButton = document.getElementById('procButton');
const resultDiv = document.getElementById('resultDiv');

let mensagem;
// Ouvinte evento button

procButton.addEventListener('click', () => {
    // converter entrada para float
    const numQ = parseFloat(numQualquer.value);

    // verificar validade
    if(isNaN(numQ)){
        mensagem = '<strong>Por favor, insira um valor válido!</strong>';
    } else {
        // calcular a área do retângulo
        if (numQ % 2 === 0){
            mensagem = `par`;
        } else {
            mensagem = `ímpar`;
        }
        
    }

    resultDiv.innerHTML = `<strong>O número ${numQ} é ${mensagem}!<strong>`;
})