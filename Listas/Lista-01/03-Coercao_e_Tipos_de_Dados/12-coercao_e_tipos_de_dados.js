// elementos do html

var1 = parseInt("123");

const procButton = document.getElementById('procButton');
const resultDiv = document.getElementById('resultDiv');


// Ouvinte evento button

procButton.addEventListener('click', () => {

    // concatenar as arrays
    const mensagem = `<strong>Resultado da conversão de uma string para número inteiro e armazenando na variável var1:</strong> ${var1}`;

    resultDiv.innerHTML = mensagem;
})