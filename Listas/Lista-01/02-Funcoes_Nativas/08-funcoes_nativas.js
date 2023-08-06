// elementos do html

const lista1 = document.getElementById('lista1');


const procButton = document.getElementById('procButton');
const resultDiv = document.getElementById('resultDiv');

array1 = [
    parseInt(Math.random() * 100), 
    parseInt(Math.random() * 100), 
    parseInt(Math.random() * 100), 
    parseInt(Math.random() * 100), 
    parseInt(Math.random() * 100), 
    parseInt(Math.random() * 100),
    parseInt(Math.random() * 100),
    parseInt(Math.random() * 100),
    parseInt(Math.random() * 100)
]

lista1.innerHTML = "[" + array1 + "]";

// Ouvinte evento button

procButton.addEventListener('click', () => {
    

    // concatenar as arrays
    const mensagem = `<strong>O maior valor do array:</strong> ${Math.max(...array1)}`;

    resultDiv.innerHTML = mensagem;
})