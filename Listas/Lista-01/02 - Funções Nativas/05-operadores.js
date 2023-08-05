// elementos do html

const lista1 = document.getElementById('lista1');
const lista2 = document.getElementById('lista2');

const procButton = document.getElementById('procButton');
const resultDiv = document.getElementById('resultDiv');

array1 = [parseInt(Math.random() * 1), parseInt(Math.random() *2), parseInt(Math.random() *3), parseInt(Math.random() *4), parseInt(Math.random() *5), parseInt(Math.random() *6)]
array2 = [parseInt(Math.random() *7), parseInt(Math.random() *8), parseInt(Math.random() *9), parseInt(Math.random() *10)]

lista1.innerHTML = "[" + array1 + "]";
lista2.innerHTML = "[" + array2 + "]";

// Ouvinte evento button

procButton.addEventListener('click', () => {

    // concatenar as arrays
    const mensagem = `<strong>Resultado:</strong> ${array1.concat(array2)}`;

    resultDiv.innerHTML = mensagem;
})