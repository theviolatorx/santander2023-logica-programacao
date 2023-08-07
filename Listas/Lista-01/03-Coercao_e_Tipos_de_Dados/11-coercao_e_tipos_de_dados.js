// elementos do html

const var1 = "5";
console.log(typeof(var1))
const var2 = 2;
console.log(typeof(var2))

const procButton = document.getElementById('procButton');
const resultDiv = document.getElementById('resultDiv');


// Ouvinte evento button

procButton.addEventListener('click', () => {

    // concatenar as arrays
    const mensagem = `<strong>Resultado da multiplicação de uma variábel do tipo string com uma variábel do tipo número:</strong> ${var1 * var2}`;

    resultDiv.innerHTML = mensagem;
})