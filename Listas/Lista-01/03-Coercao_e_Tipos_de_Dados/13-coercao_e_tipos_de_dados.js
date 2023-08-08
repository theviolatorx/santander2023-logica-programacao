// elementos do html

const procButton = document.getElementById('procButton');
const resultDiv = document.getElementById('resultDiv');


// Ouvinte evento button

procButton.addEventListener('click', () => {

    // concatenar as arrays
    const mensagem = `<strong>Resultado da concatenação: </strong> ${"Texto" + 14}`;

    resultDiv.innerHTML = mensagem;
})