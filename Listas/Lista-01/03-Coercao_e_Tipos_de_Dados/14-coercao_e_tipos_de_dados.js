// elementos do html

const procButton = document.getElementById('procButton');
const resultDiv = document.getElementById('resultDiv');


// Ouvinte evento button

procButton.addEventListener('click', () => {

    // concatenar as arrays
    const mensagem = `<strong>Explicação: </strong>`;

    resultDiv.innerHTML = mensagem;
})